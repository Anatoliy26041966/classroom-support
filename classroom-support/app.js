const courseGrid = document.getElementById('courseGrid');
const searchInput = document.getElementById('searchInput');
const classFilters = document.getElementById('classFilters');

let activeFilter = 'all';

// Сортування назв класів для кнопок (1-А..11-Г, потім 1 Екстернат..11 Екстернат)
function sortClassNames(classes) {
  return classes.sort((a, b) => {
    const isExtA = a.includes('Екстернат');
    const isExtB = b.includes('Екстернат');

    if (isExtA !== isExtB) {
      return isExtA ? 1 : -1;
    }

    const numA = parseInt(a) || 99;
    const numB = parseInt(b) || 99;

    if (numA !== numB) {
      return numA - numB;
    }
    return a.localeCompare(b, 'uk');
  });
}

// Генерація кнопок фільтрів
function renderFilterButtons() {
  if (!classFilters || typeof coursesData === 'undefined') return;

  const rawClasses = Array.from(new Set(coursesData.map(c => c.class)));
  const classes = sortClassNames(rawClasses);

  let buttonsHTML = `
    <button onclick="setFilter('all')" class="filter-btn ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'} px-3.5 py-1.5 rounded-lg text-xs font-bold transition">
      Усі предмети
    </button>
    <button onclick="setFilter('ALL_EKSTERNAT')" class="filter-btn ${activeFilter === 'ALL_EKSTERNAT' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'} px-3.5 py-1.5 rounded-lg text-xs font-bold transition">
      🎓 Усі Екстернати
    </button>
  `;

  classes.forEach(cls => {
    const isActive = activeFilter === cls;
    const isEkst = cls.includes('Екстернат');
    
    let btnStyle = isActive ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200';
    if (isEkst && !isActive) {
      btnStyle = 'bg-amber-50/60 text-amber-900 border border-amber-200/80 hover:bg-amber-100';
    }

    buttonsHTML += `
      <button onclick="setFilter('${cls}')" class="filter-btn ${btnStyle} px-3.5 py-1.5 rounded-lg text-xs font-bold transition">
        ${cls}
      </button>
    `;
  });

  classFilters.innerHTML = buttonsHTML;
}

function setFilter(cls) {
  activeFilter = cls;
  renderFilterButtons();
  filterAndRender();
}

function filterAndRender() {
  if (typeof coursesData === 'undefined') return;

  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let filtered = coursesData.filter(c => {
    const matchesSearch = c.subject.toLowerCase().includes(query) || 
                          c.class.toLowerCase().includes(query) ||
                          c.code.toLowerCase().includes(query);
                          
    let matchesClass = false;
    if (activeFilter === 'all') {
      matchesClass = true;
    } else if (activeFilter === 'ALL_EKSTERNAT') {
      matchesClass = c.class.includes('Екстернат');
    } else {
      matchesClass = c.class === activeFilter;
    }
    
    return matchesSearch && matchesClass;
  });

  // Строге сортування карток за зростанням номеру класу (1 -> 11)
  filtered.sort((a, b) => {
    const numA = parseInt(a.class) || 0;
    const numB = parseInt(b.class) || 0;
    
    if (numA !== numB) {
      return numA - numB;
    }
    return a.subject.localeCompare(b.subject, 'uk');
  });

  renderCourses(filtered);
}

function renderCourses(courses) {
  if (!courseGrid) return;
  courseGrid.innerHTML = '';
  
  if (courses.length === 0) {
    courseGrid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-slate-400 text-lg">Нічого не знайдено 🔍</p>
        <p class="text-slate-500 text-sm mt-1">Спробуйте змінити пошуковий запит або обрати інший клас</p>
      </div>`;
    return;
  }

  courses.forEach(c => {
    const isEkst = c.class.includes('Екстернат');
    const badgeColor = isEkst ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-indigo-100 text-indigo-800';

    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-2">
          <span class="inline-block ${badgeColor} text-xs font-bold px-2.5 py-1 rounded-md">${c.class}</span>
        </div>
        <h4 class="font-bold text-slate-800 text-lg mb-3 leading-snug">${c.subject}</h4>
      </div>
      <div>
        <p class="text-xs text-slate-500 mb-1 font-medium">Код приєднання:</p>
        <div class="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200">
          <code class="font-mono text-indigo-600 font-bold text-base px-1">${c.code}</code>
          <button onclick="copyCode('${c.code}')" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-1.5 rounded-md transition active:scale-95">
            Скопіювати
          </button>
        </div>
      </div>
    `;
    courseGrid.appendChild(card);
  });
}

function copyCode(code) {
  navigator.clipboard.writeText(code);
  showToast(`Код ${code} скопійовано!`);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = "fixed bottom-5 right-5 bg-slate-900 text-white text-sm px-4 py-3 rounded-xl shadow-xl z-50 transition-opacity";
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    filterAndRender();
  });
}

if (typeof coursesData !== 'undefined') {
  renderFilterButtons();
  filterAndRender();
}
