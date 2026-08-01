document.addEventListener('DOMContentLoaded', () => {
  // 1. Автоматична генерація уніфікованої шапки для всіх сторінок
  initHeader();

  // 2. Ініціалізація системи пошуку та фільтрації курсів
  initCourseSystem();
});

// --- АВТОМАТИЧНА ШАПКА ТА НАВІГАЦІЯ ---
function initHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  // Визначаємо поточний файл
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') currentPath = 'index.html';

  // Бейджі для вторинних сторінок
  const pageBadges = {
    'parents.html': 'Для батьків',
    'teachers.html': 'Вчителям',
    'meet.html': 'Google Meet',
    'tools.html': 'Інструменти',
    'status.html': 'Моніторинг'
  };

  // Пункти головного меню
  const menuItems = [
    { name: 'Головна', url: 'index.html' },
    { name: 'Батькам', url: 'parents.html' },
    { name: 'Вчителям', url: 'teachers.html' },
    { name: 'Meet', url: 'meet.html' },
    { name: 'Інструменти', url: 'tools.html' },
    { name: 'Статус', url: 'status.html' }
  ];

  const navLinksHTML = menuItems.map(item => {
    const isActive = currentPath === item.url;
    const activeClass = isActive 
      ? 'bg-indigo-700 text-white shadow-sm' 
      : 'hover:bg-indigo-700 text-white transition';
    return `<a href="${item.url}" class="${activeClass} px-3 py-2 rounded-lg transition">${item.name}</a>`;
  }).join('');

  const badgeHTML = pageBadges[currentPath] 
    ? `<span class="bg-indigo-700 text-indigo-100 text-xs font-normal px-2.5 py-1 rounded-full">${pageBadges[currentPath]}</span>`
    : '';

  const supportLink = currentPath === 'index.html' ? '#support' : 'index.html#support';

  header.className = "bg-indigo-600 text-white shadow-md sticky top-0 z-40";
  header.innerHTML = `
    <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <h1 class="text-xl font-bold flex items-center gap-2">
        <a href="index.html" class="hover:opacity-90 transition">📚 Портал підтримки</a>
        ${badgeHTML}
      </h1>
      <nav class="flex flex-wrap items-center gap-2 text-xs font-semibold">
        ${navLinksHTML}
        <a href="${supportLink}" class="bg-amber-500 hover:bg-amber-400 text-slate-900 px-3 py-2 rounded-lg transition">Техпідтримка</a>
      </nav>
    </div>
  `;
}

// --- СИСТЕМА ФІЛЬТРАЦІЇ ТА ПОШУКУ КУРСІВ (ГОЛОВНА СТОРІНКА) ---
function initCourseSystem() {
  const searchInput = document.getElementById('searchInput');
  const classFilters = document.getElementById('classFilters');
  const courseGrid = document.getElementById('courseGrid');

  // Якщо на сторінці немає сітки курсів (наприклад, це parents.html) — тихо виходимо
  if (!courseGrid) return;

  if (typeof coursesData === 'undefined' || !Array.isArray(coursesData)) {
    courseGrid.innerHTML = '<p class="text-red-500 text-center col-span-full py-8">Помилка: data.js не завантажено або дані пошкоджені.</p>';
    return;
  }

  let activeFilter = 'all';

  function renderFilterButtons() {
    if (!classFilters) return;

    const rawGrades = coursesData
      .map(c => c.grade || c.class)
      .filter(grade => typeof grade === 'string' && grade.trim() !== '');

    const uniqueGrades = [...new Set(rawGrades)];

    uniqueGrades.sort((a, b) => {
      const numA = parseInt(a) || 999;
      const numB = parseInt(b) || 999;
      if (numA !== numB) return numA - numB;

      const isExtA = a.toLowerCase().includes('екстернат');
      const isExtB = b.toLowerCase().includes('екстернат');
      if (isExtA !== isExtB) return isExtA ? 1 : -1;

      return a.localeCompare(b, 'uk');
    });

    const allFilters = ['Усі предмети', ...uniqueGrades];

    classFilters.innerHTML = allFilters.map(grade => {
      const isActive = (grade === 'Усі предмети' && activeFilter === 'all') || activeFilter === grade;
      const btnStyles = isActive 
        ? 'bg-indigo-600 text-white font-bold shadow-sm' 
        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200';

      return `<button onclick="setFilter('${grade}')" class="px-3 py-1.5 rounded-lg text-xs transition ${btnStyles}">${grade}</button>`;
    }).join('');
  }

  window.renderCourses = function() {
    if (!courseGrid) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = coursesData.filter(course => {
      const grade = String(course.grade || course.class || '');
      const title = String(course.title || course.subject || '');
      const code = String(course.code || '');

      const matchesFilter = activeFilter === 'all' || activeFilter === 'Усі предмети' || grade === activeFilter;
      const matchesQuery = !query || 
        title.toLowerCase().includes(query) || 
        grade.toLowerCase().includes(query) || 
        code.toLowerCase().includes(query);

      return matchesFilter && matchesQuery;
    });

    if (filtered.length === 0) {
      courseGrid.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
          Нічого не знайдено ${query ? `за запитом "<b>${query}</b>"` : ''}
        </div>`;
      return;
    }

    courseGrid.innerHTML = filtered.map(course => {
      const grade = course.grade || course.class || 'Курс';
      const title = course.title || course.subject || 'Без назви';
      const code = course.code || 'Не вказано';

      return `
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <span class="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
              ${grade}
            </span>
            <h4 class="font-bold text-slate-900 text-base mb-2 leading-snug">
              ${title}
            </h4>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Код приєднання:</span>
              <span class="font-mono font-bold text-slate-800 text-sm">${code}</span>
            </div>
            <button onclick="copyCode('${code}', this)" class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition active:scale-95 shrink-0">
              Скопіювати
            </button>
          </div>
        </div>
      `;
    }).join('');
  };

  window.setFilter = function(grade) {
    activeFilter = (grade === 'Усі предмети') ? 'all' : grade;
    renderFilterButtons();
    window.renderCourses();
  };

  if (searchInput) {
    searchInput.addEventListener('input', window.renderCourses);
  }

  renderFilterButtons();
  window.renderCourses();
}

// --- ГЛОБАЛЬНІ ФУНКЦІЇ ДЛЯ КОПІЮВАННЯ ТА ФОРМИ ПІДТРИМКИ ---
window.copyCode = function(code, btn) {
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerText;
    btn.innerText = 'Скопійовано!';
    btn.classList.replace('bg-indigo-600', 'bg-emerald-600');
    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.replace('bg-emerald-600', 'bg-indigo-600');
    }, 2000);
  });
};

window.openSupportForm = function(topic) {
  const container = document.getElementById('supportFormContainer');
  const topicInput = document.getElementById('ticketTopic');
  const title = document.getElementById('supportFormTitle');

  if (container) {
    container.classList.remove('hidden');
    if (topicInput) topicInput.value = topic;
    if (title) title.innerText = `Запит: ${topic}`;
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

window.closeSupportForm = function() {
  const container = document.getElementById('supportFormContainer');
  if (container) container.classList.add('hidden');
};

window.handleSupportSubmit = function(e) {
  e.preventDefault();
  alert('Дякуємо! Ваше звернення успішно прийнято в обробку.');
  window.closeSupportForm();
  e.target.reset();
};