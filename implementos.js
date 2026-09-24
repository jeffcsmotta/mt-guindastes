/**
 * MT Guindastes — Implementos Busa (home).
 * Grade + modal ficha: galeria, specs exatas do folder, video e CTA cotacao.
 */
(function () {
    const WA = '5554999972976';
    let ITEMS = [];

    const CSS = `
.imp-rail-section{margin:34px 0 8px;}
.imp-cta-row{display:flex;justify-content:center;margin-top:18px;}
.imp-modal-overlay{position:fixed;inset:0;background:rgba(4,7,12,0.78);backdrop-filter:blur(4px);z-index:200;display:none;align-items:flex-start;justify-content:center;padding:24px 14px;overflow-y:auto;}
.imp-modal-overlay.open{display:flex;}
.imp-modal-box{background:#0E141F;border:1px solid #222C3D;border-radius:18px;max-width:900px;width:100%;color:#F8FAFC;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,0.6);}
.imp-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:20px 22px 0;}
.imp-modal-tag{font-size:0.74rem;font-weight:800;letter-spacing:0.07em;color:#EA580C;text-transform:uppercase;display:block;margin-bottom:6px;}
.imp-modal-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.4rem;font-weight:900;color:#FFF;line-height:1.25;}
.imp-modal-close{background:#151D2A;border:1px solid #222C3D;color:#E2E8F0;border-radius:10px;width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}
.imp-modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;padding:18px 22px 22px;}
.imp-modal-gal{background:#F1F5F9;border-radius:12px;padding:16px;}
.imp-modal-main{height:250px;display:flex;align-items:center;justify-content:center;}
.imp-modal-main img{max-height:100%;max-width:100%;object-fit:contain;border-radius:8px;}
.imp-modal-thumbs{display:flex;gap:8px;margin-top:12px;overflow-x:auto;}
.imp-modal-thumbs img{width:64px;height:52px;object-fit:cover;background:#FFF;border:2px solid #CBD5E1;border-radius:8px;cursor:pointer;flex-shrink:0;}
.imp-modal-thumbs img.active{border-color:#EA580C;}
.imp-modal-desc{font-size:0.88rem;line-height:1.65;color:#94A3B8;margin:0 0 14px;}
.imp-modal-table{width:100%;border-collapse:collapse;font-size:0.84rem;margin-bottom:6px;}
.imp-modal-table td{border-bottom:1px solid #1E293B;padding:8px 4px;vertical-align:top;}
.imp-modal-table td:first-child{color:#64748B;font-weight:700;width:42%;}
.imp-modal-table td:last-child{color:#F1F5F9;font-weight:600;}
.imp-modal-links{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;}
.imp-modal-link{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);color:#E2E8F0;font-size:0.8rem;font-weight:700;text-decoration:none;padding:9px 13px;border-radius:8px;}
.imp-modal-link:hover{border-color:#EA580C;color:#FFF;}
.imp-modal-video{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;margin-top:12px;}
.imp-modal-video iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;}
.imp-modal-cta{margin:4px 22px 22px;background:linear-gradient(135deg,rgba(234,88,12,0.12),rgba(15,23,42,0.8));border:1px solid rgba(234,88,12,0.4);border-radius:12px;padding:16px 18px;}
.imp-modal-cta p{font-size:0.82rem;color:#CBD5E1;margin:0 0 12px;}
.imp-modal-wa{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#22C55E;color:#FFF;border-radius:8px;padding:14px 20px;font-weight:800;font-size:0.95rem;text-decoration:none;width:100%;box-sizing:border-box;}
@media (max-width:760px){.imp-modal-grid{grid-template-columns:1fr;}.imp-modal-main{height:200px;}}`;

    function ensure() {
        if (document.getElementById('imp-modal-overlay')) return;
        const st = document.createElement('style');
        st.textContent = CSS;
        document.head.appendChild(st);
        const ov = document.createElement('div');
        ov.className = 'imp-modal-overlay';
        ov.id = 'imp-modal-overlay';
        ov.innerHTML = '<div class="imp-modal-box" role="dialog" aria-modal="true"><div class="imp-modal-head"><div><span class="tka-modal-tag imp-modal-tag" id="imp-m-tag" style="font-size:0.74rem;font-weight:800;letter-spacing:0.07em;color:#EA580C;text-transform:uppercase;display:block;margin-bottom:6px;"></span><div class="imp-modal-title" id="imp-m-title"></div></div><button type="button" class="imp-modal-close" id="imp-m-close" aria-label="Fechar"><span style="font-size:1.2rem;line-height:1;">×</span></button></div><div class="imp-modal-grid"><div><div class="imp-modal-gal"><div class="imp-modal-main"><img id="imp-m-photo" src="" alt=""></div><div class="imp-modal-thumbs" id="imp-m-thumbs"></div></div><div id="imp-m-extra"></div></div><div><p class="imp-modal-desc" id="imp-m-desc"></p><div id="imp-m-specs"></div><div class="imp-modal-links" id="imp-m-links"></div></div></div><div class="imp-modal-cta"><p>Fale com o Marcelo para cotação, disponibilidade e estudo de aplicação.</p><a id="imp-m-wa" href="#" target="_blank" rel="noopener" class="imp-modal-wa">Solicitar Cotação</a></div></div>';
        document.body.appendChild(ov);
        ov.addEventListener('click', e => { if (e.target === ov) close(); });
        document.getElementById('imp-m-close').addEventListener('click', close);
        document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }

    function close() {
        const ov = document.getElementById('imp-modal-overlay');
        if (ov) ov.classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    window.openImpModal = function (slug) {
        ensure();
        const item = ITEMS.find(i => i.slug === slug);
        if (!item) return;
        document.getElementById('imp-m-tag').textContent = item.marca + ' · ' + item.linha;
        document.getElementById('imp-m-title').textContent = item.nome;
        document.getElementById('imp-m-desc').textContent = item.descricao || '';
        const main = document.getElementById('imp-m-photo');
        const thumbs = document.getElementById('imp-m-thumbs');
        if (item.fotos && item.fotos.length) {
            main.src = item.fotos[0];
            main.alt = item.nome;
            thumbs.innerHTML = item.fotos.map((f, i) => '<img src="' + f + '" alt="' + item.nome + '" class="' + (i === 0 ? 'active' : '') + '" data-src="' + f + '">').join('');
            thumbs.querySelectorAll('img').forEach(t => t.addEventListener('click', () => {
                main.src = t.dataset.src;
                thumbs.querySelectorAll('img').forEach(x => x.classList.remove('active'));
                t.classList.add('active');
            }));
        } else { main.src = ''; thumbs.innerHTML = ''; }
        document.getElementById('imp-m-specs').innerHTML = (item.specs && item.specs.length)
            ? '<table class="imp-modal-table">' + item.specs.map(r => '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>').join('') + '</table>'
            : '<p class="imp-modal-desc">Características detalhadas sob consulta com o Marcelo.</p>';
        let links = '';
        if (item.folder) links += '<a class="imp-modal-link" href="' + item.folder + '" target="_blank" rel="noopener">Folder técnico (PDF)</a>';
        if (item.pagina) links += '<a class="imp-modal-link" href="' + item.pagina + '" target="_blank" rel="noopener">Ver no fabricante</a>';
        document.getElementById('imp-m-links').innerHTML = links;
        document.getElementById('imp-m-extra').innerHTML = item.video_drive
            ? '<div class="imp-modal-video"><iframe src="https://drive.google.com/file/d/' + item.video_drive + '/preview" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>'
            : '';
        document.getElementById('imp-m-wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Olá, Marcelo! Gostaria de uma cotação do implemento *' + item.nome + '* (' + item.marca + ') que vi no site da MT Guindastes.');
        document.getElementById('imp-modal-overlay').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    function cardHtml(p) {
        const specs = (p.specs || []).slice(0, 3).map(s => '<span>' + s[0] + ': ' + s[1] + '</span>').join('');
        return '<div class="menu-card ind-card" role="button" tabindex="0" style="cursor:pointer;" onclick="window.openImpModal(\'' + p.slug + '\')" onkeydown="if(event.key==\'Enter\')window.openImpModal(\'' + p.slug + '\')">'
            + '<div class="ind-card-top"><span class="ind-code">' + p.marca + '</span><span class="card-badge badge-consult">Sob consulta</span></div>'
            + '<div class="card-img-box"><img src="' + (p.fotos[0] || '') + '" alt="' + p.nome + '" class="card-img" loading="lazy"></div>'
            + '<div class="card-body"><h3 class="card-title">' + p.nome + '</h3>'
            + '<p class="ind-cat">' + p.linha + '</p>'
            + (specs ? '<div class="ind-specs">' + specs + '</div>' : '')
            + '<p class="card-desc">' + p.descricao + '</p>'
            + '<div class="card-bottom"><div><div class="price-consult">Valor sob consulta</div></div>'
            + '<button type="button" class="btn-add-item" onclick="event.stopPropagation();window.openImpModal(\'' + p.slug + '\')">Ficha Técnica</button>'
            + '</div></div></div>';
    }

    function render() {
        const sec = document.getElementById('implementos');
        if (!sec) return;
        const brands = [...new Set(ITEMS.map(item => item.marca).filter(Boolean))];
        const brandLabel = brands.length ? brands.join(' e ') : 'Busa e Davigue';
        sec.innerHTML = '<div class="container"><div class="section-header"><div class="section-eyebrow">Implementos rodoviários · Novos · Cotação</div>'
            + '<h2 class="section-title-dark">Implementos ' + brandLabel + '</h2>'
            + '<p class="section-subtitle">Toda a linha Busa e Davigue disponível para estudo de aplicação, montagem e cotação com a MT Guindastes.</p></div>'
            + '<div class="streaming-rails-container"><section class="streaming-rail-section"><div class="streaming-rail-track" id="rail-implementos">'
            + ITEMS.map(cardHtml).join('')
            + '</div></section></div></div>';
        if (window.lucide) lucide.createIcons();
    }

    fetch('implementos.json?v=mt11')
        .then(r => r.json())
        .then(items => { ITEMS = items; render(); })
        .catch(err => console.error('Erro implementos:', err));
})();
