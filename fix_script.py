import csv, io, re, subprocess

cmd = ["gam", "print", "courses", "fields", "id,name,ownerId,courseState"]
output = subprocess.check_output(cmd).decode("utf-8")
courses = list(csv.DictReader(io.StringIO(output)))

pattern = re.compile(r"^\d{2}\.\s+\d{1,2}(-[А-ЯA-Z0-9])?\s+клас")
target_owner = "martsinkovskiy@yourdomain.com"  # Замініть ваш домен

wrong_owners = []

for c in courses:
    name = c.get("name", "")
    owner = c.get("ownerId", "")

    if "martsinkovskiy" not in owner:
        wrong_owners.append({"id": c.get("id"), "name": name, "owner": owner})

with open("fix_owners.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["id", "name", "owner"])
    writer.writeheader()
    writer.writerows(wrong_owners)

print(f"Знайдено курсів для зміни власника: {len(wrong_owners)}")

