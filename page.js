// Roda no contexto da página para acessar a API interna do player.
// Mexer direto em video.currentTime quebra o player da Netflix (erro M7375),
// por isso o seek é feito pela API deles.

function getPlayer() {
  try {
    const vp = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    const ids = vp.getAllPlayerSessionIds();
    return ids.length ? vp.getVideoPlayerBySessionId(ids[ids.length - 1]) : null;
  } catch {
    return null;
  }
}

function trySeek(ms, tries) {
  const p = getPlayer();
  if (p && p.getDuration() > 0) {
    if (p.getCurrentTime() < ms) p.seek(ms);
    return;
  }
  if (tries > 0) setTimeout(() => trySeek(ms, tries - 1), 1000);
}

window.addEventListener("message", (e) => {
  if (e.source !== window || e.data?.source !== "netflix-controle") return;
  if (e.data.type === "skipStart") trySeek(e.data.seconds * 1000, 20);
});
