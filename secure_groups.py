import subprocess

domain = "schoolgus.ukr.education"

# Загальношкільні розсилки, де публікація дозволена тільки менеджерам/адміністраторам
restricted_groups = [
    f"all-students@{domain}",
    f"all-teachers@{domain}",
    f"students-1-4@{domain}",
    f"students-5-9@{domain}",
    f"students-10-11@{domain}"
]

print("\n--- Застосування політик безпеки до зведених груп ---")
for group in restricted_groups:
    print(f" ⚙️ Налаштування приватності для: {group}")
    subprocess.run([
        "gam", "update", "group", group,
        "who_can_post_message", "ALL_MANAGERS_CAN_POST",
        "who_can_view_membership", "ALL_MANAGERS_CAN_VIEW",
        "who_can_join", "CAN_ONLY_BE_INVITED",
        "allow_external_members", "false"
    ])

print("\nПолітики безпеки успішно застосовано!")
