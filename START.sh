#!/bin/bash
# Перехід у робочу директорію
cd "$(dirname "$0")"
B=$(pwd)

while true; do
    clear
    echo "╔══════════════════════════════════════╗"
    echo "║      ГЕНЕРАТОР АЛГОРИТМІВ v1.2       ║"
    echo "╚══════════════════════════════════════╝"
    echo ""
    echo " 1 — Відкрити опис алгоритму"
    echo " 2 — Згенерувати схему + Preview"
    echo " 3 — Код: Python"
    echo " 4 — Код: JavaScript"
    echo " 5 — Код: Java"
    echo " 6 — Код: SQL"
    echo " 7 — Запустити останній файл"
    echo " 8 — Запустити тести (Cat App)"
    echo " 9 — Очистити старі файли"
    echo " 0 — Вийти"
    echo ""
    read -p " Вибір: " C

    case "$C" in
        1) code "$B/schemes/00_ОПИС_ЗАДАЧІ.md" ;;
        2) bash "$B/code/generate.sh" ;;
        3) bash "$B/code/build.sh" "$(date +%Y%m%d_%H%M%S)" python ;;
        4) bash "$B/code/build.sh" "$(date +%Y%m%d_%H%M%S)" javascript ;;
        5) bash "$B/code/build.sh" "$(date +%Y%m%d_%H%M%S)" java ;;
        6) bash "$B/code/build.sh" "$(date +%Y%m%d_%H%M%S)" sql ;;
        7) bash "$B/code/run.sh" ;;
        8) bash "$B/code/test.sh" ;;
        9) bash "$B/code/clean.sh" ;;
        0) echo "До побачення!"; exit 0 ;;
        *) echo "Невірний вибір. Натисніть Enter." ;;
    esac
    echo ""
    read -p "Натисніть Enter, щоб повернутися в меню..."
done