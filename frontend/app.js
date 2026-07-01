document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const categoryContainer = document.getElementById('categoryContainer');
    const eventContainer = document.getElementById('eventContainer');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');
    const regionSelect = document.getElementById('regionSelect');
    
    // New DOM Elements for advanced filters
    const citySelectContainer = document.getElementById('citySelectContainer');
    const citySelectBtn = document.getElementById('citySelectBtn');
    const citySelectMenu = document.getElementById('citySelectMenu');
    const ageSelect = document.getElementById('ageSelect');
    const priceSelect = document.getElementById('priceSelect');
    const header = document.querySelector('.header');
    
    // View Toggle Elements
    const btnListView = document.getElementById('btnListView');
    const btnCalendarView = document.getElementById('btnCalendarView');
    const calendarView = document.getElementById('calendarView');
    
    // Calendar Elements
    const currentMonthYear = document.getElementById('currentMonthYear');
    const calendarGrid = document.getElementById('calendarGrid');
    const selectedDateTitle = document.getElementById('selectedDateTitle');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    // State
    let currentCategory = 'All';
    let currentRegion = 'All';
    let selectedCities = [];
    let currentAge = 'All';
    let currentPrice = 'All';
    let currentViewMode = 'list'; // 'list' or 'calendar'
    
    let currentDate = new Date();
    let selectedDateStr = null;

    // Header scroll animation (Hide on scroll down)
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            header.classList.add('hidden'); // Scroll Down
        } else {
            header.classList.remove('hidden'); // Scroll Up
        }
        lastScrollTop = scrollTop;
    });

    // Custom Multi-select Logic
    citySelectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        citySelectMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => {
        citySelectMenu.classList.remove('show');
    });
    citySelectMenu.addEventListener('click', (e) => e.stopPropagation());

    function updateCityBtnText() {
        if (selectedCities.length === 0) citySelectBtn.innerText = '選擇縣市 ▼';
        else if (selectedCities.length === 1) citySelectBtn.innerText = selectedCities[0] + ' ▼';
        else citySelectBtn.innerText = `已選 ${selectedCities.length} 縣市 ▼`;
    }

    // 1. 初始化篩選器
    function initFilters() {
        regionSelect.addEventListener('change', (e) => {
            currentRegion = e.target.value;
            selectedCities = [];
            
            if (currentRegion === 'All') {
                citySelectContainer.style.display = 'none';
            } else {
                citySelectContainer.style.display = 'block';
                citySelectMenu.innerHTML = '';
                locationsData[currentRegion].forEach(city => {
                    const label = document.createElement('label');
                    label.className = 'multi-select-item';
                    const cb = document.createElement('input');
                    cb.type = 'checkbox';
                    cb.value = city;
                    cb.onchange = (ev) => {
                        if (ev.target.checked) selectedCities.push(city);
                        else selectedCities = selectedCities.filter(c => c !== city);
                        updateCityBtnText();
                        refreshData();
                    };
                    label.appendChild(cb);
                    label.appendChild(document.createTextNode(city));
                    citySelectMenu.appendChild(label);
                });
                updateCityBtnText();
            }
            refreshData();
        });

        ageSelect.addEventListener('change', (e) => {
            currentAge = e.target.value;
            refreshData();
        });

        priceSelect.addEventListener('change', (e) => {
            currentPrice = e.target.value;
            refreshData();
        });
    }

    // 2. 初始化視角切換 (List / Calendar)
    function initViewToggle() {
        btnListView.addEventListener('click', () => {
            currentViewMode = 'list';
            btnListView.classList.add('active');
            btnCalendarView.classList.remove('active');
            calendarView.style.display = 'none';
            selectedDateStr = null; 
            currentCategoryTitle.innerText = currentCategory === 'All' ? '為您推薦' : currentCategory;
            renderEvents();
        });

        btnCalendarView.addEventListener('click', () => {
            currentViewMode = 'calendar';
            btnCalendarView.classList.add('active');
            btnListView.classList.remove('active');
            calendarView.style.display = 'block';
            currentCategoryTitle.innerText = '月曆行程';
            renderCalendar();
            renderEvents(); 
        });

        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    // 3. 渲染分類橫幅
    function renderCategories() {
        categoryContainer.innerHTML = '';
        const allItem = document.createElement('div');
        allItem.className = `category-item ${currentCategory === 'All' ? 'active' : ''}`;
        allItem.innerHTML = `<div class="category-icon">✨</div><span class="category-name">為您推薦</span>`;
        allItem.onclick = () => {
            currentCategory = 'All';
            if (currentViewMode === 'list') {
                currentCategoryTitle.innerText = '為您推薦';
            }
            renderCategories();
            refreshData();
        };
        categoryContainer.appendChild(allItem);

        categories.forEach(cat => {
            const el = document.createElement('div');
            el.className = `category-item ${currentCategory === cat.name ? 'active' : ''}`;
            let shortName = cat.name.split('與')[0];
            if(cat.name === '節慶市集與綜合') shortName = '節慶市集';
            if(cat.name === '生態與大自然') shortName = '生態自然';

            el.innerHTML = `<div class="category-icon">${cat.icon}</div><span class="category-name">${shortName}</span>`;
            el.onclick = () => {
                currentCategory = cat.name;
                if (currentViewMode === 'list') {
                    currentCategoryTitle.innerText = cat.name;
                }
                renderCategories();
                refreshData();
            };
            categoryContainer.appendChild(el);
        });
    }

    // 4. 資料過濾與最新收錄邏輯
    const dataSource = (typeof dynamicEvents !== 'undefined' && dynamicEvents.length > 0) ? dynamicEvents : mockEvents;
    
    // 計算出最新的 crawl_time
    let latestCrawlTimeStr = null;
    if (dataSource && dataSource.length > 0) {
        const crawlTimes = dataSource.map(e => e.crawl_time).filter(t => t);
        if (crawlTimes.length > 0) {
            latestCrawlTimeStr = crawlTimes.sort().reverse()[0];
        }
    }

    function getFilteredEvents() {
        let filtered = dataSource.filter(e => {
            if (currentCategory !== 'All' && !e.category.includes(currentCategory.split('與')[0])) return false;
            if (currentRegion !== 'All' && e.region !== currentRegion) return false;
            if (selectedCities.length > 0 && !selectedCities.includes(e.city)) return false;
            
            // 年齡篩選 (AI 會回傳 age_groups 陣列)
            if (currentAge !== 'All') {
                if (!e.age_groups || (!e.age_groups.includes(currentAge) && !e.age_groups.includes('全齡'))) return false;
            }
            // 費用篩選
            if (currentPrice !== 'All') {
                if (e.price_type !== currentPrice) return false;
            }
            return true;
        });

        // 依據 crawl_time 排序，新抓到的在最前面
        filtered.sort((a, b) => {
            const timeA = a.crawl_time || "";
            const timeB = b.crawl_time || "";
            return timeB.localeCompare(timeA);
        });

        return filtered;
    }

    // 5. 月曆繪製邏輯
    function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        currentMonthYear.innerText = `${year}年 ${month + 1}月`;
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const filteredEventsForMarks = getFilteredEvents();
        const eventDates = new Set();
        
        filteredEventsForMarks.forEach(e => {
            let sDateStr = e.start_date || e.date;
            if (!sDateStr) return;
            sDateStr = sDateStr.replace(/\//g, '-').trim();
            let eDateStr = e.end_date ? e.end_date.replace(/\//g, '-').trim() : sDateStr;
            
            // 嘗試解析日期
            let startDate = new Date(sDateStr);
            let endDate = new Date(eDateStr);
            
            // 避免 Invalid Date
            if (isNaN(startDate.getTime())) return;
            if (isNaN(endDate.getTime())) endDate = startDate;
            
            // 計算天數差
            const daysDiff = (endDate - startDate) / (1000 * 60 * 60 * 24);
            const isRecurring = Array.isArray(e.recurring_days) && e.recurring_days.length > 0;
            const isLongTerm = daysDiff >= 7 && !isRecurring;
            
            // 將判斷結果存入物件中供後續 renderEvents 使用
            e.isLongTerm = isLongTerm;
            e.parsedStart = startDate;
            e.parsedEnd = endDate;

            if (isLongTerm) {
                // 長天數常態展覽：只在「首日」與「末日」標示紅點，防洗版
                const sy = startDate.getFullYear();
                const sm = String(startDate.getMonth() + 1).padStart(2, '0');
                const sd = String(startDate.getDate()).padStart(2, '0');
                eventDates.add(`${sy}-${sm}-${sd}`);
                
                const ey = endDate.getFullYear();
                const em = String(endDate.getMonth() + 1).padStart(2, '0');
                const ed = String(endDate.getDate()).padStart(2, '0');
                eventDates.add(`${ey}-${em}-${ed}`);
                return;
            }
            
            // 週期性或短期活動：標示區間內符合的每一天
            let current = new Date(startDate);
            let count = 0;
            while (current <= endDate && count < 60) { // 最多往後推 60 天防止無窮迴圈
                const dayOfWeek = current.getDay();
                if (!isRecurring || e.recurring_days.includes(dayOfWeek)) {
                    const y = current.getFullYear();
                    const m = String(current.getMonth() + 1).padStart(2, '0');
                    const d = String(current.getDate()).padStart(2, '0');
                    eventDates.add(`${y}-${m}-${d}`);
                }
                current.setDate(current.getDate() + 1);
                count++;
            }
        });

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cal-day empty';
            calendarGrid.appendChild(emptyCell);
        }

        const todayStr = new Date().toISOString().split('T')[0];
        
        for (let i = 1; i <= daysInMonth; i++) {
            const dayCell = document.createElement('div');
            const loopDateStr = `${year}-${String(month+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            
            dayCell.className = 'cal-day';
            dayCell.innerText = i;
            
            if (loopDateStr === todayStr) dayCell.classList.add('today');
            if (eventDates.has(loopDateStr)) dayCell.classList.add('has-event');
            if (loopDateStr === selectedDateStr) dayCell.classList.add('active');

            dayCell.onclick = () => {
                if(selectedDateStr === loopDateStr) {
                    selectedDateStr = null; 
                } else {
                    selectedDateStr = loopDateStr;
                }
                selectedDateTitle.innerText = selectedDateStr ? `🗓️ ${selectedDateStr} 的活動` : '請選擇日期';
                renderCalendar(); 
                renderEvents();
            };
            calendarGrid.appendChild(dayCell);
        }
        
        if (!selectedDateStr) {
            selectedDateTitle.innerText = '選擇日期查看活動，或滑動查看當月精選';
        }
    }

    // 6. 渲染活動卡片
    function renderEvents() {
        eventContainer.innerHTML = '';
        
        let filteredEvents = getFilteredEvents();
        
        if (currentViewMode === 'calendar' && selectedDateStr) {
            filteredEvents = filteredEvents.filter(e => {
                if (!e.parsedStart) {
                    // 若沒有 parsedStart (可能格式不符)，退回檢查 date
                    return e.date === selectedDateStr;
                }
                
                let selected = new Date(selectedDateStr);
                if (selected < e.parsedStart || selected > e.parsedEnd) return false;
                
                const isRecurring = Array.isArray(e.recurring_days) && e.recurring_days.length > 0;
                if (isRecurring && !e.recurring_days.includes(selected.getDay())) {
                    return false;
                }
                
                return true;
            });
        }

        if (filteredEvents.length === 0) {
            eventContainer.innerHTML = `
                <div style="text-align:center; padding: 60px 20px; color: #8A8A9E;">
                    <div style="font-size:48px; margin-bottom:16px;">🔍</div>
                    <p style="font-weight: 500;">找不到符合條件的活動！</p>
                    <p style="font-size: 13px; margin-top: 8px;">試著調整年齡、地點或費用篩選看看</p>
                </div>
            `;
            return;
        }

        const createCard = (event) => {
            const card = document.createElement('div');
            card.className = 'event-card';
            
            // 判斷是否為最新收錄
            const isNew = event.crawl_time && event.crawl_time === latestCrawlTimeStr;
            const newBadgeHtml = isNew ? `<span class="new-badge">🆕 最新收錄</span>` : '';
            
            const priceTagClass = event.price_type === '免費' ? 'price-free' : 'price-paid';
            const priceText = event.price_type || '費用未知';
            const linkUrl = event.source_url || '#';

            card.innerHTML = `
                <div class="event-img-container">
                    <img src="${event.image || 'https://images.unsplash.com/photo-1542840410-3092f99611a3?w=800&q=80'}" alt="${event.title}" class="event-img">
                    ${newBadgeHtml}
                    <span class="event-tag-floating">${event.category.split('與')[0]}</span>
                    <span class="event-tag-price ${priceTagClass}">${priceText}</span>
                </div>
                <div class="event-content">
                    <div class="event-meta">
                        <span class="event-age">👶 建議年齡: ${event.target_age || '不限'}</span>
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-info">
                        <div class="info-row">
                            <span>📍</span> <span>${event.location || event.city}</span>
                        </div>
                        <div class="info-row">
                            <span>⏰</span> <span>${event.activity_date || event.date || '詳見官網'}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <span class="reg-status">${(event.registration_date && event.registration_date.length < 20) ? event.registration_date : ''}</span>
                        <div style="display:flex; gap:12px; align-items:center;">
                            <button class="fav-btn" aria-label="Save">♡</button>
                            <a href="${linkUrl}" target="_blank" class="apply-link-btn" onclick="event.stopPropagation()">報名/詳情 🔗</a>
                        </div>
                    </div>
                </div>
            `;
            
            const favBtn = card.querySelector('.fav-btn');
            favBtn.onclick = (e) => {
                e.stopPropagation();
                if(favBtn.innerText === '♡') {
                    favBtn.innerText = '♥';
                    favBtn.style.color = '#FF4D4F';
                    favBtn.style.backgroundColor = '#FFF0F0';
                } else {
                    favBtn.innerText = '♡';
                    favBtn.style.color = '#8A8A9E';
                    favBtn.style.backgroundColor = '#F8F9FB';
                }
            };
            return card;
        };

        // 在月曆模式下且有選中日期時，將常態展覽分流顯示
        if (currentViewMode === 'calendar' && selectedDateStr) {
            const dailyEvents = filteredEvents.filter(e => !e.isLongTerm);
            const ongoingEvents = filteredEvents.filter(e => e.isLongTerm);
            
            if (dailyEvents.length > 0) {
                dailyEvents.forEach(e => eventContainer.appendChild(createCard(e)));
            } else if (ongoingEvents.length > 0) {
                // 如果今天沒有單日活動，但有常態展覽
                const noDailyMsg = document.createElement('div');
                noDailyMsg.style.textAlign = 'center';
                noDailyMsg.style.padding = '30px 20px';
                noDailyMsg.style.color = '#8A8A9E';
                noDailyMsg.innerHTML = `<p style="font-weight: 500;">今日無特定活動</p>`;
                eventContainer.appendChild(noDailyMsg);
            }
            
            if (ongoingEvents.length > 0) {
                const ongoingHeader = document.createElement('div');
                ongoingHeader.className = 'ongoing-header';
                ongoingHeader.innerHTML = '🌟 本月常態展覽/活動';
                eventContainer.appendChild(ongoingHeader);
                ongoingEvents.forEach(e => eventContainer.appendChild(createCard(e)));
            }
        } else {
            // 一般模式直接全部渲染
            filteredEvents.forEach(e => eventContainer.appendChild(createCard(e)));
        }
    }

    function refreshData() {
        if (currentViewMode === 'calendar') {
            renderCalendar();
        }
        renderEvents();
    }

    // 啟動初始化
    initFilters();
    initViewToggle();
    renderCategories();
    refreshData();
});
