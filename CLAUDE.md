# MT Guindastes — Contexto de Projeto

> Nova seção de Peças e Acessórios para o site institucional.

## O que é

Desenvolvimento e implantação da seção `/pecas` no site institucional da MT Guindastes (revendedora oficial TKA Guindastes em SC/RS), liderada pelo sócio Jefferson Motta. O escopo engloba catálogo estruturado no Framer CMS, checkout expresso via Pix para peças prontas e canal consultivo de cotação via WhatsApp.

## Documentos e Entregáveis

- [Proposta Comercial (HTML)](file:///c:/Users/ADM/onira-labs/proposta-mt-guindastes-pecas.html)
- [Proposta Comercial (PDF)](file:///c:/Users/ADM/onira-labs/proposta-mt-guindastes-pecas.pdf)
- [Script de Automação / Publicação](file:///c:/Users/ADM/onira-labs/build-and-publish.js)

## Stack

- **Site & CMS:** Framer.
- **Conversão:** WhatsApp Click-to-Chat com CEP, CNPJ e nome opcionais. Sem pagamento pelo site.
- **Pix:** em avaliação nas peças white-label. Até decisão, `descontoPixPercent = 0` desliga todo bloco Pix da vitrine e do modal.

## Regra comercial e arquitetura (Atualizado)

- **Selo Oficial & Autoridade:** Revendedor Autorizado TKA Guindastes (SC e Litoral RS) com logo original no cabeçalho.
- **Hero de Fábrica:** Carrossel industrial de modelos novos TKA direto de fábrica (TKA 40.900, 45.700, 55.900, 8.700 BX).
- **Fichas Técnicas Dedicadas TKA (`tka-produto.html`):** Gráficos e curvas de carga oficiais, especificações veiculares completas e WhatsApp para estudo de engenharia.
- **Peças & Acessórios MT (Base Angra Metal):** Preço de referência visível + acúmulo deliberado na cotação via Barra Flutuante e Prancheta/Drawer.
- **Usados do Pátio:** Preço visível + galeria de fotos + giro semanal com WhatsApp direto com o Marcelo (sem somar na sacola).
- **Convenção de preço:** `price > 0` = pronta entrega com referência; `price = 0` = sob consulta.

## Fontes oficiais versionadas

- `tka-catalog.json` — catálogo técnico oficial TKA Guindastes (52 itens: guindastes + cestos, com curvas de carga, fotos e PDFs de fábrica). Gerado via pipeline, não editar à mão.
- `implementos.json` — catálogo de implementos rodoviários MT (11 itens: carretas, reboques, coletores).
- `PRECO ACESSORIOS.xlsx` — precificação oficial de peças e acessórios. Fonte de preço; `price > 0` = pronta entrega com referência, `price = 0` = sob consulta.
- `clientes/mt-guindastes/tka-produto.html` — template de produto TKA padrão fábrica.

> `scripts/_legado/catalog_mt.json` está desativado (histórico). Não usar como fonte.

## Pipeline TKA (`scripts/construir-tka-oficial.py`)

- Fonte da verdade: API de fábrica `https://api-6t25iyvfaa-uc.a.run.app/api/{produtos,cestos}` (textos, specs, fotos, gráficos e PDFs).
- Gera `tka-catalog.json` no schema aprovado (guindastes + cestos, Fly em slug separado) + assets em `assets/tka-oficial/<slug>/` (foto-1..4.webp otimizadas, grafico-de-carga.png/pdf).
- Regras: nenhum número inventado (tudo vem da API); `descricao_fonte=oficial` quando há texto de fábrica, `derivada` quando montada só dos specs; slugs estáveis preservados (40.900, 45.700, 55.900, 8.700bx).
- Uso: `python3 scripts/construir-tka-oficial.py [--skip-download] [--force]`.

## Status atual

`[homologado-aceito]` — Proposta comercial aceita. Layout homologado com Selo Oficial TKA, Hero de Fábrica, páginas técnicas dedicadas (`tka-catalogo.html`, `tka-produto.html`), vitrine de peças e acessórios (Angra Metal), usados do pátio e cotação sem fricção no WhatsApp. Proposta comercial retirada do deploy público.

## Links publicados

- **Produção (Cloudflare Pages):** https://mt-guindastes.pages.dev/
- **Homologação (GitHub Pages):** https://jeffcsmotta.github.io/mt-guindastes/

> Deploy Cloudflare: `npx wrangler pages deploy clientes/mt-guindastes --project-name=mt-guindastes`

## Contatos

- **Sócio / Decisor:** Jefferson Motta
- **WhatsApp Comercial:** (54) 99997-2976 (Marcelo)
- **Localização:** Caxias do Sul/RS
- **CNPJ:** 44.652.208/0001-60
