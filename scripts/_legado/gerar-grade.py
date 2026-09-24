"""Gera o bloco PRODUCTS do app.js a partir do CSV Angra + tka.json.
Fonte unica: rode `python3 scripts/gerar-grade.py` e o app.js e atualizado.
Imagens locais em assets/pecas e assets/tka (sem hotlink)."""
import csv, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
CLIENT = os.path.dirname(HERE)
CSV_PATH = os.path.abspath(os.path.join(
    CLIENT, '..', '..', 'sandbox', 'produtos-angra-final.csv'))
TKA_PATH = os.path.join(HERE, 'tka.json')
APP_PATH = os.path.join(CLIENT, 'app.js')

# mesmo mapeamento da baixada: ordem de encontro nas 4 colunas
url2file = {}
for r in csv.DictReader(open(CSV_PATH, encoding='utf-8')):
    for k in ['Imagem_Principal', 'Imagem_2', 'Imagem_3', 'Imagem_4']:
        u = (r.get(k) or '').strip()
        if u and u not in url2file:
            url2file[u] = 'assets/pecas/angra_%02d.png' % (len(url2file) + 1)

def js_str(s):
    return json.dumps(s or '', ensure_ascii=False)

products = []
for r in csv.DictReader(open(CSV_PATH, encoding='utf-8')):
    specs = []
    if (r.get('Capacidade') or '').strip():
        specs.append(r['Capacidade'].strip())
    if (r.get('Operadores') or '').strip():
        specs.append(r['Operadores'].strip() + (' (NR12)' if 'NR12' in (r.get('Nivelamento') or '') else ''))
    elif (r.get('Nivelamento') or '').strip():
        specs.append(r['Nivelamento'].strip().split(',')[0])
    u = (r.get('Imagem_Principal') or '').strip()
    slug = (r.get('Slug') or '').strip()
    codigo = (r.get('Codigo') or '').strip()
    # re-marca white-label MT
    codigo_mt = re.sub(r'-(ANGRA|BOBCAT|RETRO|TUBOS-C|BALANCIM|BIGBAG|PEGAPOSTES|SACAPOSTES|FUNIL|1OP|LF|2OP|ACOPLADO|SUSPENSO|PROTECT|DRENAGEM|REBOCADOR|ESCADA)$',
                       r'-MT', codigo)
    if codigo_mt == codigo:
        codigo_mt = codigo + '-MT'
    products.append({
        'id': slug, 'nome': r['Title'].strip(), 'colecao': 'peca',
        'categoria': r['Categoria'].strip(), 'codigo': codigo_mt,
        'specs': specs, 'desc': r['Descricao'].strip(),
        'img': url2file.get(u, ''), 'preco': 0,
    })

# precos de referencia conhecidos (tabela MT; ampliar via Concierge)
PRECOS = {'garfo-paleteiro': 1890.0, 'suporte-para-big-bag': 2450.0,
          'cesto-de-fibra-1-operador': 5700.0}
for p in products:
    if p['id'] in PRECOS:
        p['preco'] = PRECOS[p['id']]

tka = json.load(open(TKA_PATH, encoding='utf-8'))
for it in tka:
    slug = it['slug'].lstrip('/')
    is_cesto = slug.startswith('cesto')
    title = it['title'] or slug
    if is_cesto and not title.lower().startswith('cesto'):
        title = 'Cesto ' + slug.split('-', 1)[1]
    parts = [s.strip() for s in it['specs'].split('  ') if s.strip()] \
        if it['specs'] else []
    specs = parts[:2] if parts else ([it['line']] if it['line'] else [])
    products.append({
        'id': 'tka-' + slug, 'nome': title,
        'colecao': 'tka_novo', 'categoria': 'TKA Novos',
        'codigo': 'TKA-' + slug.upper(), 'linha': it['line'],
        'specs': specs,
        'desc': 'Guindaste TKA novo' +
                (' — linha ' + it['line'] + '.' if it['line'] else '.') +
                ' Representante autorizado. Cotação consultiva via WhatsApp.',
        'img': ('assets/tka/' + it['img_local']) if it.get('img_local') else '',
        'gallery': it.get('gallery', []),
        'preco': 0,
    })

products.append({
    'id': 'usado-patio', 'nome': 'Guindastes usados — estoque do pátio',
    'colecao': 'usado', 'categoria': 'Usados', 'codigo': 'PATIO',
    'specs': [], 'desc': 'O giro do pátio muda toda semana. Chame o Marcelo e receba fotos, ano e valor do que está disponível.',
    'img': '', 'preco': 0, 'cta': True,
})

lines = ['var PRODUCTS = [']
for p in products:
    specs = '[' + ', '.join(js_str(s) for s in p['specs']) + ']'
    linha = '  { id: %s, nome: %s, colecao: %s, categoria: %s, codigo: %s, specs: %s, desc: %s, img: %s, preco: %s' % (
        js_str(p['id']), js_str(p['nome']), js_str(p['colecao']),
        js_str(p['categoria']), js_str(p['codigo']), specs,
        js_str(p['desc']), js_str(p['img']), repr(float(p['preco'])))
    if p.get('linha'):
        linha += ', linha: %s' % js_str(p['linha'])
    if p.get('gallery'):
        linha += ', gallery: [%s]' % ', '.join(js_str(g) for g in p['gallery'])
    if p.get('cta'):
        linha += ', cta: true'
    lines.append(linha + ' },')
lines.append('];')

block = '\n'.join(lines)
src = open(APP_PATH, encoding='utf-8').read()
start, end = '/*GENERATED:PRODUCTS*/', '/*END:PRODUCTS*/'
new = src[:src.index(start) + len(start)] + '\n' + block + '\n' + src[src.index(end):]
open(APP_PATH, 'w', encoding='utf-8').write(new)
print('produtos:', len(products))
