/**
 * MT Guindastes — Vitrine industrial Onira.fly
 * Regra tri-modal: peca/usado com preço -> WhatsApp com CEP;
 * tka_novo sempre sob consulta. Pagamento só sinalização.
 * Sacola ("Minha Cotação") restrita a peças. Zero window.alert().
 */

var WHATSAPP = "5554999972976";
var RAZAO = "MT Guindastes";

var PRODUCTS = [
  { id: "garfo-paleteiro", nome: "Garfo Paleteiro", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-MT", specs: ["1.5 Ton / 2.5 Ton / 3.0 Ton"], desc: "Garfo paleteiro ajustável de alta resistência para cargas paletizadas.", preco: 1890 },
  { id: "garfo-bobcat", nome: "Garfo para Bobcat", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-BOBCAT-MT", specs: [], desc: "Garfo para engate rápido em minicarregadeiras estilo Bobcat.", preco: 0 },
  { id: "garfo-retro", nome: "Garfo para Retroescavadeira", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-RETRO-MT", specs: [], desc: "Garfo adaptável à concha da retroescavadeira.", preco: 0 },
  { id: "garfo-tubos", nome: "Garfo Pega-Tubos Tipo C", colecao: "peca", categoria: "Garfos Paleteiros", codigo: "GP-TUBOC-MT", specs: ["Cap. 2.0 Ton"], desc: "Garfo tipo C para içamento de tubos.", preco: 0 },
  { id: "balancim", nome: "Balancim", colecao: "peca", categoria: "Acessórios", codigo: "AC-BALANCIM-MT", specs: ["Cap. 5 Ton"], desc: "Balancim para içamento equilibrado de cargas longas.", preco: 0 },
  { id: "big-bag", nome: "Suporte para Big Bag", colecao: "peca", categoria: "Acessórios", codigo: "AC-BIGBAG-MT", specs: ["1.0 Ton / 1.2 Ton"], desc: "Suporte em cruz reforçado com ganchos para big bags.", preco: 2450 },
  { id: "pega-postes", nome: "Pega Postes", colecao: "peca", categoria: "Acessórios", codigo: "AC-PEGAPOSTE-MT", specs: [], desc: "Garra articulada para postes.", preco: 0 },
  { id: "saca-postes", nome: "Saca Postes Hidráulico", colecao: "peca", categoria: "Acessórios", codigo: "AC-SACAPOSTE-MT", specs: [], desc: "Extrator hidráulico de postes com corrente.", preco: 0 },
  { id: "funil", nome: "Funil Multiuso", colecao: "peca", categoria: "Acessórios", codigo: "AC-FUNIL-MT", specs: [], desc: "Funil para ração, grãos, concreto, brita e areia.", preco: 0 },
  { id: "cesto-fibra-1op", nome: "Cesto de Fibra — 1 Operador", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-1OP-MT", specs: ["1 Operador", "NR12"], desc: "Cesto aéreo de fibra com isolamento elétrico, nivelamento bengala, mecânico, hidráulico ou eletrônico.", preco: 5700 },
  { id: "cesto-lanca", nome: "Cesto de Fibra com Lança Frontal", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-LANCA-MT", specs: ["1 ou 2 Operadores", "Lançamento"], desc: "Lançamento: cesto de fibra com lança frontal.", preco: 0 },
  { id: "cesto-fibra-2op", nome: "Cesto de Fibra — 2 Operadores", colecao: "peca", categoria: "Cestos de Fibra", codigo: "CF-2OP-MT", specs: ["2 Operadores", "NR12"], desc: "Cesto duplo de fibra, nivelamento eletrônico NR12, mecânico, hidráulico ou bengala.", preco: 0 },
  { id: "cesto-metal-acoplado", nome: "Cesto Metálico Acoplado", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-ACOPLADO-MT", specs: ["NR12"], desc: "Cesto em aço tubular para acoplamento em guindaste.", preco: 0 },
  { id: "cesto-metal-suspenso", nome: "Cesto Metálico Suspenso", colecao: "peca", categoria: "Cestos Metálicos", codigo: "CM-SUSPENSO-MT", specs: [], desc: "Cesto suspenso por cabos para elevação.", preco: 0 },
  { id: "lc-protecao", nome: "Goleiras / Pitocos / Escudos", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-PROTECAO-MT", specs: [], desc: "Proteção e comunicação para estabelecimentos comerciais.", preco: 0 },
  { id: "lc-drenagem", nome: "Ralos / Canaletas / Tampas / Grelha", colecao: "peca", categoria: "Linha Comercial", codigo: "LC-DRENAGEM-MT", specs: [], desc: "Drenagem e tampas para pista e estabelecimentos.", preco: 0 },
  { id: "carrinho-10t", nome: "Carrinho Movimentação Interna 10 Ton", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-CARRINHO-MT", specs: ["Cap. 10 Ton"], desc: "Carrinho para cargas pesadas. Projeto sob medida.", preco: 0 },
  { id: "rebocador", nome: "Rebocador Hidráulico", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-REBOCADOR-MT", specs: [], desc: "Rebocador hidráulico em comboio para logística interna.", preco: 0 },
  { id: "escada", nome: "Escada Sob Medida", colecao: "peca", categoria: "Projetos Especiais", codigo: "PE-ESCADA-MT", specs: [], desc: "Escada e passarela metálica sob medida.", preco: 0 },
  { id: "tka-6700", nome: "TKA 6.700 — novo", colecao: "tka_novo", categoria: "TKA Novos", codigo: "TKA-6.700", specs: ["Representante autorizado"], desc: "Guindaste TKA novo. Cotação consultiva via WhatsApp.", preco: 0 },
  { id: "usado-exemplo", nome: "Guindaste usado — consulte o pátio", colecao: "usado", categoria: "Usados", codigo: "USADO", specs: [], desc: "Ficha modelo: preço visível + WhatsApp com CEP. Estoque real do pátio entra aqui.", preco: 100000 }
];

var CATEGORIES = ["Todos", "Garfos Paleteiros", "Acessórios", "Cestos de Fibra", "Cestos Metálicos", "Linha Comercial", "Projetos Especiais", "TKA Novos", "Usados"];

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
  if (p.colecao === "tka_novo") return { text: "TKA novo · sob consulta", cls: "dark" };
  if (p.preco > 0) return { text: "Pronta entrega", cls: "ready" };
  return { text: "Sob consulta", cls: "consult" };
}

/* ---------- estado ---------- */
var state = { search: "", category: "Todos", sacola: [], modalProduct: null };

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
    var hay = (p.nome + " " + p.codigo + " " + p.desc + " " + p.specs.join(" ")).toLowerCase();
    return okCat && (!q || hay.indexOf(q) !== -1);
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
  var addBtn = p.colecao === "peca"
    ? '<button class="btn btn-ghost" data-add="' + p.id + '">+ Sacola</button>'
    : "";
  return (
    '<article class="card">' +
      '<div class="card-media"><span class="card-code">' + p.codigo + '</span>' +
      '<span class="badge ' + b.cls + '">' + b.text + "</span></div>" +
      '<div class="card-body"><h3>' + p.nome + "</h3>" +
      '<p class="card-cat">' + p.categoria + "</p>" +
      specs +
      '<p class="card-desc">' + p.desc + "</p>" +
      price +
      '<div class="card-actions"><button class="btn btn-primary" data-quote="' + p.id + '">Solicitar cotação</button>' + addBtn + "</div>" +
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
  $("drawer-total").innerHTML = state.sacola.length
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
