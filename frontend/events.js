// 這支檔案由 GitHub Actions 雲端自動爬蟲產生 (滾動增量版)
const dynamicEvents = [
    {
        "title": "台南「小小職人夏令營」",
        "category": "職業體驗",
        "activity_date": "第一梯次：2024年7月1日(一) - 7月5日(五)\n第二梯次：2024年7月8日(一) - 7月12日(五)\n第三梯次：2024年7月15日(一) - 7月19日(五)\n(每日09:00-16:00)",
        "date": "2024-07-01",
        "region": "南部",
        "city": "台南市",
        "registration_date": "自即日起至2024年6月15日止，採線上報名，額滿為止。請至台南市政府勞工局官網查詢詳情並報名。",
        "location": "台南市勞工育樂中心、各合作職人場域（例如：消防隊、警察局、烘焙教室等）",
        "target_age": "國小三年級至六年級學童 (建議年齡：8-12歲)",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "台南市政府勞工局主辦的「小小職人夏令營」提供國小學童多元職業探索機會，涵蓋消防、警察、烘焙、科學等主題。在專業指導下，孩子們透過實作、遊戲，培養團隊合作，發掘潛能，豐富暑期生活。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/NTMOFA"
    },
    {
        "title": "我喜歡在這裡",
        "category": "生態與大自然",
        "activity_date": "2026/2/10-2027/1/17",
        "date": "2026-02-10",
        "region": "北部",
        "city": "新北市",
        "registration_date": "",
        "location": "朱銘美術館 兒童藝術中心 (新北市金山區西勢湖2號)",
        "target_age": "小朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "「我喜歡在這裡」是一個為小朋友準備的生態體驗區，設有生態池與活動區。小朋友可在此動手做、玩遊戲，認識大自然中的植物與小動物。歡迎小朋友與家人一同觀察、感受，愛護自然，讓生態池更美好。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.juming.org.tw/?sn=ec&pg=ZC845518&gn=%u6D3B%u52D5%u65B0%u8A0A"
    },
    {
        "title": "探索鯨奇",
        "category": "5.生態與大自然",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "1-6年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "透過分站觀察與遊戲，認識鯨豚演化、攝食行為及宜蘭常見鯨豚種類，並探討牠們遭遇的困境。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "烏石港歷史劇場",
        "category": "12.在地文化體驗",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "5-12年級學生, 專業研習, 一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "透過「烏石港大富翁」與角色扮演，感受昔日烏石港熱鬧氛圍，了解環境變遷對生活的影響。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "烏石溼地鳥世界",
        "category": "5.生態與大自然",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "3-6年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "拿起望遠鏡，認識蘭陽博物館旁烏石濕地棲息的鳥類，了解其作為候鳥中繼補給站的重要性。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "蘭博單面山",
        "category": "6.知性與靜態學習",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "5-9年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "透過解說、親手操作單面山形成實驗及拼圖遊戲，認識板塊學說與宜蘭海岸的形成。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "蘭博蒐查線 - 自導式探索",
        "category": "6.知性與靜態學習",
        "activity_date": "課程時間約1.5小時，可直接向服務台申請",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請直接向服務台申請",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "3-6年級學生, 適合學生或親子團體參與",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "結合定向運動方式，讓參與者探索展品並回答相關問題，適合學生或親子團體體驗探索樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "頭城老街時空尋寶",
        "category": "12.在地文化體驗",
        "activity_date": "課程時間約2小時，為「烏石港歷史劇場」延伸課程，不接受單獨申請。",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約 (需先報名「烏石港歷史劇場」課程)",
        "location": "頭城老街",
        "target_age": "7-12年級學生, 專業研習, 一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "用雙腳、地圖和手機，尋找藏在頭城街巷裡的歷史寶藏，洞見昔日盛景。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "寫在地底的歷史-宜蘭史前探祕",
        "category": "6.知性與靜態學習",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "5-9年級學生, 專業研習",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "透過考古遺物與生態遺留觀察，了解考古學家如何建構宜蘭史前樣貌與人類運用環境資源。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "寫在地底的歷史-發掘篇",
        "category": "6.知性與靜態學習",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "5-12年級學生, 專業研習, 一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "實際操作考古工具進行模擬探坑發掘，體驗考古學家面對出土遺物的欣喜與挑戰。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "大海小釣手",
        "category": "5.生態與大自然",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "4-7年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "結合模擬遊戲與問題討論，引導學生了解漁業運作模式、海洋資源關係及永續做法。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "哈囉！魚好嗎？",
        "category": "5.生態與大自然",
        "activity_date": "課程時間約2小時，需預約排定",
        "date": null,
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "請洽蘭陽博物館官網或電話預約",
        "location": "蘭陽博物館 (宜蘭縣頭城鎮青雲路三段750號)",
        "target_age": "1-4年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "透過活動認識台灣常見市場魚類捕撈與養殖方式，了解台灣漁業問題並思考為海洋生態盡力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/course/list/"
    },
    {
        "title": "一樣不一樣",
        "category": "藝文展演",
        "activity_date": "2026/07/04 - 2026/11/30",
        "date": "2026-07-04",
        "region": "北部",
        "city": "桃園市",
        "registration_date": "詳見桃園市兒童美術館官網",
        "location": "桃園市兒童美術館 (地址：320014 桃園市中壢區高鐵南路二段 90 號)",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "桃園市兒童美術館即將推出的藝術特展，邀請大小朋友一同探索世界中『一樣』與『不一樣』的多樣性與趣味。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://tmofa.tycg.gov.tw/ch/exhibitions/upcoming-exhibitions"
    },
    {
        "title": "「暑假？就是玩藝！」2026桃園市兒童美術館夏令營",
        "category": "長天數營隊",
        "activity_date": "2026/07/14 - 2026/07/31",
        "date": "2026-07-14",
        "region": "北部",
        "city": "桃園市",
        "registration_date": "無資訊",
        "location": "桃園市兒童美術館 (地址：320014 桃園市中壢區高鐵南路二段 90 號)",
        "target_age": "無資訊",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "桃園市兒童美術館於暑假期間舉辦夏令營，以「玩藝」為主題，提供藝術體驗活動，鼓勵孩子們盡情探索藝術與創意，豐富暑期生活。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://tmofa.tycg.gov.tw/ch/events/current-events"
    },
    {
        "title": "蛙寶故事團2026年7月說故事活動",
        "category": "知性與靜態學習",
        "activity_date": "2026年7月 每周三及周日",
        "date": "2026-07-01",
        "region": "南部",
        "city": "臺南市",
        "registration_date": "現場參與，無須事前報名",
        "location": "市圖總館(新總館)，臺南市永康區康橋大道255號",
        "target_age": "適合兒童（無明確年齡限制，圖書館活動通常涵蓋學齡前至國小學童）",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "臺南市立圖書館蛙寶故事團於2026年7月每周三及周日舉辦說故事活動，為孩子們精心準備豐富故事，期盼打開閱讀世界，歡迎家長帶孩子前往總館參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/n14943237246847044508/n1Content",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "【ㄅ級大人預備備】2026青少年閱讀推廣活動",
        "category": "知性與靜態學習",
        "activity_date": "2026-07-26",
        "date": "2026-07-26",
        "region": "南部",
        "city": "台南市",
        "registration_date": "尚未開始報名",
        "location": "市圖總館(新總館) (臺南市永康區康橋大道255號)",
        "target_age": "青少年",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "專為青少年設計的閱讀推廣活動，旨在培養閱讀興趣、提升能力，為邁向獨立思考的「ㄅ級大人」奠定基礎。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "《成大台語囡仔古：台語故事時間》",
        "category": "知性與靜態學習",
        "activity_date": "2026-07-05",
        "date": "2026-07-05",
        "region": "南部",
        "city": "台南市",
        "registration_date": "請參考活動頁面資訊",
        "location": "市圖總館(新總館) (臺南市永康區康橋大道255號)",
        "target_age": "囡仔",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "由成功大學舉辦的台語兒童故事時間，透過生動活潑的台語故事，帶領孩子們進入奇妙的想像世界，並體驗在地語言文化。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "2026創客空間活動",
        "category": "科技與創客",
        "activity_date": "2026-07-05",
        "date": "2026-07-05",
        "region": "南部",
        "city": "台南市",
        "registration_date": "請參考活動頁面資訊",
        "location": "市圖總館(新總館) (臺南市永康區康橋大道255號)",
        "target_age": "未明確說明",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "提供動手實作的創客體驗，激發創意與培養解決問題的能力，適合對科技與創作有興趣的學員參加。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "2026南市圖 解鎖未來力：AI世代的數位技能課",
        "category": "科技與創客",
        "activity_date": "2026-07-05",
        "date": "2026-07-05",
        "region": "南部",
        "city": "台南市",
        "registration_date": "請參考活動頁面資訊",
        "location": "市圖總館(新總館) (臺南市永康區康橋大道255號)",
        "target_age": "未明確說明",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "探討AI世代的數位技能，課程旨在提升學員的科技素養，掌握未來趨勢，解鎖數位時代的無限潛力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "「感官超連結：閱讀小宇宙之旅」：圖像故事登入中",
        "category": "藝文展演",
        "activity_date": "2026年7月1日(三)－8月31日(一)，每週一及國定假日休館",
        "date": "2026-07-01",
        "region": "南部",
        "city": "臺南市",
        "registration_date": "展覽期間現場參與，無需預約報名",
        "location": "臺南市立圖書館總館 (臺南市永康區康橋大道255號)",
        "target_age": "大小朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "臺南市立圖書館舉辦「感官超連結：閱讀小宇宙之旅」圖書展覽，精選金漫獎與金繪獎得獎漫畫繪本，邀請大小朋友進入圖像故事世界。展覽期間可體驗色彩遊蹤、角色設計及集章活動，感受圖像魅力，展開跨越文字與色彩的閱讀冒險。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/n15620079756062084680/n1Content",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "2026夏令營《小大人驚奇的成長冒險之旅》",
        "category": "知性與靜態學習",
        "activity_date": "2026年8月4日至8月7日，每日上午9:00-12:00，每日為獨立課程。",
        "date": "2026-08-04",
        "region": "中部",
        "city": "臺中市",
        "registration_date": "報名期間：2026年6月30日上午9點-2026年7月15日下午5點，額滿為止。採網路報名登記，正取者請於一週內至總館3樓服務台繳費完成。",
        "location": "綠美圖B1多媒體講堂（臺中市西屯區中科路2201號）",
        "target_age": "暑假前國小3至6年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "以世界知名繪本作家奧利佛．傑法作品為主題，透過故事閱讀、情緒探索、創意手作與STEAM體驗，引導國小學童學習表達感受、理解他人，培養解決問題與創造力，在閱讀中認識自我與世界，展開成長冒險。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://gov.tw/rG7",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "【葫蘆墩分館】8/01「借書免費玩-親子桌遊」",
        "category": "知性與靜態學習",
        "activity_date": "2026-08-01 10:00 ~ 11:30",
        "date": "2026-08-01",
        "region": "中部",
        "city": "臺中市",
        "registration_date": "活動頁面未明確說明報名時間與方式，請留意圖書館公告或洽詢葫蘆墩分館。",
        "location": "葫蘆墩分館",
        "target_age": "親子(幼稚園中班至國小)一隊，每場10-15隊",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "臺中市立圖書館葫蘆墩分館舉辦親子桌遊活動，適合幼稚園中班至國小親子參加。活動名稱暗示可能與借書相關。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.taichung.gov.tw/active/details?Parser=9,3,39,27,,,20841,,,,,2",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "2026臺中市閱讀起步走-閱讀之森書展",
        "category": "知性與靜態學習",
        "activity_date": "2026年8月1日至8月30日，每日開放時間：週二至週六 08:30-21:00，週日 08:30-17:30，週一及國定例假日休館。",
        "date": "2026-08-01",
        "region": "中部",
        "city": "臺中市",
        "registration_date": "無須報名，自由參觀",
        "location": "臺中市立圖書館西區分館",
        "target_age": "0-5 歲嬰幼兒家庭",
        "age_groups": [
            "0-3歲",
            "4-6歲"
        ],
        "price_type": "免費",
        "summary": "此展覽推廣0-5歲嬰幼兒家庭的親子共讀理念，透過繪本探索世界，將閱讀樂趣轉化為家庭中最自然、溫暖的每日陪伴，讓閱讀像一顆種子在孩子心中發芽。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.taichung.gov.tw/active/details?Parser=9,3,39,27,,,21011,,,,,2",
        "crawl_time": "2026-07-01T07:47:41"
    },
    {
        "title": "中興分館兒童繪本故事時間",
        "category": "知性與靜態學習",
        "activity_date": "115-01-01 ~ 115-12-31",
        "date": "2026-01-01",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館中興分館",
        "target_age": "親子兒童",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "中興分館舉辦的兒童繪本故事時間，適合親子一同參與，享受閱讀的樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "臺灣原住民文化講座及編織書籤手作體驗",
        "category": "手作DIY與才藝",
        "activity_date": "115-06-02 ~ 115-07-04",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "115-06/04 ~ 115-07/02，報名額滿",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過臺灣原住民文化講座，搭配編織書籤手作體驗，了解原住民文化並動手創作。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "用漫畫讀科學：萌動力新書導讀",
        "category": "知性與靜態學習",
        "activity_date": "115-06-02 ~ 115-07-19",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過漫畫新書導讀，以輕鬆有趣的方式探索科學知識，激發對學習的興趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "認識鳥類的聲音",
        "category": "生態與大自然",
        "activity_date": "115-06-02 ~ 115-07-26",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過講座學習辨識鳥類的聲音，探索大自然的奧秘，培養對生態環境的觀察力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "從天空到城市：猛禽如何帶我們看見環境變遷與永續",
        "category": "生態與大自然",
        "activity_date": "115-06-02 ~ 115-08-09",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過猛禽生態，認識環境變遷議題與永續發展的重要性，提升環保意識。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "虎哩哉！與淺山鄰居石虎的共存之道",
        "category": "生態與大自然",
        "activity_date": "115-06-02 ~ 115-08-16",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "認識淺山生態與瀕危石虎，學習與野生動物和平共存的方法，推廣保育觀念。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "我的動物同學",
        "category": "生態與大自然",
        "activity_date": "115-06-02 ~ 115-08-30",
        "date": "2026-06-02",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "以生動有趣的方式介紹動物世界，讓孩子們認識各種動物，培養對生命的關懷。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "中興分館假日電影院",
        "category": "藝文展演",
        "activity_date": "115-01-03 ~ 115-12-30",
        "date": "2026-01-03",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館中興分館",
        "target_age": "分館活動群眾",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "中興分館於假日舉辦電影放映活動，提供適合全家大小一同觀賞的影片。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "S級職夢者學院──實境解謎、闖關抽獎活動",
        "category": "知性與靜態學習",
        "activity_date": "115-06-24 ~ 115-08-09",
        "date": "2026-06-24",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "參與S級職夢者學院實境解謎與闖關活動，挑戰智慧，並有機會參與抽獎。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "【技職星際站2026領航員報到】技職嘉年華活動",
        "category": "職業體驗",
        "activity_date": "115-06-25 ~ 115-07-18",
        "date": "2026-06-25",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "青少年",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "針對青少年舉辦的技職嘉年華，透過多元活動認識不同職業領域，激發未來潛能。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "S級職夢者學院──借閱加碼 送數字填色活動",
        "category": "手作DIY與才藝",
        "activity_date": "115-06-26 ~ 115-08-09",
        "date": "2026-06-26",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "參與圖書館借閱活動，即可獲贈數字填色活動，享受動手創作的樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "海洋教育・蔚藍漫遊號｜2026海洋教育全國巡迴推廣",
        "category": "生態與大自然",
        "activity_date": "115-06-30 ~ 115-08-02",
        "date": "2026-06-30",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館",
        "target_age": "一般大眾",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過全國巡迴推廣活動，深入淺出地介紹海洋知識與保育，提升大眾的海洋素養。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "7月戶外電影*總館館前廣場放映牆",
        "category": "藝文展演",
        "activity_date": "115-07-01 ~ 115-07-31",
        "date": "2026-07-01",
        "region": "中部",
        "city": "台中市",
        "registration_date": "無需報名",
        "location": "國立公共資訊圖書館總館館前廣場",
        "target_age": "一般大眾",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "七月份於總館館前廣場舉辦戶外電影放映，邀請民眾一同享受星空下的電影時光。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://activity.nlpi.edu.tw/",
        "crawl_time": "2026-07-01T08:03:15"
    },
    {
        "title": "淘金體驗",
        "category": "在地文化體驗",
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
        ],
        "region": "北部",
        "city": "新北市",
        "registration_date": "黃金博物館「黃金館」旁售票亭購票，亦可透過線上預購（https://gepntpc.fonticket.com/），現場售票時間：am9:30～pm2:30。",
        "location": "黃金館淘金體驗區三樓（新北市瑞芳區金光路8號）",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "新北市立黃金博物館提供的淘金體驗活動，讓遊客親身體驗採礦歷史與淘金樂趣。活動設有平日與假日固定場次，適合全齡參與，是了解金瓜石在地文化的好機會。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.gep.ntpc.gov.tw/xmdoc/cont?xsmsid=0G246370980849685209",
        "crawl_time": "2026-07-01T22:57:47"
    },
    {
        "title": "說石話—石頭的身世與故事 特展",
        "category": "知性與靜態學習",
        "activity_date": "2025/10/20 ~ 2026/9/20",
        "start_date": "2025-10-20",
        "end_date": "2026-09-20",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "新北市立黃金博物館 大地館3樓特展室 (地址：新北市瑞芳區金光路8號)",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "本特展「說石話—石頭的身世與故事」從天文、考古、科學、產業等面向，探討人們看待石頭的方式與衍生知識，回答「石頭是什麼」的核心問題。認識石頭是人類理解世界樣貌、探索歷史、連結內外的過程。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.gep.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G266496700270752519&sid=0P275406705160831604",
        "crawl_time": "2026-07-01T22:57:47"
    },
    {
        "title": "2026年「海洋餐桌學---從魚市場到校園的永續教育行動」食魚教育增能課程開放報名囉！",
        "category": "生態與大自然",
        "activity_date": "2026/07/09 ~ 2026/07/09",
        "start_date": "2026-07-09",
        "end_date": "2026-07-09",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "2026/06/02 ~ 2026/06/19",
        "location": "蘭陽博物館",
        "target_age": "一般大眾, 親子",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "此課程為「海洋餐桌學」食魚教育增能課程，探討海洋資源永續。蘭陽博物館邀請學者、料理家、志工，透過講座、闖關活動，推廣海洋永續知識，避免海洋資源耗竭。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/activity/",
        "crawl_time": "2026-07-02T02:32:36"
    },
    {
        "title": "115年「蘭博入校園」 海洋餐桌學—從魚市場到校園的永續行動(需事先報名)",
        "category": "生態與大自然",
        "activity_date": "2026/04/09 ~ 2026/09/03",
        "start_date": "2026-04-09",
        "end_date": "2026-09-03",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "2026/03/18 ~ 2026/04/30",
        "location": "宜蘭縣各級學校",
        "target_age": "團體",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "蘭陽博物館「博物館入校園」專案，推行13年，將資源帶入校園，強化偏鄉學生學習需求。本年度推動「蘭博入校園」海洋餐桌學，延續從魚市場到校園的永續行動，提供多元學習體驗。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/activity/",
        "crawl_time": "2026-07-02T02:32:36"
    },
    {
        "title": "「勁水國寶－故宮x蘭博特展」教育推廣活動（3/21場次）",
        "category": "藝文展演",
        "activity_date": "2026/03/21 ~ 2026/03/21",
        "start_date": "2026-03-21",
        "end_date": "2026-03-21",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "2026/01/23 ~ 2026/03/20",
        "location": "蘭陽博物館",
        "target_age": "一般大眾",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "故宮人氣國寶「肉形石、玉鴨」等15件珍藏來到「勁水國寶－故宮x蘭博特展」。透過教育推廣活動，讓一般大眾近距離欣賞國寶，深入了解其歷史文化意涵，體驗跨越時空的藝術對話。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/activity/",
        "crawl_time": "2026-07-02T02:32:36"
    },
    {
        "title": "「勁水國寶－故宮x蘭博特展」教育推廣活動-金鯉魚手作體驗",
        "category": "手作DIY與才藝",
        "activity_date": "2026/02/28 ~ 2026/02/28",
        "start_date": "2026-02-28",
        "end_date": "2026-02-28",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "2026/02/13 ~ 2026/02/23",
        "location": "蘭陽博物館",
        "target_age": "親子",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "配合「勁水國寶」特展，舉辦金鯉魚手作體驗。展出故宮及宜蘭淇武蘭遺址珍貴文物，其中包含魚形金屬編物「金鯉魚」。親子可親手製作，了解文物歷史與工藝，提升對文化資產的興趣與認識。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/activity/",
        "crawl_time": "2026-07-02T02:32:36"
    },
    {
        "title": "2026世界鯨魚日（World Whale Day）「來自大海的鯨喜!」等你來發現(2/12-14)",
        "category": "生態與大自然",
        "activity_date": "2026/02/12 ~ 2026/02/14",
        "start_date": "2026-02-12",
        "end_date": "2026-02-14",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "2026/02/12 ~ 2026/02/14",
        "location": "蘭陽博物館2樓平台序展",
        "target_age": "一般大眾, 親子",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "每年2月第3個星期日為「世界鯨魚日」。蘭陽博物館於2026年2/12-14舉辦「來自大海的鯨喜!」活動，邀請一般大眾與親子，在2樓平台序展共同關注鯨魚，了解其奧秘與重要性。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.lym.gov.tw/ch/education/activity/",
        "crawl_time": "2026-07-02T02:32:36"
    },
    {
        "title": "森森不息 線上樹火玩紙博物館 SUHO Online Paper Museum",
        "category": "知性與靜態學習",
        "activity_date": "全年無休，每天24小時開放",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "隨時開放，透過網址進入",
        "location": "線上展覽，參觀網址：https://www.virtualmuseum.world/suhopaper/",
        "target_age": "全齡 (適合各年齡層)",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "樹火紀念紙博物館集結30年經驗，首次以數位互動科技，打造線上玩紙博物館。內容包含探索造紙植物、體驗取纖過程、VR環景工廠、真人導覽、學習資源等，讓參與者從自然出發，透過數位科技，親身體驗造紙文化與藝術教育的樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.suhopaper.org.tw/index.php?route=information/information&information_id=94",
        "crawl_time": "2026-07-02T09:03:11"
    },
    {
        "title": "樹火館內造紙體驗活動",
        "category": "手作DIY與才藝",
        "activity_date": "每場約40分鐘。",
        "start_date": null,
        "end_date": null,
        "recurring_days": [
            2,
            3,
            4,
            5,
            6
        ],
        "region": "北部",
        "city": "台北市",
        "registration_date": "現場報名 (各場名額有限，當日額滿為止) 或 線上Klook預約購票。",
        "location": "樹火紀念紙博物館4F造紙體驗區 (台北市中山區長安東路二段68號)",
        "target_age": "３歲以上各年齡層的大小朋友。",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "在樹火頂樓造紙陽台，親手攪動紙漿，體驗纖維成紙的有趣過程。適合3歲以上大小朋友，每場約40分鐘。可選擇素紙或花草手工紙體驗，費用$230起。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.suhopaper.org.tw/index.php?route=information/information&information_id=98",
        "crawl_time": "2026-07-02T09:03:11"
    },
    {
        "title": "線裝手工書DIY材料包",
        "category": "手作DIY與才藝",
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "現場加購材料包。",
        "location": "可在樹火紀念紙博物館館內手作區域製作或帶回家完成 (台北市中山區長安東路二段68號)",
        "target_age": "７歲以上（７歲以下請由家長引導與協助）",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "購買材料包，利用製作完成的手工紙作為封面，搭配內頁及裝飾紙材，一步一步跟著說明書，製作獨一無二充滿手作風格的小書。適合7歲以上，7歲以下需家長引導協助。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.suhopaper.org.tw/index.php?route=information/information&information_id=98",
        "crawl_time": "2026-07-02T09:03:11"
    },
    {
        "title": "墾管處攜手南瀛天文館 打造沉浸式天文探索營隊",
        "category": "知性與靜態學習",
        "activity_date": "",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "南部",
        "city": "屏東縣",
        "registration_date": "線上報名 (詳情請見官網)",
        "location": "墾丁國家公園管理處",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "墾丁國家公園管理處與南瀛天文館合作，推出沉浸式天文探索營隊，帶領學員探索宇宙奧秘與自然生態。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ktnp.gov.tw/News_Content.aspx?n=5654361B474B8EFF&sms=BF1954FACE1D31AD&s=49680106F5044EC6",
        "crawl_time": "2026-07-02T09:03:11"
    },
    {
        "title": "2026玉山國家公園Youth Camp「玉山行」",
        "category": [
            "生態與大自然",
            "長天數營隊"
        ],
        "activity_date": "2026年7、8月暑假期間辦理，共4梯次，為期3天2夜",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "中部",
        "city": "南投縣",
        "registration_date": "115年6月8日8:00起至6月19日18:00止",
        "location": "玉山國家公園 (從塔塔加起登，夜宿排雲山莊，攀登玉山主峰)",
        "target_age": "10~12年級的青少年",
        "age_groups": [],
        "price_type": "付費",
        "summary": "玉山國家公園2026年暑假辦理青少年Youth Camp「玉山行」，共4梯次。對象為10~12年級青少年。3天2夜活動從塔塔加起登，攀登玉山主峰。旨在讓學員親近自然，學習風險管理、團隊合作及國土守護。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ysnp.gov.tw/ActivityInfo/C002000?ID=685b75a0-17b1-412f-b30b-4953a52dd88e&PageType=1",
        "crawl_time": "2026-07-02T22:47:06"
    },
    {
        "title": "2026玉山國家公園Youth Camp「玉山行」",
        "category": [
            "生態與大自然",
            "長天數營隊",
            "動態體能",
            "知性與靜態學習"
        ],
        "activity_date": "2026年7、8月暑假期間，共計4梯次",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "中部",
        "city": "南投縣",
        "registration_date": "115年6月8日8:00起至 6月19日18:00止，請上玉管處官方活動報名網站。",
        "location": "玉山國家公園（從塔塔加起登，途經孟祿亭、白木林、大峭壁，夜宿排雲山莊，攀登玉山主峰）",
        "target_age": "10~12年級的青少年",
        "age_groups": [],
        "price_type": "付費",
        "summary": "玉山國家公園將於2026年暑假舉辦Youth Camp「玉山行」營隊，共四梯次，對象為10-12年級青少年。此三天兩夜活動將帶學子從塔塔加起登，夜宿排雲山莊，攀登玉山主峰。旨在親近山林、學習風險管理、團隊合作，並培養國土守護意識。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ysnp.gov.tw/Announcement/C001000?ID=58a12152-7676-4482-a410-81498bcaee44&PageType=1",
        "crawl_time": "2026-07-02T22:47:06"
    },
    {
        "title": "黑熊骨骼標本特展",
        "category": "知性與靜態學習",
        "activity_date": "",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": null,
        "city": null,
        "registration_date": null,
        "location": null,
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "玉山國家公園管理處舉辦的黑熊骨骼標本特展，透過展示黑熊骨骼，提供民眾了解臺灣黑熊的生物特徵與生態保育知識。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ysnp.gov.tw/StaticPage/skeletonspecimen",
        "crawl_time": "2026-07-02T22:47:06"
    },
    {
        "title": "《怪獸叢林：咚咚聲救援行動》－無所不擊的古蹟聲音派對",
        "category": "藝文展演",
        "activity_date": "",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "新北市立淡水古蹟博物館",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "《怪獸叢林：咚咚聲救援行動》－無所不擊的古蹟聲音派對，一場結合古蹟與聲音的親子活動。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tshs.ntpc.gov.tw/xceventsnews?xsmsid=0G252620780150430418",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "2026 年「淡江大橋的歷史視線」主題導覽活動",
        "category": "在地文化體驗",
        "activity_date": "",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "新北市立淡水古蹟博物館",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "探索淡江大橋的歷史，透過主題導覽深入了解在地文化故事。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tshs.ntpc.gov.tw/xceventsnews?xsmsid=0G252620780150430418",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "淡水古蹟博物館｜看見．齊柏林基金會｜「得忌利士洋行完全導覽」（報名額滿）",
        "category": "在地文化體驗",
        "activity_date": "",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "報名額滿",
        "location": "淡水古蹟博物館 得忌利士洋行",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "淡水古蹟博物館與齊柏林基金會合作舉辦的得忌利士洋行完全導覽，目前報名已額滿。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tshs.ntpc.gov.tw/xceventsnews?xsmsid=0G252620780150430418",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "紅毛城探索趣",
        "category": [
            "知性與靜態學習",
            "在地文化體驗",
            "生態與大自然"
        ],
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "於活動辦理前12日填妥申請表，寄至au9951@ntpc.gov.tw。",
        "location": "新北市立淡水古蹟博物館 (251015新北市淡水區中正路一段6巷32之2號)",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "淡水古蹟博物館提供的環境教育課程之一，適合全齡參與。透過探索紅毛城，串聯在地人文歷史與自然環境，深化學習體驗與歷史感知，讓學員在遊憩中體驗淡水文史與自然環境的緊密關聯。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0Q110547282383674376",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "時光戰役",
        "category": [
            "知性與靜態學習",
            "在地文化體驗",
            "生態與大自然"
        ],
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "於活動辦理前12日填妥申請表，寄至au9951@ntpc.gov.tw。",
        "location": "新北市立淡水古蹟博物館 (251015新北市淡水區中正路一段6巷32之2號)",
        "target_age": "適合全國國民小學5-6年級學生、國民中學1年級學生",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "淡水古蹟博物館提供的環境教育課程之一，適合國小5-6年級及國中1年級學生。課程透過系統化設計，串聯在地人文歷史與自然環境特徵，深化學習體驗與歷史感知，使學員在遊憩探索中體驗地方文史與自然環境的緊密關聯。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tshs.ntpc.gov.tw/xmdoc/cont?xsmsid=0Q110547282383674376",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "茶與王特展",
        "category": "知性與靜態學習",
        "activity_date": "即日起至 2026.10.18",
        "start_date": null,
        "end_date": "2026-10-18",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "新北市坪林茶業博物館 展示館 1f (232001新北市坪林區水德里水聳淒坑19-1號)",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "茶與王特展深入探討茶與中外皇室的深厚淵源，從茶的起源、發展到成為宮廷文化象徵。展覽呈現歷代帝王與茶的雅趣軼事、精緻御用茶器，並揭秘宮廷茶事。誠摯邀請觀眾走進坪林茶業博物館，體驗一場極致的皇家茶宴。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tea.ntpc.gov.tw/xmdoc/cont?xsmsid=0G266543806125384210&sid=0O200320144010107466",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "烹茶煨鴨腳－茶食文化特展",
        "category": "2.藝文展演",
        "activity_date": "即日起至2026.11.22",
        "start_date": null,
        "end_date": "2026-11-22",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "參觀時間請參考博物館開放時間，無需預先報名。",
        "location": "新北市坪林茶業博物館 展示館b1 (232001新北市坪林區水德里水聳淒坑19-1號)",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "「烹茶煨鴨腳」茶食文化特展，探討茶與茶食的依存與演繹，細數東亞茶食風貌。邀請觀者在茶香與點心交織的時光中，品味一場味覺與文化的經典盛宴。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tea.ntpc.gov.tw/xmdoc/cont?xsmsid=0G266543806125384210&sid=0P290615508432243722",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "林園尋藝：彩瓷研習課程 - 親子班",
        "category": "手作DIY與才藝",
        "activity_date": "2026/08/02",
        "start_date": "2026-08-02",
        "end_date": "2026-08-02",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "8月活動報名時間：7/20 12:00 開放報名",
        "location": "林本源園邸 (新北市板橋區西門街9號)",
        "target_age": "孩童需滿 8 歲",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "林本源園邸舉辦傳統工藝推廣活動，邀請專家藝師透過工作坊，帶領親子認識文化資產與傳統工藝。特別設有親子班，體驗彩瓷之美。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.linfamily.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G249617555861789607&sid=0Q174393748584558538",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "林園尋藝：擂金研習課程 - 親子班",
        "category": "手作DIY與才藝",
        "activity_date": "2026/08/23",
        "start_date": "2026-08-23",
        "end_date": "2026-08-23",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "8月活動報名時間：7/20 12:00 開放報名",
        "location": "林本源園邸 (新北市板橋區西門街9號)",
        "target_age": "孩童需滿 8 歲",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "林本源園邸舉辦傳統工藝推廣活動，邀請專家藝師透過工作坊，帶領親子認識文化資產與傳統工藝。特別設有親子班，體驗擂金之美。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.linfamily.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G249617555861789607&sid=0Q174393748584558538",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "尋香覓園-端午香囊DIY活動",
        "category": "手作DIY與才藝",
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "林本源園邸，新北市板橋區西門街9號",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "端午節傳統香囊DIY活動。親手挑選紫蘇、艾葉等藥草製作專屬香囊，將端午祝福與香氣帶回家。在林家花園體驗傳統香囊文化，感受節慶氛圍與昔日宅第生活的文化韻味。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.linfamily.ntpc.gov.tw/xmdoc/cont?xsmsid=0Q054383780560957303&sid=0Q176521294449682960",
        "crawl_time": "2026-07-03T22:39:29"
    },
    {
        "title": "語文寫作素養-進階A",
        "category": "6.知性與靜態學習",
        "activity_date": "2026/09/05-2026/12/19",
        "start_date": "2026-09-05",
        "end_date": "2026-12-19",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "2026/07/13 上午9:00開始報名",
        "location": "國立中正紀念堂管理處 W312教室 (臺北市中正區中山南路21號)",
        "target_age": "5-6年級或曾初學寫作課程者",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "為5-6年級學童設計的進階語文寫作課程，適合已有基礎或曾初學寫作者，旨在提升寫作能力與素養。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "語文寫作素養-初階B",
        "category": "6.知性與靜態學習",
        "activity_date": "2026/09/05-2026/12/19",
        "start_date": "2026-09-05",
        "end_date": "2026-12-19",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "2026/07/13 上午9:00開始報名",
        "location": "國立中正紀念堂管理處 W311教室 (臺北市中正區中山南路21號)",
        "target_age": "3-4年級或曾初學寫作課程者",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "針對3-4年級學童或初學寫作者的基礎語文寫作課程，逐步引導學童建立寫作能力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "創藝科技玩家",
        "category": "8.科技與創客",
        "activity_date": "2026/09/06-2026/12/13",
        "start_date": "2026-09-06",
        "end_date": "2026-12-13",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "2026/07/13 上午9:00開始報名",
        "location": "國立中正紀念堂管理處 W313教室 (臺北市中正區中山南路21號)",
        "target_age": "3-6年級",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "適合3-6年級學童的創意科技課程，透過動手操作體驗科技與創客的樂趣，激發創新思維。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "繽紛粉彩畫",
        "category": "4.手作DIY與才藝",
        "activity_date": "2026/09/06-2026/12/20",
        "start_date": "2026-09-06",
        "end_date": "2026-12-20",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "2026/07/13 上午9:00開始報名",
        "location": "國立中正紀念堂管理處 W313教室 (臺北市中正區中山南路21號)",
        "target_age": "1-5年級",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "專為1-5年級學童設計的粉彩畫課程，引導孩子透過繽紛色彩與創意，探索藝術世界。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "一起輕鬆玩長笛",
        "category": "4.手作DIY與才藝",
        "activity_date": "2026/09/07-2026/12/28",
        "start_date": "2026-09-07",
        "end_date": "2026-12-28",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "2026/07/22 上午10點開放報名",
        "location": "國立中正紀念堂管理處 園區教室(二) (臺北市中正區中山南路21號)",
        "target_age": null,
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "輕鬆學習長笛基礎，培養音樂興趣與才藝，適合對長笛有興趣的初學者。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "《地獄新娘》免費觀賞與映後分享",
        "category": "2.藝文展演",
        "activity_date": "2026/09/04-2026/09/04",
        "start_date": "2026-09-04",
        "end_date": "2026-09-04",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "免費觀賞",
        "location": "國立中正紀念堂管理處 演藝廳 (臺北市中正區中山南路21號)",
        "target_age": null,
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "免費觀賞提姆·波頓的經典動畫電影《地獄新娘》，並有鄧惠文醫師進行映後分享。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "圓潤的魔法 波特羅特展",
        "category": "藝文展演",
        "activity_date": "2026/06/19 10:00 ~ 2026/10/11 18:00",
        "start_date": "2026-06-19",
        "end_date": "2026-10-11",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "需購票入場，詳見官方網站售票資訊",
        "location": "中正紀念堂1展廳",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "「圓潤的魔法 波特羅特展」探索哥倫比亞藝術家費爾南多．波特羅獨特的「圓潤美學」。展覽呈現其透過豐盈型態描繪人物、動物與靜物，闡述對體積與存在感的頌揚。展出逾七十年創作生涯的經典作品，顛覆傳統美的想像，帶來一場療癒的藝術饗宴。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/CKSMH/Detail.init.ctr?actId=60773",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "許敏雄老師-水彩畫B班師生成果展",
        "category": "藝文展演",
        "activity_date": "2026/06/29-2027/12/31",
        "start_date": "2026-06-29",
        "end_date": "2027-12-31",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "請參閱活動詳情",
        "location": "國立國父紀念館",
        "target_age": "不限年齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "展出許敏雄老師水彩畫B班師生們的藝術創作成果，呈現水彩藝術的多元風貌。適合對水彩畫有興趣的民眾參觀。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/YATSEN/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "王俊棠老師-壓克力繪畫與油畫創作班師生成果展",
        "category": "藝文展演",
        "activity_date": "2026/06/26-2027/12/31",
        "start_date": "2026-06-26",
        "end_date": "2027-12-31",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "請參閱活動詳情",
        "location": "國立國父紀念館",
        "target_age": "不限年齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "展示王俊棠老師壓克力繪畫與油畫創作班的師生作品，帶領觀者欣賞不同媒材的藝術表現與創意。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/YATSEN/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "林仁山老師-揮灑情境~複合媒材表現班師生成果展",
        "category": "藝文展演",
        "activity_date": "2026/06/16-2027/12/31",
        "start_date": "2026-06-16",
        "end_date": "2027-12-31",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "請參閱活動詳情",
        "location": "國立國父紀念館",
        "target_age": "不限年齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "呈現林仁山老師複合媒材表現班師生們的多元藝術成果，透過不同媒材展現豐富的情境與創意。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/YATSEN/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "楊昇鴻老師-素描班師生成果展",
        "category": "藝文展演",
        "activity_date": "2026/06/17-2027/12/31",
        "start_date": "2026-06-17",
        "end_date": "2027-12-31",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "請參閱活動詳情",
        "location": "國立國父紀念館",
        "target_age": "不限年齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "展出楊昇鴻老師素描班師生的精采作品，展現素描藝術的基礎與細膩觀察，適合藝術愛好者參觀。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/YATSEN/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "「中山青年藝術獎十週年典藏巡迴特展」",
        "category": "藝文展演",
        "activity_date": "2026/06/18-2026/07/19",
        "start_date": "2026-06-18",
        "end_date": "2026-07-19",
        "recurring_days": [],
        "region": "北部",
        "city": "新竹市",
        "registration_date": "請參閱活動詳情",
        "location": "新竹生活美學館",
        "target_age": "不限年齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "中山青年藝術獎十週年典藏巡迴特展，展出歷屆獲獎的優秀青年藝術作品，展現當代藝術的活力與創意。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://event.culture.tw/mocweb/reg/YATSEN/Index.init.ctr?openExternalBrowser=1",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "115年7月11日-12日、8月22-23日六堆園區「暑期親子共學特色露營」體驗活動",
        "category": "生態與大自然",
        "activity_date": "115年7月11日-12日、8月22-23日",
        "start_date": "2026-07-11",
        "end_date": "2026-08-23",
        "recurring_days": [],
        "region": "南部",
        "city": "屏東縣",
        "registration_date": "115/7/2(四)下午3點開放線上報名，第一場次報名至2026/07/08 15:00，第二場次報名至2026/08/19 15:00。",
        "location": "六堆客家文化園區 露營區 (屏東縣內埔鄉建興村信義路588號)",
        "target_age": "民眾、親子",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "六堆園區暑期親子共學特色露營，主打Chill風格，提供免搭帳、在地風味餐點。活動包含火焰蟲探索、夜間生態觀察。兩場次分別有蒔田體驗與客家甜酒釀湯圓DIY。每人600元，3歲以下免費，適合親子同樂。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12322/12419/12420/153221/167679/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "夜宿博物館【做戲夏令營】-三天兩夜",
        "category": "長天數營隊",
        "activity_date": "2026/07/08 10:30 ~ 2026/07/10 12:00",
        "start_date": "2026-07-08",
        "end_date": "2026-07-10",
        "recurring_days": [],
        "region": "中部",
        "city": "苗栗縣",
        "registration_date": "2026/05/15 12:00 ~ 2026/06/30 12:00 (線上購票)",
        "location": "臺灣客家文化館 (苗栗縣銅鑼鄉銅科南路6號)",
        "target_age": "限「暑假後升國小4～6年級」兒童參加",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "今年夏天最好玩的夏令營，暑假七月走進繪本故事，開啟一場屬於自己的冒險。加入【做戲夏令營】，透過闖關任務、展館探索與多元手作，一路推進劇情、打造角色，在遊戲中建立自信、在體驗中認識客家，最後站上舞台完成專屬演出！活動包含線索蒐集、夜間開張、角色打造、樂器手作、造型米食及夜宿館舍等豐富內容，打造難忘回憶。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12321/12323/1437/153220/164288/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "夜宿博物館【做戲夏令營】-兩天一夜 (第一梯)",
        "category": [
            "藝文展演",
            "知性與靜態學習",
            "手作DIY與才藝",
            "在地文化體驗",
            "長天數營隊"
        ],
        "activity_date": "7/2(四)-7/3(五)",
        "start_date": "2026-07-02",
        "end_date": "2026-07-03",
        "recurring_days": [],
        "region": "中部",
        "city": "苗栗縣",
        "registration_date": "2026/05/15 12:00 ~ 2026/06/30 12:00，透過 Accupass 購票，需審核。",
        "location": "臺灣客家文化館（苗栗縣銅鑼鄉銅科南路6號）",
        "target_age": "限「暑假後升國小4～6年級」兒童參加",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "今年夏天最有趣的夏令營，透過闖關、展館探索與手作，打造角色，認識客家，並站上舞台完成專屬演出，建立自信。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12321/12323/1437/153220/164272/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "夜宿博物館【做戲夏令營】-兩天一夜 (第二梯)",
        "category": [
            "藝文展演",
            "知性與靜態學習",
            "手作DIY與才藝",
            "在地文化體驗",
            "長天數營隊"
        ],
        "activity_date": "7/4(六)-7/5(日)",
        "start_date": "2026-07-04",
        "end_date": "2026-07-05",
        "recurring_days": [],
        "region": "中部",
        "city": "苗栗縣",
        "registration_date": "2026/05/15 12:00 ~ 2026/06/30 12:00，透過 Accupass 購票，需審核。",
        "location": "臺灣客家文化館（苗栗縣銅鑼鄉銅科南路6號）",
        "target_age": "限「暑假後升國小4～6年級」兒童參加",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "今年夏天最有趣的夏令營，透過闖關、展館探索與手作，打造角色，認識客家，並站上舞台完成專屬演出，建立自信。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12321/12323/1437/153220/164272/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "夜宿博物館【做戲夏令營】-兩天一夜 (第三梯)",
        "category": [
            "藝文展演",
            "知性與靜態學習",
            "手作DIY與才藝",
            "在地文化體驗",
            "長天數營隊"
        ],
        "activity_date": "7/6(一)-7/7(二)",
        "start_date": "2026-07-06",
        "end_date": "2026-07-07",
        "recurring_days": [],
        "region": "中部",
        "city": "苗栗縣",
        "registration_date": "2026/05/15 12:00 ~ 2026/06/30 12:00，透過 Accupass 購票，需審核。",
        "location": "臺灣客家文化館（苗栗縣銅鑼鄉銅科南路6號）",
        "target_age": "限「暑假後升國小4～6年級」兒童參加",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "今年夏天最有趣的夏令營，透過闖關、展館探索與手作，打造角色，認識客家，並站上舞台完成專屬演出，建立自信。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12321/12323/1437/153220/164272/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "夜宿博物館【做戲夏令營】-三天兩夜 (第四梯)",
        "category": [
            "藝文展演",
            "知性與靜態學習",
            "手作DIY與才藝",
            "在地文化體驗",
            "長天數營隊"
        ],
        "activity_date": "7/8(三)-7/10(五)",
        "start_date": "2026-07-08",
        "end_date": "2026-07-10",
        "recurring_days": [],
        "region": "中部",
        "city": "苗栗縣",
        "registration_date": "2026/05/15 12:00 ~ 2026/06/30 12:00，透過 Accupass 購票，需審核。",
        "location": "臺灣客家文化館（苗栗縣銅鑼鄉銅科南路6號），第二晚入住台灣油礦陳列館「微光之丘」",
        "target_age": "限「暑假後升國小4～6年級」兒童參加",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "今年夏天最好玩的夏令營，透過闖關、展館探索與多元手作，打造角色，認識客家，最後站上舞台完成專屬演出。第四梯為三天兩夜，包含台灣油礦陳列館住宿體驗。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://thcdc.hakka.gov.tw/onlineservice/1362/1394/12321/12323/1437/153220/164272/",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "臺中文學館兒童文學區115年7月親子聽故事",
        "category": "知性與靜態學習",
        "activity_date": "115年7月親子聽故事節目表",
        "start_date": "2026-07-04",
        "end_date": "2026-07-26",
        "recurring_days": [
            0,
            6
        ],
        "region": "中部",
        "city": "臺中市",
        "registration_date": "活動現場參與，無需預先報名",
        "location": "臺中文學館兒童文學區，地址：403003臺中市西區樂群街38號",
        "target_age": "(國小以下)小朋友",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "臺中文學館兒童文學區於115年7月每周六、日上午舉辦親子聽故事活動，邀請國小以下小朋友與家長一同參與，透過精彩繪本故事，培養閱讀興趣，並可集點兌換精美小禮。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tlm.taichung.gov.tw/latestevent/Details.aspx?Parser=9,5,124,,,,1961",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "【臺中文學館】兒童文學區115年6月親子聽故事節目表",
        "category": "知性與靜態學習",
        "activity_date": "115年6月每周六、日 10：30-11：00",
        "start_date": "2026-06-06",
        "end_date": "2026-06-28",
        "recurring_days": [
            6,
            0
        ],
        "region": "中部",
        "city": "台中市",
        "registration_date": "活動現場直接參與，無須預先報名",
        "location": "臺中文學館兒童文學區 (臺中市西區樂群街38號)",
        "target_age": "國小以下小朋友",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "臺中文學館兒童文學區於115年6月每周六、日上午舉辦親子聽故事活動。邀請國小以下小朋友與家長大手牽小手，一同參與，聆聽繪本故事。每次參與可獲貼紙集點，集滿點數可兌換文學館精美小禮。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tlm.taichung.gov.tw/latestevent/Details.aspx?Parser=9,5,124,,,,2003",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "2026臺中文學季-文學城市生成中",
        "category": "藝文展演",
        "activity_date": "2026年4月18日(星期六)起至7月5日(星期日)",
        "start_date": "2026-04-18",
        "end_date": "2026-07-05",
        "recurring_days": [],
        "region": "中部",
        "city": "臺中市",
        "registration_date": "敬請密切注意臺中文學館臉書",
        "location": "臺中文學館 (臺中市西區樂群街38號) 及臺中綠美圖等相關場地",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "2026臺中文學季將於4/18至7/5登場，以「文學城市生成中」為主題，推出多項文學活動與展覽，包含主題講座、文學小旅行、跨域活動及兩大主題展，邀請市民朋友一同參與，打造心中的文學城市。活動期間亦有機會獲得文學季專屬紀念品。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tlm.taichung.gov.tw/latestevent/Details.aspx?Parser=9,5,124,,,,2070",
        "crawl_time": "2026-07-04T22:14:48"
    },
    {
        "title": "2026台南文資月｜「文資印象派」繪畫徵件比賽",
        "category": "競賽與檢定",
        "activity_date": "115年6月11日 ~ 115年8月31日",
        "start_date": "2026-06-11",
        "end_date": "2026-08-31",
        "recurring_days": [],
        "region": "南部",
        "city": "台南市",
        "registration_date": "請於截止日期115年8月31日以前，併同報名表，寄至「目目文創競賽辦公室：700台南市中西區南美里民生路一段100號」。",
        "location": "台南市中西區南美里民生路一段100號",
        "target_age": "居住或就讀於台南市之國小學生。",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "此繪畫徵件比賽旨在鼓勵台南市國小學童以畫筆描繪家鄉的歷史建築、水路文化、民俗節慶與常民生活，讓文化資產走入大眾生活，並結合2026世界歷史都市聯盟大會青少年推廣專案，促進台南學童與世界歷史城市交流接軌。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://tmach-culture.tainan.gov.tw/activity.asp?mainid=B7A40E34-161B-44F0-9224-738E10175C96",
        "crawl_time": "2026-07-05T22:34:46"
    },
    {
        "title": "水道攀樹體驗",
        "category": "動態體能",
        "activity_date": "開放預約中",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "南部",
        "city": "臺南市",
        "registration_date": "開放預約中，詳洽博物館",
        "location": "臺南山上花園水道博物館 (臺南市山上區山上里山上16號)",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "臺南山上花園水道博物館推出攀樹體驗活動，讓參與者能親近自然，挑戰自我。目前已開放預約報名。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://waterworks.tainan.gov.tw/index.php?modify=activity",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "手做體驗課程",
        "category": "手作DIY與才藝",
        "activity_date": "每月開課",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "南部",
        "city": "臺南市",
        "registration_date": "每月開課，詳洽博物館",
        "location": "臺南山上花園水道博物館 (臺南市山上區山上里山上16號)",
        "target_age": null,
        "age_groups": [],
        "price_type": "付費",
        "summary": "臺南山上花園水道博物館提供手做體驗課程，每月定期開課，適合親子一同參與，發揮創意與動手樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://waterworks.tainan.gov.tw/index.php?modify=activity",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "攀樹體驗",
        "category": [
            "3.動態體能",
            "5.生態與大自然",
            "6.知性與靜態學習"
        ],
        "activity_date": null,
        "start_date": null,
        "end_date": null,
        "recurring_days": [
            0,
            1,
            2,
            4,
            5,
            6
        ],
        "region": "南部",
        "city": "臺南市",
        "registration_date": "最晚於活動日前1週完成報名，團體預約需求請洽0985-294-062 阿文教練",
        "location": "臺南山上花園水道博物館 (臺南市山上區山上里山上16號)",
        "target_age": null,
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "臺南山上花園水道博物館的攀樹體驗，透過繩索和繩結，讓參與者從高處探索自然，認識生態環境與自我。活動強調身體協調，由專業教練指導，適合學齡兒童及家庭，於百年老樹下感受大自然的魅力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://waterworks.tainan.gov.tw/index.php?modify=facility&id=3",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "臺南山上花園水道博物館 綠植手作課程",
        "category": "手作DIY與才藝",
        "activity_date": "每個月一個週末定期開課",
        "start_date": null,
        "end_date": null,
        "recurring_days": [],
        "region": "南部",
        "city": "臺南市",
        "registration_date": "報名資訊請關注麒麟貓工作室官方社群公告",
        "location": "臺南山上花園水道博物館 (地址：743001臺南市山上區山上里山上16號)",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "臺南山上花園水道博物館與麒麟貓工作室合作，每月定期開設綠植手作課程。課程內容豐富多元，除了常態課程外，未來也將應用館內綠植作為材料，並規劃酒瓶玻璃切割、金屬工藝等特殊手作體驗。歡迎對植物與文創手作有興趣的民眾，關注官方社群報名參與，一同體驗手作美好。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://waterworks.tainan.gov.tw/index.php?modify=facility&id=7",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "2026《踢踢踏踏．舞蹈節》暨踢踏藝展在花蓮｜踢踏舞體驗研習開放報名",
        "category": "藝文展演",
        "activity_date": "115年8月1日至8月23日，每週六、日",
        "start_date": "2026-08-01",
        "end_date": "2026-08-23",
        "recurring_days": [
            0,
            6
        ],
        "region": "東部及離島",
        "city": "花蓮縣",
        "registration_date": "一般民眾及親子組可線上報名，單堂或多週皆可。教師研習報名時間為115年6月20日至7月20日，請至「全國教師在職進修資訊網」報名。",
        "location": "花蓮縣鐵道文化園區一館調度室 (970 花蓮縣花蓮市中山路71號)",
        "target_age": "親子組 (5-10歲), 青少年組 (11-18歲), 一般民眾組 (不限年齡), 樂齡組 (55歲以上)",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "花蓮縣文化局與雷克斯踢踏舞團於花蓮鐵道文化園區舉辦2026《踢踢踏踏．舞蹈節》。8/1-8/23每週六日，透過踢踏舞體驗課程、互動展覽，帶領親子(5-10歲)、青少年(11-18歲)及一般民眾認識踢踏舞藝術，感受節奏律動魅力。每堂酌收材料費200元。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.hccc.gov.tw/zh-tw/Activity/Detail/15446",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "2026第二屆身體藝術節登場 7月花蓮文創園區打造沉浸式馬戲藝術盛會",
        "category": "藝文展演",
        "activity_date": "2026-07-04 00:00 至 2026-07-12 23:45",
        "start_date": "2026-07-04",
        "end_date": "2026-07-12",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "花蓮縣",
        "registration_date": "提供購票連結，線上購票",
        "location": "花蓮文化創意產業園區 (970 花蓮縣花蓮市中華路144號)",
        "target_age": "老少咸宜，歡迎親子家庭、青年朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "2026第二屆身體藝術節將於7月4日至7月12日在花蓮文化創意產業園區登場，以「身體」作為藝術探索的起點，結合當代馬戲、特技、默劇、雜耍、互動演出及多元體驗活動，推出售票演出及工作坊，適合親子家庭。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.hccc.gov.tw/zh-tw/Activity/Detail/15463",
        "crawl_time": "2026-07-06T02:23:24"
    },
    {
        "title": "2026桃園兒童藝術節",
        "category": [
            "藝文展演",
            "節慶市集與綜合"
        ],
        "activity_date": "115/07/04 ~ 115/07/26",
        "start_date": "2026-07-04",
        "end_date": "2026-07-26",
        "recurring_days": [],
        "region": "北部",
        "city": "桃園市",
        "registration_date": null,
        "location": "大溪區埔頂公園天幕籃球場、蘆竹區光明河濱公園天幕籃球場、復興區角板山公園天幕廣場、龜山區中山天幕廣場、大園區桃園陽光劇場、龍潭區龍潭運動公園",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "桃園市政府文化局為推廣兒童藝術啟蒙與在地藝文紮根，規劃辦理「2026 桃園兒童藝術節」。活動內容包含前導演出、兒童市集、小型表演及主舞台大型演出，將於桃園市多個地點分場次舉行。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ilccb.gov.tw/News_Content.aspx?n=10199&sms=12932&s=402899",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "2026蘭陽文藝營｜詩情寫意工作坊",
        "category": "知性與靜態學習",
        "activity_date": "8/15（六）－ 8/17（一）",
        "start_date": "2026-08-15",
        "end_date": "2026-08-17",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "報名已開始，限額45名，額滿為止。報名網址：https://forms.gle/6RMysNSRSYoTfo7u7",
        "location": "中興文化園區（宜蘭縣五結鄉中正路二段6之8號）",
        "target_age": "國、高中職在學學生",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "2026蘭陽文藝營邀請多位知名作家與詩人，透過講座、創作課程、文學走讀等多元形式，引導國、高中職學生探索文字力量，開啟創作潛能。活動免費，限額45名，設籍宜蘭縣學生優先。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ilccb.gov.tw/News_Content.aspx?n=10198&sms=12917&s=401900",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "2026 藝術自造祭《書的博物館》",
        "category": "2.藝文展演",
        "activity_date": "115/07/09 ~ 115/09/06",
        "start_date": "2026-07-09",
        "end_date": "2026-09-06",
        "recurring_days": [],
        "region": "東部及離島",
        "city": "宜蘭縣",
        "registration_date": "無需報名，依開放時間入場",
        "location": "宜蘭中興文化創意園區",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "宜蘭縣政府文化局主辦的《書的博物館》藝術自造祭，將於2026年7月9日至9月6日在宜蘭中興文創園區展出。展覽以書為創作媒介，集結臺灣及國際藝術家，透過書本藝術、公共藝術、互動裝置等多元形式，打造一座可漫遊、探索、參與的博物館，提供融合文學、藝術與地方文化的全新閱讀體驗。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.ilccb.gov.tw/News_Content.aspx?n=10537&sms=12918&s=403080",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "2026桃園地景藝術節",
        "category": "藝文展演",
        "activity_date": "115/07/04 ~ 115/08/30",
        "start_date": "2026-07-04",
        "end_date": "2026-08-30",
        "recurring_days": [],
        "region": "北部",
        "city": "桃園市",
        "registration_date": "無明確報名資訊",
        "location": "桃園珍珠海岸（竹圍漁港至永安漁港，串聯竹圍、許厝港、新屋及永安等海岸節點）",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "2026桃園地景藝術節將於7月4日至8月30日登場，首度轉型為雙年展，以桃園珍珠海岸為策展舞臺，自竹圍漁港串聯至永安漁港，打造橫跨30餘公里海岸線的大型地景藝術展演。本屆藝術節集結來自13個國家、25組國外藝術團隊及47組國內藝術團隊，透過藝術、生態及地方文化交融，引導民眾親近海岸、認識桃園，讓桃園成為一座與環境共生的「無牆美術館」。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://culture.tycg.gov.tw/News_Content.aspx?n=11103&s=1700149",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "可以摸的美術展「一樣不一樣」",
        "category": "藝文展演",
        "activity_date": null,
        "start_date": "2026-07-03",
        "end_date": "2026-07-31",
        "recurring_days": [],
        "region": "北部",
        "city": "桃園市",
        "registration_date": "無相關資訊",
        "location": "桃園市立兒童美術館 (中壢區)",
        "target_age": "兒童、親子",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "桃園市立兒童美術館舉辦「一樣不一樣」觸覺體驗展，邀請國內外藝術家與在地學子共創，打破傳統美術館「不要碰」的限制，鼓勵孩子們大膽觸碰、探索藝術。展覽以「共融」為核心，透過空間遊戲、差異與共融、日常中的想像三大主軸，引導親子從遊戲中認識多元身體與感官需求，適合全齡共同探索。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://culture.tycg.gov.tw/News_Content.aspx?n=11103&s=1693672",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "2026桃園國際動漫大展",
        "category": "藝文展演",
        "activity_date": null,
        "start_date": "2026-07-04",
        "end_date": "2026-07-31",
        "recurring_days": [],
        "region": "北部",
        "city": "桃園市",
        "registration_date": "詳細活動及報名資訊，歡迎至官方臉書粉絲團（網址：https://www.facebook.com/TY.ACGT/）查詢。",
        "location": "桃園市 中壢區",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "2026桃園國際動漫大展盛大登場，設置「墨跡漫院堂」漫畫區、「畫影流雲閣」動畫區及「闖關武林坊」遊戲區，展現俠義主題多元面貌。遊戲區規劃《仙劍奇俠傳》經典遊戲體驗、VR武俠互動遊戲、體感遊戲及LARP實境角色扮演，讓民眾親身走進動漫世界。展覽邀請台日港多位知名漫畫家參與交流，旨在支持原創，提供豐富的藝文與互動體驗。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://culture.tycg.gov.tw/News_Content.aspx?n=11103&s=1700138",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "文化30《成長的「風」狂冒險》親子劇",
        "category": "藝文展演",
        "activity_date": "2026/07/11 ~2026/07/11",
        "start_date": "2026-07-11",
        "end_date": "2026-07-11",
        "recurring_days": [],
        "region": "北部",
        "city": "新竹縣",
        "registration_date": "OPENTIX兩廳院文化生活購票",
        "location": "新竹縣政府文化局 演藝廳 (新竹縣竹北市縣政九路146號)",
        "target_age": "6歲以上，6歲以下建議親子共賞",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "風城孩子必看，今夏唯一《成長的「風」狂冒險》！結合戲劇、現代舞、古典樂的跨界親子冒險劇。關於尋找自我、信任陪伴、迎向未知，專為孩子打造的感官饗宴，在風中找到前進的勇氣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.hchcc.gov.tw/Tw/News/ActDetail?filter=58dd03be-c37d-40af-a540-6d34b3790b4c&id=4e48d056-7109-46e0-9603-340ab7c681c2",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "2026 新瓦屋板凳電影院 × 台灣國際兒童影展",
        "category": "藝文展演",
        "activity_date": "2026/07/04 ~2026/07/25",
        "start_date": "2026-07-04",
        "end_date": "2026-07-25",
        "recurring_days": [
            6
        ],
        "region": "北部",
        "city": "新竹縣",
        "registration_date": "線上報名 (部分場次已額滿，並於每場次開演前10分鐘開放現場候位)",
        "location": "新瓦屋園區 (新瓦屋板凳電影院、新瓦屋集會堂、禾埕廣場、忠孝堂)",
        "target_age": "兒童及全齡 (部分活動有分齡選片)",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "「2026新瓦屋板凳電影院」攜手「台灣國際兒童影展」，於七月每週六在新竹新瓦屋盛大舉行。活動包含國際得獎電影分齡放映、文化平權口述影像專場、逐格動畫成果發表、限定文創好禮及園區市集。7/25露天大主場更有精彩舞台表演、導盲犬宣導與豐富好禮兌換。邀請大小朋友帶上專屬板凳，一同享受夏日影像美學盛會。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.hchcc.gov.tw/Tw/News/ActPreviewDetail?filter=e2ce565c-7042-46b7-9b77-bb81937b8cf9&id=73ab96f3-9a62-4711-8c8b-c4a232a4b558",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "【綜合活動】噠噠讀知識向前衝 –全民閱讀集點3/3大開張！",
        "category": "知性與靜態學習",
        "activity_date": "115年 3月 3日 － 115年 12月 31日",
        "start_date": "2026-03-03",
        "end_date": "2026-12-31",
        "recurring_days": [],
        "region": "北部",
        "city": "新竹縣",
        "registration_date": "活動於115年3月3日開始，參與者可透過借閱圖書累積點數，詳情請洽各圖書館。",
        "location": "新竹縣各公共圖書館",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "新竹縣公共圖書館推出「噠噠讀知識向前衝 –全民閱讀集點」活動，鼓勵大小朋友透過借閱圖書累積點數，換取限量好禮。活動自115年3月3日開始，持續至12月31日，每本書都是通往知識的一大步，讓智慧能量UP！",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://hcplibrary.hchcc.gov.tw/wSite/ct?xItem=10900&ctNode=4293&mp=1",
        "crawl_time": "2026-07-06T22:48:13"
    },
    {
        "title": "紙風車368鄉鎮市區兒童藝術工程-永續啟航",
        "category": "藝文展演",
        "activity_date": "115年8月29日(星期六) ~ 115年8月30日(星期日)",
        "start_date": "2026-08-29",
        "end_date": "2026-08-30",
        "recurring_days": [],
        "region": "中部",
        "city": "臺中市",
        "registration_date": "免費入場，無須報名",
        "location": "南屯區文山里籃球場（臺中市南屯區嶺東路750號）及豐原鎮清宮停車場（臺中市豐原區水源路9巷67號）",
        "target_age": "大朋友小朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "紙風車劇團《台灣幻想曲》將於臺中南屯及豐原帶來兩場免費演出。劇中包含唐吉軻德冒險、身體練習曲、剩食的逆襲、後山天使及慶典的喜悅等五段精彩表演，鼓勵孩子勇敢追夢、愛惜食物，並透過魔法黑光秀帶來專屬臺中的祝福，適合全家大小一同觀賞。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.culture.taichung.gov.tw/3311250/post",
        "crawl_time": "2026-07-07T22:42:40"
    },
    {
        "title": "臺中中山堂玩劇場生活節─藝饗遊樂園",
        "category": "藝文展演",
        "activity_date": "2026年7月11日至7月16日",
        "start_date": "2026-07-11",
        "end_date": "2026-07-16",
        "recurring_days": [],
        "region": "中部",
        "city": "台中市",
        "registration_date": "實境解謎與市集活動免預約入場；部分表演節目需於各文化中心與中山堂免費索票。",
        "location": "臺中市中山堂及其藝文廣場",
        "target_age": "大小朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "臺中中山堂玩劇場生活節，以「藝饗遊樂園」為主題，於暑假期間熱鬧登場。活動內容包含首創實境解謎遊戲「搗蛋鬼事件」、星空馬戲、跨世代舞蹈演出、互動劇場、特色市集及街頭藝人表演，另有史坦威、法吉歐利雙名琴體驗。民眾可免票入場，部分活動需免費索票，邀請大小朋友一同體驗多元藝文活動。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.culture.taichung.gov.tw/3312918/post",
        "crawl_time": "2026-07-07T22:42:40"
    },
    {
        "title": "奇幻嘉義城市 AR 互動尋寶探險實體展《諸羅秘影—古物覺醒之謎》",
        "category": [
            "知性與靜態學習",
            "科技與創客",
            "在地文化體驗"
        ],
        "activity_date": "自8月16日(六)起至9月21日(日)止",
        "start_date": "2025-08-16",
        "end_date": "2025-09-21",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "民眾僅需掃描現場提供的QR Code",
        "location": "嘉義市城隍廟二樓",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "奇幻嘉義城市AR互動尋寶探險實體展，結合嘉義市城隍廟八件歷史古物，運用AR、3D動畫、互動遊戲與實境解謎劇情，引領民眾深度探索嘉義歷史文化底蘊。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "《城隍記憶所：從古物看見中元祭》講座",
        "category": [
            "知性與靜態學習",
            "在地文化體驗"
        ],
        "activity_date": "8/17（日）10:00~12:00",
        "start_date": "2025-08-17",
        "end_date": "2025-08-17",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "名額：40人。報名詳情未公布。",
        "location": "嘉義市城隍廟",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "由蔡長廷教授主講，透過古物視角探討中元祭典的歷史與文化意義，帶領聽眾深入了解城隍信仰與在地文化。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "《古物覺醒之謎：AR導覽 × 實境解謎》體驗活動",
        "category": [
            "知性與靜態學習",
            "科技與創客",
            "在地文化體驗"
        ],
        "activity_date": "8/17（日）14:00~16:00",
        "start_date": "2025-08-17",
        "end_date": "2025-08-17",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "名額：40人。報名詳情未公布。",
        "location": "嘉義市城隍廟",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "結合AR導覽與實境解謎，以互動方式引領參與者探索嘉義城隍廟古物背後的故事，體驗科技與歷史的結合。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "國定古蹟嘉義城隍廟中元祭典＋奇幻嘉義城市 AR 互動尋寶探險線上展",
        "category": [
            "知性與靜態學習",
            "科技與創客",
            "在地文化體驗",
            "節慶市集與綜合"
        ],
        "activity_date": "9/6（六）-11/7（日）",
        "start_date": "2025-09-06",
        "end_date": "2025-11-07",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "文化局官方臉書公告網址，嘉義市城隍廟內掃描活動告示QR Code",
        "location": "線上展覽 / 嘉義市城隍廟內掃描QR Code",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "結合國定古蹟嘉義城隍廟中元祭典，推出奇幻嘉義城市AR互動尋寶探險線上展，讓民眾透過網路也能體驗嘉義的歷史文化魅力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "《當AR遇上嘉義城隍廟》講座",
        "category": [
            "知性與靜態學習",
            "科技與創客",
            "在地文化體驗"
        ],
        "activity_date": "9/21（日）10:00~12:00",
        "start_date": "2025-09-21",
        "end_date": "2025-09-21",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "名額：40人。9/6（六）文化局官方臉書公告報名詳情，或洽abearuncle.it@gmail.com",
        "location": "嘉義市城隍廟",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "由阿熊叔開發團隊主講，探討AR技術如何應用於嘉義城隍廟的文化導覽與互動體驗，分享科技結合文化資產的創新應用。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "《裏嘉義，從城隍廟出發的文化旅程》講座",
        "category": [
            "知性與靜態學習",
            "在地文化體驗"
        ],
        "activity_date": "9/21（日）14:00~18:00",
        "start_date": "2025-09-21",
        "end_date": "2025-09-21",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "名額：40人。9/6（六）文化局官方臉書公告報名詳情，或洽abearuncle.it@gmail.com",
        "location": "嘉義市城隍廟",
        "target_age": "不限",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "由下港女子帶領，從嘉義城隍廟出發，深入探索嘉義市的在地文化與歷史故事，感受城市獨特的文化魅力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_25081517540120428",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "【2026嘉義市國際管樂節 】戶外音樂會暨踩街嘉年華",
        "category": "藝文展演",
        "activity_date": "2026年12月18日（五）起至2027年1月1日（五）止",
        "start_date": "2026-12-18",
        "end_date": "2027-01-01",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": null,
        "location": "嘉義市",
        "target_age": null,
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "2026嘉義市國際管樂節將舉辦戶外音樂會及踩街嘉年華，邀請全臺優秀樂團共襄盛舉，以音樂點亮城市。這場年度盛會將於2026年12月18日至2027年1月1日在嘉義市熱鬧登場，適合全家大小一同參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/HotActivitiesList_26060914095183543",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "細說多元文化工作坊",
        "category": "知性與靜態學習",
        "activity_date": "6 月 27 日至 8 月 1 日",
        "start_date": "2024-06-27",
        "end_date": "2024-08-01",
        "recurring_days": [],
        "region": "南部",
        "city": "嘉義市",
        "registration_date": "即日起可至嘉義市公共圖書館網站或嘉義市圖書館臉書粉絲專頁查詢報名資訊，額滿為止。",
        "location": "世賢圖書館兒童閱覽室 (嘉義市西區世賢路四段131號)",
        "target_age": "親子家庭及國小中高年級學童",
        "age_groups": [
            "7-12歲",
            "全齡"
        ],
        "price_type": "免費",
        "summary": "嘉義市公共圖書館推出「細說多元文化工作坊」，精選四場主題課程，透過故事分享與DIY體驗，帶領親子家庭及國小中高年級學童認識廣東海豐、印尼及越南等多元文化，包含麒麟舞、皮影戲、越南服飾與蠟染工藝，打造兼具知識與趣味的暑期多元文化旅程。活動全程免費。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://cabcy.chiayi.gov.tw/web/cabcych/news_26062515192425628",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "《13號兒童樂園》無線電身體工作坊",
        "category": "2.藝文展演",
        "activity_date": "2026年8月2日（日）14:00-15:30 及 2026年8月9日（日）14:00-15:30",
        "start_date": "2026-08-02",
        "end_date": "2026-08-09",
        "recurring_days": [
            0
        ],
        "region": "北部",
        "city": "臺北市",
        "registration_date": "2026/7/14 10:00 起線上報名，預約至 2026/08/08 23:59",
        "location": "臺北市立美術館 兒藝中心大工作坊 (臺北市中山區中山北路三段181號)",
        "target_age": "5-12歲",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "《13號兒童樂園》無線電身體工作坊，探索臺北市兒童樂園歷史與無線電發展。透過身體動作、收音機與無線電對講機，親子將在美術館空間進行一場獨特的無線電小隊演習，反思臺灣當代遊樂記憶。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tfam.museum/kid/Event/Event_page.aspx?id=3927",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "造公園",
        "category": "藝文展演",
        "activity_date": "2026/03/28 - 2026/08/30",
        "start_date": "2026-03-28",
        "end_date": "2026-08-30",
        "recurring_days": [],
        "region": "北部",
        "city": "台北市",
        "registration_date": "依美術館開放時間參觀，特定活動需另外報名或購票",
        "location": "臺北市立美術館",
        "target_age": "適合親子家庭、兒童及一般大眾",
        "age_groups": [
            "4-6歲",
            "7-12歲",
            "全齡"
        ],
        "price_type": "付費",
        "summary": "臺北市立美術館舉辦「造公園」展覽，以公園為主題，探索形狀、公共性與互動。透過互動裝置與感官體驗，引導參與者觀察日常、理解歷史、連結自然，並想像未來城市景觀。展覽設有親子參觀指南與學習單，並規劃多項兒童與親子工作坊，適合親子家庭與大眾一同參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tfam.museum/Exhibition/Exhibition_Special.aspx?id=804",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "暑假宅家不無聊 435藝文特區藝術家手繪藝文場館 打造親子同樂塗鴉趣",
        "category": "4.手作DIY與才藝",
        "activity_date": "即日起，連續8週",
        "start_date": "2021-07-20",
        "end_date": "2021-09-13",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": "即日起至活動結束，民眾可至超商ibon列印圖稿著色，並於文化局FB粉專上傳作品參與抽獎。",
        "location": "居家與線上活動，圖稿可至超商ibon列印。",
        "target_age": "全齡親子",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "新北市文化局與板橋435藝文特區推出「親子同樂塗鴉趣」，駐村藝術家手繪新北藝文場館圖稿，民眾可在家列印著色，並上傳FB參與抽獎，讓親子暑假宅家不無聊。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.435.culture.ntpc.gov.tw/xmdoc/cont?xsmsid=0G293423996513620586&sid=0L201630594575735818",
        "crawl_time": "2026-07-08T22:40:17"
    },
    {
        "title": "435立體書藝術家《目光-賴冠傑創作個展》",
        "category": "2.藝文展演",
        "activity_date": "即日起至5月9日",
        "start_date": "2021-04-28",
        "end_date": "2021-05-09",
        "recurring_days": [],
        "region": "北部",
        "city": "新北市",
        "registration_date": null,
        "location": "435藝文特區萬板館 (新北市板橋區中正路435號)",
        "target_age": "全齡",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "435立體書藝術家賴冠傑創作個展《目光》，展出8頁大張立體書及20多件新作。透過摺學主義思維，以棉線、尼龍線牽動機關，探討目光對於自我與社會他人的實相價值，並反思資訊爆炸時代的壓力。邀請您一同進入「摺學主義」的創作世界。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.435.culture.ntpc.gov.tw/xmdoc/cont?xsmsid=0G293423996513620586&sid=0L141575912488077919",
        "crawl_time": "2026-07-08T22:40:17"
    }
];
