#!/bin/bash

echo "🔄 Запуск синхронізації курсів з Google Classroom..."

python3 -c "
import csv, json, re, subprocess, shutil, os

gam_cmd = shutil.which('gam')

if not gam_cmd:
    possible_paths = [
        os.path.expanduser('~/bin/gam/gam'),
        os.path.expanduser('~/bin/gamadv-xtd3/gam'),
        os.path.expanduser('~/bin/gamadv-xt3/gam'),
        '/opt/homebrew/bin/gam',
        '/usr/local/bin/gam'
    ]
    for p in possible_paths:
        if os.path.exists(p):
            gam_cmd = p
            break

print(f'📦 Використовуємо GAM за шляхом: {gam_cmd}')
print('📦 Зчитування даних з Google Classroom via GAM...')

try:
    if gam_cmd:
        # Викликаємо gam print courses (за замовчуванням повертає CSV)
        result = subprocess.check_output([gam_cmd, 'print', 'courses'], text=True)
    else:
        result = subprocess.check_output(
            ['/bin/zsh', '-i', '-c', 'gam print courses'],
            text=True,
            stderr=subprocess.DEVNULL
        )

    # Парсимо CSV-відповідь від GAM
    reader = csv.DictReader(result.strip().splitlines())
    
    formatted_data = []
    
    for c in reader:
        if c.get('courseState') != 'ACTIVE':
            continue
            
        name = c.get('name', '')
        match = re.search(r'^\d+\.\s*(\d+-[А-Яа-яA-Za-z]+|\d+\s+Екстернат)\s*(?:клас)?\.\s*(.+)', name)
        
        if match:
            cls = match.group(1).strip()
            subject = match.group(2).strip()
        else:
            cls = c.get('section', 'Загальні')
            if not cls:
                cls = 'Загальні'
            subject = name
            
        code = c.get('enrollmentCode', '').strip()
        if not code:
            code = '—'
            
        formatted_data.append({
            'class': cls,
            'subject': subject,
            'code': code,
            'id': c.get('id', '')
        })

    formatted_data.sort(key=lambda x: x['class'])

    with open('data.js', 'w', encoding='utf-8') as f:
        f.write('const coursesData = ' + json.dumps(formatted_data, ensure_ascii=False, indent=2) + ';')

    print(f'✅ Успішно оновлено data.js! Оброблено курсів: {len(formatted_data)}')

except Exception as e:
    print(f'❌ Помилка під час оновлення: {e}')
"

