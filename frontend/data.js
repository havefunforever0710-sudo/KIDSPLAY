const categories = [
    { id: 1, name: "職業體驗", icon: "💼" },
    { id: 2, name: "藝文展演", icon: "🎭" },
    { id: 3, name: "動態體能", icon: "🏃‍♂️" },
    { id: 4, name: "手作 DIY 與才藝", icon: "🎨" },
    { id: 5, name: "生態與大自然", icon: "🌿" },
    { id: 6, name: "知性與靜態學習", icon: "📖" },
    { id: 7, name: "節慶市集與綜合", icon: "🎪" },
    { id: 8, name: "科技與創客", icon: "💻" },
    { id: 9, name: "競賽與檢定", icon: "🏆" },
    { id: 10, name: "長天數營隊", icon: "🏕️" },
    { id: 11, name: "公益與生命教育", icon: "🤝" },
    { id: 12, name: "在地文化體驗", icon: "⛩️" }
];

const locationsData = {
    "北部": ["台北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"],
    "中部": ["苗栗縣", "台中市", "彰化縣", "南投縣", "雲林縣"],
    "南部": ["嘉義市", "嘉義縣", "台南市", "高雄市", "屏東縣"],
    "東部及離島": ["花蓮縣", "台東縣", "澎湖縣", "金門縣", "連江縣"]
};

// 使用目前的年月份做示範 (2026年4月)
const mockEvents = [
    {
        id: 101,
        title: "小小消防員體驗營",
        category: "職業體驗",
        activity_date: "2026/04/18 (六) 14:30~17:00",
        date: "2026-04-18",
        region: "南部",
        city: "高雄市",
        registration_date: "即日起開放報名",
        location: "中華消防分隊 (鼓山區中華一路2320號)",
        target_age: "7-10歲兒童",
        summary: "期待已久的消防員體驗營，讓小朋友穿上消防制服，化身打火英雄。體驗消防衣、心肺復甦術、濃煙霧通行等。",
        image: "https://images.unsplash.com/photo-1616118090710-4edbd0c2837d?w=800&q=80" 
    },
    {
        id: 102,
        title: "週末草地野餐市集",
        category: "節慶市集與綜合",
        activity_date: "2026/04/20 (一) 10:00~16:00",
        date: "2026-04-20",
        region: "北部",
        city: "新北市",
        registration_date: "自由參加，免報名",
        location: "大都會公園",
        target_age: "0-99歲",
        summary: "包含二手玩具交換、氣球魔術秀，帶著野餐墊來享受美好的週末下午！",
        image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80"
    },
    {
        id: 103,
        title: "恐龍化石探險特展",
        category: "藝文展演",
        activity_date: "2026/04/25 (六) 09:00~17:00",
        date: "2026-04-25",
        region: "南部",
        city: "高雄市",
        registration_date: "線上售票中",
        location: "科學工藝博物館",
        target_age: "3-12歲",
        summary: "帶孩子穿越侏羅紀，親手觸摸恐龍模型，並有專屬幼兒的化石挖掘體驗區。",
        image: "https://images.unsplash.com/photo-1596745199611-667cb54c5e50?w=800&q=80"
    },
    {
        id: 104,
        title: "兒童程式積木啟蒙營",
        category: "科技與創客",
        activity_date: "2026/04/18 (六) 09:00~12:00",
        date: "2026-04-18",
        region: "北部",
        city: "台北市",
        registration_date: "即將額滿",
        location: "三創生活園區",
        target_age: "5-8歲",
        summary: "用玩積木的方式學習基礎程式邏輯，培養孩子解決問題的能力。",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
    }
];
