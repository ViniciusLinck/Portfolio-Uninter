const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Abre ou fecha o menu de navegação em telas menores.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu depois que o usuário seleciona uma seção.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

// Recupera a preferência de tema salva anteriormente no navegador.
const savedTheme = localStorage.getItem('portfolio-theme');

function updateThemeButton(darkThemeEnabled) {
  const actionLabel = darkThemeEnabled ? 'Ativar tema claro' : 'Ativar tema escuro';

  themeIcon.textContent = darkThemeEnabled ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', actionLabel);
  themeToggle.setAttribute('title', actionLabel);
}

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

updateThemeButton(savedTheme === 'dark');

// Alterna o tema e salva a nova preferência no armazenamento local.
themeToggle.addEventListener('click', () => {
  const darkThemeEnabled = document.body.classList.toggle('dark-theme');
  updateThemeButton(darkThemeEnabled);
  localStorage.setItem('portfolio-theme', darkThemeEnabled ? 'dark' : 'light');
});
