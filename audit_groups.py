import subprocess
import csv

domain = "schoolgus.ukr.education"
main_groups = [
    f"all-teachers@{domain}",
    f"all-students@{domain}",
    f"students-1-4@{domain}",
    f"students-5-9@{domain}",
    f"students-10-11@{domain}"
]

print("\n--- 1. Кількість користувачів у зведених групах ---")
for group in main_groups:
    res = subprocess.run(["gam", "info", "group", group], capture_output=True, text=True)
    members = [line for line in res.stdout.splitlines() if "User:" in line or "memberCount" in line]
    print(f"  • {group}: {len(members)} учасників")

print("\n--- 2. Акаунти у підрозділі ЗАГУБЛЕНІ ---")
lost_users = []
with open("users_export.csv", mode="r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        ou = (row.get("orgUnitPath") or "").strip()
        email = (row.get("primaryEmail") or "").strip()
        if "загублені" in ou.lower():
            lost_users.append(email)

print(f"  Знайдено користувачів без прив'язки до класу: {len(lost_users)}")
for email in lost_users:
    print(f"   • {email}")
