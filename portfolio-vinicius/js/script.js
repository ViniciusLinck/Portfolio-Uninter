// Seletores principais usados no menu, tema e formulário.
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

// Menu responsivo: abre e fecha os links no mobile.
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu mobile quando o usuário clica em um link interno.
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  });
});

// Alternância entre tema claro e escuro com persistência em localStorage.
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.textContent = 'Tema claro';
}

themeToggle.addEventListener('click', () => {
  const darkThemeEnabled = document.body.classList.toggle('dark-theme');
  themeToggle.textContent = darkThemeEnabled ? 'Tema claro' : 'Tema escuro';
  localStorage.setItem('portfolio-theme', darkThemeEnabled ? 'dark' : 'light');
});

// Mostra mensagens visuais de erro ou sucesso no formulário.
function showFeedback(message, type) {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Validação completa do formulário e simulação de envio.
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showFeedback('Preencha todos os campos antes de enviar.', 'error');
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback('Digite um e-mail válido, como usuario@dominio.com.', 'error');
    return;
  }

  showFeedback('Mensagem enviada com sucesso!', 'success');
  contactForm.reset();
});
