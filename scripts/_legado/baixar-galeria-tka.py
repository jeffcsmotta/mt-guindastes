"""Baixa fotos especificas por modelo TKA (capa seca + galeria em uso).
Chrome compartilhado ignorado. Capa = atual (render do site); galeria = demais.
Uso: python3 scripts/baixar-galeria-tka.py"""
import json, urllib.request, os, struct

HERE = os.path.dirname(os.path.abspath(__file__))
TKA = os.path.join(HERE, 'tka.json')
DEST = os.path.abspath(os.path.join(HERE, '..', 'assets', 'tka'))
CHROME = {'0RCaRSNo1xcPPSjfPLZ2RR55uE', '85xKxPGZxgC8tV5p0jHHS0InojA',
          'SqsIryHcZ8O9ocJn6PAtlkyskE', 'oi2OGEtytVbgvUXKzRjgWpsBRo',
          'w0O7OAfVUflIWRUtWiJDfZgdPo'}


def dims(path):
    with open(path, 'rb') as f:
        d = f.read(32)
    if d[:8] == b'\211PNG\r\n\032\n':
        return struct.unpack('>II', d[16:24])
    if d[:2] == b'\xff\xd8':
        i = 2
        while i < len(d):
            if d[i] != 0xFF:
                break
            m = d[i + 1]
            if 0xC0 <= m <= 0xC3:
                h, w = struct.unpack('>HH', d[i + 5:i + 9])
                return (w, h)
            i += 2 + struct.unpack('>H', d[i + 2:i + 4])[0]
    return (0, 0)


items = json.load(open(TKA, encoding='utf-8'))
n = 0
for it in items:
    slug = it['slug'].lstrip('/').replace('.', '_')
    gal = []
    for u in it.get('imgs', []):
        key = u.split('/')[-1].split('.')[0]
        if key in CHROME:
            continue
        ext = u.split('.')[-1]
        fn = 'g_%s_%s.%s' % (slug, key[:6], ext)
        p = os.path.join(DEST, fn)
        if not os.path.exists(p):
            urllib.request.urlretrieve(u, p)
        w, h = dims(p)
        if w >= 200:
            gal.append({'file': fn, 'w': w, 'h': h})
            n += 1
    # capa atual sai da galeria; resto vira galeria (max 3, maiores primeiro)
    cover = (it.get('img_local') or '').replace('assets/tka/', '')
    gal = [g for g in gal if g['file'] != cover]
    gal.sort(key=lambda g: -(g['w'] * g['h']))
    it['gallery'] = ['assets/tka/' + g['file'] for g in gal[:3]]
json.dump(items, open(TKA, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('fotos de galeria baixadas, refs atualizadas. arquivos novos:', n)
