/**
 * MT Guindastes — Vitrine industrial Onira.fly
 * Regra tri-modal: peca/usado com preço -> WhatsApp com CEP;
 * tka_novo sempre sob consulta. Pagamento só sinalização.
 * Sacola ("Minha Cotação") restrita a peças. Zero window.alert().
 */

var WHATSAPP = "5554999972976";
var RAZAO = "MT Guindastes";

/*GENERATED:PRODUCTS*/
var PRODUCTS = [
  { id: "garfo-paleteiro", nome: "Garfo Paleteiro", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: ["1.5 Ton / 2.5 Ton / 3.0 Ton"], desc: "Garfo paleteiro ajustável de alta resistência projetado para movimentação e elevação de cargas paletizadas.", img: "assets/pecas/angra_01.png", preco: 1890.0 },
  { id: "garfo-para-bobcat", nome: "Garfo para Bobcat", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: [], desc: "Garfo paleteiro projetado para engate rápido e movimentação ágil em minicarregadeiras estilo Bobcat.", img: "assets/pecas/angra_02.png", preco: 0.0 },
  { id: "garfo-para-retroescavadeira", nome: "Garfo para Retroescavadeira", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: [], desc: "Acessório de garfos paleteiros para retroescavadeiras, ideal para movimentação de pallets em canteiros de obra.", img: "assets/pecas/angra_02.png", preco: 0.0 },
  { id: "garfo-pega-tubos-tipo-c", nome: "Garfo Pega Tubos Tipo C", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: ["Cap. 2.0 Ton"], desc: "Acessório específico para movimentação segura e precisa de manilhas e tubos de concreto.", img: "assets/pecas/angra_02.png", preco: 0.0 },
  { id: "balancim-de-carga", nome: "Balancim de Carga", colecao: "peca", categoria: "Acessórios", codigo: "AC-MT", specs: ["Cap. 5.0 Ton"], desc: "Trave metálica de içamento projetada para distribuição de peso equilibrada em cargas pesadas e içamentos complexos.", img: "assets/pecas/angra_03.png", preco: 0.0 },
  { id: "suporte-para-big-bag", nome: "Suporte para Big Bag", colecao: "peca", categoria: "Acessórios", codigo: "AC-MT", specs: ["1.0 Ton / 1.2 Ton"], desc: "Suporte em cruz reforçado com ganchos de segurança para transporte estável de sacarias tipo big bag.", img: "assets/pecas/angra_03.png", preco: 2450.0 },
  { id: "pega-postes", nome: "Pega Postes", colecao: "peca", categoria: "Acessórios", codigo: "AC-MT", specs: [], desc: "Pinça mecânica autoajustável projetada para elevação e assentamento vertical de postes cilíndricos.", img: "assets/pecas/angra_04.png", preco: 0.0 },
  { id: "saca-postes-hidraulico", nome: "Saca Postes Hidráulico", colecao: "peca", categoria: "Acessórios", codigo: "AC-MT", specs: [], desc: "Equipamento hidráulico robusto para extração vertical eficiente de postes e estacas.", img: "assets/pecas/angra_04.png", preco: 0.0 },
  { id: "funil-multiuso", nome: "Funil Multiuso", colecao: "peca", categoria: "Acessórios", codigo: "AC-MT", specs: [], desc: "Funil de descarga metálico indicado para ração, grãos, concreto, brita e areia.", img: "assets/pecas/angra_04.png", preco: 0.0 },
  { id: "cesto-de-fibra-1-operador", nome: "Cesto de Fibra — 1 Operador", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MT", specs: ["1 Operador"], desc: "Cesto aéreo de fibra para trabalho em altura de 1 operador, garantindo segurança e isolamento elétrico.", img: "assets/pecas/angra_05.png", preco: 5700.0 },
  { id: "cesto-de-fibra-com-lanca-frontal", nome: "Cesto de Fibra com Lança Frontal", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MT", specs: ["1 ou 2 Operadores"], desc: "Modelo com fixação por lança frontal, ideal para posicionamento rente a fachadas e postes. Suporta até 2 operadores.", img: "assets/pecas/angra_06.png", preco: 0.0 },
  { id: "cesto-de-fibra-2-operadores", nome: "Cesto de Fibra — 2 Operadores", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MT", specs: ["2 Operadores (NR12)"], desc: "Cesto duplo para trabalho em altura com 2 operadores simultâneos, fabricado em fibra de alta resistência.", img: "assets/pecas/angra_07.png", preco: 0.0 },
  { id: "cesto-metalico-acoplado", nome: "Cesto Metálico Acoplado", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-MT", specs: ["1 ou 2 Operadores (NR12)"], desc: "Cesto com estrutura em aço tubular reforçado para acoplamento em guindastes de elevação.", img: "assets/pecas/angra_09.png", preco: 0.0 },
  { id: "cesto-metalico-suspenso", nome: "Cesto Metálico Suspenso", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-MT", specs: ["1 ou 2 Operadores"], desc: "Cesto metálico para suspensão por guinchos de cabo de aço, com grades de proteção reforçadas e portas de acesso.", img: "assets/pecas/angra_10.png", preco: 0.0 },
  { id: "goleiras-pitocos-escudos-comerciais", nome: "Goleiras, Pitocos e Escudos Comerciais", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-MT", specs: [], desc: "Estruturas metálicas de proteção, delimitação de vagas e organização para calçadas e comércios.", img: "assets/pecas/angra_11.png", preco: 0.0 },
  { id: "ralos-canaletas-tampas-grelhas", nome: "Ralos, Canaletas, Tampas e Grelhas", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-MT", specs: [], desc: "Tampas de ferro, grelhas para pista de tráfego, ralos de escoamento e canaletas de drainage pluvial.", img: "assets/pecas/angra_12.png", preco: 0.0 },
  { id: "rebocador-e-carrinhos-especiais", nome: "Rebocador e Carrinhos Especiais", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-MT", specs: [], desc: "Carrinhos para movimentação industrial interna sob medida e rebocador hidráulico de cargas pesadas.", img: "assets/pecas/angra_13.png", preco: 0.0 },
  { id: "escada-industrial-sob-medida", nome: "Escada Industrial sob Medida", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-MT", specs: [], desc: "Escadas industriais e passarelas de acesso metálicas fabricadas sob medida para galpões e indústrias.", img: "assets/pecas/angra_14.png", preco: 0.0 },
  { id: "tka-10.700", nome: "TKA 10.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-10.700", specs: ["CAP. MÁX. 2.750 Kg PESO PRÓPRIO 1.415 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 14,5 m MÁX. HORIZONTAL 11,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_01.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-100.900", nome: "TKA 100.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-100.900", specs: ["CAP. MÁX. 19.000KG PESO PRÓPRIO 10.200KG EXTENSÕES HIDRÁULICAS 9 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 31,5 MÁX. HORIZONTAL 26,3"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_02.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-11.900", nome: "TKA 11.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-11.900", specs: ["CAP. MÁX. 5.950 Kg PESO PRÓPRIO 1.560 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 1 MÁX. VERTICAL 17,3 m MÁX. HORIZONTAL 14,2 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-12.700", nome: "TKA 12.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-12.700", specs: ["CAP. MÁX. 3.420 Kg PESO PRÓPRIO 1.655 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 14,5 m MÁX. HORIZONTAL 11,3 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_04.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-14.900", nome: "TKA 14.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-14.900", specs: ["CAP. MÁX. 5.700 Kg PESO PRÓPRIO 2.090 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 19,6 m MÁX. HORIZONTAL 16,3 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_05.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-16.700", nome: "TKA 16.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-16.700", specs: ["CAP. MÁX. 3.975 Kg PESO PRÓPRIO 2.425 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 18,8 m MÁX. HORIZONTAL 15,7 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-17.900", nome: "TKA 17.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-17.900", specs: ["CAP. MÁX. 7.000 Kg PESO PRÓPRIO 2.420 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 19,6 m MÁX. HORIZONTAL 16,3 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-18.900", nome: "TKA 18.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-18.900", specs: ["CAP. MÁX. 7.250 Kg PESO PRÓPRIO 2.570 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 2 MÁX. VERTICAL 22,2 m MÁX. HORIZONTAL 18,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_06.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-20.700", nome: "TKA 20.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-20.700", specs: ["CAP. MÁX. 5.060 Kg PESO PRÓPRIO 2.600 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 22,2 m MÁX. HORIZONTAL 18,7 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_07.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-23.700", nome: "TKA 23.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-23.700", specs: ["CAP. MÁX. 9.355 Kg PESO PRÓPRIO 3.010 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 2 MÁX. VERTICAL 21,5 m MÁX. HORIZONTAL 18,2 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-30.700", nome: "TKA 30.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-30.700", specs: ["CAP. MÁX. 5.800 Kg PESO PRÓPRIO 3.495 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 21,8 m MÁX. HORIZONTAL 18,3 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_08.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-30.900", nome: "TKA 30.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-30.900", specs: ["CAP. MÁX. 10.250 Kg PESO PRÓPRIO 3.740 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 3 MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-38.900", nome: "TKA 38.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-38.900", specs: ["CAP. MÁX. 18.350 Kg PESO PRÓPRIO 4.425 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 2M MÁX. VERTICAL 24,5 m MÁX. HORIZONTAL 20,9 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_09.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-40.900", nome: "TKA 40.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-40.900", specs: ["CAP. MÁX. 9.500 Kg PESO PRÓPRIO 3.680 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,6 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_10.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-41.900", nome: "TKA 41.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-41.900", specs: ["CAP. MÁX. 9.500 Kg PESO PRÓPRIO 3.680 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,6 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_01.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-45.700", nome: "TKA 45.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-45.700", specs: ["CAP. MÁX. 10.130 Kg PESO PRÓPRIO 4.425 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 22,8 m MÁX. HORIZONTAL 19 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_11.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-48.700", nome: "TKA 48.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-48.700", specs: ["CAP. MÁX. 10.840 Kg PESO PRÓPRIO 4.540 Kg EXTENSÕES HIDRÁULICAS 6 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_12.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-50.700", nome: "TKA 50.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.700", specs: ["CAP. MÁX. 24.000 Kg PESO PRÓPRIO 5.850 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 26,7 m MÁX. HORIZONTAL 22,9 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-50.700-fly", nome: "TKA 50.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.700-FLY", specs: ["CAP. MÁX. 20.880 Kg PESO PRÓPRIO 6.600 Kg EXTENSÕES HIDRÁULICAS 6h + 4h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 30,30m MÁX. HORIZONTAL 27,63m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_13.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-50.900", nome: "TKA 50.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.900", specs: ["CAP. MÁX. 11.600 kG PESO PRÓPRIO 4.540 Kg EXTENSÕES HIDRÁULICAS 6 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-51.900", nome: "TKA 51.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-51.900", specs: ["CAP. MÁX. 11.600 kG PESO PRÓPRIO 4.830 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_14.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-6.700", nome: "TKA 6.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-6.700", specs: ["CAP. MÁX. 2.670 Kg PESO PRÓPRIO 1.100 Kg EXTENSÕES HIDRÁULICAS 3 EXTENSÕES MANUAIS 1 MÁX. VERTICAL 13,6 m MÁX. HORIZONTAL 10,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_15.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-66.700", nome: "TKA 66.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-66.700", specs: ["CAP. MÁX. 30.190 Kg PESO PRÓPRIO 6.320 Kg EXTENSÕES HIDRÁULICAS 3H EXTENSÕES MANUAIS 7 MÁX. VERTICAL 29,2m MÁX. HORIZONTAL 18,6m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-66.700-fly", nome: "TKA 66.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-66.700-FLY", specs: ["CAP. MÁX. 28.220 Kg PESO PRÓPRIO 7.040 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 33,60m MÁX. HORIZONTAL 30,03m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_16.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-72.900", nome: "TKA 72.900 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-72.900", specs: ["CAP. MÁX. 15.000 Kg PESO PRÓPRIO 6.670 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1 m da flly MÁX. VERTICAL 32.7 m MÁX. HORIZONTAL 28.9 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-72.900-fly", nome: "TKA 72.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-72.900-FLY", specs: ["CAP. MÁX. 16.000 Kg PESO PRÓPRIO 5.950 Kg EXTENSÕES HIDRÁULICAS 7h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 27.6 m MÁX. HORIZONTAL 24.1 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-8.700", nome: "TKA 8.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-8.700", specs: ["CAP. MÁX. 2.000 Kg PESO PRÓPRIO 1.210 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 1 m MÁX. VERTICAL 13,5 m MÁX. HORIZONTAL 10,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_17.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-8.700-bx", nome: "TKA 8.700 BX", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-8.700-BX", specs: ["CAP. MÁX. 2.000 Kg PESO PRÓPRIO 1.210 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 1 m MÁX. VERTICAL 13,5 m MÁX. HORIZONTAL 10,2 m"], desc: "Guindaste TKA novo — linha BX. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0, linha: "BX" },
  { id: "tka-80.700", nome: "TKA 80.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-80.700", specs: ["CAP. MÁX. 17.100 Kg PESO PRÓPRIO 7.400 Kg EXTENSÕES HIDRÁULICAS 7H EXTENSÕES MANUAIS 3 M MÁX. VERTICAL 28.3 m MÁX. HORIZONTAL 24.06 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_19.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-80.700-fly", nome: "TKA 80.700 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-80.700-FLY", specs: ["CAP. MÁX. 16.800 Kg PESO PRÓPRIO 8.125 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1 m da fly MÁX. VERTICAL 32,64 m MÁX. HORIZONTAL 29,07 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-9.900", nome: "TKA 9.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-9.900", specs: ["CAP. MÁX. 4.000 Kg PESO PRÓPRIO 1.320 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 0 MÁX. VERTICAL 13,6 m MÁX. HORIZONTAL 10,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_20.png", preco: 0.0, linha: "CANIVETE" },
  { id: "tka-90.900", nome: "TKA 90.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-90.900", specs: ["CAP. MÁX. 20.300 Kg PESO PRÓPRIO 7.870 Kg EXTENSÕES HIDRÁULICAS 8h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 31 m MÁX. HORIZONTAL 26.1 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-90.900-fly", nome: "TKA 90.900 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-90.900-FLY", specs: ["CAP. MÁX. 19.400 Kg PESO PRÓPRIO 8.930 Kg EXTENSÕES HIDRÁULICAS 8h + 5h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 36.5 m MÁX. HORIZONTAL 32.8 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE" },
  { id: "tka-cesto-10", nome: "Cesto 10", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-10", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0 },
  { id: "tka-cesto-13.5", nome: "Cesto 13.5", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-13.5", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0 },
  { id: "tka-cesto-15.5", nome: "Cesto 15.5", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-15.5", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_01.png", preco: 0.0 },
  { id: "usado-patio", nome: "Guindastes usados — estoque do pátio", colecao: "usado", categoria: "Usados", codigo: "PATIO", specs: [], desc: "O giro do pátio muda toda semana. Chame o Marcelo e receba fotos, ano e valor do que está disponível.", img: "", preco: 0.0, cta: true },
];
/*END:PRODUCTS*/

var CATEGORIES = ["Todos", "Garfos Paleteiros", "Acessórios", "Cestos de Fibra", "Cestos Metálicos", "Linha Comercial", "Projetos Especiais", "TKA Novos", "Usados"];
var DISP_OPTIONS = ["Todas", "Pronta entrega", "Sob consulta"];
var LINHA_OPTIONS = ["Todas", "TRAVE", "CANIVETE", "BX"];

/* ---------- utils ---------- */
function $(id) { return document.getElementById(id); }
function brl(v) { return v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function digits(s) { return (s || "").replace(/\D/g, ""); }
function maskCep(raw) {
  var d = digits(raw).substring(0, 8);
  return d.length <= 5 ? d : d.substring(0, 5) + "-" + d.substring(5);
}
function maskCnpj(raw) {
  var d = digits(raw).substring(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return d.substring(0, 2) + "." + d.substring(2);
  if (d.length <= 8) return d.substring(0, 2) + "." + d.substring(2, 5) + "." + d.substring(5);
  if (d.length <= 12) return d.substring(0, 2) + "." + d.substring(2, 5) + "." + d.substring(5, 8) + "/" + d.substring(8);
  return d.substring(0, 2) + "." + d.substring(2, 5) + "." + d.substring(5, 8) + "/" + d.substring(8, 12) + "-" + d.substring(12);
}
function toast(msg) {
  var t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(t._timer);
  t._timer = setTimeout(function () { t.hidden = true; }, 2600);
}
function badgeFor(p) {
  if (p.cta) return { text: "Pátio · giro semanal", cls: "dark" };
  if (p.colecao === "tka_novo") return { text: "TKA novo · sob consulta", cls: "dark" };
  if (p.preco > 0) return { text: "Pronta entrega", cls: "ready" };
  return { text: "Sob consulta", cls: "consult" };
}

/* ---------- estado ---------- */
var state = { search: "", category: "Todos", disp: "Todas", linha: "Todas", sacola: [], modalProduct: null };

/* ---------- render: categorias ---------- */
function renderCategories() {
  var nav = $("categories");
  nav.innerHTML = "";
  CATEGORIES.forEach(function (c) {
    var b = document.createElement("button");
    b.className = "pill" + (state.category === c ? " active" : "");
    b.textContent = c;
    b.onclick = function () { state.category = c; renderCategories(); renderGrid(); };
    nav.appendChild(b);
  });
}

/* ---------- render: grade ---------- */
function filtered() {
  var q = state.search.toLowerCase();
  return PRODUCTS.filter(function (p) {
    var okCat = state.category === "Todos" || p.categoria === state.category;
    var pronta = p.preco > 0;
    var okDisp = state.disp === "Todas" ||
      (state.disp === "Pronta entrega" ? pronta : !pronta);
    var okLinha = state.linha === "Todas" || (p.linha || "") === state.linha;
    var hay = (p.nome + " " + p.codigo + " " + p.desc + " " + p.specs.join(" ")).toLowerCase();
    return okCat && okDisp && okLinha && (!q || hay.indexOf(q) !== -1);
  });
}

function cardHtml(p) {
  var b = badgeFor(p);
  var price = p.preco > 0
    ? '<p class="price">R$ ' + brl(p.preco) + '</p><p class="price-hint">referência + frete</p>'
    : '<p class="price-consult">Valor sob consulta</p>';
  var specs = p.specs.length
    ? '<div class="specs">' + p.specs.map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</div>"
    : "";
  var media = p.img
    ? '<img class="card-photo" src="' + p.img + '" alt="' + p.nome + '" loading="lazy" onerror="this.remove()" />'
    : "";
  var actions;
  if (p.cta) {
    actions = '<div class="card-actions"><a class="btn btn-primary" style="flex:1;justify-content:center" target="_blank" rel="noopener" href="https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent("Olá, Marcelo! Vim pelo site da MT e quero saber o que tem no pátio de usados.") + '">Chamar no WhatsApp</a></div>';
  } else {
    var addBtn = p.colecao === "peca"
      ? '<button class="btn btn-ghost" data-add="' + p.id + '">+ Sacola</button>'
      : "";
    actions = '<div class="card-actions"><button class="btn btn-primary" data-quote="' + p.id + '">Solicitar cotação</button>' + addBtn + "</div>";
  }
  return (
    '<article class="card">' +
      '<div class="card-media">' + media + '<span class="card-code">' + p.codigo + '</span>' +
      '<span class="badge ' + b.cls + '">' + b.text + "</span></div>" +
      '<div class="card-body"><h3>' + p.nome + "</h3>" +
      '<p class="card-cat">' + p.categoria + (p.linha ? " · " + p.linha : "") + "</p>" +
      specs +
      '<p class="card-desc">' + p.desc + "</p>" +
      price + actions +
      "</div></article>"
  );
}

function renderGrid() {
  var list = filtered();
  var grid = $("grid");
  grid.innerHTML = list.map(cardHtml).join("");
  $("empty").hidden = list.length > 0;
  grid.querySelectorAll("[data-quote]").forEach(function (btn) {
    btn.onclick = function () { openModal(btn.getAttribute("data-quote")); };
  });
  grid.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.onclick = function () {
      var p = PRODUCTS.find(function (x) { return x.id === btn.getAttribute("data-add"); });
      if (!state.sacola.find(function (x) { return x.id === p.id; })) state.sacola.push(p);
      updateCount();
      toast(p.nome + " entrou na sacola.");
    };
  });
  if (window.lucide) lucide.createIcons();
}

/* ---------- sacola ---------- */
function updateCount() { $("quote-count").textContent = state.sacola.length; }

function openDrawer() {
  closeModal();
  var box = $("drawer-items");
  box.innerHTML = state.sacola.length
    ? state.sacola.map(function (p) {
        return '<div class="drawer-item"><div><strong>' + p.nome + '</strong><br /><small>' + p.codigo +
          (p.preco > 0 ? " · R$ " + brl(p.preco) : " · sob consulta") + "</small></div>" +
          '<button class="drawer-rm" data-rm="' + p.id + '" aria-label="Remover">×</button></div>';
      }).join("")
    : '<p class="drawer-note">Sacola vazia. Adicione peças pelos botões “+ Sacola”.</p>';
  box.querySelectorAll("[data-rm]").forEach(function (btn) {
    btn.onclick = function () {
      state.sacola = state.sacola.filter(function (x) { return x.id !== btn.getAttribute("data-rm"); });
      updateCount(); openDrawer();
    };
  });
  var sub = state.sacola.filter(function (p) { return p.preco > 0; }).reduce(function (a, p) { return a + p.preco; }, 0);
  var nConsult = state.sacola.filter(function (p) { return !(p.preco > 0); }).length;
  var totalEl = $("drawer-total");
  totalEl.hidden = !state.sacola.length;
  totalEl.innerHTML = state.sacola.length
    ? "<span>Referência das peças: <strong>R$ " + brl(sub) + "</strong></span>" +
      (nConsult ? "<small> + " + nConsult + " item(ns) sob consulta</small>" : "") +
      "<small>Frete a combinar · sem cobrança pelo site</small>"
    : "";
  $("drawer").hidden = false;
  $("drawer-overlay").hidden = false;
  refreshDrawerSend();
}
function closeDrawer() { $("drawer").hidden = true; $("drawer-overlay").hidden = true; }

function drawerMessage() {
  var cep = $("drawer-cep").value || "—";
  var cnpj = $("drawer-cnpj").value || "—";
  var nome = $("drawer-nome").value || "—";
  var lines = ["_cotação via site by Onira.fly_", "", "Solicitação de Cotação · Peças e Acessórios", ""];
  state.sacola.forEach(function (p) {
    lines.push("*1x* " + p.nome + " · " + p.codigo);
    if (p.specs.length) lines.push(p.specs.join(" / "));
    lines.push(p.preco > 0 ? "*Referência: R$ " + brl(p.preco) + "*" : "_Sob consulta_");
    lines.push("");
  });
  lines.push("CEP de entrega: " + cep, "CNPJ: " + cnpj, "*" + nome + "*", "",
    "Aguardo valor total com frete. Obrigado.", "", "_Enviado pelo site da " + RAZAO + "_");
  return lines.join("\n");
}
function refreshDrawerSend() {
  var ok = state.sacola.length > 0 && digits($("drawer-cep").value).length === 8;
  var a = $("drawer-send");
  a.href = ok ? "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(drawerMessage()) : "#";
  a.classList.toggle("btn-disabled", !ok);
  a.textContent = ok ? "Enviar cotação no WhatsApp" : "Informe o CEP para continuar";
}

/* ---------- modal individual ---------- */
function openModal(id) {
  var p = PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) { toast("Item não encontrado."); return; }
  closeDrawer();
  state.modalProduct = p;
  $("modal-product").textContent = p.nome + " · " + p.codigo;
  $("modal-ref").innerHTML = p.preco > 0
    ? "Referência da peça: <strong>R$ " + brl(p.preco) + "</strong>"
    : "Item <strong>sob consulta</strong> — o Marcelo retorna com valor + frete.";
  $("modal-cep").value = ""; $("modal-cnpj").value = ""; $("modal-nome").value = "";
  $("modal-overlay").hidden = false;
  refreshModalSend();
  setTimeout(function () { $("modal-cep").focus(); }, 60);
}
function closeModal() { $("modal-overlay").hidden = true; state.modalProduct = null; }

function modalMessage() {
  var p = state.modalProduct;
  var cep = $("modal-cep").value || "—";
  var cnpj = $("modal-cnpj").value || "—";
  var nome = $("modal-nome").value || "—";
  var lines = ["_cotação via site by Onira.fly_", "", "Solicitação de Cotação · Peças e Acessórios", "",
    "*1x* " + p.nome + " · " + p.codigo];
  if (p.specs.length) lines.push(p.specs.join(" / "));
  lines.push(p.preco > 0 ? "*Referência: R$ " + brl(p.preco) + "*" : "_Sob consulta_");
  lines.push("", "CEP de entrega: " + cep, "CNPJ: " + cnpj, "*" + nome + "*", "",
    "Aguardo valor total com frete. Obrigado.", "", "_Enviado pelo site da " + RAZAO + "_");
  return lines.join("\n");
}
function refreshModalSend() {
  var ok = state.modalProduct && digits($("modal-cep").value).length === 8;
  var a = $("modal-send");
  a.href = ok ? "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(modalMessage()) : "#";
  a.classList.toggle("btn-disabled", !ok);
  a.textContent = ok ? "Enviar pelo WhatsApp" : "Informe o CEP para continuar";
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  renderCategories();
  renderGrid();
  updateCount();

  $("search").addEventListener("input", function (e) { state.search = e.target.value; renderGrid(); });

  var dispSel = $("filter-disp"), linhaSel = $("filter-linha");
  DISP_OPTIONS.forEach(function (o) { dispSel.add(new Option(o, o)); });
  LINHA_OPTIONS.forEach(function (o) { linhaSel.add(new Option(o, o)); });
  dispSel.onchange = function () { state.disp = dispSel.value; renderGrid(); };
  linhaSel.onchange = function () { state.linha = linhaSel.value; renderGrid(); };

  $("quote-open").onclick = openDrawer;
  $("quote-close").onclick = closeDrawer;
  $("drawer-overlay").onclick = closeDrawer;
  ["drawer-cep", "drawer-cnpj", "drawer-nome"].forEach(function (id) {
    $(id).addEventListener("input", function (e) {
      if (id === "drawer-cep") e.target.value = maskCep(e.target.value);
      if (id === "drawer-cnpj") e.target.value = maskCnpj(e.target.value);
      refreshDrawerSend();
    });
  });
  $("drawer-send").addEventListener("click", function (e) {
    if (this.classList.contains("btn-disabled")) e.preventDefault();
  });

  $("modal-close").onclick = closeModal;
  $("modal-overlay").addEventListener("click", function (e) { if (e.target === this) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeModal(); closeDrawer(); } });
  ["modal-cep", "modal-cnpj", "modal-nome"].forEach(function (id) {
    $(id).addEventListener("input", function (e) {
      if (id === "modal-cep") e.target.value = maskCep(e.target.value);
      if (id === "modal-cnpj") e.target.value = maskCnpj(e.target.value);
      refreshModalSend();
    });
  });
  $("modal-send").addEventListener("click", function (e) {
    if (this.classList.contains("btn-disabled")) e.preventDefault();
  });

  /* widget proposta retrátil */
  var cta = $("onira-cta");
  cta.querySelector(".onira-cta-close").onclick = function () { cta.classList.toggle("collapsed"); };
  var scrollT;
  window.addEventListener("scroll", function () {
    cta.classList.add("scrolling");
    clearTimeout(scrollT);
    scrollT = setTimeout(function () { cta.classList.remove("scrolling"); }, 400);
  }, { passive: true });
});
