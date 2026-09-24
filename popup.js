const defaults = { autoClick: true, skipStart: false, skipSeconds: 300 };

chrome.storage.sync.get(defaults, (s) => {
  autoClick.checked = s.autoClick;
  skipStart.checked = s.skipStart;
  skipSeconds.value = s.skipSeconds;
});

autoClick.onchange = () => chrome.storage.sync.set({ autoClick: autoClick.checked });
skipStart.onchange = () => chrome.storage.sync.set({ skipStart: skipStart.checked });
skipSeconds.onchange = () =>
  chrome.storage.sync.set({ skipSeconds: Number(skipSeconds.value) || 0 });
