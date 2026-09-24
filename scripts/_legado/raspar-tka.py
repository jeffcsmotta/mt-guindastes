import urllib.request, re, json, sys

BASE = 'https://www.mtguindastes.com.br'
HDRS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36'}

def get(path):
    req = urllib.request.Request(BASE + path, headers=HDRS)
    return urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'ignore')

if sys.argv[1] == 'slugs':
    html = get('/produtos')
    slugs = sorted(set(re.findall(r'href="(/[A-Za-z0-9._\-]+)"', html)))
    skip = {'/produtos'}
    slugs = [s for s in slugs if s not in skip and '.' in s or 'cesto' in s]
    print(json.dumps(slugs))
elif sys.argv[1] == 'page':
    slug = sys.argv[2]
    html = get(slug)
    text = re.sub(r'<script.*?</script>', ' ', html, flags=re.S)
    text = re.sub(r'<style.*?</style>', ' ', text, flags=re.S)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    imgs = sorted(set(re.findall(r'https://framerusercontent\.com/images/[A-Za-z0-9]+\.(?:png|jpg|jpeg)', html)))
    line = ''
    for cand in ['CANIVETE', 'TRAVE', 'BX']:
        if re.search(r'\b' + cand + r'\b', text):
            line = cand
            break
    specs = ''
    i = text.find('CAP.')
    if i != -1:
        specs = text[i:i + 220].strip()
        for stop in ['CARACTERÍSTICA', 'Quero um orçamento', 'Quero um orcamento']:
            j = specs.find(stop)
            if j != -1:
                specs = specs[:j].strip()
                break
    title = ''
    m = re.search(r'Cesto [0-9.]+(?: SI)?', text)
    if m:
        title = m.group(0).strip()
    else:
        m = re.search(r'TKA [0-9.]+\s*(?:fly jib|com [Ff]ly|BX)?', text)
        if m:
            title = m.group(0).strip()
    print(json.dumps({'slug': slug, 'title': title, 'line': line, 'specs': specs, 'imgs': imgs[:3]}))
