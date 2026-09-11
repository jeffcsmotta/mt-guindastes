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
- **Conversão:** WhatsApp Click-to-Chat com CEP obrigatório + CNPJ/nome opcionais. Sem pagamento pelo site.
- **Pix:** em avaliação nas peças white-label. Até decisão, `descontoPixPercent = 0` desliga todo bloco Pix da vitrine e do modal.

## Regra comercial e arquitetura (Atualizado)

- **Selo Oficial & Autoridade:** Revendedor Autorizado TKA Guindastes (SC e Litoral RS) com logo original no cabeçalho.
- **Hero de Fábrica:** Carrossel industrial de modelos novos TKA direto de fábrica (TKA 40.900, 45.700, 55.900, 8.700 BX).
- **Fichas Técnicas Dedicadas TKA (`tka-produto.html`):** Gráficos e curvas de carga oficiais, especificações veiculares completas e WhatsApp para estudo de engenharia.
- **Peças & Acessórios MT (Base Angra Metal):** Preço de referência visível + acúmulo deliberado na cotação via Barra Flutuante e Prancheta/Drawer.
- **Usados do Pátio:** Preço visível + galeria de fotos + giro semanal com WhatsApp direto com o Marcelo (sem somar na sacola).
- **Convenção de preço:** `price > 0` = pronta entrega com referência; `price = 0` = sob consulta.

## Fonte versionada

- `catalog_mt.json` — catálogo de peças Angra Metal e ficha de usados.
- `tka-catalog.json` — catálogo técnico de fábrica TKA Guindastes com curvas de carga e fotos oficiais de operação.
- `clientes/mt-guindastes/tka-produto.html` — template de produto TKA padrão fábrica.

## Status atual

`[deploy-pronto]` — Reposicionamento concluído com Selo Oficial TKA, Hero de Ofertas de Fábrica, páginas técnicas dedicadas, reestruturação da vitrine de usados e acessórios Angra, e barra flutuante de acúmulo deliberado.

## Links publicados

- **Produção (Cloudflare Pages):** https://mt-guindastes.pages.dev/
- **Homologação (GitHub Pages):** https://jeffcsmotta.github.io/mt-guindastes/
- **Proposta:** https://jeffcsmotta.github.io/mt-guindastes/proposta.html

> Deploy Cloudflare é via `wrangler pages deploy clientes/mt-guindastes`
> (integração GitHub ainda não vinculada no dashboard).

## Contatos

- **Sócio / Decisor:** Jefferson Motta
- **WhatsApp Comercial:** (54) 99997-2976 (Marcelo)
- **Localização:** Caxias do Sul/RS
- **CNPJ:** 44.652.208/0001-60
