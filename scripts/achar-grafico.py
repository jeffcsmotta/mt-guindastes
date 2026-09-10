import urllib.request, re, sys

BASE = 'https://www.mtguindastes.com.br'
HDRS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36'}

req = urllib.request.Request(BASE + sys.argv[1], headers=HDRS)
html = urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'ignore')
for m in re.finditer(r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', html, re.S):
    txt = re.sub(r'<[^>]+>', '', m.group(2)).strip()[:60]
    if 'fico' in txt.lower() or 'carga' in txt.lower() or 'down' in txt.lower():
        print(m.group(1), '|', txt)
