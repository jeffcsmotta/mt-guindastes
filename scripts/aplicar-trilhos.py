"""Substitui o bloco renderCatalog (grade simples) pelo cardHtml + modo trilhos."""
import io

APP = 'clientes/mt-guindastes/app.js'
NEW = 'clientes/mt-guindastes/scripts/render-trilhos.snippet.js'

src = open(APP, encoding='utf-8').read()
new_block = open(NEW, encoding='utf-8').read()

start_marker = '/* Card industrial:'
end_marker = '/* Modal de cota'
i = src.index(start_marker)
j = src.index(end_marker)
src = src[:i] + new_block.rstrip() + '\n\n' + src[j:]
open(APP, 'w', encoding='utf-8').write(src)
print('splice ok')
