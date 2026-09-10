function cardHtml(p) {
    const b = badgeFor(p);
    const specs = (p.specs || []).length
        ? `<div class="ind-specs">${p.specs.map(s => `<span>${s}</span>`).join('')}</div>` : '';
    const price = p.preco > 0
        ? `<span class="price-label">Referência</span><div class="price-value price-green">R$ ${Number(p.preco).toFixed(2).replace('.', ',')}</div><span class="price-hint">+ frete a combinar</span>`
        : `<div class="price-consult">Valor sob consulta</div>`;
    const media = p.img
        ? `<img src="${p.img}" alt="${p.nome}" class="card-img" loading="lazy" onerror="this.remove()">`
        : `<div class="card-noimg">${p.codigo}</div>`;
    let action;
    if (p.cta) {
        action = `<a class="btn-add-item" style="justify-content:center;text-decoration:none;" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Olá, Marcelo! Vim pelo site da MT e quero saber o que tem no pátio de usados.')}"><i data-lucide="message-circle" style="width:16px;height:16px;"></i> Chamar no WhatsApp</a>`;
    } else {
        const sacola = p.colecao === 'peca'
            ? `<button type="button" class="btn-add-sacola" onclick="event.stopPropagation(); window.addToQuote('${p.id}')">+ Sacola</button>` : '';
        action = `<button type="button" class="btn-add-item" onclick="event.stopPropagation(); window.openQuoteModal('${p.id}')"><i data-lucide="clipboard-list" style="width:16px;height:16px;"></i> Solicitar cotação</button>${sacola}`;
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

    if ((activeCategory === 'todos' || activeCategory === '__tka') && !searchQuery) {
        const rails = RAILS
            .map(r => ({ def: r, items: all.filter(r.match) }))
            .filter(r => r.items.length && (activeCategory === '__tka' ? r.def.id === 'tka' : true));
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
