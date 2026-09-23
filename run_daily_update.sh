#!/bin/bash
# Скрипт автоматичного оновлення portal data для macOS launchd
PROJECT_PATH="/Users/anatoliy/MyProject/classroom-support"

cd "$PROJECT_PATH" || exit 1

echo "=== [$(date)] Початок автоматичного оновлення ===" >> update.log
python3 update_portal_data.py >> update.log 2>&1
git add courses.json >> update.log 2>&1
git commit -m "auto: scheduled courses sync from Mac" >> update.log 2>&1
git push origin main >> update.log 2>&1
echo "=== [$(date)] Синхронізацію завершено ===" >> update.log