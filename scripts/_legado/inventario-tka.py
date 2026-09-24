import urllib.request, re, json, sys, os

BASE = 'https://www.mtguindastes.com.br'
HDRS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36'}

def get(path):
    req = urllib.request.Request(BASE + path, headers=HDRS)
    return urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'ignore')

slug = sys.argv[1]
html = get(slug)
imgs = sorted(set(re.findall(r'https://framerusercontent\.com/images/[A-Za-z0-9]+\.(?:png|jpg|jpeg)', html)))
assets = sorted(set(re.findall(r'https://framerusercontent\.com/assets/[A-Za-z0-9_.]+', html)))
print(json.dumps({'slug': slug, 'n_imgs': len(imgs), 'imgs': imgs, 'assets': assets[:6]}))
