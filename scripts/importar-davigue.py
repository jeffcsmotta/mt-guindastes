"""Importa produtos publicos da Davigue para o catalogo de implementos da MT.

Uso: python scripts/importar-davigue.py
"""
import html
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "implementos.json"
ASSETS = ROOT / "assets" / "implementos" / "davigue"
BASES = ("https://davigue.com.br/", "http://davigue.com.br/")
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36"}

PRODUCTS = {
    "basculante": ("Carroceria Basculante Davigue", "Basculantes"),
    "carga-seca-classic": ("Carroceria Carga Seca Classic Davigue", "Carga Seca"),
    "carga-seca-premium": ("Carroceria Carga Seca Premium Davigue", "Carga Seca"),
    "carroceria-graneleira": ("Carroceria Graneleira Davigue", "Carrocerias"),
    "carroceria-prancha": ("Carroceria Prancha Davigue", "Carrocerias"),
    "carroceria-sider": ("Carroceria Sider Davigue", "Carrocerias"),
    "cobreal-sul": ("Implemento Cobreal Sul Davigue", "Especiais"),
    "especiais": ("Implementos Especiais Davigue", "Especiais"),
    "frota-eletrificacao": ("Implementos para Frota e Eletrificação Davigue", "Eletrificação"),
    "kit-bobineira": ("Kit Bobineira Davigue", "Linha Florestal"),
    "linha-florestal": ("Linha Florestal Davigue", "Linha Florestal"),
}


def fetch(url):
    last_error = None
    for base in BASES:
        target = url if url.startswith("http") else base + url
        for attempt in range(2):
            try:
                request = urllib.request.Request(target + ("?mt_import=%d" % time.time_ns() if "?" not in target else "&mt_import=%d" % time.time_ns()), headers=HEADERS)
                with urllib.request.urlopen(request, timeout=60) as response:
                    return response.read()
            except Exception as error:
                last_error = error
                time.sleep(1)
    raise last_error


def clean(value):
    value = html.unescape(re.sub(r"<[^>]+>", " ", value or ""))
    return re.sub(r"\s+", " ", value).strip()


def image_urls(source):
    found = []
    for value in re.findall(r"https://static\.wixstatic\.com/media/[^\"' )]+", source):
        value = html.unescape(value).split("/v1/")[0]
        if not re.search(r"\.(?:jpg|jpeg|png|webp)$", value, re.I):
            continue
        lower = value.lower()
        if any(word in lower for word in ("logo", "whatsapp", "facebook", "instagram", "icon", "preta.png")):
            continue
        if value not in found:
            found.append(value)
    return found[:4]


def main():
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    existing = {item.get("slug") for item in catalog}
    imported = 0

    for slug, (name, line) in PRODUCTS.items():
        item_slug = "davigue-" + slug
        if item_slug in existing:
            continue
        try:
            source = fetch(slug).decode("utf-8", "ignore")
        except Exception as error:
            print(f"SKIP {slug}: {error}", file=sys.stderr)
            continue

        title_match = re.search(r"<title[^>]*>(.*?)</title>", source, re.I | re.S)
        if not title_match or "parceiros" in clean(title_match.group(1)).lower():
            print(f"SKIP {slug}: pagina sem produto", file=sys.stderr)
            continue

        description_match = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']', source, re.I | re.S)
        description = clean(description_match.group(1)) if description_match else f"{name}. Consulte a MT Guindastes para aplicação, medidas e cotação."
        urls = image_urls(source)
        folder = ASSETS / slug
        folder.mkdir(parents=True, exist_ok=True)
        photos = []
        for index, url in enumerate(urls, 1):
            suffix = Path(url.split("?")[0]).suffix.lower() or ".jpg"
            destination = folder / f"foto-{index}{suffix}"
            try:
                destination.write_bytes(fetch(url))
            except Exception as error:
                print(f"PHOTO {slug} {index}: {error}", file=sys.stderr)
                continue
            photos.append(destination.relative_to(ROOT).as_posix())

        if not photos:
            print(f"SKIP {slug}: sem imagens", file=sys.stderr)
            continue

        catalog.append({
            "slug": item_slug,
            "nome": name,
            "marca": "Davigue",
            "categoria": "Implementos",
            "linha": line,
            "descricao": description,
            "specs": [],
            "fotos": photos,
            "pagina": BASES[0] + slug,
            "oferta": "cotacao",
        })
        imported += 1
        print(f"OK {name}: {len(photos)} fotos")

    CATALOG.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Importados: {imported}")


if __name__ == "__main__":
    main()
