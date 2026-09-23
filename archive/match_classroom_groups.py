import csv
import re

domain = "schoolgus.ukr.education"

letter_map = {
    'а': 'a', 'a': 'a',
    'б': 'b', 'b': 'b',
    'в': 'v', 'v': 'v',
    'г': 'g', 'g': 'g',
    'д': 'd', 'd': 'd'
}

matches = []
unmatched = []

with open("classroom_courses.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        course_id = row.get("id", "").strip()
        course_name = row.get("name", "").strip()
        
        if not course_id or not course_name:
            continue

        # Пошук формату класу (наприклад, "1-В клас", "5-Г клас", "11-Б клас")
        match = re.search(r'(\d+)-([а-яa-z])\s*клас', course_name, re.IGNORECASE)
        if match:
            grade = int(match.group(1))
            letter_char = match.group(2).lower()
            letter_code = letter_map.get(letter_char, letter_char)
            
            group_email = f"class-{grade}-{letter_code}@{domain}"
            matches.append({
                "course_id": course_id,
                "course_name": course_name,
                "group_email": group_email
            })
        else:
            unmatched.append({
                "course_id": course_id,
                "course_name": course_name
            })

print(f"\n--- Результати співставлення курсів ---")
print(f" Успішно розпізнано та прив'язано курсів: {len(matches)}")
print(f" Не розпізнано курсів (потребують перевірки): {len(unmatched)}")

# Збереження результатів у CSV
with open("classroom_mapping.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=["course_id", "course_name", "group_email"])
    writer.writeheader()
    writer.writerows(matches)

print("\n Зразок перших 5 співставлень:")
for m in matches[:5]:
    print(f"  • Course [{m['course_id']}] '{m['course_name']}'  -->  Group: {m['group_email']}")

if unmatched:
    print("\n Зразок нерозпізнаних курсів (якщо є):")
    for u in unmatched[:5]:
        print(f"  • Course [{u['course_id']}] '{u['course_name']}'")
