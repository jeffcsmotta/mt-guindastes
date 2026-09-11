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
  { id: "garfo-paleteiro", nome: "Garfo Paleteiro", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: ["1.5 Ton / 2.5 Ton / 3.0 Ton"], desc: "Garfo paleteiro ajustável de alta resistência projetado para movimentação e elevação de cargas paletizadas. Fabricação padrão Angra Metal.", img: "assets/pecas/angra_01.png", gallery: ["assets/pecas/angra_01.png", "assets/pecas/angra_02.png"], preco: 1890.0 },
  { id: "garfo-para-bobcat", nome: "Garfo para Bobcat", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-BOBCAT-MT", specs: ["Engate Rápido Mini"], desc: "Garfo paleteiro projetado para engate rápido e movimentação ágil em minicarregadeiras estilo Bobcat.", img: "assets/pecas/angra_02.png", gallery: ["assets/pecas/angra_02.png"], preco: 0.0 },
  { id: "garfo-para-retroescavadeira", nome: "Garfo para Retroescavadeira", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-RETRO-MT", specs: ["Adaptável Concha"], desc: "Acessório de garfos paleteiros para retroescavadeiras, ideal para movimentação de pallets em canteiros de obra.", img: "assets/pecas/angra_02.png", gallery: ["assets/pecas/angra_02.png"], preco: 0.0 },
  { id: "garfo-pega-tubos-tipo-c", nome: "Garfo Pega Tubos Tipo C", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-TUBOC-MT", specs: ["Cap. 2.0 Ton"], desc: "Acessório específico para movimentação segura e precisa de manilhas e tubos de concreto.", img: "assets/pecas/angra_02.png", gallery: ["assets/pecas/angra_02.png"], preco: 0.0 },
  { id: "balancim-de-carga", nome: "Balancim de Carga", colecao: "peca", categoria: "Acessórios", codigo: "AC-BALANCIM-MT", specs: ["Cap. 5.0 Ton"], desc: "Trave metálica de içamento projetada para distribuição de peso equilibrada em cargas pesadas e içamentos complexos.", img: "assets/pecas/angra_03.png", gallery: ["assets/pecas/angra_03.png"], preco: 0.0 },
  { id: "suporte-para-big-bag", nome: "Suporte para Big Bag", colecao: "peca", categoria: "Acessórios", codigo: "AC-BIGBAG-MT", specs: ["1.0 Ton / 1.2 Ton"], desc: "Suporte em cruz reforçado com ganchos de segurança para transporte estável de sacarias tipo big bag.", img: "assets/pecas/angra_03.png", gallery: ["assets/pecas/angra_03.png"], preco: 2450.0 },
  { id: "pega-postes", nome: "Pega Postes", colecao: "peca", categoria: "Acessórios", codigo: "AC-POSTE-MT", specs: ["Pinça Mecânica Autoajustável"], desc: "Pinça mecânica autoajustável projetada para elevação e assentamento vertical de postes cilíndricos.", img: "assets/pecas/angra_04.png", gallery: ["assets/pecas/angra_04.png"], preco: 0.0 },
  { id: "saca-postes-hidraulico", nome: "Saca Postes Hidráulico", colecao: "peca", categoria: "Acessórios", codigo: "AC-SACAPOSTE-MT", specs: ["Cilindro Hidráulico Integrado"], desc: "Equipamento hidráulico robusto para extração vertical eficiente de postes e estacas.", img: "assets/pecas/angra_04.png", gallery: ["assets/pecas/angra_04.png"], preco: 0.0 },
  { id: "funil-multiuso", nome: "Funil Multiuso", colecao: "peca", categoria: "Acessórios", codigo: "AC-FUNIL-MT", specs: ["Descarga Metálica"], desc: "Funil de descarga metálico indicado para ração, grãos, concreto, brita e areia.", img: "assets/pecas/angra_04.png", gallery: ["assets/pecas/angra_04.png"], preco: 0.0 },
  { id: "cesto-de-fibra-1-operador", nome: "Cesto de Fibra — 1 Operador", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MT1", specs: ["1 Operador NR12", "Isolamento 46kV"], desc: "Cesto aéreo de fibra para trabalho em altura de 1 operador, garantindo segurança e isolamento elétrico segundo NR12.", img: "assets/pecas/angra_05.png", gallery: ["assets/pecas/angra_05.png", "assets/pecas/angra_06.png"], preco: 5700.0 },
  { id: "cesto-de-fibra-com-lanca-frontal", nome: "Cesto de Fibra com Lança Frontal", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MTF", specs: ["Lança Frontal", "Conforme NR12"], desc: "Modelo com fixação por lança frontal, ideal para posicionamento rente a fachadas e postes. Suporta até 2 operadores.", img: "assets/pecas/angra_06.png", gallery: ["assets/pecas/angra_06.png"], preco: 0.0 },
  { id: "cesto-de-fibra-2-operadores", nome: "Cesto de Fibra — 2 Operadores", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-MT2", specs: ["2 Operadores NR12", "Alta Carga"], desc: "Cesto duplo para trabalho em altura com 2 operadores simultâneos, fabricado em fibra de alta resistência conforme NR12.", img: "assets/pecas/angra_07.png", gallery: ["assets/pecas/angra_07.png", "assets/pecas/angra_08.png"], preco: 0.0 },
  { id: "cesto-metalico-acoplado", nome: "Cesto Metálico Acoplado", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-MTA", specs: ["1 ou 2 Operadores NR12", "Estrutura Tubular"], desc: "Cesto com estrutura em aço tubular reforçado para acoplamento em guindastes veiculares.", img: "assets/pecas/angra_09.png", gallery: ["assets/pecas/angra_09.png"], preco: 0.0 },
  { id: "cesto-metalico-suspenso", nome: "Cesto Metálico Suspenso", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-MTS", specs: ["Suspensão por Cabo", "Porta de Segurança"], desc: "Cesto metálico para suspensão por guinchos de cabo de aço, com grades de proteção reforçadas e portas de acesso.", img: "assets/pecas/angra_10.png", gallery: ["assets/pecas/angra_10.png"], preco: 0.0 },
  { id: "goleiras-pitocos-escudos-comerciais", nome: "Goleiras, Pitocos e Escudos Comerciais", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-MT1", specs: ["Proteção de Fachadas", "Aço Galvanizado"], desc: "Estruturas metálicas de proteção, delimitação de vagas e organização para calçadas e postos de combustível.", img: "assets/pecas/angra_11.png", gallery: ["assets/pecas/angra_11.png"], preco: 0.0 },
  { id: "ralos-canaletas-tampas-grelhas", nome: "Ralos, Canaletas, Tampas e Grelhas", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-MT2", specs: ["Piso Pesado", "Drenagem Pluvial"], desc: "Tampas de ferro, grelhas para pista de tráfego pesado, ralos de escoamento e canaletas de drenagem industrial.", img: "assets/pecas/angra_12.png", gallery: ["assets/pecas/angra_12.png"], preco: 0.0 },
  { id: "rebocador-e-carrinhos-especiais", nome: "Rebocador e Carrinhos Especiais", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-MT1", specs: ["Até 10 Ton", "Sob Medida"], desc: "Carrinhos para movimentação industrial interna sob medida e rebocador hidráulico de cargas pesadas em comboio.", img: "assets/pecas/angra_13.png", gallery: ["assets/pecas/angra_13.png"], preco: 0.0 },
  { id: "escada-industrial-sob-medida", nome: "Escada Industrial sob Medida", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-MT2", specs: ["Guarda-Corpo NR12", "Passarela Industrial"], desc: "Escadas industriais e passarelas de acesso metálicas fabricadas sob medida para galpões, silos e indústrias.", img: "assets/pecas/angra_14.png", gallery: ["assets/pecas/angra_14.png"], preco: 0.0 },
  { id: "usado-madal-md300", nome: "Guindauto Madal MD 30.000", colecao: "usado", categoria: "Usados", codigo: "US-MADAL30", specs: ["Ano 2018", "4 Hidráulicas + 2 Manuais", "Cap. 7.5 Ton", "Laudo NR12"], desc: "Equipamento em excelente estado de conservação, revisado recentemente no pátio MT. Acompanha sobrechassi e sapatas hidráulicas estendidas.", img: "assets/tka/tka_07.png", gallery: ["assets/tka/tka_07.png", "assets/tka/g_20_700_Rv46iU.png"], preco: 168000.0 },
  { id: "usado-tka-45700", nome: "Guindaste TKA 45.700 Trave", colecao: "usado", categoria: "Usados", codigo: "US-TKA45", specs: ["Ano 2019", "Linha Trave", "4 Hidráulicas + 3 Manuais", "Revisado Fábrica"], desc: "Guindaste TKA revisado com peças originais. Bomba hidráulica nova e comandos duplos. Pronto para trabalhar e com garantia de procedência.", img: "assets/tka/tka_11.png", gallery: ["assets/tka/tka_11.png", "assets/tka/g_45_700_56oKjJ.png"], preco: 235000.0 },
  { id: "usado-argos-agi20", nome: "Guindauto Argos AGI 20.5", colecao: "usado", categoria: "Usados", codigo: "US-ARGOS20", specs: ["Ano 2020", "Controle Remoto", "3 Hidráulicas + 1 Manual", "Único Dono"], desc: "Guindauto compacto e muito ágil para entregas e canteiro de obras. Rádio controle operacional incluso e sapatas dianteiras e traseiras.", img: "assets/tka/tka_04.png", gallery: ["assets/tka/tka_04.png", "assets/tka/g_12_700_CDxGpP.png"], preco: 182000.0 },
  { id: "usado-palfinger-pk23500", nome: "Guindaste Palfinger PK 23500", colecao: "usado", categoria: "Usados", codigo: "US-PALF23", specs: ["Ano 2016", "Linha Canivete", "5 Hidráulicas", "Alcance 18m"], desc: "Excelente para movimentação em galpões e locais de difícil acesso. Sistema de giro contínuo e cilindros de elevação cromados sem vazamentos.", img: "assets/tka/tka_05.png", gallery: ["assets/tka/tka_05.png", "assets/tka/g_14_900_CTqGG7.png"], preco: 195000.0 },
  { id: "usado-caminhao-vw-tka50", nome: "Caminhão VW 24.280 + TKA 50.700", colecao: "usado", categoria: "Usados", codigo: "US-VWTKA50", specs: ["Conjunto 2017/2018", "Truck 6x2", "Carroceria 7.5m", "Cap. 12 Ton"], desc: "Conjunto completo caminhão + guindaste veicular montado. Caminhão com 182.000 km, mecânica rigorosamente em dia e carroceria metálica reforçada.", img: "assets/tka/tka_12.png", gallery: ["assets/tka/tka_12.png", "assets/tka/g_48_700_0YrDCV.png"], preco: 510000.0 },
  { id: "usado-masal-ms200", nome: "Guindauto Masal MS 200", colecao: "usado", categoria: "Usados", codigo: "US-MASAL20", specs: ["Ano 2015", "3 Hidráulicas + 1 Manual", "Trave Robusta", "Ótimo Custo/Benefício"], desc: "Equipamento robusto para carga e descarga de paletes e materiais de construção. Revisado no pátio, pintura nova e selos em dia.", img: "assets/tka/tka_17.png", gallery: ["assets/tka/tka_17.png", "assets/tka/g_8_700_H6WREa.png"], preco: 98000.0 },
  { id: "usado-patio", nome: "Estoque Rotativo de Pátio — Chame o Marcelo", colecao: "usado", categoria: "Usados", codigo: "US-PATIO", specs: ["Giro Semanal", "Modelos de 6 a 80 Ton", "Consultoria Direta"], desc: "O estoque de guindastes usados e seminovos da MT tem alta rotatividade semanal. Fale diretamente com o especialista comercial e receba a lista do dia.", img: "assets/tka/tka_09.png", gallery: ["assets/tka/tka_09.png"], preco: 0.0, cta: true }
];
/*END:PRODUCTS*/

/* Ordem dos pills: Todos os implementos e usados */
const PILL_ORDER = [
    { id: 'todos', label: 'Todos os Implementos' },
    { id: 'Usados', label: 'Usados & Seminovos' },
    { id: 'Garfos Paleteiros', label: 'Garfos Paleteiros' },
    { id: 'Acessórios', label: 'Acessórios Industriais' },
    { id: 'Cestos de Fibra', label: 'Cestos de Fibra' },
    { id: 'Cestos Metálicos', label: 'Cestos Metálicos' },
    { id: 'Linha Comercial', label: 'Linha Comercial' },
    { id: 'Projetos Especiais', label: 'Projetos Especiais' }
];

/* Trilhos principais de streaming */
const RAILS = [
    { id: 'usados', title: 'Pátio de Usados & Seminovos', subtitle: 'Giro semanal com revisão e laudo. Chame o Marcelo no WhatsApp.', icon: 'badge-check', match: p => p.colecao === 'usado' },
    { id: 'garfos', title: 'Garfos Paleteiros & Elevação', subtitle: 'Para guindastes veiculares, bobcats e retroescavadeiras.', icon: 'wrench', match: p => p.categoria === 'Garfos Paleteiros' },
    { id: 'acessorios', title: 'Acessórios & Dispositivos de Carga', subtitle: 'Balancins, suportes big bag e garras para postes.', icon: 'wrench', match: p => p.categoria === 'Acessórios' },
    { id: 'cestos', title: 'Cestos Aéreos NR12 (Fibra & Metal)', subtitle: 'Elevação com isolamento e segurança para 1 ou 2 operadores.', icon: 'arrow-up-from-line', match: p => p.categoria === 'Cestos de Fibra' || p.categoria === 'Cestos Metálicos' },
    { id: 'comercial-especial', title: 'Linha Comercial & Projetos Especiais', subtitle: 'Goleiras de proteção, canaletas e carrinhos sob medida.', icon: 'shield-check', match: p => p.categoria === 'Linha Comercial' || p.categoria === 'Projetos Especiais' }
];

function groupsFor() {
    if (activeCategory === 'todos') return RAILS;
    if (activeCategory === 'Usados') return [RAILS[0]];
    return [{ id: 'cat', title: activeCategory, subtitle: 'Arraste para o lado ou adicione peças à sua cotação.', icon: 'wrench', match: p => p.categoria === activeCategory }];
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
    } else if (p.colecao === 'peca') {
        const inCart = cart.find(x => x.id === p.id);
        action = `<button type="button" class="btn-add-quote" onclick="event.stopPropagation(); window.addToQuote('${p.id}')">
            <i data-lucide="${inCart ? 'check' : 'plus-circle'}" style="width:16px;height:16px;"></i>
            <span>${inCart ? 'Na Cotação (' + inCart.qty + ')' : '+ Cotação'}</span>
        </button>`;
    } else {
        action = `<button type="button" class="btn-add-item" onclick="event.stopPropagation(); window.openQuoteModal('${p.id}')"><i data-lucide="clipboard-list" style="width:16px;height:16px;"></i> Ficha Técnica</button>`;
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
    const galleryThumbs = (p.gallery && p.gallery.length > 1)
        ? `<div class="modal-gallery-thumbs">${p.gallery.map((g, idx) => `<img src="${g}" alt="${p.nome}" class="modal-gallery-thumb ${idx === 0 ? 'active' : ''}" onclick="window.switchModalPhoto('${g}', this)">`).join('')}</div>`
        : '';
    const specsHtml = (p.specs && p.specs.length)
        ? `<div class="modal-specs-strip">${p.specs.map(s => `<span class="modal-spec-badge">${s}</span>`).join('')}</div>`
        : '';
    document.getElementById('modal-ref').innerHTML = galleryThumbs
        + specsHtml
        + (p.preco > 0
            ? `<div class="modal-price-box"><span class="modal-price-label">Valor de Referência:</span><div class="modal-price-val">R$ ${Number(p.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div><span class="modal-price-obs">+ frete rodoviário conforme o CEP</span></div>`
            : `<div class="modal-price-box"><span class="modal-price-label">Condição Comercial:</span><div class="modal-price-consult">Sob Consulta — Cotação com o Marcelo</div><span class="modal-price-obs">Informações completas de procedência e laudos</span></div>`);
    document.getElementById('q-cep').value = '';
    document.getElementById('q-cnpj').value = '';
    document.getElementById('q-nome').value = '';

    const addBtn = document.getElementById('modal-add-to-cart-btn');
    if (addBtn) {
        if (p.colecao === 'peca') {
            addBtn.style.display = 'flex';
            const inCart = cart.find(x => x.id === p.id);
            addBtn.innerHTML = `<i data-lucide="${inCart ? 'check' : 'plus-circle'}" style="width:18px;height:18px;"></i> <span>${inCart ? 'Já Consta na Cotação (' + inCart.qty + 'x)' : '+ Adicionar à Prancheta de Cotação'}</span>`;
        } else {
            addBtn.style.display = 'none';
        }
    }

    refreshModalConfirm();
    document.getElementById('item-modal-overlay').removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    // O modal abre no topo com foco nas imagens e especificações, sem acionar o teclado do celular
    const modalBox = document.querySelector('.item-modal');
    if (modalBox) modalBox.scrollTop = 0;
    if (window.lucide) lucide.createIcons();
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

/* Prancheta de cotação restrita a peças com feedback deliberado */
window.addToQuote = function(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p || p.colecao !== 'peca') return;
    const existing = cart.find(x => x.id === id);
    if (!existing) {
        cart.push({ id: p.id, qty: 1 });
        saveCart(); updateCartUI(); renderCatalog();
        window.showFloatingBar(p.nome + ' adicionado à cotação.');
    } else {
        existing.qty += 1;
        saveCart(); updateCartUI(); renderCatalog();
        window.showFloatingBar(p.nome + ' (' + existing.qty + 'x na cotação).');
    }
};

let floatingTimeout = null;
window.showFloatingBar = function(msg) {
    const bar = document.getElementById('floating-quote-bar');
    if (!bar) return;
    const items = cartDetailed();
    const count = items.reduce((s, i) => s + i.qty, 0);
    document.getElementById('fq-title').textContent = msg || 'Item adicionado à cotação!';
    document.getElementById('fq-subtitle').textContent = count + (count === 1 ? ' item selecionado' : ' itens selecionados') + ' · Pode adicionar mais peças à lista';
    bar.classList.add('show');
    if (floatingTimeout) clearTimeout(floatingTimeout);
    floatingTimeout = setTimeout(() => {
        bar.classList.remove('show');
    }, 5500);
};

window.hideFloatingBar = function() {
    const bar = document.getElementById('floating-quote-bar');
    if (bar) bar.classList.remove('show');
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
                <div class="cart-item-thumb-box">
                    <img src="${i.img || 'assets/pecas/angra_01.png'}" alt="${i.nome}" class="cart-item-thumb" onerror="this.src='assets/pecas/angra_01.png'">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${i.nome}</h4>
                    <div class="cart-item-custom-list"><span>• ${i.codigo}${i.preco > 0 ? ' · ' + fmt(i.preco) : ' · sob consulta'}</span></div>
                </div>
                <div class="cart-controls">
                    <button type="button" class="cart-qty-btn cart-qty-minus" onclick="window.changeQuoteQty('${i.id}', -1)" aria-label="Diminuir">-</button>
                    <span class="cart-qty-num">${i.qty}</span>
                    <button type="button" class="cart-qty-btn cart-qty-plus" onclick="window.changeQuoteQty('${i.id}', 1)" aria-label="Aumentar">+</button>
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
    saveCart(); updateCartUI(); renderCatalog();
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
    cart = []; saveCart(); updateCartUI(); renderCatalog();
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
    const modalAddCartBtn = document.getElementById('modal-add-to-cart-btn');
    if (modalAddCartBtn) {
        modalAddCartBtn.addEventListener('click', () => {
            if (modalProduct && modalProduct.colecao === 'peca') {
                window.addToQuote(modalProduct.id);
                window.closeQuoteModal();
                renderCatalog();
            }
        });
    }
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

window.switchModalPhoto = function(src, el) {
    const main = document.getElementById('modal-img');
    if (main) main.src = src;
    document.querySelectorAll('.modal-gallery-thumb').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
};

