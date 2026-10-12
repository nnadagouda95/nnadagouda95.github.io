(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = theme;
  toggle?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  });
  document.querySelectorAll('.image-shell img').forEach(img => {
    const done = () => { if (img.complete && img.naturalWidth) img.nextElementSibling?.remove(); };
    img.addEventListener('load', done); done();
  });
  document.querySelector('[data-copy]')?.addEventListener('click', async e => {
    const button = e.currentTarget;
    const text = document.querySelector(button.dataset.copy)?.innerText || '';
    try { await navigator.clipboard.writeText(text); button.textContent = 'Copied'; }
    catch { button.textContent = 'Select and copy above'; }
    setTimeout(() => button.textContent = 'Copy BibTeX', 1800);
  });
})();
