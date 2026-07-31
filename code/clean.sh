#!/bin/bash
BASE="$(cd "$(dirname "$0")/.." && pwd)"

# Видалення файлів за шаблонами
rm -f "$BASE/code/program_"*
rm -f "$BASE/code/query_"*
rm -f "$BASE/schemes/algorithm_"*

echo "Папки очищено від старих результатів."