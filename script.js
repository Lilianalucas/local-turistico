const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
/* Coloque suas imagens na pasta imagens ou ajuste os caminhos abaixo. */
const FOTOS = {
  grande_salao: "imagens/grande salao.jpeg",
  torre: "imagens/torre astronimia.jpeg",
  lago: "imagens/lago negro.jpeg",
  floresta: "imagens/froresta proibida.jpeg",
  quadribol: "imagens/Campo de Quadribol.jpeg",
  sala: "imagens/Sala Precisa.jpeg",
  gryffindor: "imagens/Suíte Gryffindor.jpeg",
  slytherin: "imagens/Suíte Slytherin.jpeg",
  ravenclaw: "imagens/Suíte Ravenclaw.jpeg",
  hufflepuff: "imagens/Suíte Hufflepuff.jpeg",
  castelo: "imagens/hogwrt castelo.jpeg",
  corredores: "imagens/corresor.jpeg",
  trofeus: "imagens/sala de trofeus.jpeg",
  aula: "imagens/sala de aula.jpeg",
  estufa: "imagens/estufa.jpeg",
  escadas: "imagens/escadas que se movem.jpeg",
  biblioteca: "imagens/Biblioteca.jpeg",
  cabana_hagrid: "imagens/casa do regred.jpeg",
  plataforma: "imagens/plataforma 934.jpeg",
  trem: "imagens/viagem de trem ate a escola.jpeg",
  banda: "imagens/Hogwarts.jpeg",
  reserva: "imagens/grande salao.jpeg",
};
const imagem = (k, alt) =>
  FOTOS[k]
    ? `<img class="local-img" src="${FOTOS[k]}" alt="${alt}" loading="lazy" decoding="async">`
    : "";
const cls = (k) => (FOTOS[k] ? "ph foto" : "ph");
document.addEventListener(
  "error",
  (e) => {
    const image = e.target;
    if (image instanceof HTMLImageElement && image.classList.contains("local-img")) {
      console.warn("Não foi possível carregar a imagem:", image.getAttribute("src"));
      image.closest(".ph")?.classList.remove("foto");
      image.remove();
    }
  },
  true,
);
const dest = [
  [
    "grande_salao",
    "Grande Salão",
    "Banquetes sob milhares de velas, em um salão de pé-direito monumental.",
    38,
  ],
  [
    "torre",
    "Torre de Astronomia",
    "Observação do céu a partir do ponto mais alto do castelo.",
    235,
  ],
  [
    "lago",
    "Lago Negro",
    "Travessias de barco ao entardecer, em águas calmas e profundas.",
    205,
  ],
  [
    "floresta",
    "Floresta Proibida",
    "Trilhas guiadas por uma mata antiga, com acesso exclusivo.",
    140,
  ],
  [
    "quadribol",
    "Campo de Quadribol",
    "Camarote privativo e vivências de voo para toda a família.",
    48,
  ],
  [
    "sala",
    "Sala Precisa",
    "Um espaço reservado a poucos, que só se revela a quem busca.",
    280,
  ],
];
$("#dest").innerHTML = dest
  .map(
    (d) =>
      `<article class="${cls(d[0])} rv" style="--h:${d[3]}">${imagem(d[0], d[1])}<div><h3>${d[1]}</h3><p>${d[2]}</p></div></article>`,
  )
  .join("");
const ic = {
  g: '<circle cx="21" cy="14" r="6"/><path d="M8 38c1-9 7-13 13-13s12 4 13 13"/>',
  e: '<path d="M21 4l4.5 11 11.5 1-9 7.5 3 11.5-10-6-10 6 3-11.5-9-7.5 11.5-1z"/>',
  t: '<rect x="4" y="16" width="34" height="12" rx="5"/><circle cx="12" cy="31" r="3"/><circle cx="30" cy="31" r="3"/>',
  s: '<path d="M21 4l14 5v10c0 10-6 16-14 19C13 35 7 29 7 19V9z"/><path d="M15 21l5 5 8-9"/>',
  r: '<circle cx="14" cy="15" r="5"/><circle cx="29" cy="15" r="5"/><path d="M4 36c0-8 5-11 10-11s10 3 10 11M22 36c0-7 3-10 7-10s9 3 9 10"/>',
  v: '<path d="M5 30l4-18 8 9 4-12 4 12 8-9 4 18z"/><path d="M5 35h32"/>',
};
$("#sobreG").innerHTML = [
  ["g", "Guias especialistas", "Historiadores e mestres do castelo."],
  ["e", "Experiências exclusivas", "Acessos fora do roteiro comum."],
  ["t", "Transporte incluso", "Traslados privativos em todo o trajeto."],
  ["s", "Segurança garantida", "Protocolos rigorosos e equipe de apoio."],
  ["r", "Grupos reduzidos", "No máximo 8 viajantes por expedição."],
  ["v", "Atendimento VIP", "Concierge dedicado, 24 horas."],
]
  .map(
    (a) =>
      `<div class="rv"><svg viewBox="0 0 42 42">${ic[a[0]]}</svg><h3>${a[1]}</h3><p>${a[2]}</p></div>`,
  )
  .join("");
$("#tl").innerHTML = [
  [
    "Chegada ao Castelo",
    "Recepção privativa, traslado até os portões e jantar de boas-vindas.",
  ],
  [
    "Tour Histórico por Hogwarts",
    "Corredores, salas e passagens com um guia especialista.",
  ],
  [
    "Grande Salão e Casas de Hogwarts",
    "Almoço no salão principal e visita às salas comunais.",
  ],
  [
    "Experiência de Quadribol",
    "Vivência em campo e camarote para a partida do dia.",
  ],
  [
    "Exploração da Floresta Proibida",
    "Trilha guiada ao amanhecer e piquenique na clareira.",
  ],
  [
    "Passeio noturno mágico",
    "Caminhada à luz de lanternas pelos corredores encantados.",
  ],
  [
    "Encerramento da jornada",
    "Brunch de despedida e entrega do álbum da viagem.",
  ],
]
  .map(
    (d, i) =>
      `<div class="dia rv"><b>Dia ${i + 1}</b><h3>${d[0]}</h3><p>${d[1]}</p></div>`,
  )
  .join("");
const su = [
  [
    "gryffindor",
    "Suíte Gryffindor",
    "Tons de vinho e ouro, lareira de pedra e dossel em veludo.",
    "R$ 2.890",
    5,
    25,
  ],
  [
    "slytherin",
    "Suíte Slytherin",
    "Atmosfera submersa, com vista para o lago e iluminação esmeralda.",
    "R$ 3.150",
    5,
    150,
  ],
  [
    "ravenclaw",
    "Suíte Ravenclaw",
    "Azul-noite, teto estrelado e uma biblioteca particular.",
    "R$ 2.970",
    5,
    225,
  ],
  [
    "hufflepuff",
    "Suíte Hufflepuff",
    "Madeiras quentes, jardim privativo e lareira acolhedora.",
    "R$ 2.690",
    4,
    42,
  ],
];
$("#suites").innerHTML = su
  .map(
    (s) =>
      `<article class="suite rv"><div class="${cls(s[0])}" style="--h:${s[5]}">${imagem(s[0], s[1])}</div><div class="t"><h3>${s[1]}</h3><p>${s[2]}</p><div class="f"><div class="pr">${s[3]} <small>/ diária</small></div><div class="st">${"★".repeat(s[4])}${"☆".repeat(5 - s[4])}</div></div></div></article>`,
  )
  .join("");
$("#gal").innerHTML = [
  ["castelo", "Castelo ao entardecer", 30],
  ["corredores", "Corredores iluminados", 45],
  ["grande_salao", "Grande Salão", 38],
  ["lago", "Lago Negro", 210],
  ["quadribol", "Campo de Quadribol", 50],
  ["torre", "Torre de Astronomia", 240],
  ["sala", "Sala Precisa", 280],
  ["trofeus", "Sala de Troféus", 35],
  ["aula", "Sala de Aula", 45],
  ["estufa", "Estufa", 105],
  ["escadas", "Escadas que se Movem", 270],
  ["biblioteca", "Biblioteca", 230],
  ["cabana_hagrid", "Cabana de Hagrid", 40],
  ["plataforma", "Plataforma 9¾", 35],
  ["trem", "Viagem de Trem até a Escola", 45],
]
  .map(
    (g) =>
      `<div class="${cls(g[0])}" style="--h:${g[2]}">${imagem(g[0], g[1])}<span>${g[1]}</span></div>`,
  )
  .join("");
$$("[data-k]").forEach((e) => {
  const key = e.dataset.k;
  if (FOTOS[key]) {
    e.classList.add("foto");
    const alts = {
      banda: "Paisagem da expedição",
      reserva: "Ambiente de recepção da viagem",
    };
    e.insertAdjacentHTML("afterbegin", imagem(key, alts[key] || ""));
  }
});
/* reserva */
$("#form").onsubmit = (e) => {
  e.preventDefault();
  const o = $("#ok");
  o.style.display = "block";
  o.textContent = `Obrigado, ${$("#n").value}. Recebemos seu pedido (demonstração). Enviaremos o itinerário para ${$("#e").value}.`;
  e.target.reset();
};
/* nav */
const burger = $("#burger");
const navLinks = $("#nav-links");
const fecharMenu = () => {
  navLinks.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Abrir menu");
};
burger.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(aberto));
  burger.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) fecharMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    fecharMenu();
    burger.focus();
  }
});
/* scroll: nav + parallax */
const reduz = matchMedia("(prefers-reduced-motion:reduce)").matches;
const par = $$("[data-p]");
let t = false;
function tick() {
  const y = scrollY;
  $("#nav").classList.toggle("fix", y > 60);
  if (!reduz)
    par.forEach((el) => {
      const f = parseFloat(el.dataset.p),
        r = el.parentElement.getBoundingClientRect();
      const off = el.closest(".hero")
        ? y * f * -1 + (f > 0.2 ? 0 : 0)
        : (r.top + r.height / 2 - innerHeight / 2) * f;
      el.style.transform = `translate3d(0,${el.closest(".hero") ? y * f * -0.6 : off}px,0)`;
    });
  t = false;
}
addEventListener(
  "scroll",
  () => {
    if (!t) {
      t = true;
      requestAnimationFrame(tick);
    }
  },
  { passive: true },
);
tick();
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
$$(".rv").forEach((el) => io.observe(el));
