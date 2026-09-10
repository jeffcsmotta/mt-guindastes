import re, os
src = open('clientes/mt-guindastes/app.js', encoding='utf-8').read()
m = re.search(r'/\*GENERATED:PRODUCTS\*/(.*)/\*END:PRODUCTS\*/', src, re.S)
block = m.group(1)
print('linhas bloco:', len(block.strip().splitlines()))
imgs = set(re.findall(r'img: "([^"]+)"', block))
missing = [i for i in imgs if i and not os.path.exists(os.path.join('clientes/mt-guindastes', i))]
print('imgs referenciadas:', len(imgs), 'faltando:', missing)
print('tka_novo:', block.count('tka_novo'), '| peca:', block.count('"peca"'), '| usado:', block.count('"usado"'))
