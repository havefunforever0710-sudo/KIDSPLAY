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
    }
];
