#!/bin/bash
BASE="$(cd "$(dirname "$0")/.." && pwd)"
L=$(ls -t "$BASE/code"/program_*.py "$BASE/code"/program_*.js \
    "$BASE/code"/Main.java "$BASE/code"/query_*.sql 2>/dev/null | head -1)
[ -z "$L" ] && echo "Спочатку: bash code/build.sh" && exit 1
echo "Запускаю: $(basename $L)"
case "$L" in
  *.py)   python3 "$L" ;;
  *.js)   node "$L" ;;
  *.java) cd "$(dirname $L)" && javac Main.java && java Main ;;
  *.sql)  sqlite3 "$BASE/code/school.db" < "$L" ;;
esac