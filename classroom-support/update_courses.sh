#!/bin/bash

OUTPUT_FILE="data.js"
TEMP_CSV="raw_courses.csv"

# Автоматичний пошук GAM на macOS
GAM_CMD=""
if command -v gam &> /dev/null; then
    GAM_CMD="gam"
elif [ -f "$HOME/bin/gam/gam" ]; then
    GAM_CMD="$HOME/bin/gam/gam"
elif [ -f "$HOME/bin/gamadv-xtd3/gam" ]; then
    GAM_CMD="$HOME/bin/gamadv-xtd3/gam"
fi

if [ -z "$GAM_CMD" ]; then
    echo "❌ Помилка: GAM не знайдено."
    exit 1
fi

echo "🚀 Отримання курсів з Google Workspace через GAM..."
"$GAM_CMD" print courses state ACTIVE fields id,name,section,enrollmentCode > "$TEMP_CSV"

if [ ! -s "$TEMP_CSV" ]; then
    echo "❌ Помилка: Не вдалося отримати дані з Google Workspace!"
    rm -f "$TEMP_CSV"
    exit 1
fi

echo "⚙️ Стандартизація відповідно до підрозділів Google Admin Console..."

python3 - << 'PYEOF'
import csv
import json
import re

output_file = "data.js"
courses = []
item_id = 1

def parse_and_standardize(name, section):
    full_text = f"{name} {section}"
    is_eksternat = 'екстернат' in full_text.lower()
    
    if is_eksternat:
        # Шукаємо номер класу для Екстернату (01 клас ... 11 клас)
        match_ext = re.search(r'\b0?(\d{1,2})\s*клас', full_text, re.IGNORECASE)
        if match_ext:
            g = int(match_ext.group(1))
            cls_tag = f"{g} Екстернат"
        else:
            cls_tag = "Екстернат"
    else:
        # Шукаємо очний клас з буквою паралелі (наприклад, 10-А, 4-Г, 11-Б)
        match_class = re.search(r'\b(\d{1,2})\s*[-–—]?\s*([А-ЯІЇЄҐA-Zа-яіїєґa-z])\b', full_text)
        if match_class:
            grade_num = int(match_class.group(1))
            letter = match_class.group(2).upper()
            cls_tag = f"{grade_num}-{letter}"
        else:
            match_num = re.search(r'\b0?(\d{1,2})\s*клас\b', full_text, re.IGNORECASE)
            if match_num:
                g = int(match_num.group(1))
                cls_tag = f"{g} клас"
            else:
                cls_tag = "Загальний"

    # Очищення назви предмета від префіксів підрозділів (наприклад, "04. 01 клас. Екстернат. ")
    clean = name
    clean = re.sub(r'^\d{2}\.\s*', '', clean) # видаляємо "04. ", "11. "
    clean = re.sub(r'^(?:\d{1,2}-[А-ЯІЇЄҐA-Za-z]\s*(?:клас)?|0?\d{1,2}\s*клас)\.?\s*', '', clean, flags=re.IGNORECASE) # видаляємо "11-Б клас. " чи "01 клас. "
    clean = re.sub(r'^Екстернат\.?\s*', '', clean, flags=re.IGNORECASE) # видаляємо "Екстернат. "
    clean = re.sub(r'\s*\(\d{4}-\d{4}\)\s*$', '', clean) # видаляємо року "(2026-2027)"
    clean = clean.strip(' .-')
    
    if not clean or clean.lower() == 'екстернат':
        clean = "Навчальний курс"

    return cls_tag, clean

try:
    with open('raw_courses.csv', mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            raw_name = row.get('name', '').strip()
            raw_section = row.get('section', '').strip()
            code = row.get('enrollmentCode', '').strip()
            
            if code:
                cls_tag, clean_subject = parse_and_standardize(raw_name, raw_section)
                courses.append({
                    "id": item_id,
                    "class": cls_tag,
                    "subject": clean_subject,
                    "code": code
                })
                item_id += 1

    if len(courses) > 0:
        js_content = f"const coursesData = {json.dumps(courses, ensure_ascii=False, indent=2)};\n"
        with open(output_file, 'w', encoding='utf-8') as f_out:
            f_out.write(js_content)
        print(f"✅ Успішно оновлено та стандартизовано {len(courses)} курсів у {output_file}")
    else:
        print("⚠️ Курсів з кодами не знайдено.")

except Exception as e:
    print(f"❌ Помилка обробки: {e}")
PYEOF

rm -f "$TEMP_CSV"
