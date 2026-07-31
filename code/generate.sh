#!/bin/bash
BASE="$(cd "$(dirname "$0")/.." && pwd)"
TS=$(date +"%Y%m%d_%H%M%S")
DESC="$BASE/schemes/00_ОПИС_ЗАДАЧІ.md"
OUT="$BASE/schemes/algorithm_$TS.md"
TITLE=$(grep -A2 "## Назва програми" "$DESC" | tail -1 | xargs)
LANG=$(grep "^Мова:" "$DESC" | sed 's/Мова: *//' | xargs | tr '[:upper:]' '[:lower:]')
[ -z "$TITLE" ] && TITLE="Алгоритм_$TS"
[ -z "$LANG" ] && LANG="python"
echo "Назва: $TITLE | Мова: $LANG"
python3 - << PYEOF
import os, datetime
base = "$BASE"
ts = "$TS"
title = "$TITLE"
out = "$OUT"
mmd = f"""# {title}

\`\`\`mermaid
flowchart TD
    A([Початок]) --> B[/Зчитати вхідні дані/]
    B --> C{{Умова 1?}}
    C -- Так --> D[Виконати дію 1]
    C -- Ні  --> E[Виконати дію 2]
    D --> F{{Умова 2?}}
    F -- Так --> G[Результат A]
    F -- Ні  --> H[Результат B]
    E --> I([Повідомлення])
    G --> Z([Кінець])
    H --> Z
    I --> Z
    style A fill:#85e3b3,stroke:#2b6649,stroke-width:2px
    style Z fill:#f99191,stroke:#8c3535,stroke-width:2px
    style C fill:#f9e391,stroke:#7c6921,stroke-width:2px
    style F fill:#f9e391,stroke:#7c6921,stroke-width:2px
    style B fill:#e8b4f8,stroke:#7c2196,stroke-width:2px
    style D fill:#a8d8ea,stroke:#2b6694,stroke-width:2px
    style E fill:#a8d8ea,stroke:#2b6694,stroke-width:2px
    style G fill:#a8d8ea,stroke:#2b6694,stroke-width:2px
    style H fill:#a8d8ea,stroke:#2b6694,stroke-width:2px
\`\`\`
"""
open(out, 'w').write(mmd)
print(f"OK: {out}")
PYEOF
code "$OUT"
sleep 1
osascript -e 'tell application "Visual Studio Code" to activate' 2>/dev/null
osascript -e 'tell application "System Events" to keystroke "k" using command down' 2>/dev/null
sleep 0.3
osascript -e 'tell application "System Events" to keystroke "v"' 2>/dev/null
echo "Preview відкрито. Далі: bash code/build.sh $TS $LANG"