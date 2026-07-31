#!/bin/bash
cd "$(dirname "$0")"

# Шукаємо останній створений Python-файл
LATEST_PY=$(ls -t program_*.py 2>/dev/null | head -1)

if [ -z "$LATEST_PY" ]; then
    echo "❌ Помилка: Python-файл не знайдено. Спочатку натисніть '3' у меню."
    exit 1
fi

echo "=== АВТОТЕСТУВАННЯ (Cat App) ==="
echo "Файл: $LATEST_PY"
echo "--------------------------------"

echo "✅ TC1 (Кіт, довгошерста, так):"
echo -e "кіт\nдовгошерста\nтак" | python3 "$LATEST_PY" | grep "Результат"

echo "✅ TC2 (Кіт, довгошерста, ні):"
echo -e "кіт\nдовгошерста\nні" | python3 "$LATEST_PY" | grep "Результат"

echo "✅ TC3 (Кіт, короткошерста):"
echo -e "кіт\nкороткошерста\n" | python3 "$LATEST_PY" | grep "Результат"

echo "✅ TC4 (Собака):"
echo -e "собака\n\n" | python3 "$LATEST_PY" | grep "Результат"
echo "================================"