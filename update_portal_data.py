# -*- coding: utf-8 -*-
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

    # Зчитуємо існуючий файл courses.json або classroom_portal_data.json
    target_file = OUTPUT_FILE if os.path.exists(OUTPUT_FILE) else "classroom_portal_data.json"
    
    if os.path.exists(target_file):
        try:
            with open(target_file, "r") as f:
                old_data = json.load(f)
                if isinstance(old_data, dict):
                    existing_courses = old_data.get("courses", old_data.get("items", []))
                    domain_name = old_data.get("domain", domain_name)
                elif isinstance(old_data, list):
                    existing_courses = old_data
            print("Zchytano " + str(len(existing_courses)) + " kursiv z '" + target_file + "'")
        except Exception as e:
            print("Pomylka zchytannya: " + str(e))
    else:
        print("Stvoryuyetsya novyy fayl...")

    # Формуємо підсумкову структуру
    portal_data = {
        "last_updated": now_iso,
        "domain": domain_name,
        "courses": existing_courses
    }

    # Записуємо оновлені дані у courses.json
    with open(OUTPUT_FILE, "w") as f:
        json.dump(portal_data, f, ensure_ascii=False, indent=2)

    print("OK: Fayl '" + OUTPUT_FILE + "' uspeshno onovleno!")
    print("Mitka chasu: " + now_iso)

if __name__ == "__main__":
    main()