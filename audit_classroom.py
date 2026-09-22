import subprocess

print("\n--- Сканування активних курсів Google Classroom ---")
res = subprocess.run(["gam", "print", "courses", "status", "ACTIVE"], capture_output=True, text=True)

lines = [l for l in res.stdout.splitlines() if l.strip()]
header = lines[0] if lines else ""
data_rows = lines[1:] if len(lines) > 1 else []

print(f" Знайдено активних курсів у домені: {len(data_rows)}")

with open("classroom_courses.csv", "w", encoding="utf-8") as f:
    f.write(res.stdout)

print("Звіт збережено у 'classroom_courses.csv'")
