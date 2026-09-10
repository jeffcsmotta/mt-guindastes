/**
 * MT Guindastes — Peças e Acessórios (Caxias do Sul)
 * Motor Onira.fly adaptado ao industrial. Regra tri-modal:
 * peca -> preço de referência + sacola + cotação WhatsApp com CEP;
 * usado -> preço visível + cotação individual (sem sacola);
 * tka_novo -> sempre sob consulta, só cotação. Pagamento só sinalização.
 */

const WHATSAPP_PHONE = '5554999972976';
const CART_KEY = 'mtguindastes_cotacao';

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
  { id: "tka-10.700", nome: "TKA 10.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-10.700", specs: ["CAP. MÁX. 2.750 Kg PESO PRÓPRIO 1.415 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 14,5 m MÁX. HORIZONTAL 11,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "", preco: 0.0, linha: "TRAVE" },
  { id: "tka-100.900", nome: "TKA 100.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-100.900", specs: ["CAP. MÁX. 19.000KG PESO PRÓPRIO 10.200KG EXTENSÕES HIDRÁULICAS 9 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 31,5 MÁX. HORIZONTAL 26,3"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_02.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_100_900_Ej7H2y.png"] },
  { id: "tka-11.900", nome: "TKA 11.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-11.900", specs: ["CAP. MÁX. 5.950 Kg PESO PRÓPRIO 1.560 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 1 MÁX. VERTICAL 17,3 m MÁX. HORIZONTAL 14,2 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_11_900_5wd85H.png"] },
  { id: "tka-12.700", nome: "TKA 12.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-12.700", specs: ["CAP. MÁX. 3.420 Kg PESO PRÓPRIO 1.655 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 14,5 m MÁX. HORIZONTAL 11,3 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_04.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_12_700_CDxGpP.png"] },
  { id: "tka-14.900", nome: "TKA 14.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-14.900", specs: ["CAP. MÁX. 5.700 Kg PESO PRÓPRIO 2.090 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 19,6 m MÁX. HORIZONTAL 16,3 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_05.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_14_900_CTqGG7.png"] },
  { id: "tka-16.700", nome: "TKA 16.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-16.700", specs: ["CAP. MÁX. 3.975 Kg PESO PRÓPRIO 2.425 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 18,8 m MÁX. HORIZONTAL 15,7 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_16_700_6GzCah.png"] },
  { id: "tka-17.900", nome: "TKA 17.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-17.900", specs: ["CAP. MÁX. 7.000 Kg PESO PRÓPRIO 2.420 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 2 MÁX. VERTICAL 19,6 m MÁX. HORIZONTAL 16,3 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_17_900_0iNIdR.png"] },
  { id: "tka-18.900", nome: "TKA 18.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-18.900", specs: ["CAP. MÁX. 7.250 Kg PESO PRÓPRIO 2.570 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 2 MÁX. VERTICAL 22,2 m MÁX. HORIZONTAL 18,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_06.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_18_900_P8EltX.png"] },
  { id: "tka-20.700", nome: "TKA 20.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-20.700", specs: ["CAP. MÁX. 5.060 Kg PESO PRÓPRIO 2.600 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 22,2 m MÁX. HORIZONTAL 18,7 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_07.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_20_700_Rv46iU.png"] },
  { id: "tka-23.700", nome: "TKA 23.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-23.700", specs: ["CAP. MÁX. 9.355 Kg PESO PRÓPRIO 3.010 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 2 MÁX. VERTICAL 21,5 m MÁX. HORIZONTAL 18,2 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_23_700_08YQR0.png"] },
  { id: "tka-30.700", nome: "TKA 30.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-30.700", specs: ["CAP. MÁX. 5.800 Kg PESO PRÓPRIO 3.495 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 2 m MÁX. VERTICAL 21,8 m MÁX. HORIZONTAL 18,3 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_08.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_30_700_CeAfjh.png"] },
  { id: "tka-30.900", nome: "TKA 30.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-30.900", specs: ["CAP. MÁX. 10.250 Kg PESO PRÓPRIO 3.740 Kg EXTENSÕES HIDRÁULICAS 5h EXTENSÕES MANUAIS 3 MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_30_900_04ooMs.png"] },
  { id: "tka-38.900", nome: "TKA 38.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-38.900", specs: ["CAP. MÁX. 18.350 Kg PESO PRÓPRIO 4.425 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 2M MÁX. VERTICAL 24,5 m MÁX. HORIZONTAL 20,9 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_09.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_38_900_EfiG1R.png"] },
  { id: "tka-40.900", nome: "TKA 40.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-40.900", specs: ["CAP. MÁX. 9.500 Kg PESO PRÓPRIO 3.680 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,6 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_10.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_40_900_GQDVSK.png"] },
  { id: "tka-41.900", nome: "TKA 41.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-41.900", specs: ["CAP. MÁX. 9.500 Kg PESO PRÓPRIO 3.680 Kg EXTENSÕES HIDRÁULICAS 5 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 23,8 m MÁX. HORIZONTAL 20,6 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "", preco: 0.0, linha: "TRAVE" },
  { id: "tka-45.700", nome: "TKA 45.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-45.700", specs: ["CAP. MÁX. 10.130 Kg PESO PRÓPRIO 4.425 Kg EXTENSÕES HIDRÁULICAS 4 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 22,8 m MÁX. HORIZONTAL 19 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_11.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_45_700_56oKjJ.png", "assets/tka/g_45_700_0M5WM6.png"] },
  { id: "tka-48.700", nome: "TKA 48.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-48.700", specs: ["CAP. MÁX. 10.840 Kg PESO PRÓPRIO 4.540 Kg EXTENSÕES HIDRÁULICAS 6 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_12.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_48_700_0YrDCV.png", "assets/tka/g_48_700_1qtrFT.png"] },
  { id: "tka-50.700", nome: "TKA 50.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.700", specs: ["CAP. MÁX. 24.000 Kg PESO PRÓPRIO 5.850 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 26,7 m MÁX. HORIZONTAL 22,9 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_50_700_2OiqPO.png"] },
  { id: "tka-50.700-fly", nome: "TKA 50.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.700-FLY", specs: ["CAP. MÁX. 20.880 Kg PESO PRÓPRIO 6.600 Kg EXTENSÕES HIDRÁULICAS 6h + 4h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 30,30m MÁX. HORIZONTAL 27,63m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_13.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_50_700-fly_Id5UgH.png"] },
  { id: "tka-50.900", nome: "TKA 50.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-50.900", specs: ["CAP. MÁX. 11.600 kG PESO PRÓPRIO 4.540 Kg EXTENSÕES HIDRÁULICAS 6 h EXTENSÕES MANUAIS 3 m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_50_900_5U3ygW.png"] },
  { id: "tka-51.900", nome: "TKA 51.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-51.900", specs: ["CAP. MÁX. 11.600 kG PESO PRÓPRIO 4.830 Kg EXTENSÕES HIDRÁULICAS 6h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 25,5 m MÁX. HORIZONTAL 22,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_14.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_51_900_BAeMhD.png"] },
  { id: "tka-6.700", nome: "TKA 6.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-6.700", specs: ["CAP. MÁX. 2.670 Kg PESO PRÓPRIO 1.100 Kg EXTENSÕES HIDRÁULICAS 3 EXTENSÕES MANUAIS 1 MÁX. VERTICAL 13,6 m MÁX. HORIZONTAL 10,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_15.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_6_700_Az4aon.png"] },
  { id: "tka-66.700", nome: "TKA 66.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-66.700", specs: ["CAP. MÁX. 30.190 Kg PESO PRÓPRIO 6.320 Kg EXTENSÕES HIDRÁULICAS 3H EXTENSÕES MANUAIS 7 MÁX. VERTICAL 29,2m MÁX. HORIZONTAL 18,6m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_66_700_33uyTV.png"] },
  { id: "tka-66.700-fly", nome: "TKA 66.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-66.700-FLY", specs: ["CAP. MÁX. 28.220 Kg PESO PRÓPRIO 7.040 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 33,60m MÁX. HORIZONTAL 30,03m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_16.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_66_700-fly_D2HBIf.png"] },
  { id: "tka-72.900", nome: "TKA 72.900 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-72.900", specs: ["CAP. MÁX. 15.000 Kg PESO PRÓPRIO 6.670 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1 m da flly MÁX. VERTICAL 32.7 m MÁX. HORIZONTAL 28.9 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_72_900_7F48FS.png"] },
  { id: "tka-72.900-fly", nome: "TKA 72.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-72.900-FLY", specs: ["CAP. MÁX. 16.000 Kg PESO PRÓPRIO 5.950 Kg EXTENSÕES HIDRÁULICAS 7h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 27.6 m MÁX. HORIZONTAL 24.1 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_72_900-fly_58Bu9D.png"] },
  { id: "tka-8.700", nome: "TKA 8.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-8.700", specs: ["CAP. MÁX. 2.000 Kg PESO PRÓPRIO 1.210 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 1 m MÁX. VERTICAL 13,5 m MÁX. HORIZONTAL 10,2 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_17.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_8_700_H6WREa.png"] },
  { id: "tka-8.700-bx", nome: "TKA 8.700 BX", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-8.700-BX", specs: ["CAP. MÁX. 2.000 Kg PESO PRÓPRIO 1.210 Kg EXTENSÕES HIDRÁULICAS 3 h EXTENSÕES MANUAIS 1 m MÁX. VERTICAL 13,5 m MÁX. HORIZONTAL 10,2 m"], desc: "Guindaste TKA novo — linha BX. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0, linha: "BX", gallery: ["assets/tka/g_8_700-bx_LKBIX9.png"] },
  { id: "tka-80.700", nome: "TKA 80.700", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-80.700", specs: ["CAP. MÁX. 17.100 Kg PESO PRÓPRIO 7.400 Kg EXTENSÕES HIDRÁULICAS 7H EXTENSÕES MANUAIS 3 M MÁX. VERTICAL 28.3 m MÁX. HORIZONTAL 24.06 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_19.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_80_700_DBTrot.png"] },
  { id: "tka-80.700-fly", nome: "TKA 80.700 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-80.700-FLY", specs: ["CAP. MÁX. 16.800 Kg PESO PRÓPRIO 8.125 Kg EXTENSÕES HIDRÁULICAS 7h + 4h da fly EXTENSÕES MANUAIS 1 m da fly MÁX. VERTICAL 32,64 m MÁX. HORIZONTAL 29,07 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_80_700-fly_6glAfh.png"] },
  { id: "tka-9.900", nome: "TKA 9.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-9.900", specs: ["CAP. MÁX. 4.000 Kg PESO PRÓPRIO 1.320 Kg EXTENSÕES HIDRÁULICAS 4 EXTENSÕES MANUAIS 0 MÁX. VERTICAL 13,6 m MÁX. HORIZONTAL 10,7 m"], desc: "Guindaste TKA novo — linha CANIVETE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_20.png", preco: 0.0, linha: "CANIVETE", gallery: ["assets/tka/g_9_900_BNjPVc.png"] },
  { id: "tka-90.900", nome: "TKA 90.900", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-90.900", specs: ["CAP. MÁX. 20.300 Kg PESO PRÓPRIO 7.870 Kg EXTENSÕES HIDRÁULICAS 8h EXTENSÕES MANUAIS 3m MÁX. VERTICAL 31 m MÁX. HORIZONTAL 26.1 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_90_900_0VRXlU.png"] },
  { id: "tka-90.900-fly", nome: "TKA 90.900 com Fly", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-90.900-FLY", specs: ["CAP. MÁX. 19.400 Kg PESO PRÓPRIO 8.930 Kg EXTENSÕES HIDRÁULICAS 8h + 5h da fly EXTENSÕES MANUAIS 1m da fly MÁX. VERTICAL 36.5 m MÁX. HORIZONTAL 32.8 m"], desc: "Guindaste TKA novo — linha TRAVE. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_03.png", preco: 0.0, linha: "TRAVE", gallery: ["assets/tka/g_90_900-fly_0DEjVm.png"] },
  { id: "tka-cesto-10", nome: "Cesto 10", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-10", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0, gallery: ["assets/tka/g_cesto-10_LKBIX9.png"] },
  { id: "tka-cesto-13.5", nome: "Cesto 13.5", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-13.5", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "assets/tka/tka_18.png", preco: 0.0, gallery: ["assets/tka/g_cesto-13_5_LKBIX9.png"] },
  { id: "tka-cesto-15.5", nome: "Cesto 15.5", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-CESTO-15.5", specs: [], desc: "Guindaste TKA novo. Representante autorizado. Cotação consultiva via WhatsApp.", img: "", preco: 0.0 },
  { id: "usado-madal-md300", nome: "Guindauto Madal MD 30.000", colecao: "usado", categoria: "Usados", codigo: "US-MADAL30", specs: ["Ano 2018", "4 Hidráulicas + 2 Manuais", "Cap. 7.5 Ton", "Laudo NR12"], desc: "Equipamento em excelente estado de conservação, revisado recentemente no pátio MT. Acompanha sobrechassi e sapatas hidráulicas estendidas.", img: "assets/tka/tka_07.png", preco: 168000.0 },
  { id: "usado-tka-45700", nome: "Guindaste TKA 45.700 Trave", colecao: "usado", categoria: "Usados", codigo: "US-TKA45", specs: ["Ano 2019", "Linha Trave", "4 Hidráulicas + 3 Manuais", "Revisado Fábrica"], desc: "Guindaste TKA revisado com peças originais. Bomba hidráulica nova e comandos duplos. Pronto para trabalhar e com garantia de procedência.", img: "assets/tka/tka_11.png", preco: 235000.0 },
  { id: "usado-argos-agi20", nome: "Guindauto Argos AGI 20.5", colecao: "usado", categoria: "Usados", codigo: "US-ARGOS20", specs: ["Ano 2020", "Controle Remoto", "3 Hidráulicas + 1 Manual", "Único Dono"], desc: "Guindauto compacto e muito ágil para entregas e canteiro de obras. Rádio controle operacional incluso e sapatas dianteiras e traseiras.", img: "assets/tka/tka_04.png", preco: 182000.0 },
  { id: "usado-palfinger-pk23500", nome: "Guindaste Palfinger PK 23500", colecao: "usado", categoria: "Usados", codigo: "US-PALF23", specs: ["Ano 2016", "Linha Canivete", "5 Hidráulicas", "Alcance 18m"], desc: "Excelente para movimentação em galpões e locais de difícil acesso. Sistema de giro contínuo e cilindros de elevação cromados sem vazamentos.", img: "assets/tka/tka_05.png", preco: 195000.0 },
  { id: "usado-caminhao-vw-tka50", nome: "Caminhão VW 24.280 + TKA 50.700", colecao: "usado", categoria: "Usados", codigo: "US-VWTKA50", specs: ["Conjunto 2017/2018", "Truck 6x2", "Carroceria 7.5m", "Cap. 12 Ton"], desc: "Conjunto completo caminhão + guindaste veicular montado. Caminhão com 182.000 km, mecânica rigorosamente em dia e carroceria metálica reforçada.", img: "assets/tka/tka_12.png", preco: 510000.0 },
  { id: "usado-masal-ms200", nome: "Guindauto Masal MS 200", colecao: "usado", categoria: "Usados", codigo: "US-MASAL20", specs: ["Ano 2015", "3 Hidráulicas + 1 Manual", "Trave Robusta", "Ótimo Custo/Benefício"], desc: "Equipamento robusto para carga e descarga de paletes e materiais de construção. Revisado no pátio, pintura nova e selos em dia.", img: "assets/tka/tka_17.png", preco: 98000.0 },
  { id: "usado-patio", nome: "Estoque Rotativo de Pátio — Chame o Marcelo", colecao: "usado", categoria: "Usados", codigo: "US-PATIO", specs: ["Giro Semanal", "Modelos de 6 a 80 Ton", "Consultoria Direta"], desc: "O estoque de guindastes usados e seminovos da MT tem alta rotatividade semanal. Fale diretamente com o especialista comercial e receba a lista do dia.", img: "assets/tka/tka_09.png", preco: 0.0, cta: true },
];
/*END:PRODUCTS*/

/* Ordem dos pills: TKA diferenciado, Todos (exceto TKA), categorias, Usados */
const PILL_ORDER = [
    { id: '__tka', label: 'TKA Novos', special: true },
    { id: 'Usados', label: 'Usados' },
    { id: 'todos', label: 'Todos' },
    { id: 'Acessórios', label: 'Acessórios' },
    { id: 'Garfos Paleteiros', label: 'Garfos Paleteiros' },
    { id: 'Cestos de Fibra', label: 'Cestos de Fibra' },
    { id: 'Cestos Metálicos', label: 'Cestos Metálicos' },
    { id: 'Linha Comercial', label: 'Linha Comercial' },
    { id: 'Projetos Especiais', label: 'Projetos Especiais' }
];

/* Trilhos estilo streaming: TKA Novos, Peças por família, Usados */
const RAILS = [
    { id: 'tka', title: 'TKA Novos', subtitle: 'Guindastes novos com cotação consultiva direta.', icon: 'truck', match: p => p.colecao === 'tka_novo' },
    { id: 'pecas', title: 'Peças e Acessórios', subtitle: 'Preço de referência + sacola + cotação com CEP.', icon: 'wrench', match: p => p.colecao === 'peca' },
    { id: 'usados', title: 'Usados do pátio', subtitle: 'Giro semanal — chame o Marcelo no WhatsApp.', icon: 'badge-check', match: p => p.colecao === 'usado' }
];

/* Subgrupos ao clicar numa seção: TKA por linha, peças por família */
function groupsFor() {
    if (activeCategory === '__tka') {
        return [
            { id: 'canivete', title: 'Linha Canivete', subtitle: 'Articulação para espaços confinados.', icon: 'truck', match: p => p.colecao === 'tka_novo' && p.linha === 'CANIVETE' },
            { id: 'trave', title: 'Linha Trave', subtitle: 'Estrutura fixa para cargas pesadas.', icon: 'truck', match: p => p.colecao === 'tka_novo' && p.linha === 'TRAVE' },
            { id: 'bx', title: 'Linha BX', subtitle: 'Versatilidade entre móvel e fixo.', icon: 'truck', match: p => p.colecao === 'tka_novo' && p.linha === 'BX' },
            { id: 'cestos-tka', title: 'Cestos TKA', subtitle: 'Elevação de pessoas acoplada ao guindaste.', icon: 'arrow-up-from-line', match: p => p.colecao === 'tka_novo' && p.id.indexOf('tka-cesto') === 0 }
        ];
    }
    if (activeCategory !== 'todos' && activeCategory !== 'Usados') {
        return [{ id: 'cat', title: activeCategory, subtitle: 'Arraste para o lado ou abra a cotação no card.', icon: 'wrench', match: p => p.categoria === activeCategory }];
    }
    if (activeCategory === 'Usados') return [RAILS[2]];
    return RAILS;
}

let cart = [];
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }
let activeCategory = 'todos';
let searchQuery = '';
let modalProduct = null;

function brl(v) {
    return 'R$ ' + Number(v || 0).toFixed(2).replace('.', ',');
}
function digits(s) { return (s || '').replace(/\D/g, ''); }
function maskCep(v) {
    const d = digits(v).substring(0, 8);
    return d.length <= 5 ? d : d.substring(0, 5) + '-' + d.substring(5);
}
function maskCnpj(v) {
    const d = digits(v).substring(0, 14);
    if (d.length <= 2) return d;
    if (d.length <= 5) return d.substring(0, 2) + '.' + d.substring(2);
    if (d.length <= 8) return d.substring(0, 2) + '.' + d.substring(2, 5) + '.' + d.substring(5);
    if (d.length <= 12) return d.substring(0, 2) + '.' + d.substring(2, 5) + '.' + d.substring(5, 8) + '/' + d.substring(8);
    return d.substring(0, 2) + '.' + d.substring(2, 5) + '.' + d.substring(5, 8) + '/' + d.substring(8, 12) + '-' + d.substring(12);
}

function showToast(msg) {
    const box = document.getElementById('toast-container');
    if (!box) return;
    const el = document.createElement('div');
    el.className = 'toast-box';
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(() => { el.classList.add('show'); }, 30);
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 2600);
}

function badgeFor(p) {
    if (p.cta) return { text: 'Pátio · Giro Semanal', cls: 'badge-dark' };
    if (p.colecao === 'tka_novo') return { text: 'TKA Fábrica · Sob Consulta', cls: 'badge-dark' };
    if (p.colecao === 'usado') return { text: 'Seminovo / Usado', cls: 'badge-usado' };
    if (p.preco > 0) return { text: 'Pronta Entrega', cls: 'badge-ready' };
    return { text: 'Sob Consulta', cls: 'badge-consult' };
}

function matchesFilter(p) {
    const q = searchQuery;
    const hay = (p.nome + ' ' + p.codigo + ' ' + p.desc + ' ' + (p.specs || []).join(' ')).toLowerCase();
    if (q && hay.indexOf(q) === -1) return false;
    if (activeCategory === '__tka') return p.colecao === 'tka_novo';
    if (activeCategory === 'todos') return p.colecao !== 'tka_novo';
    return p.categoria === activeCategory;
}

function renderPills() {
    const nav = document.getElementById('category-filters');
    if (!nav) return;
    nav.innerHTML = '';
    PILL_ORDER.forEach(p => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'filter-pill' + (activeCategory === p.id ? ' active' : '') + (p.special ? ' filter-pill-tka' : '');
        b.setAttribute('data-category', p.id);
        b.textContent = p.label;
        b.addEventListener('click', () => {
            activeCategory = p.id;
            renderPills();
            renderCatalog();
        });
        nav.appendChild(b);
    });
}

function cardHtml(p) {
    const b = badgeFor(p);
    const specs = (p.specs || []).length
        ? `<div class="ind-specs">${p.specs.map(s => `<span>${s}</span>`).join('')}</div>` : '';
    const price = p.preco > 0
        ? `<span class="price-label">Referência Técnica</span><div class="price-value price-green">R$ ${Number(p.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div><span class="price-hint">+ frete a combinar</span>`
        : `<div class="price-consult">Valor sob consulta</div>`;
    const media = p.img
        ? `<img src="${p.img}" alt="${p.nome}" class="card-img" loading="lazy" onerror="this.remove()">`
        : `<div class="card-noimg">${p.codigo}</div>`;
    let action;
    if (p.cta) {
        action = `<a class="btn-add-item" style="justify-content:center;text-decoration:none;" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá, Marcelo! Vim pelo site da MT e quero saber o que tem no pátio de usados.')}"><i data-lucide="message-circle" style="width:16px;height:16px;"></i> Chamar no WhatsApp</a>`;
    } else {
        action = `<button type="button" class="btn-add-item" onclick="event.stopPropagation(); window.openQuoteModal('${p.id}')"><i data-lucide="clipboard-list" style="width:16px;height:16px;"></i> Solicitar Cotação</button>`;
    }
    return `
        <div class="menu-card ind-card" onclick="window.openQuoteModal('${p.id}')">
            <div class="ind-card-top"><span class="ind-code">${p.codigo}</span><span class="card-badge ${b.cls}">${b.text}</span></div>
            <div class="card-img-box">${media}</div>
            <div class="card-body">
                <h3 class="card-title">${p.nome}</h3>
                <p class="ind-cat">${p.categoria}${p.linha ? ' · ' + p.linha : ''}</p>
                ${specs}
                <p class="card-desc">${p.desc}</p>
                <div class="card-bottom"><div>${price}</div>${action}</div>
            </div>
        </div>`;
}

/* Grade em dois modos: trilhos streaming (Todos/TKA, sem busca) ou grade (filtro/busca) */
function renderCatalog() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    const all = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).filter(matchesFilter);

    if (!searchQuery) {
        const rails = groupsFor()
            .map(r => ({ def: r, items: all.filter(r.match) }))
            .filter(r => r.items.length);
        grid.className = 'streaming-rails-container';
        grid.innerHTML = rails.map(r => `
            <section class="streaming-rail-section" id="rail-section-${r.def.id}">
                <div class="streaming-rail-header">
                    <div class="rail-header-text">
                        <div class="rail-title-row">
                            <i data-lucide="${r.def.icon}" class="rail-icon"></i>
                            <h2 class="rail-title">${r.def.title}</h2>
                            <span class="rail-count-tag">${r.items.length} ${r.items.length === 1 ? 'opção' : 'opções'}</span>
                        </div>
                        <p class="rail-subtitle">${r.def.subtitle}</p>
                    </div>
                    <div class="rail-nav-controls">
                        <button type="button" class="btn-rail-nav prev" onclick="window.scrollRail('${r.def.id}', -320)" aria-label="Voltar">
                            <i data-lucide="chevron-left" style="width:18px;height:18px;"></i>
                        </button>
                        <button type="button" class="btn-rail-nav next" onclick="window.scrollRail('${r.def.id}', 320)" aria-label="Avançar">
                            <i data-lucide="chevron-right" style="width:18px;height:18px;"></i>
                        </button>
                    </div>
                </div>
                <div class="streaming-rail-track" id="rail-${r.def.id}">${r.items.map(cardHtml).join('')}</div>
            </section>`).join('');
        if (window.lucide) lucide.createIcons();
        initRailDrag();
        return;
    }

    grid.className = 'menu-grid';
    if (!all.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i data-lucide="search-x" style="width: 48px; height: 48px; color: #9CA3AF; margin-bottom: 12px;"></i>
                <h3 style="font-size: 1.2rem;">Nenhum item encontrado</h3>
                <p style="color: #6B7280; font-size: 0.9rem;">Tente outro termo ou fale direto com o Marcelo no WhatsApp.</p>
            </div>`;
        if (window.lucide) lucide.createIcons();
        return;
    }
    grid.innerHTML = all.map(cardHtml).join('');
    if (window.lucide) lucide.createIcons();
}

window.scrollRail = function(railId, offset) {
    const track = document.getElementById('rail-' + railId);
    if (track) track.scrollBy({ left: offset || 320, behavior: 'smooth' });
};

function initRailDrag() {
    document.querySelectorAll('.streaming-rail-track').forEach(track => {
        if (track.dataset.dragInitialized) return;
        track.dataset.dragInitialized = 'true';
        let isDown = false, startX = 0, scrollLeft = 0, hasDragged = false;
        track.addEventListener('mousedown', e => {
            if (e.button !== 0) return;
            isDown = true; hasDragged = false;
            track.classList.add('is-dragging');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });
        track.addEventListener('mouseleave', () => { isDown = false; track.classList.remove('is-dragging'); });
        track.addEventListener('mouseup', () => { isDown = false; track.classList.remove('is-dragging'); });
        track.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const walk = (e.pageX - track.offsetLeft - startX) * 1.8;
            if (Math.abs(walk) > 6) hasDragged = true;
            track.scrollLeft = scrollLeft - walk;
        });
        track.addEventListener('click', e => {
            if (hasDragged) { e.preventDefault(); e.stopPropagation(); hasDragged = false; }
        }, true);
    });
}

/* Modal de cotação: produto CTA abre WhatsApp direto */
window.openQuoteModal = function(id) {
    const p = (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).find(x => x.id === id);
    if (!p) return;
    if (p.cta) {
        window.open('https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent('Olá, Marcelo! Vim pelo site da MT e quero saber o que tem no pátio de usados.'), '_blank');
        return;
    }
    window.closeCart();
    modalProduct = p;
    document.getElementById('modal-img').src = p.img || '';
    document.getElementById('modal-img').style.display = p.img ? '' : 'none';
    document.getElementById('modal-title').textContent = p.nome + ' · ' + p.codigo;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-ref').innerHTML = (p.preco > 0
        ? `Referência da peça: <strong>R$ ${Number(p.preco).toFixed(2).replace('.', ',')}</strong>`
        : `Item <strong>sob consulta</strong> — o Marcelo retorna com valor + frete.`)
        + ((p.gallery || []).length
            ? `<div class="modal-gallery">${p.gallery.map(g => `<a href="${g}" target="_blank" rel="noopener"><img src="${g}" alt="${p.nome} em uso" loading="lazy" onerror="this.parentNode.remove()"></a>`).join('')}</div>
               <p class="modal-gallery-hint">Fotos do equipamento em operação — toque para ampliar.</p>` : '');
    document.getElementById('q-cep').value = '';
    document.getElementById('q-cnpj').value = '';
    document.getElementById('q-nome').value = '';
    refreshModalConfirm();
    document.getElementById('item-modal-overlay').removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('q-cep').focus(), 80);
};

function refreshModalConfirm() {
    const ok = modalProduct && digits(document.getElementById('q-cep').value).length === 8;
    const btn = document.getElementById('modal-confirm');
    document.getElementById('modal-btn-label').textContent = ok ? 'Enviar pelo WhatsApp' : 'Informe o CEP para continuar';
    btn.classList.toggle('btn-disabled', !ok);
}

function modalMessage() {
    const p = modalProduct;
    const lines = ['_cotação via site by Onira.fly_', '', 'Solicitação de Cotação · Peças e Acessórios', '',
        `*1x* ${p.nome} · ${p.codigo}`];
    (p.specs || []).forEach(s => lines.push(`+ ${s}`));
    lines.push(p.preco > 0 ? `*Referência: R$ ${Number(p.preco).toFixed(2).replace('.', ',')}*` : '_Sob consulta_');
    lines.push('', `CEP de entrega: ${document.getElementById('q-cep').value || '—'}`,
        `CNPJ: ${document.getElementById('q-cnpj').value || '—'}`,
        `*${document.getElementById('q-nome').value || '—'}*`, '',
        'Aguardo valor total com frete. Obrigado.', '', '_Enviado pelo site da MT Guindastes_');
    return lines.join('\n');
}

window.closeQuoteModal = function() {
    document.getElementById('item-modal-overlay').setAttribute('hidden', '');
    document.body.style.overflow = 'auto';
    modalProduct = null;
};

/* Prancheta de cotação restrita a peças */
window.addToQuote = function(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || p.colecao !== 'peca') return;
    if (!cart.find(x => x.id === id)) {
        cart.push({ id: p.id, qty: 1 });
        saveCart(); updateCartUI();
        showToast(p.nome + ' adicionado à cotação.');
    } else {
        showToast('Item já consta na prancheta de cotação.');
    }
};

function saveCart() { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function cartDetailed() {
    return cart.map(e => Object.assign({ qty: e.qty }, PRODUCTS.find(p => p.id === e.id))).filter(x => x.nome);
}

function updateCartUI() {
    const items = cartDetailed();
    const count = items.reduce((s, i) => s + i.qty, 0);
    const sub = items.filter(i => i.preco > 0).reduce((s, i) => s + i.preco * i.qty, 0);
    const fmt = v => 'R$ ' + v.toFixed(2).replace('.', ',');
    const cc = document.getElementById('cart-count');
    if (cc) cc.innerText = count;
    const th = document.getElementById('cart-total-header');
    if (th) th.innerText = fmt(sub);
    const st = document.getElementById('cart-subtotal');
    if (st) st.innerText = fmt(sub);
    const gt = document.getElementById('cart-total-price');
    if (gt) gt.innerText = fmt(sub);
    const clear = document.getElementById('cart-clear-header');
    if (clear) clear.style.display = cart.length ? 'inline-flex' : 'none';
    const box = document.getElementById('cart-items-container');
    if (!box) return;
    if (!items.length) {
        box.innerHTML = `<div style="text-align:center; padding:40px 20px; color:#A1A1AA;">
            <i data-lucide="clipboard-list" style="width:48px; height:48px; margin-bottom:12px; opacity:0.4; stroke-width:1.5;"></i>
            <p style="font-weight:700; color:#FFF; margin-bottom:4px; font-family:var(--font-heading); font-size:1.1rem; text-transform:uppercase;">Nenhum item selecionado.</p>
            <p style="font-size:0.85rem; color:#94A3B8;">Adicione peças ou implementos pelos botões “+ Cotação”.</p></div>`;
    } else {
        box.innerHTML = items.map(i => `
            <div class="cart-item">
                <div class="cart-item-info"><h4>${i.nome}</h4>
                    <div class="cart-item-custom-list"><span>• ${i.codigo}${i.preco > 0 ? ' · ' + fmt(i.preco) : ' · sob consulta'}</span></div>
                </div>
                <div class="cart-controls">
                    <button type="button" class="cart-qty-btn" onclick="window.changeQuoteQty('${i.id}', -1)" aria-label="Diminuir">-</button>
                    <span style="font-size:0.88rem; font-weight:800; color:#FFF; min-width:26px; text-align:center;">${i.qty}</span>
                    <button type="button" class="cart-qty-btn" onclick="window.changeQuoteQty('${i.id}', 1)" aria-label="Aumentar">+</button>
                </div>
            </div>`).join('');
    }
    if (window.lucide) lucide.createIcons();
}

window.changeQuoteQty = function(id, d) {
    const e = cart.find(x => x.id === id);
    if (!e) return;
    e.qty += d;
    if (e.qty <= 0) cart = cart.filter(x => x.id !== id);
    saveCart(); updateCartUI();
};

window.openCart = function() {
    window.closeQuoteModal();
    document.getElementById('cart-drawer').classList.add('active', 'open');
    document.getElementById('cart-overlay').classList.add('active', 'open');
    document.body.style.overflow = 'hidden';
};
window.closeCart = function() {
    document.getElementById('cart-drawer').classList.remove('active', 'open');
    document.getElementById('cart-overlay').classList.remove('active', 'open');
    document.body.style.overflow = 'auto';
};

window.askClearCart = function() {
    if (!cart.length) return;
    document.getElementById('confirm-clear-text').innerHTML = `Você vai remover <strong>${cart.length} ${cart.length === 1 ? 'item' : 'itens'}</strong> da cotação.`;
    document.getElementById('confirm-clear').removeAttribute('hidden');
};
window.closeClearModal = function() { document.getElementById('confirm-clear').setAttribute('hidden', ''); };
window.confirmClearCart = function() {
    cart = []; saveCart(); updateCartUI();
    window.closeClearModal();
    showToast('Prancheta de cotação limpa com sucesso!');
};

function drawerMessage() {
    const items = cartDetailed();
    const lines = ['_cotação via site by Onira.fly_', '', 'Solicitação de Cotação · Peças e Acessórios', ''];
    items.forEach(p => {
        lines.push(`*${p.qty}x* ${p.nome} · ${p.codigo}`);
        (p.specs || []).forEach(s => lines.push(`+ ${s}`));
        lines.push(p.preco > 0 ? `*Referência: R$ ${(p.preco * p.qty).toFixed(2).replace('.', ',')}*` : '_Sob consulta_');
        lines.push('');
    });
    lines.push(`CEP de entrega: ${document.getElementById('c-cep').value || '—'}`,
        `CNPJ: ${document.getElementById('c-cnpj').value || '—'}`,
        `*${document.getElementById('c-nome').value || '—'}*`, '',
        'Aguardo valor total com frete. Obrigado.', '', '_Enviado pelo site da MT Guindastes_');
    return lines.join('\n');
}

window.sendQuote = function() {
    if (!cart.length) { showToast('Adicione ao menos uma peça na sacola.'); return; }
    if (digits(document.getElementById('c-cep').value).length !== 8) {
        showToast('Informe o CEP de entrega com 8 dígitos.');
        document.getElementById('c-cep').focus();
        return;
    }
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(drawerMessage())}`, '_blank');
};

/* Header some ao rolar p/ baixo, volta ao topo */
function setupHideHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y <= 0) header.classList.remove('header-hidden');
        else if (y > lastY + 4) header.classList.add('header-hidden');
        else if (y < lastY - 4) header.classList.remove('header-hidden');
        lastY = y;
    }, { passive: true });
}

function setupOniraCta() {
    const cta = document.getElementById('onira-cta');
    const fechar = document.getElementById('onira-cta-close');
    if (!cta) return;
    if (fechar) fechar.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        cta.style.display = 'none';
        try { sessionStorage.setItem('mt_cta_dispensado', 'true'); } catch (err) {}
    });
    try { if (sessionStorage.getItem('mt_cta_dispensado') === 'true') return; } catch (err) {}
    let mostrado = false;
    const mostrar = () => {
        if (!mostrado) { mostrado = true; cta.style.display = 'flex'; if (window.lucide) lucide.createIcons(); }
    };
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && !mostrado) mostrar();
        if (!mostrado) return;
        const dw = document.getElementById('cart-drawer');
        const open = dw && (dw.classList.contains('active') || dw.classList.contains('open'));
        cta.classList.toggle('onira-cta-hidden', !!open);
        cta.classList.toggle('onira-cta-faded', !open && window.scrollY > 150);
    }, { passive: true });
    setTimeout(mostrar, 1200);
}

document.addEventListener('DOMContentLoaded', () => {
    renderPills();
    renderCatalog();
    updateCartUI();
    setupOniraCta();
    setupHideHeader();

    document.getElementById('search-input').addEventListener('input', e => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCatalog();
    });
    document.getElementById('btn-cart-nav').addEventListener('click', window.openCart);
    document.getElementById('cart-overlay').addEventListener('click', window.closeCart);
    document.getElementById('cart-continue').addEventListener('click', window.closeCart);
    document.getElementById('cart-clear-header').addEventListener('click', window.askClearCart);
    document.getElementById('confirm-clear-no').addEventListener('click', window.closeClearModal);
    document.getElementById('confirm-clear-yes').addEventListener('click', window.confirmClearCart);
    document.getElementById('cart-send').addEventListener('click', window.sendQuote);

    document.getElementById('modal-close').addEventListener('click', window.closeQuoteModal);
    document.getElementById('item-modal-overlay').addEventListener('click', e => {
        if (e.target.id === 'item-modal-overlay') window.closeQuoteModal();
    });
    ['q-cep', 'q-cnpj', 'q-nome'].forEach(id => {
        document.getElementById(id).addEventListener('input', e => {
            if (id === 'q-cep') e.target.value = maskCep(e.target.value);
            if (id === 'q-cnpj') e.target.value = maskCnpj(e.target.value);
            refreshModalConfirm();
        });
    });
    document.getElementById('modal-confirm').addEventListener('click', () => {
        if (!modalProduct) return;
        if (digits(document.getElementById('q-cep').value).length !== 8) {
            showToast('Informe o CEP de entrega com 8 dígitos.');
            return;
        }
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(modalMessage())}`, '_blank');
    });
    ['c-cep', 'c-cnpj'].forEach(id => {
        document.getElementById(id).addEventListener('input', e => {
            e.target.value = id === 'c-cep' ? maskCep(e.target.value) : maskCnpj(e.target.value);
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { window.closeQuoteModal(); window.closeCart(); window.closeClearModal(); }
    });
    if (window.lucide) lucide.createIcons();
});
