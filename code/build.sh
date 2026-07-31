#!/bin/bash
FILE_NAME=$1
LANG=$2
OUTPUT="code/program_$FILE_NAME.py"
DESC="schemes/00_ОПИС_ЗАДАЧІ.md"

# Викликаємо наш новий парсер, щоб він згенерував код
python3 code/parser.py "$DESC" > "$OUTPUT"

echo "OK: $OUTPUT"