"""Constroi o catalogo oficial TKA a partir da API de fabrica (tkacranes.com).

Fonte da verdade: https://api-6t25iyvfaa-uc.a.run.app/api/{produtos,cestos}
(textos, specs, fotos, graficos e PDFs oficiais de fabrica).

Gera:
  - assets/tka-oficial/<slug>/foto-{1..4}.jpg (otimizadas, max 1600px, q82)
  - assets/tka-oficial/<slug>/grafico-de-carga.png (fiel ao original)
  - assets/tka-oficial/<slug>/grafico-de-carga.pdf (+ -libra.pdf quando houver)
  - tka-catalog.json no schema aprovado (guindastes + cestos, Fly separado)

Regras:
  - Nenhum numero e inventado: tudo vem dos campos da API.
  - Descricao oficial quando existe (descricao_fonte=oficial); quando vazia,
    texto derivado apenas dos specs da API (descricao_fonte=derivada).
  - Slugs estaveis: 40.900, 45.700, 55.900 e 8.700bx preservados.

Uso: python3 scripts/construir-tka-oficial.py [--skip-download]
"""
import io
import json
import os
import re
import sys
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
CLIENT = os.path.dirname(HERE)
DEST = os.path.join(CLIENT, 'assets', 'tka-oficial')
CATALOG = os.path.join(CLIENT, 'tka-catalog.json')
CACHE = os.path.join('C:\\Users\\ADM\\AppData\\Local\\Temp\\opencode')

API = 'https://api-6t25iyvfaa-uc.a.run.app/api'
HDRS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36'}

SKIP_DOWNLOAD = '--skip-download' in sys.argv
FORCE = '--force' in sys.argv


def precisa(dest):
    return FORCE or not (os.path.exists(dest) and os.path.getsize(dest) > 0)

DESTAQUES = {'40.900', '45.700', '55.900', '8.700bx'}

LINHA_CAT = {'01_canivete': 'Canivete', '02_trave': 'Trave', '03_bx': 'BX'}

SETORES = {
    '01_agricola': 'operações agrícolas e logística de insumos',
    '02_construcao': 'construção civil e infraestrutura',
    '03_mineracao': 'mineração e movimentação extrapesada',
    '04_locacao': 'locadoras e operação contínua',
    '05_eletrificacao': 'eletrificação e trabalhos em altura',
    '06_maritimo': 'operações portuárias e marítimas',
}


def get_json(path):
    req = urllib.request.Request(API + path, headers=HDRS)
    return json.loads(urllib.request.urlopen(req, timeout=90).read().decode('utf-8'))


def download(url):
    req = urllib.request.Request(url, headers=HDRS)
    return urllib.request.urlopen(req, timeout=120).read()


def clean_html(html):
    t = re.sub(r'<[^>]+>', ' ', html or '')
    t = t.replace('&nbsp;', ' ').replace('\xa0', ' ').replace('[TKA]', 'TKA')
    t = re.sub(r'[ \t]+', ' ', t)
    t = re.sub(r'\n\s*\n+', '\n\n', t).strip()
    return t


def slug_guindaste(codigo, categoria):
    """Deriva slug estavel do codigo oficial. Fly sempre separado."""
    txt = (codigo or '').replace('[TKA]', '').strip()
    m = re.search(r'\d+\.\d+', txt)
    numero = m.group(0) if m else re.sub(r'\s+', '', txt).lower()
    low = txt.lower()
    if 'bx' in low.split() or categoria == '03_bx' or low.endswith(' bx'):
        return numero + 'bx'
    if 'fly' in low:
        return numero + '-fly'
    return numero


def titulo_guindaste(codigo, slug):
    txt = (codigo or '').replace('[TKA]', '').strip()
    txt = re.sub(r'\s+', ' ', txt)
    txt = re.sub(r'(?i)\bfly(\s*jib)?\b', 'Fly Jib', txt)
    return 'TKA ' + txt if not txt.upper().startswith('TKA') else txt


def normaliza_lancas(v):
    """int quando numerico, string original quando config fly (ex: 8h + 5h da fly)."""
    try:
        return int(v)
    except (TypeError, ValueError):
        s = str(v or '').strip()
        return s if s and s != '0' else 0


def parse_info_tecnica(desc_limpa):
    """Extrai pares chave/valor da secao Informacoes Tecnicas do texto oficial."""
    m = re.search(r'informa[çc][õo]es t[ée]cnicas(.*)$', desc_limpa, re.I | re.S)
    if not m:
        return {}, desc_limpa
    marketing, bloco = desc_limpa[:m.start()].strip(), m.group(1).strip()
    bloco = re.sub(r'\s+', ' ', bloco)
    # paragrafo livre apos a tabela tecnica volta para o marketing
    for stop in ('O modelo pode ser configurado', 'A TKA oferece', 'Consulte ',
                 'Entre em contato', 'Solicite ', 'Fale com'):
        i = bloco.find(stop)
        if i > 50:
            marketing = (marketing + ' ' + bloco[i:]).strip()
            bloco = bloco[:i].strip()
            break
    specs = {}
    # o bloco vem corrido; ancora em rotulos conhecidos
    rotulos = ['Momento máximo de carga', 'Alcance máx. horizontal',
               'Alcance máx. vertical', 'Abertura de patolas', 'Peso próprio',
               'Torque de giro', 'Pressão de trabalho', 'Ângulo de giro',
               'PBT mínimo para instalação', 'Capacidade do reservatório',
               'Controle remoto', 'Fly jib opcional', 'Modelo pode ser configurado']
    # split simples por rotulo
    pos = []
    for r in rotulos:
        i = bloco.find(r)
        if i != -1:
            pos.append((i, r))
    pos.sort()
    for idx, (i, r) in enumerate(pos):
        fim = pos[idx + 1][0] if idx + 1 < len(pos) else len(bloco)
        specs[r] = bloco[i + len(r):fim].strip(' :;-')
    return specs, marketing


def descricao_derivada(p, linha, setores_txt):
    n = titulo_guindaste(p.get('codigo'), '')
    frases = []
    if linha == 'Trave':
        base = ('projetado para içamento de grandes cargas com máxima estabilidade, '
                'atendendo construção civil, infraestrutura e locação')
    elif linha == 'Canivete':
        base = ('compacto e versátil, ideal para operação em espaços restritos com '
                'variação de altura, atendendo construção, agro e locação')
    else:
        base = ('desenvolvido para versatilidade ágil e montagem inteligente, '
                'ideal para logística de insumos agrícolas e materiais de construção')
    if setores_txt:
        base = 'projetado para %s' % setores_txt
    frases.append('O Guindaste %s (Linha %s) foi %s.' % (n, linha, base))
    det = []
    if p.get('capacidadeMaxima'):
        det.append('capacidade máxima de %s' % p['capacidadeMaxima'])
    if p.get('pesoProprio'):
        det.append('peso próprio de %s' % p['pesoProprio'])
    h, man = normaliza_lancas(p.get('extensoesHidraulicas')), normaliza_lancas(p.get('extensoesManuais'))
    if isinstance(h, str) or isinstance(man, str):
        partes = []
        if h:
            partes.append('configuração hidráulica %s' % h)
        if man:
            partes.append('%s manual(is)' % man)
        if partes:
            det.append(' + '.join(partes))
    elif h or man:
        det.append('%s lanças hidráulicas e %s manuais' % (h or 0, man or 0))
    if p.get('maximoVertical'):
        det.append('alcance vertical de %s' % p['maximoVertical'])
    if p.get('maximoHorizontal'):
        det.append('alcance horizontal de %s' % p['maximoHorizontal'])
    if det:
        frases.append('Conta com ' + ', '.join(det) + '.')
    frases.append('Construção em aço de ultra-alta resistência com garantia estrutural '
                  'de fábrica e assessoria técnica da MT Guindastes para estudo de '
                  'montagem veicular.')
    return ' '.join(frases)


def setores_txt(p):
    nomes = [SETORES.get(s, '') for s in (p.get('setores') or [])]
    nomes = [n for n in nomes if n]
    if not nomes:
        return ''
    if len(nomes) == 1:
        return nomes[0]
    return ', '.join(nomes[:-1]) + ' e ' + nomes[-1]


def otimiza_foto(data, path):
    from PIL import Image
    im = Image.open(io.BytesIO(data)).convert('RGB')
    im.thumbnail((1600, 1600))
    im.save(path, 'JPEG', quality=82, optimize=True)


def processa_produto(p, relatorio):
    codigo = (p.get('codigo') or '').replace('[TKA]', '').strip()
    linha = LINHA_CAT.get(p.get('categoria'), 'Trave')
    slug = slug_guindaste(p.get('codigo'), p.get('categoria'))
    pasta = os.path.join(DEST, slug)
    os.makedirs(pasta, exist_ok=True)

    fotos = []
    for i, url in enumerate((p.get('fotos') or [])[:4], 1):
        dest = os.path.join(pasta, 'foto-%d.jpg' % i)
        rel = 'assets/tka-oficial/%s/foto-%d.jpg' % (slug, i)
        if precisa(dest):
            try:
                otimiza_foto(download(url), dest)
            except Exception as e:
                relatorio['falhas'].append('%s foto-%d: %s' % (slug, i, e))
                continue
        fotos.append(rel)

    grafico = None
    if p.get('graficoDeCarga'):
        dest = os.path.join(pasta, 'grafico-de-carga.png')
        if precisa(dest):
            try:
                with open(dest, 'wb') as f:
                    f.write(download(p['graficoDeCarga']))
            except Exception as e:
                relatorio['falhas'].append('%s grafico: %s' % (slug, e))
            else:
                grafico = 'assets/tka-oficial/%s/grafico-de-carga.png' % slug
        elif os.path.exists(dest):
            grafico = 'assets/tka-oficial/%s/grafico-de-carga.png' % slug

    pdfs = {}
    for campo, nome in (('graficoDeCargaPdf', 'grafico-de-carga.pdf'),
                        ('graficoDeCargaPdfLibra', 'grafico-de-carga-libra.pdf')):
        if p.get(campo):
            dest = os.path.join(pasta, nome)
            if precisa(dest):
                try:
                    with open(dest, 'wb') as f:
                        f.write(download(p[campo]))
                except Exception as e:
                    relatorio['falhas'].append('%s %s: %s' % (slug, nome, e))
                    continue
            pdfs[nome] = 'assets/tka-oficial/%s/%s' % (slug, nome)

    bruto = clean_html(p.get('descricao') or '')
    fonte = 'oficial' if bruto else 'derivada'
    if fonte == 'derivada':
        relatorio['derivadas'].append(slug)
    extras, marketing = parse_info_tecnica(bruto) if bruto else ({}, '')
    descricao = marketing if marketing else (
        bruto if bruto else descricao_derivada(p, linha, setores_txt(p)))

    try:
        hidr = int(p.get('extensoesHidraulicas') or 0)
    except (TypeError, ValueError):
        hidr = normaliza_lancas(p.get('extensoesHidraulicas'))
    try:
        man = int(p.get('extensoesManuais') or 0)
    except (TypeError, ValueError):
        man = normaliza_lancas(p.get('extensoesManuais'))

    item = {
        'slug': slug,
        'codigo': titulo_guindaste(p.get('codigo'), slug),
        'linha': linha + (' + Fly Jib' if slug.endswith('-fly') else ''),
        'categoria': 'guindaste',
        'descricao': descricao,
        'descricao_fonte': fonte,
        'specs': {
            'capacidadeMaxima': p.get('capacidadeMaxima') or '',
            'pesoProprio': p.get('pesoProprio') or '',
            'extensoesHidraulicas': hidr,
            'extensoesManuais': man,
            'maximoVertical': p.get('maximoVertical') or '',
            'maximoHorizontal': p.get('maximoHorizontal') or '',
            'monteOSeu': bool(p.get('monteOSeu', True)),
            'acessoriosOpcionais': p.get('acessoriosOpcionais') or [],
        },
        'fotos': fotos,
        'destaque_hero': slug in DESTAQUES,
    }
    if grafico:
        item['grafico'] = grafico
    if pdfs.get('grafico-de-carga.pdf'):
        item['grafico_pdf'] = pdfs['grafico-de-carga.pdf']
    if pdfs.get('grafico-de-carga-libra.pdf'):
        item['grafico_pdf_libra'] = pdfs['grafico-de-carga-libra.pdf']
    if extras:
        item['specs_tecnicas'] = extras
    if p.get('videoUrl'):
        item['video'] = p['videoUrl']
    if p.get('setores'):
        item['setores'] = p['setores']
    if p.get('lancamento'):
        item['lancamento'] = True
    return item


def processa_cesto(c, relatorio):
    codigo = (c.get('codigo') or '').replace('[TKA]', '').strip()
    slug = 'cesto-' + re.sub(r'\s+', '-', codigo).lower()
    pasta = os.path.join(DEST, slug)
    os.makedirs(pasta, exist_ok=True)

    fotos = []
    for i, url in enumerate((c.get('fotos') or [])[:4], 1):
        dest = os.path.join(pasta, 'foto-%d.jpg' % i)
        rel = 'assets/tka-oficial/%s/foto-%d.jpg' % (slug, i)
        if precisa(dest):
            try:
                otimiza_foto(download(url), dest)
            except Exception as e:
                relatorio['falhas'].append('%s foto-%d: %s' % (slug, i, e))
                continue
        fotos.append(rel)

    grafico = None
    if c.get('graficoDeCarga'):
        dest = os.path.join(pasta, 'grafico-de-carga.png')
        if precisa(dest):
            try:
                with open(dest, 'wb') as f:
                    f.write(download(c['graficoDeCarga']))
            except Exception as e:
                relatorio['falhas'].append('%s grafico: %s' % (slug, e))
            else:
                grafico = 'assets/tka-oficial/%s/grafico-de-carga.png' % slug
        elif os.path.exists(dest):
            grafico = 'assets/tka-oficial/%s/grafico-de-carga.png' % slug

    base = clean_html(c.get('descricao') or '')
    det = []
    if c.get('capacidadeCesto'):
        det.append('capacidade de %s kg' % str(c['capacidadeCesto']).strip())
    if c.get('alcanceMaximoHorizontal'):
        det.append('alcance horizontal de %s m' % str(c['alcanceMaximoHorizontal']).strip())
    if c.get('anguloGiro'):
        det.append('giro de %s°' % str(c['anguloGiro']).strip())
    if c.get('pbtMinimoExigido'):
        det.append('PBT mínimo de %s kg' % str(c['pbtMinimoExigido']).strip())
    descricao = base
    if det:
        descricao = (descricao + '. ' if descricao else '') + \
            'Cesto aéreo com ' + ', '.join(det) + '.'
    descricao += (' Equipamento de fábrica TKA com garantia estrutural; '
                  'consulte a MT Guindastes sobre compatibilidade com seu guindaste.')

    specs_tecnicas = {}
    for k in ('capacidadeCesto', 'alcanceMaximoHorizontal', 'anguloGiro',
              'estabilizadoresPadraoA', 'pesoEquipamentoEstabilizadores',
              'complementoEquipamento', 'alturaEmTransporte', 'pbtMinimoExigido'):
        if c.get(k):
            specs_tecnicas[k] = str(c[k]).strip()

    item = {
        'slug': slug,
        'codigo': 'TKA ' + codigo,
        'linha': 'Cesto Aéreo',
        'categoria': 'cesto',
        'descricao': descricao.strip(),
        'descricao_fonte': 'oficial+derivada',
        'specs': {
            'capacidadeMaxima': (str(c.get('capacidadeCesto') or '').strip() + ' kg'
                                 if c.get('capacidadeCesto') else ''),
            'pesoProprio': (str(c.get('pesoEquipamentoEstabilizadores') or '').strip() + ' kg'
                            if c.get('pesoEquipamentoEstabilizadores') else ''),
            'extensoesHidraulicas': 0,
            'extensoesManuais': 0,
            'maximoVertical': '',
            'maximoHorizontal': (str(c.get('alcanceMaximoHorizontal') or '').strip() + ' m'
                                 if c.get('alcanceMaximoHorizontal') else ''),
            'monteOSeu': False,
            'acessoriosOpcionais': [],
        },
        'fotos': fotos,
        'destaque_hero': False,
    }
    if grafico:
        item['grafico'] = grafico
    if specs_tecnicas:
        item['specs_tecnicas'] = specs_tecnicas
    if c.get('setores'):
        item['setores'] = c['setores']
    return item


def main():
    relatorio = {'falhas': [], 'derivadas': []}
    try:
        produtos = get_json('/produtos')
        cestos = get_json('/cestos')
        print('API fabrica: %d produtos, %d cestos' % (len(produtos), len(cestos)))
    except Exception as e:
        print('API indisponivel (%s), usando cache local' % e)
        produtos = json.load(open(os.path.join(CACHE, 'tka_api_produtos.json'), encoding='utf-8'))
        cestos = json.load(open(os.path.join(CACHE, 'tka_api_cestos.json'), encoding='utf-8'))

    itens = [processa_produto(p, relatorio) for p in produtos]
    itens += [processa_cesto(c, relatorio) for c in cestos]

    slugs = [i['slug'] for i in itens]
    assert len(slugs) == len(set(slugs)), 'slug duplicado!'

    def ordem(i):
        m = re.search(r'\d+\.\d+', i['codigo'])
        return (0 if i['categoria'] == 'guindaste' else 1,
                float(m.group(0)) if m else 999,
                0 if not i['slug'].endswith('-fly') else 1)
    itens.sort(key=ordem)

    with open(CATALOG, 'w', encoding='utf-8') as f:
        json.dump(itens, f, ensure_ascii=False, indent=2)

    print('tka-catalog.json: %d itens (%d guindastes, %d cestos)' % (
        len(itens), sum(1 for i in itens if i['categoria'] == 'guindaste'),
        sum(1 for i in itens if i['categoria'] == 'cesto')))
    print('descricao oficial: %d | derivada: %d' % (
        sum(1 for i in itens if i['descricao_fonte'] == 'oficial'),
        len(relatorio['derivadas'])))
    if relatorio['derivadas']:
        print('derivadas:', ', '.join(relatorio['derivadas']))
    print('com video: %d | com grafico: %d | com pdf: %d' % (
        sum(1 for i in itens if i.get('video')),
        sum(1 for i in itens if i.get('grafico')),
        sum(1 for i in itens if i.get('grafico_pdf'))))
    if relatorio['falhas']:
        print('FALHAS (%d):' % len(relatorio['falhas']))
        for fl in relatorio['falhas']:
            print('  -', fl)


if __name__ == '__main__':
    main()
