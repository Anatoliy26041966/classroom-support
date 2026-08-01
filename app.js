const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyKNdmTtKuk0gkMuwiKDzUByPVS6qfmndE90-Uut2Fd-9vXdWVFx80uXxbXmuzx2uDH/exec';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const classFilters = document.getElementById('classFilters');
  const courseGrid = document.getElementById('courseGrid');

  if (typeof coursesData === 'undefined' || !Array.isArray(coursesData)) {
    if (courseGrid) {
      courseGrid.innerHTML = '<p class="text-red-500 text-center col-span-full py-8">Помилка: data.js не завантажено або дані пошкоджені.</p>';
    }
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

  if (searchInput) {
    searchInput.addEventListener('input', window.renderCourses);
  }

  renderFilterButtons();
  window.renderCourses();
});

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
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.innerText : 'Оформити звернення';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Надсилання...';
  }

  const formData = {
    studentName: document.getElementById('studentName')?.value || '',
    className: document.getElementById('studentClass')?.value || '',
    parentContact: document.getElementById('contactInfo')?.value || '',
    schoolEmail: document.getElementById('schoolEmail')?.value || '',
    topic: document.getElementById('ticketTopic')?.value || '',
    description: document.getElementById('issueDescription')?.value || ''
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert('Дякуємо! Ваше звернення успішно прийнято в обробку.');
    window.closeSupportForm();
    form.reset();
  })
  .catch(error => {
    console.error('Помилка надсилання:', error);
    alert('Сталася помилка під час надсилання. Спробуйте ще раз.');
  })
  .finally(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = originalBtnText;
    }
  });
};
