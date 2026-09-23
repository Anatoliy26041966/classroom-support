import json
import os
from datetime import datetime

# Назва вихідного файлу
OUTPUT_FILE = "courses.json"

def main():
    # Поточна дата та час у форматі ISO 8601
    now_iso = datetime.now().isoformat()
    
    existing_courses = []
    domain_name = "schoolgus.ukr.education"

    # Зчитуємо існуючий файл courses.json або classroom_portal_data.json (якщо є)
    target_file = OUTPUT_FILE if os.path.exists(OUTPUT_FILE) else "classroom_portal_data.json"
    
    if os.path.exists(target_file):
        try:
            with open(target_file, "r", encoding="utf-8") as f:
                old_data = json.load(f)
                if isinstance(old_data, dict):
                    existing_courses = old_data.get("courses", old_data.get("items", []))
                    domain_name = old_data.get("domain", domain_name)
                elif isinstance(old_data, list):
                    existing_courses = old_data
            print(f"📖 Зчитано {len(existing_courses)} курсів з '{target_file}'")
        except Exception as e:
            print(f"⚠️ Помилка зчитування файлу {target_file}: {e}")
    else:
        print(f"📄 Файл {OUTPUT_FILE} не знайдено, створюється новий з порожнім списком...")

    # Формуємо підсумкову структуру
    portal_data = {
        "last_updated": now_iso,
        "domain": domain_name,
        "courses": existing_courses
    }

    # Записуємо оновлені дані у courses.json
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(portal_data, f, ensure_ascii=False, indent=2)

    print(f"✅ Файл '{OUTPUT_FILE}' успішно оновлено!")
    print(f"🕒 Актуальна мітка часу: {now_iso}")

if __name__ == "__main__":
    main()