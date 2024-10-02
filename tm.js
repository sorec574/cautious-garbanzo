// TypingMind Extension to Hide Logo
(() => {
  const hideLogoStyles = `
    div:has(> div > img[src="/logo.png"]) {
      display: none !important;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.textContent = hideLogoStyles;
  document.head.appendChild(styleElement);

  console.log('TypingMind logo hiding extension loaded successfully.');
})();