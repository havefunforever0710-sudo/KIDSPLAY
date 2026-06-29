document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const categoryContainer = document.getElementById('categoryContainer');
    const eventContainer = document.getElementById('eventContainer');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');
    const regionSelect = document.getElementById('regionSelect');
    const citySelect = document.getElementById('citySelect');
    
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
    let currentCity = 'All';
    let currentViewMode = 'list'; // 'list' or 'calendar'
    
    // Calendar State (Default to April 2026 for mock data)
    let currentDate = new Date(2026, 3, 1); 
    let selectedDateStr = null;

    // 1. 初始化地點下拉選單
    function initLocationFilters() {
        regionSelect.addEventListener('change', (e) => {
            currentRegion = e.target.value;
            currentCity = 'All'; // Reset city when region changes
            
            // Update City Dropdown
            citySelect.innerHTML = '<option value="All">全縣市</option>';
            if (currentRegion === 'All') {
                citySelect.disabled = true;
            } else {
                citySelect.disabled = false;
                locationsData[currentRegion].forEach(city => {
                    const opt = document.createElement('option');
                    opt.value = city;
                    opt.textContent = city;
                    citySelect.appendChild(opt);
                });
            }
            refreshData();
        });

        citySelect.addEventListener('change', (e) => {
            currentCity = e.target.value;
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
            selectedDateStr = null; // Clear date selection when returning to list
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
            renderEvents(); // Shows filtered events (or none if date not selected)
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

    // 4. 月曆繪製邏輯
    function renderCalendar() {
        calendarGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        currentMonthYear.innerText = `${year}年 ${month + 1}月`;
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Find which days have events based on current Category & Location filters
        const filteredEventsForMarks = dataSource.filter(e => {
            if (currentCategory !== 'All' && !e.category.includes(currentCategory.split('與')[0])) return false;
            if (currentRegion !== 'All' && e.region !== currentRegion) return false;
            if (currentCity !== 'All' && e.city !== currentCity) return false;
            return true;
        });
        
        const eventDates = new Set(filteredEventsForMarks.map(e => e.date));

        // Empty cells for alignment
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'cal-day empty';
            calendarGrid.appendChild(emptyCell);
        }

        // Days
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
                    selectedDateStr = null; // deselect
                } else {
                    selectedDateStr = loopDateStr;
                }
                selectedDateTitle.innerText = selectedDateStr ? `🗓️ ${selectedDateStr} 的活動` : '請選擇日期';
                renderCalendar(); // re-render to update active state
                renderEvents();
            };
            calendarGrid.appendChild(dayCell);
        }
        
        if (!selectedDateStr) {
            selectedDateTitle.innerText = '選擇日期查看活動，或滑動查看當月精選';
        }
    }

    // 選擇資料來源 (如果有真實資料就用真實的，否則用預設展示資料)
    const dataSource = (typeof dynamicEvents !== 'undefined' && dynamicEvents.length > 0) ? dynamicEvents : mockEvents;

    // 5. 渲染活動卡片邏輯
    function renderEvents(categoryToFilter) {
        eventContainer.innerHTML = '';
        
        let filteredEvents = dataSource;
        
        // Filter by Category
        if (currentCategory !== 'All') {
            filteredEvents = filteredEvents.filter(e => e.category.includes(currentCategory.split('與')[0]));
        }
        // Filter by Location
        if (currentRegion !== 'All') {
            filteredEvents = filteredEvents.filter(e => e.region === currentRegion);
        }
        if (currentCity !== 'All') {
            filteredEvents = filteredEvents.filter(e => e.city === currentCity);
        }
        // Filter by Date (only in Calendar mode if a date is selected)
        if (currentViewMode === 'calendar' && selectedDateStr) {
            filteredEvents = filteredEvents.filter(e => e.date === selectedDateStr);
        }

        if (filteredEvents.length === 0) {
            eventContainer.innerHTML = `
                <div style="text-align:center; padding: 60px 20px; color: #8A8A9E;">
                    <div style="font-size:48px; margin-bottom:16px;">🔍</div>
                    <p style="font-weight: 500;">找不到符合條件的活動！</p>
                    <p style="font-size: 13px; margin-top: 8px;">試著切換其他日期或地點看看</p>
                </div>
            `;
            return;
        }

        filteredEvents.forEach(event => {
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="event-img-container">
                    <img src="${event.image}" alt="${event.title}" class="event-img">
                    <span class="event-tag-floating">${event.category.split('與')[0]}</span>
                </div>
                <div class="event-content">
                    <div class="event-meta">
                        <span class="event-age">👶 建議年齡: ${event.target_age}</span>
                    </div>
                    <h3 class="event-title">${event.title}</h3>
                    <div class="event-info">
                        <div class="info-row">
                            <span>📍</span> <span>${event.location}</span>
                        </div>
                        <div class="info-row">
                            <span>⏰</span> <span>${event.activity_date}</span>
                        </div>
                    </div>
                    <div class="event-actions">
                        <span class="reg-status">${event.registration_date}</span>
                        <button class="fav-btn" aria-label="Save">♡</button>
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
            eventContainer.appendChild(card);
        });
    }

    function refreshData() {
        if (currentViewMode === 'calendar') {
            renderCalendar();
        }
        renderEvents();
    }

    // 啟動初始化
    initLocationFilters();
    initViewToggle();
    renderCategories();
    refreshData();
});
