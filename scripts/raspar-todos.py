import json, subprocess, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
SCRAPER = os.path.join(HERE, 'raspar-tka.py')

slugs = json.loads(subprocess.check_output(
    [sys.executable, SCRAPER, 'slugs']).decode('utf-8'))
print('slugs:', len(slugs))

items = []
for s in slugs:
    try:
        out = subprocess.check_output(
            [sys.executable, SCRAPER, 'page', s],
            timeout=60).decode('utf-8')
        items.append(json.loads(out))
        print('ok', s)
    except Exception as e:
        print('FALHA', s, e)

with open(os.path.join(HERE, 'tka.json'), 'w', encoding='utf-8') as f:
    json.dump(items, f, ensure_ascii=False, indent=1)
print('total:', len(items))
