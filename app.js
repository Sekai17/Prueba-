// Frases de “Te amo” en 20 idiomas (orden inicial: ES primero)
const traducciones = [
  { lang: "Español", phrase: "Te amo" },
  { lang: "English", phrase: "I love you" },
  { lang: "Português", phrase: "Eu te amo" },
  { lang: "Français", phrase: "Je t’aime" },
  { lang: "Italiano", phrase: "Ti amo" },
  { lang: "Deutsch", phrase: "Ich liebe dich" },
  { lang: "Русский", phrase: "Я люблю тебя" },
  { lang: "中文 (简体)", phrase: "我爱你" },
  { lang: "日本語", phrase: "愛してる" },
  { lang: "한국어", phrase: "사랑해요" },
  { lang: "العربية", phrase: "أحبك" },
  { lang: "हिन्दी", phrase: "मैं तुमसे प्यार करता हूँ" },
  { lang: "Türkçe", phrase: "Seni seviyorum" },
  { lang: "Ελληνικά", phrase: "Σ' αγαπώ" },
  { lang: "עברית", phrase: "אני אוהב אותך" },
  { lang: "Kiswahili", phrase: "Nakupenda" },
  { lang: "Nederlands", phrase: "Ik hou van jou" },
  { lang: "Polski", phrase: "Kocham cię" },
  { lang: "Tiếng Việt", phrase: "Anh yêu em" },
  { lang: "Română", phrase: "Te iubesc" },
];

// Utilidad: persistir y leer índice en localStorage
const KEY = "te-amo-idx";
const getIdx = () => {
  const raw = localStorage.getItem(KEY);
  const n = Number(raw);
  return Number.isInteger(n) && n >= 0 && n < traducciones.length ? n : 0;
};
const setIdx = (i) => localStorage.setItem(KEY, String(i));

// Pintar la lista de idiomas arriba
const ul = document.getElementById("idiomas");
ul.innerHTML = traducciones.map(({lang, phrase}) => (
  `<li><span class="lang">${lang}</span><span class="phrase">${phrase}</span></li>`
)).join("");

// Manejar el botón que cicla los idiomas
const btn = document.getElementById("botonAmor");
let idx = getIdx();

// Set inicial
const setButtonText = () => {
  const item = traducciones[idx];
  btn.textContent = item.phrase;
  btn.setAttribute("aria-label", `Botón: ${item.lang}`);
};
setButtonText();

btn.addEventListener("click", () => {
  idx = (idx + 1) % traducciones.length;
  setIdx(idx);

  setButtonText();

  // Feedback visual + animación suave
  btn.style.filter = "brightness(1.08)";
  btn.classList.remove("pop"); // reinicia si se clickea muy rápido
  // Forzar reflow para reiniciar animación
  void btn.offsetWidth;
  btn.classList.add("pop");
  setTimeout(() => btn.style.filter = "", 120);
});

// También aplicar animación al cargar si ya había preferencia guardada
if (idx !== 0) {
  btn.classList.add("pop");
  setTimeout(() => btn.classList.remove("pop"), 200);
}
