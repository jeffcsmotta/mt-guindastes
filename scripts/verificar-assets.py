import re, urllib.request, threading, http.server, functools, os

root = os.path.abspath('.')
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=root)
srv = http.server.HTTPServer(('127.0.0.1', 8903), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()

src = open('clientes/mt-guindastes/app.js', encoding='utf-8').read()
paths = set('clientes/mt-guindastes/' + p for p in re.findall(r'img: "([^"]+)"', src))
paths.update('clientes/mt-guindastes/' + p for p in re.findall(r'"(assets/tka/g_[^"]+)"', src))
paths.update(['clientes/mt-guindastes/' + p for p in
              ['index.html', 'app.js', 'style.css', 'mt-theme.css', 'mt-rails.css', 'sw.js',
               'manifest.json']])
bad = []
for p in sorted(paths):
    if not p:
        continue
    try:
        code = urllib.request.urlopen('http://127.0.0.1:8903/' + p.replace(os.sep, '/'), timeout=10).status
        if code != 200:
            bad.append((p, code))
    except Exception as e:
        bad.append((p, str(e)))
print('checados:', len(paths), 'falhas:', bad)
srv.shutdown()
