import subprocess

domain = "schoolgus.ukr.education"
groups = [
    f"all-teachers@{domain}",
    f"all-students@{domain}",
    f"students-1-4@{domain}",
    f"students-5-9@{domain}",
    f"students-10-11@{domain}"
]

print("\n--- Фактична кількість учасників у групах ---")
for group in groups:
    res = subprocess.run(["gam", "print", "group-members", "group", group], capture_output=True, text=True)
    lines = [l for l in res.stdout.splitlines() if l.strip() and not l.startswith("group,")]
    print(f"  • {group}: {len(lines)} осіб")
