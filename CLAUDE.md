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

## Regra comercial tri-modal (decisão Jeff)

- **Peça white-label MT:** preço de referência visível + WhatsApp com CEP. Pix desligado até avaliação.
- **Usado:** preço visível + detalhe + WhatsApp com CEP. Sem Pix, sem carrinho somado.
- **TKA novo (representante autorizado):** sempre sob consulta (`preco = 0`). Sem total, sem carrinho, só cotação consultiva.
- **Carrinho:** opcional e restrito a peças, se um dia habilitado. Nunca soma usado ou TKA novo.
- **Convenção de preço:** `price > 0` = pronta entrega com referência; `price = 0` = sob consulta.

## Fonte versionada

- `catalog_mt.json` — catálogo tri-modal (TKA do site + Angra re-marcada MT + ficha de usado). Fonte da verdade no monorepo; Framer CMS como render.

## Status atual

`[proposta-enviada]` — Proposta comercial gerada com escopo técnico e sugestão de valor (R$ 3.800,00). Aguardando retorno de aprovação do cliente para início do setup.

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
