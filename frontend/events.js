// 這支檔案由 GitHub Actions 雲端自動爬蟲產生
const dynamicEvents = [
    {
        "title": "櫻桃小丸子帶路玩宇宙！天文館暑期活動陪你一整夏",
        "category": "知性與靜態學習",
        "activity_date": "2026年7月至8月，每日皆有活動，部分活動有特定時間，詳見官網。",
        "date": "2026-07-01",
        "region": "北部",
        "city": "台北市",
        "registration_date": "部分活動已開放報名，詳細資訊請至臺北天文館網站查詢。",
        "location": "臺北市立天文科學教育館 (地址: 臺北市士林區基河路363號)",
        "target_age": "適合大小朋友、親子家庭、學生及一般民眾。",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "臺北天文館於暑假期間推出一系列豐富多元的活動，包括宇宙劇場新片《櫻桃小丸子－南十字星的奇幻之旅》、免費劇場短片、銀河特展夜間導覽、主題導覽、太陽與夜間觀星、星姊姊說故事、手作體驗及多項節慶活動等。邀請大小朋友一同探索宇宙，享受充滿知識與樂趣的夏日時光。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tam.gov.taipei/News_Content.aspx?n=49854D6439EC40C0&sms=72544237BBE4C5F6&s=49C515E68C676A45"
    },
    {
        "title": "天文館七月講座：宇宙失蹤檔案：尋找消失的中等質量黑洞",
        "category": "知性與靜態學習",
        "activity_date": "7月12日（日）14時至16時",
        "date": "2026-07-12",
        "region": "北部",
        "city": "台北市",
        "registration_date": "即日起開放報名，歡迎至臺北天文館官網「活動訊息」專區登錄報名。",
        "location": "臺北市立天文科學教育館 (臺北市士林區基河路363號)",
        "target_age": "無論是對宇宙充滿好奇的民眾，或對天文研究有興趣的學生",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "臺北天文館講座：「宇宙失蹤檔案：尋找消失的中等質量黑洞」，7月12日14-16時免費登場。由清大準博士張怡琪主講，揭開黑洞演化之謎，歡迎大眾及學生參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tam.gov.taipei/News_Content.aspx?n=49854D6439EC40C0&sms=72544237BBE4C5F6&s=D556AAA8438412B4"
    },
    {
        "title": "蛙寶故事團2026年7月說故事活動",
        "category": "知性與靜態學習",
        "activity_date": "2026年7月每周三及周日",
        "date": "2026-07-01",
        "region": "南部",
        "city": "臺南市",
        "registration_date": "網頁內容未提及具體報名時間與方式，應為自由參加",
        "location": "臺南市立圖書館總館 (永康區康橋大道255號)",
        "target_age": "嬰幼兒至兒童",
        "age_groups": [
            "0-3歲",
            "4-6歲"
        ],
        "price_type": "免費",
        "summary": "臺南市立圖書館蛙寶故事團於2026年7月每周三及周日舉辦說故事活動。透過豐富的故事內容，陪伴孩子們成長，打開他們的閱讀世界。歡迎家長帶孩子前往總館參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/n14943237246847044508/n1Content"
    },
    {
        "title": "【ㄅ級大人預備備】2026青少年閱讀推廣活動",
        "category": "知性與靜態學習",
        "activity_date": "2026-07-26",
        "date": "2026-07-26",
        "region": "南部",
        "city": "台南市",
        "registration_date": "尚未開始報名",
        "location": "市圖總館(新總館)",
        "target_age": "青少年",
        "age_groups": [
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "專為青少年讀者設計的閱讀推廣活動，旨在培養閱讀興趣與習慣，為他們邁向成人世界做好準備。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList"
    },
    {
        "title": "《成大台語囡仔古：台語故事時間》",
        "category": "知性與靜態學習",
        "activity_date": "2026-07-05",
        "date": "2026-07-05",
        "region": "南部",
        "city": "台南市",
        "registration_date": "請洽活動主辦單位",
        "location": "市圖總館(新總館)",
        "target_age": "幼兒至學齡兒童",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "結合成功大學資源，以生動活潑的台語講述兒童故事，推廣在地語言文化，適合學齡前及學齡兒童參與。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList"
    },
    {
        "title": "《Oh,Brown Pelican: Grandma Linda tells Zari about her favourite bird》大使說故事時間",
        "category": "知性與靜態學習",
        "activity_date": "2026-07-04",
        "date": "2026-07-04",
        "region": "南部",
        "city": "台南市",
        "registration_date": "請洽活動主辦單位",
        "location": "市圖總館(新總館)",
        "target_age": "兒童",
        "age_groups": [
            "0-3歲",
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "免費",
        "summary": "由大使親自為孩子們帶來英語故事時間，透過生動的繪本故事，帶領小朋友認識不同文化與動物知識，啟發想像力。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tnpl.tn.edu.tw/ActivityList"
    },
    {
        "title": "【全市】115年限定《爸爸你可以》性平故事劇首次演出~ 歡迎大小朋友一起來看戲",
        "category": "知性與靜態學習",
        "activity_date": "2026年7月4日至8月29日，共12場次，每場次含故事劇、互動唱跳及創意手作教學，詳細時間請見內文。",
        "date": "2026-07-04",
        "region": "北部",
        "city": "新北市",
        "registration_date": "免報名，現場參與。",
        "location": "新北市立圖書館多處分館巡迴演出，包含三重兒童親子分館、蘆洲兒童親子分館、泰山親子圖書閱覽室、新莊裕民分館、江子翠分館、中和員山分館、新北市圖總館、林口李科永圖書館、五股分館、樹林三多閱覽室、土城親子分館。",
        "target_age": "大小朋友",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "新北市立圖書館公益故事團演出《爸爸你可以》性平故事劇，透過生活情境傳達性別共育與平等參與理念。活動免報名、免收費，並結合手作與唱跳遊戲，歡迎大小朋友一同參與，共12場次巡迴新北各分館。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=b277bd23eb084697ac6c373b50610f54"
    },
    {
        "title": "【鶯歌分館】客家本色大探索系列活動：舌尖上的客庄探險—豆乳雞飯糰學客語",
        "category": "4.手作DIY與才藝",
        "activity_date": "115/7/18(六)14:00-16:00",
        "date": "2026-07-18",
        "region": "北部",
        "city": "新北市",
        "registration_date": "115/7/7(二)下午2點起開放報名，網路報名(限額10位)、電話或櫃檯報名(限額10位)，額滿為止。",
        "location": "新北市立圖書館鶯歌分館1樓多功能室(鶯歌區中山路150號)",
        "target_age": "一般民眾皆可報名",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "本課程結合美食手作與語言體驗，帶領學員從認識客家靈魂醬料「豆腐乳」開始，親手醃製並炸出香酥多汁的豆乳雞。搭配金黃飽滿的米飯，捏製出專屬的傳統飯糰。過程中將邊做邊學，輕鬆掌握食材與料理的實用客語對話，用美味傳承文化。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=5fa9ae917b7847eea3cd796a2a613f8d"
    },
    {
        "title": "生態CSI鑑識所講座：台灣水域生態與碧潭堰魚道",
        "category": "知性與靜態學習",
        "activity_date": "7/18(六)10:00-12:00",
        "date": "2026-07-18",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館1樓演講廳 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過講座深入了解台灣水域生態、科學調查方法，以及碧潭堰魚道在生命保育中的重要性。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：3D列印筆見證「上溯魚兒游」",
        "category": "科技與創客",
        "activity_date": "6/27(六)14:30-16:30",
        "date": "2026-06-27",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館2樓創新學習中心 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "運用3D列印筆，動手製作魚兒上溯的逃生通道模型，探索生態工程的奧秘。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：3D列印筆重現「小毛蟹回家了」",
        "category": "科技與創客",
        "activity_date": "7/11(六)13:00-16:00",
        "date": "2026-07-11",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館2樓創新學習中心 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "結合導電漆與3D列印筆，設計並重現小毛蟹回家的安全通道，體驗創意科技。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：逆流而上—魚兒的紙版畫故事",
        "category": "手作DIY與才藝",
        "activity_date": "7/4(六)14:00-16:00",
        "date": "2026-07-04",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過紙版畫創作，以藝術形式詮釋魚兒逆流而上的堅韌生命力與故事。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：時間之窗—生態沙漏",
        "category": "手作DIY與才藝",
        "activity_date": "7/15(三)14:00-17:00",
        "date": "2026-07-15",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "動手製作獨特的生態沙漏，感受時間流逝與生態環境變化的奇妙連結。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：科學偵探的「S.O.S.證物袋」",
        "category": "科技與創客",
        "activity_date": "7/22(三)14:00-16:00",
        "date": "2026-07-22",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "新北市青少年圖書館 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過AI識別技術，扮演科學偵探，偵察碧潭堰魚道生態，學習科技保育知識。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所：新店溪水下視界生態探索",
        "category": "生態與大自然",
        "activity_date": "7/25(六) 09:00-11:00",
        "date": "2026-07-25",
        "region": "北部",
        "city": "新北市",
        "registration_date": "線上報名，請參考官網連結",
        "location": "捷運新店站出口左側綠柱 (新北市新店區)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "實地走訪新店溪，探索碧潭魚道與原生魚類生態，親身感受大自然之美。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所主題書展",
        "category": "知性與靜態學習",
        "activity_date": "6/5(五)-7/29(三)開館時間",
        "date": "2026-06-05",
        "region": "北部",
        "city": "新北市",
        "registration_date": "無需報名，自由參觀",
        "location": "新北市青少年圖書館1樓大廳 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "展出與生態鑑識、環境保護相關主題書籍，提供豐富的知性閱讀體驗。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "生態CSI鑑識所特展：洄溯之堰",
        "category": "藝文展演",
        "activity_date": "6/5(五)-7/29(三)開館時間",
        "date": "2026-07-29",
        "region": "北部",
        "city": "新北市",
        "registration_date": "無需報名，自由參觀",
        "location": "新北市青少年圖書館1樓展覽區 (新北市新店區安康路二段151號)",
        "target_age": "跨世代全齡學員",
        "age_groups": [
            "全齡"
        ],
        "price_type": "免費",
        "summary": "透過藝術展覽，以視覺方式回溯新店溪的河流記憶與水下生命，啟發對生態的思考。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.library.ntpc.gov.tw/singlehtml/ActvInfo?cntId=d8cd5254fae3464297b09d2d132ead06"
    },
    {
        "title": "2026豆莢寶寶兒童音樂會《咻咻～魔幻擊樂秀》",
        "category": "藝文展演",
        "activity_date": "2026年8月1日(六) 10:30、14:30、19:30；8月2日(日) 10:30、14:30；9月12日(六) 10:30、14:30；9月13日(日) 10:30、15:00",
        "date": "2026-08-01",
        "region": "北部",
        "city": "台北市",
        "registration_date": "透過OPENTIX兩廳院文化生活售票平台購票，詳情請見購票連結。",
        "location": "臺北市藝文推廣處 城市舞台 (地址：臺北市松山區八德路3段25號)",
        "target_age": "無明確說明",
        "age_groups": [
            "全齡"
        ],
        "price_type": "付費",
        "summary": "2026豆莢寶寶兒童音樂會《咻咻～魔幻擊樂秀》，由魔幻打擊樂團帶來擊樂與魔術表演。豆莢寶寶DoReMi加入樂團，卻面臨場地拆除危機，他們將如何克服困難，完成精彩演出？",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tapo.gov.taipei/News_Content.aspx?n=A6FF89AB737B343B&sms=4EC89792B96F7291&s=15006286E685D756"
    },
    {
        "title": "115文山劇場《親子玩藝》6月活動",
        "category": "藝文展演",
        "activity_date": "2026年6月6日(六)、6月13日(六)，每日10:00~11:40",
        "date": "2026-06-06",
        "region": "北部",
        "city": "台北市",
        "registration_date": "請參閱購票連結或文山劇場臉書公告",
        "location": "文山劇場10或11樓排練空間(教室)",
        "target_age": "4-8歲親子",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "臺北市藝文推廣處文山劇場推出《親子玩藝》六月活動，包含美術類「夢裡的建築」與戲劇類「像不像沒關係」。課程鼓勵4-8歲親子共同參與，透過藝術創作、剪貼繪畫及戲劇想像力練習，啟發兒童創造力，運用身體與聲音表達想法，一同探索藝術與戲劇的樂趣。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.tapo.gov.taipei/News_Content.aspx?n=CEDE938182D9017F&sms=A4E6E8DBA30EF49D&s=DDAAD632E13AB559"
    },
    {
        "title": "【2026花露露的童樂節】花露露舞台劇《搶救魔幻飛船》",
        "category": "藝文展演",
        "activity_date": "2026/07/11 (六) 10:30、14:30",
        "date": "2026-07-11",
        "region": "南部",
        "city": "高雄市",
        "registration_date": "衛武營會員購票優惠於4/10(五)中午12:00起，一般大眾購票優惠於4/17(五)中午12:00起，另有同樂套票與花露露優惠套票，可透過兩廳院購票系統購票。",
        "location": "衛武營國家藝術文化中心 戲劇院",
        "target_age": "建議5歲以上觀眾觀賞，12歲以下孩童需家長陪同。",
        "age_groups": [
            "4-6歲",
            "7-12歲"
        ],
        "price_type": "付費",
        "summary": "花露露與夥伴們因飛船故障迫降地球，來到神秘的伊摩小鎮。為了啟動飛船，花露露和朋友必須解開小鎮謎團，幫助居民找回真正的快樂！跟著花露露，一起踏上這場奇幻冒險，點亮鐘塔，喚醒笑容吧！演出後將舉辦花露露拍照會。",
        "image": "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80",
        "source_url": "https://www.npac-weiwuying.org/programs/69a7ee5321a81c00076f501a"
    }
];
