import os
import json
import requests
from bs4 import BeautifulSoup
from google import genai
from dotenv import load_dotenv
import urllib.parse
import time
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
load_dotenv()

try:
    client = genai.Client()
except Exception as e:
    print("請確認已經設定 GEMINI_API_KEY")
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
    """
    呼叫 Gemini API，加入失敗重試與延遲機制，避免 Rate Limit
    """
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
                
            return json.loads(result_text.strip())
        except Exception as e:
            error_msg = str(e).lower()
            if "429" in error_msg or "quota" in error_msg or "exhausted" in error_msg:
                wait_time = 15 * (attempt + 1)
                print(f"    [!] 遇到 API 頻率限制 (Rate Limit)，暫停 {wait_time} 秒後重試... ({attempt+1}/{max_retries})")
                time.sleep(wait_time)
            else:
                print(f"    [X] AI 解析發生錯誤: {e}")
                return None if "[]" not in str(e) else []
    print("    [X] 重試次數用盡，放棄此筆解析。")
    return []

def find_activity_links(source_name, source_url):
    print(f"\n👉 開始巡邏目錄：{source_name} ({source_url})")
    soup = fetch_html(source_url)
    if not soup:
        return []
        
    links_data = []
    for a in soup.find_all('a', href=True):
        text = a.get_text(strip=True)
        href = a['href']
        if len(text) > 3 and not href.startswith('javascript:'):
            full_url = urllib.parse.urljoin(source_url, href)
            links_data.append(f"[{text}]({full_url})")
            
    links_data = list(set(links_data))
    
    if not links_data:
        return []

    print(f"  - 找到 {len(links_data)} 個連結，篩選中...")
    
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
    {chr(10).join(links_data[:200])} 
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
        "target_age": "適合年齡（例如：3-12歲）",
        "summary": "活動簡介（100字以內）",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80" 
      }}
    ]

    網頁內容如下：
    {clean_text[:5000]}
    """
    
    events = call_gemini_with_retry(prompt)
    if events:
        print(f"    🌟 成功！解析出活動：{events[0].get('title', '未知標題')}")
        return events
    else:
        print("    [!] 未偵測到適合的兒童活動。")
        return []

def main():
    print("==================================================")
    print("🤖 雲端全自動兒童活動爬蟲啟動！")
    print("==================================================")
    
    sources_file = "sources.json"
    if not os.path.exists(sources_file):
        print(f"找不到 {sources_file}！")
        return
        
    with open(sources_file, "r", encoding="utf-8") as f:
        sources = json.load(f)
        
    all_events = []
    
    for idx, source in enumerate(sources):
        print(f"\n進度：[{idx+1}/{len(sources)}]")
        target_urls = find_activity_links(source['name'], source['url'])
        
        for url in target_urls:
            events = extract_event_details(url)
            if events:
                all_events.extend(events)
            time.sleep(3) # 每次 AI 請求後暫停 3 秒，避免觸發 API 頻率限制
            
    output_dir = "frontend"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    output_path = os.path.join(output_dir, "events.js")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// 這支檔案由 GitHub Actions 雲端自動爬蟲產生\n")
        f.write(f"const dynamicEvents = {json.dumps(all_events, ensure_ascii=False, indent=4)};\n")
        
    print("\n==================================================")
    print(f"✅ 巡邏任務完成！共收集到 {len(all_events)} 筆全新的活動資料。")
    print("==================================================")

if __name__ == "__main__":
    main()
