import csv
import json
import re
import subprocess


def get_course_sort_key(course):
  name = course.get("name", "")

  # 1. Пошук номера класу перед словом "клас"
  match = re.search(
      r"(?:^|\s|\b)(\d{1,2})\s*[-–]?\s*[А-Яа-яA-Za-z]?\s*клас",
      name,
      re.IGNORECASE,
  )

  # 2. Пошук за системним префіксом (наприклад "01. 1-В", "05. 5-А")
  if not match:
    match = re.search(r"^\d{2}\.\s*(\d{1,2})", name)

  # 3. Резервний пошук числа
  if not match:
    match = re.search(r"\b(\d{1,2})\b", name)

  grade = int(match.group(1)) if match else 999
  return (grade, name)


def fetch_classroom_courses():
  print("Отримання активних курсів з Google Classroom...")
  cmd = "gam print courses states ACTIVE fields id,name,section,alternateLink"
  result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

  courses = []
  lines = result.stdout.strip().split("\n")
  if len(lines) > 1:
    reader = csv.DictReader(lines)
    for row in reader:
      courses.append({
          "id": row.get("id", ""),
          "name": row.get("name", ""),
          "section": row.get("section", ""),
          "link": row.get("alternateLink", ""),
      })

  # Сортування курсів від 1 до 11 класу
  courses.sort(key=get_course_sort_key)

  with open("courses.json", "w", encoding="utf-8") as f:
    json.dump(courses, f, ensure_ascii=False, indent=2)

  print(
      f"Успішно збережено {len(courses)} курсів у courses.json (чисті"
      " посилання)."
  )


if __name__ == "__main__":
  fetch_classroom_courses()