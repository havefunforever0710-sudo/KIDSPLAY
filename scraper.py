import os
import json
import requests
from bs4 import BeautifulSoup
from google import genai
from dotenv import load_dotenv
import urllib.parse
import time
import urllib3
from datetime import datetime

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
load_dotenv()

try:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("真的找不到名為 GEMINI_API_KEY 的環境變數！")
        exit(1)
    client = genai.Client(api_key=api_key)
except Exception as e:
    print(f"AI 初始化失敗，真實的錯誤訊息為: {e}")
    exit(1)

def fetch_html(url):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=15, verify=False)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"  [X] 網頁抓取失敗 ({url}): {e}")
        return None

def call_gemini_with_retry(prompt, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = client.models.generate_content(
                model='gemini-2.5-flash',
                contents=prompt,
            )
            result_text = response.text.strip()
            if result_text.startswith("```json"):
                result_text = result_text[7:-3]
            elif result_text.startswith("```"):
                result_text = result_text[3:-3]
                
            result_json = json.loads(result_text.strip())
            time.sleep(5) # 成功後強制休息 5 秒
            return result_json
        except Exception as e:
            error_msg = str(e).lower()
            if "429" in error_msg or "quota" in error_msg or "exhausted" in error_msg:
                wait_time = 30 * (attempt + 1)
                print(f"    [!] 遇到 API 頻率限制，暫停 {wait_time} 秒後重試... ({attempt+1}/{max_retries})")
                time.sleep(wait_time)
            else:
                print(f"    [X] AI 解析發生錯誤: {e}")
                return None if "[]" not in str(e) else []
    print("    [X] 重試次數用盡，放棄此筆解析。")
    return []

def find_activity_links(source_name, source_url, visited_urls):
    print(f"\n👉 開始巡邏目錄：{source_name} ({source_url})")
    soup = fetch_html(source_url)
    if not soup:
        return []
        
    keywords = ['報名', '活動', '營隊', '展', '體驗', '課程', '親子', '兒童', '夏令', '冬令', '節', '季']
    filtered_links = []
    
    for a in soup.find_all('a', href=True):
        text = a.get_text(strip=True)
        href = a['href']
        if len(text) > 3 and not href.startswith('javascript:'):
            full_url = urllib.parse.urljoin(source_url, href)
            
            # 智慧過濾：如果已經存在於記憶體中，直接跳過！
            if full_url in visited_urls:
                continue
                
            if any(kw in text for kw in keywords):
                filtered_links.append(f"[{text}]({full_url})")
            
    filtered_links = list(set(filtered_links))
    
    # 退而求其次
    if not filtered_links:
        for a in soup.find_all('a', href=True):
            text = a.get_text(strip=True)
            full_url = urllib.parse.urljoin(source_url, a['href'])
            if len(text) > 3 and not a['href'].startswith('javascript:') and full_url not in visited_urls:
                filtered_links.append(f"[{text}]({full_url})")
        filtered_links = list(set(filtered_links))[:30]
        
    if not filtered_links:
        print("  - 沒有發現任何新的未知連結。")
        return []

    print(f"  - 找到 {len(filtered_links)} 個『全新』連結，交由 AI 篩選中...")
    
    prompt = f"""
    你是一個專門尋找「兒童活動、親子活動、體驗營」的 AI 助手。
    這是一個官方網站上的連結清單。
    請從中挑選出 **最像是最新活動、營隊、親子展覽報名** 的 2 到 3 個連結。
    只挑選和一般大眾或兒童相關的活動，略過標案、人事等行政資訊。
    
    請以純 JSON 陣列格式回傳：
    [
      "https://...",
      "https://..."
    ]

    連結清單：
    {chr(10).join(filtered_links[:40])} 
    """
    
    urls = call_gemini_with_retry(prompt)
    if urls:
        print(f"  - AI 篩選出 {len(urls)} 個潛在活動頁面。")
        return urls
    return []

def extract_event_details(url):
    print(f"  🔍 進入內文解析: {url}")
    soup = fetch_html(url)
    if not soup:
        return None
        
    for script in soup(["script", "style"]):
        script.extract()
        
    text = soup.get_text(separator='\n')
    lines = (line.strip() for line in text.splitlines())
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    clean_text = '\n'.join(chunk for chunk in chunks if chunk)
    
    prompt = f"""
    你是一個專門協助家長尋找兒童活動的 AI 助手。
    請從以下的網頁內容中，擷取出與「兒童活動、親子活動、展覽報名」相關的內容。
    如果該網頁不是兒童或親子活動 (例如：純新聞、招標公告)，請回傳空陣列 `[]`。
    
    如果是活動，請整理成以下的 JSON 格式回傳，只要純 JSON 陣列，不要其他文字：
    [
      {{
        "title": "活動名稱",
        "category": "活動分類（1.職業體驗 2.藝文展演 3.動態體能 4.手作DIY與才藝 5.生態與大自然 6.知性與靜態學習 7.節慶市集與綜合 8.科技與創客 9.競賽與檢定 10.長天數營隊 11.公益與生命教育 12.在地文化體驗）",
        "activity_date": "活動日期與時間說明",
        "date": "活動開始日期的標準格式（例如：2026-04-18）",
        "region": "活動所在區域（北部, 中部, 南部, 東部及離島）",
        "city": "活動所在縣市（例如：台北市, 高雄市）",
        "registration_date": "報名時間與方式",
        "location": "活動地點與地址",
        "target_age": "適合年齡原文（例如：3-12歲）",
        "age_groups": ["請將適合年齡歸類為標準化陣列，允許的值為：'0-3歲', '4-6歲', '7-12歲', '全齡' (可多選)"],
        "price_type": "費用類型，請判斷是 '免費' 或 '付費' (若無資訊請填 '付費')",
        "summary": "活動簡介（100字以內）",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80" 
      }}
    ]

    網頁內容如下：
    {clean_text[:3000]}
    """
    
    events = call_gemini_with_retry(prompt)
    if events:
        for event in events:
            event["source_url"] = url
        print(f"    🌟 成功！解析出活動：{events[0].get('title', '未知標題')}")
        return events
    else:
        print("    [!] 未偵測到適合的兒童活動。")
        return []

def main():
    print("==================================================")
    print("🤖 滾動式增量爬蟲啟動！")
    print("==================================================")
    
    # 1. 讀取總來源清單
    sources_file = "sources.json"
    if not os.path.exists(sources_file):
        print(f"找不到 {sources_file}！")
        return
        
    with open(sources_file, "r", encoding="utf-8") as f:
        sources = json.load(f)
        
    # 2. 讀取記憶體狀態
    state_file = "state.json"
    if os.path.exists(state_file):
        with open(state_file, "r", encoding="utf-8") as f:
            state = json.load(f)
    else:
        state = {"last_index": 0, "visited_urls": {}}
        
    # 確保 visited_urls 是個字典
    if "visited_urls" not in state:
        state["visited_urls"] = {}
        
    # 3. 決定本次要爬取的目標 (每次抓取 5 個網站)
    BATCH_SIZE = 5
    start_idx = state.get("last_index", 0)
    
    # 避免 index 超出範圍 (例如名單縮水時)
    if start_idx >= len(sources):
        start_idx = 0
        
    end_idx = start_idx + BATCH_SIZE
    
    current_sources = sources[start_idx:end_idx]
    if end_idx >= len(sources):
        current_sources += sources[0:(end_idx - len(sources))]
        state["last_index"] = end_idx % len(sources)
    else:
        state["last_index"] = end_idx
        
    print(f"📚 總清單數量: {len(sources)}")
    print(f"🎯 本次批次範圍: {start_idx} ~ {end_idx-1}")
    
    all_new_events = []
    current_crawl_time = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
    
    # 4. 開始爬取
    for idx, source in enumerate(current_sources):
        print(f"\n進度：[{idx+1}/{len(current_sources)}]")
        
        # 讀取該網站的記憶體 (過去看過的網址)
        site_url = source['url']
        visited = state["visited_urls"].get(site_url, [])
        
        target_urls = find_activity_links(source['name'], site_url, visited)
        
        for url in target_urls:
            events = extract_event_details(url)
            if events:
                for e in events:
                    e["crawl_time"] = current_crawl_time
                all_new_events.extend(events)
                # 將新網址加入記憶體，最多保留 100 個，避免檔案無限膨脹
                visited.append(url)
        
        state["visited_urls"][site_url] = visited[-100:]
        time.sleep(3)
            
    # 5. 合併舊有活動 (增量更新)
    output_dir = "frontend"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    events_json_file = os.path.join(output_dir, "events.json")
    existing_events = []
    if os.path.exists(events_json_file):
        try:
            with open(events_json_file, "r", encoding="utf-8") as f:
                existing_events = json.load(f)
        except:
            existing_events = []
            
    # 暫停自動刪除功能：因為許多暑期展覽與營隊的「開始報名日」或「活動起始日」在 6 月，
    # 若單純比對今天 (7月)，會導致這些還在進行中的長天數活動被系統誤判為「過期」而自動刪除。
    valid_events = existing_events
            
    print(f"\n📦 從資料庫載入 {len(valid_events)} 筆未過期的歷史活動。")
    print(f"🆕 本次新增 {len(all_new_events)} 筆全新活動。")
    
    # 合併
    final_events = valid_events + all_new_events
    
    # 6. 存檔
    # 儲存 JSON 給 Python 下次讀取
    with open(events_json_file, "w", encoding="utf-8") as f:
        json.dump(final_events, f, ensure_ascii=False, indent=4)
        
    # 儲存 JS 給網頁使用
    events_js_file = os.path.join(output_dir, "events.js")
    with open(events_js_file, "w", encoding="utf-8") as f:
        f.write("// 這支檔案由 GitHub Actions 雲端自動爬蟲產生 (滾動增量版)\n")
        f.write(f"const dynamicEvents = {json.dumps(final_events, ensure_ascii=False, indent=4)};\n")
        
    # 儲存記憶體 state.json
    with open(state_file, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=4)
        
    print("\n==================================================")
    print(f"✅ 巡邏任務完成！資料庫總共有 {len(final_events)} 筆有效活動。")
    print("==================================================")

if __name__ == "__main__":
    main()
