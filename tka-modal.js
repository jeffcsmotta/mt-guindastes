/**
 * MT Guindastes — Modal Ficha TKA (compartilhado: index.html + tka-catalogo.html).
 * Ficha completa do equipamento em modal: galeria, specs, extras de fabrica,
 * grafico de carga + PDFs, video oficial e CTA "Solicitar Cotacao" via WhatsApp.
 * Uso: window.openTkaModal('40.900')
 */
(function () {
    const WA = '5554999972976';
    let ITEMS = null;
    let current = null;

    const CSS = `
.tka-modal-overlay{position:fixed;inset:0;background:rgba(4,7,12,0.78);backdrop-filter:blur(4px);z-index:200;display:none;align-items:flex-start;justify-content:center;padding:24px 14px;overflow-y:auto;}
.tka-modal-overlay.open{display:flex;}
.tka-modal-box{background:#0E141F;border:1px solid #222C3D;border-radius:18px;max-width:960px;width:100%;color:#F8FAFC;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,0.6);}
.tka-modal-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:20px 22px 0;}
.tka-modal-tag{font-size:0.74rem;font-weight:800;letter-spacing:0.07em;color:#EA580C;text-transform:uppercase;display:block;margin-bottom:6px;}
.tka-modal-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:1.5rem;font-weight:900;color:#FFF;line-height:1.2;}
.tka-modal-close{background:#151D2A;border:1px solid #222C3D;color:#E2E8F0;border-radius:10px;width:38px;height:38px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;}
.tka-modal-close:hover{border-color:#EA580C;color:#FFF;}
.tka-modal-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;padding:18px 22px 22px;}
.tka-modal-gal{background:linear-gradient(180deg,#FFFFFF 0%,#E6EBF2 100%);border-radius:12px;padding:16px;}
.tka-modal-main{height:260px;display:flex;align-items:center;justify-content:center;}
.tka-modal-main img{max-height:100%;max-width:100%;object-fit:contain;filter:drop-shadow(0 10px 18px rgba(15,23,42,0.28));}
.tka-modal-thumbs{display:flex;gap:8px;margin-top:12px;overflow-x:auto;}
.tka-modal-thumbs img{width:64px;height:52px;object-fit:contain;background:#FFF;border:2px solid #CBD5E1;border-radius:8px;padding:3px;cursor:pointer;flex-shrink:0;}
.tka-modal-thumbs img.active{border-color:#EA580C;}
.tka-modal-desc{font-size:0.88rem;line-height:1.65;color:#94A3B8;margin:0 0 16px;}
.tka-modal-specs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:16px;}
.tka-modal-spec{background:#151D2A;border:1px solid #222C3D;border-radius:8px;padding:9px 11px;}
.tka-modal-spec b{display:block;font-size:0.66rem;font-weight:700;color:#64748B;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:3px;}
.tka-modal-spec span{font-family:'JetBrains Mono',monospace;font-size:0.86rem;font-weight:700;color:#FFEDD5;}
.tka-modal-sec-t{font-size:0.8rem;font-weight:800;color:#FFF;text-transform:uppercase;letter-spacing:0.05em;margin:16px 0 8px;display:flex;align-items:center;gap:8px;}
.tka-modal-chart{background:#FFF;border-radius:10px;padding:10px;}
.tka-modal-chart img{max-width:100%;height:auto;display:block;border-radius:6px;}
.tka-modal-pdfs{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}
.tka-modal-pdf{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.14);color:#E2E8F0;font-size:0.8rem;font-weight:700;text-decoration:none;padding:9px 13px;border-radius:8px;}
.tka-modal-pdf:hover{border-color:#EA580C;color:#FFF;}
.tka-modal-video{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;margin-top:8px;}
.tka-modal-video iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
.tka-modal-cta{margin:4px 22px 22px;background:linear-gradient(135deg,rgba(234,88,12,0.12),rgba(15,23,42,0.8));border:1px solid rgba(234,88,12,0.4);border-radius:12px;padding:16px 18px;}
.tka-modal-cta p{font-size:0.82rem;color:#CBD5E1;margin:0 0 12px;}
.tka-modal-wa{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:#22C55E;color:#FFF;border-radius:8px;padding:14px 20px;font-weight:800;font-size:0.95rem;text-decoration:none;width:100%;box-sizing:border-box;box-shadow:0 4px 14px rgba(34,197,94,0.35);}
.tka-modal-wa:hover{background:#16A34A;}
@media (max-width:760px){.tka-modal-grid{grid-template-columns:1fr;}.tka-modal-main{height:210px;}}`;

    function ensure() {
        if (document.getElementById('tka-modal-overlay')) return;
        const st = document.createElement('style');
        st.textContent = CSS;
        document.head.appendChild(st);
        const ov = document.createElement('div');
        ov.className = 'tka-modal-overlay';
        ov.id = 'tka-modal-overlay';
        ov.innerHTML = '<div class="tka-modal-box" role="dialog" aria-modal="true"><div class="tka-modal-head"><div><span class="tka-modal-tag" id="tka-m-tag"></span><div class="tka-modal-title" id="tka-m-title"></div></div><button type="button" class="tka-modal-close" id="tka-m-close" aria-label="Fechar"><span style="font-size:1.2rem;line-height:1;">×</span></button></div><div class="tka-modal-grid"><div><div class="tka-modal-gal"><div class="tka-modal-main"><img id="tka-m-photo" src="" alt=""></div><div class="tka-modal-thumbs" id="tka-m-thumbs"></div></div><div id="tka-m-media-extra"></div></div><div><p class="tka-modal-desc" id="tka-m-desc"></p><div class="tka-modal-specs" id="tka-m-specs"></div><div id="tka-m-extras"></div></div></div><div class="tka-modal-cta"><p id="tka-m-cta-txt"></p><a id="tka-m-wa" href="#" target="_blank" rel="noopener" class="tka-modal-wa">Solicitar Cotação</a></div></div>';
        document.body.appendChild(ov);
        ov.addEventListener('click', e => { if (e.target === ov) close(); });
        document.getElementById('tka-m-close').addEventListener('click', close);
        document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    }

    function close() {
        const ov = document.getElementById('tka-modal-overlay');
        if (ov) ov.classList.remove('open');
        document.body.style.overflow = 'auto';
        current = null;
    }

    function fmtL(v, suf) {
        if (typeof v === 'string' && v) return v;
        if (typeof v === 'number' && v > 0) return v + ' ' + suf;
        return 'Consulte';
    }

    const CESTO_LABELS = { capacidadeCesto: 'Capacidade do cesto (kg)', alcanceMaximoHorizontal: 'Alcance máx. horizontal (m)', anguloGiro: 'Ângulo de giro (°)', estabilizadoresPadraoA: 'Estabilizadores padrão (tipo A)', pesoEquipamentoEstabilizadores: 'Peso com estabilizadores (kg)', complementoEquipamento: 'Complemento do equipamento (m)', alturaEmTransporte: 'Altura em transporte (m)', pbtMinimoExigido: 'PBT mínimo exigido (kg)' };

    function videoId(url) {
        const m = String(url || '').match(/(?:[?&]v=|youtu\.be\/|shorts\/)([\w-]{6,})/);
        return m ? m[1] : null;
    }

    function data() {
        if (ITEMS) return Promise.resolve(ITEMS);
        return fetch('tka-catalog.json').then(r => r.json()).then(items => { ITEMS = items; return items; });
    }

    window.openTkaModal = function (slug) {
        ensure();
        data().then(items => {
            const item = items.find(i => i.slug === slug) || items[0];
            if (!item) return;
            current = item;
            const s = item.specs || {};
            document.getElementById('tka-m-tag').textContent = item.categoria === 'cesto' ? 'Cesto Aéreo TKA · Direto de Fábrica' : 'Linha ' + item.linha + ' · Direto de Fábrica';
            document.getElementById('tka-m-title').textContent = item.codigo;
            document.getElementById('tka-m-desc').textContent = item.descricao || '';

            const main = document.getElementById('tka-m-photo');
            const thumbs = document.getElementById('tka-m-thumbs');
            if (item.fotos && item.fotos.length) {
                main.src = item.fotos[0];
                main.alt = item.codigo;
                thumbs.innerHTML = item.fotos.map((f, i) => '<img src="' + f + '" alt="' + item.codigo + '" class="' + (i === 0 ? 'active' : '') + '" data-src="' + f + '">').join('');
                thumbs.querySelectorAll('img').forEach(t => t.addEventListener('click', () => {
                    main.src = t.dataset.src;
                    thumbs.querySelectorAll('img').forEach(x => x.classList.remove('active'));
                    t.classList.add('active');
                }));
            } else { main.src = ''; thumbs.innerHTML = ''; }

            let rows;
            if (item.categoria === 'cesto') {
                const giro = item.specs_tecnicas && item.specs_tecnicas.anguloGiro ? item.specs_tecnicas.anguloGiro + '°' : 'Consulte';
                rows = [['Capacidade do cesto', s.capacidadeMaxima || 'Consulte'], ['Peso do equipamento', s.pesoProprio || 'Consulte'], ['Alcance horizontal', s.maximoHorizontal || 'Consulte'], ['Ângulo de giro', giro]];
            } else {
                rows = [['Capacidade máxima', s.capacidadeMaxima || 'Consulte'], ['Peso próprio', s.pesoProprio || 'Consulte'], ['Ext. hidráulicas', fmtL(s.extensoesHidraulicas, 'lanças')], ['Ext. manuais', fmtL(s.extensoesManuais, 'lanças')], ['Máximo vertical', s.maximoVertical || 'Consulte'], ['Máximo horizontal', s.maximoHorizontal || 'Consulte']];
            }
            document.getElementById('tka-m-specs').innerHTML = rows.map(r => '<div class="tka-modal-spec"><b>' + r[0] + '</b><span>' + r[1] + '</span></div>').join('');

            let extra = '';
            if (item.specs_tecnicas && Object.keys(item.specs_tecnicas).length) {
                extra += '<div class="tka-modal-sec-t">Dados complementares de fábrica</div><div class="tka-modal-specs">' +
                    Object.entries(item.specs_tecnicas).map(([k, v]) => '<div class="tka-modal-spec"><b>' + (CESTO_LABELS[k] || k) + '</b><span style="font-size:0.8rem;">' + v + '</span></div>').join('') + '</div>';
            }
            if (item.grafico) {
                extra += '<div class="tka-modal-sec-t">Diagrama de carga oficial</div><div class="tka-modal-chart"><img src="' + item.grafico + '" alt="Gráfico de carga ' + item.codigo + '" loading="lazy"></div><div class="tka-modal-pdfs">';
                if (item.grafico_pdf) extra += '<a class="tka-modal-pdf" href="' + item.grafico_pdf + '" target="_blank" rel="noopener">Baixar diagrama (PDF)</a>';
                if (item.grafico_pdf_libra) extra += '<a class="tka-modal-pdf" href="' + item.grafico_pdf_libra + '" target="_blank" rel="noopener">Diagrama em libras (PDF)</a>';
                extra += '</div>';
            }
            const vid = item.video ? videoId(item.video) : null;
            if (vid) extra += '<div class="tka-modal-sec-t">Vídeo oficial</div><div class="tka-modal-video"><iframe src="https://www.youtube-nocookie.com/embed/' + vid + '" title="Vídeo ' + item.codigo + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            document.getElementById('tka-m-extras').innerHTML = extra;
            document.getElementById('tka-m-media-extra').innerHTML = '';

            const isCesto = item.categoria === 'cesto';
            document.getElementById('tka-m-cta-txt').textContent = isCesto
                ? 'Fale com o Marcelo para cotação e verificação de compatibilidade com seu guindaste.'
                : 'Fale com o Marcelo para cotação direta de fábrica e estudo de montagem veicular.';
            const msg = isCesto
                ? 'Olá, Marcelo! Gostaria de uma cotação do *' + item.codigo + '* (Cesto Aéreo TKA) que vi no site da MT Guindastes, com verificação de compatibilidade.'
                : 'Olá, Marcelo! Gostaria de uma cotação e estudo de instalação veicular para o *' + item.codigo + '* (Linha ' + item.linha + ') que vi no site da MT Guindastes.';
            document.getElementById('tka-m-wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);

            document.getElementById('tka-modal-overlay').classList.add('open');
            document.body.style.overflow = 'hidden';
        }).catch(err => console.error('Erro ficha TKA:', err));
    };
})();
