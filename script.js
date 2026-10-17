(function () {
  // Ano atual no rodapé
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Alternância de tema claro/escuro
  var root = document.documentElement;
  document.getElementById('theme').onclick = function () {
    var atual = root.getAttribute('data-theme');
    var escuro = atual
      ? atual === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', escuro ? 'light' : 'dark');
  };
})();