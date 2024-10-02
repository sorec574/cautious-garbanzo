// TypingMind Extension to Hide Logo
(() => {
  function hideLogo() {
    const hideLogoStyles = `
      div:has(> div > img[src="/logo.png"]) {
        display: none !important;
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = hideLogoStyles;
    document.head.appendChild(styleElement);

    console.log('TypingMind logo hiding extension loaded successfully.');
  }

  // Check if the document is already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    hideLogo();
  } else {
    // If not, wait for it to load
    document.addEventListener('DOMContentLoaded', hideLogo);
  }
})();