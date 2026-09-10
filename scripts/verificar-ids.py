import re
html = open('clientes/mt-guindastes/index.html', encoding='utf-8').read()
js = open('clientes/mt-guindastes/app.js', encoding='utf-8').read()
ids = set(re.findall(r"getElementById\('([^']+)'\)", js))
missing = [i for i in sorted(ids) if ('id="%s"' % i) not in html]
print('ids usados:', len(ids), 'faltando no html:', missing)
