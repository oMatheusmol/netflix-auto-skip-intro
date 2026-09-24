// Roda no mundo isolado da extensão: clica nos botões e detecta troca de episódio.

// Botões do player da Netflix (atributo data-uia). Se a Netflix mudar,
// inspecione o botão no DevTools e ajuste aqui.
const SELECTORS = [
  '[data-uia="player-skip-intro"]',
  '[data-uia="player-skip-recap"]',
  '[data-uia="player-skip-preplay"]',
  '[data-uia^="next-episode-seamless-button"]',
];

let settings = { autoClick: true, skipStart: false, skipSeconds: 300 };
chrome.storage.sync.get(settings, (s) => (settings = s));
chrome.storage.onChanged.addListener((changes) => {
  for (const k in changes) settings[k] = changes[k].newValue;
});

function clickButtons() {
  if (!settings.autoClick) return;
  for (const sel of SELECTORS) {
    const btn = document.querySelector(sel);
    if (btn && !btn.dataset.ncClicked) {
      btn.dataset.ncClicked = "1";
      btn.click();
    }
  }
}

new MutationObserver(clickButtons).observe(document.body, {
  childList: true,
  subtree: true,
});

// A Netflix é SPA: detecta troca de episódio pela URL /watch/<id>.
let lastId = null;
setInterval(() => {
  const m = location.pathname.match(/^\/watch\/(\d+)/);
  const id = m ? m[1] : null;
  if (id && id !== lastId && settings.skipStart) {
    window.postMessage(
      { source: "netflix-controle", type: "skipStart", seconds: settings.skipSeconds },
      location.origin
    );
  }
  lastId = id;
}, 1000);
