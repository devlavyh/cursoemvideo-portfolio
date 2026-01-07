const botao = document.getElementById('botao-tema');
const body = document.body;

// PERSISTÊNCIA DO TEMA
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// FUNÇÃO PARA ALTERNAR ENTRE TEMA CLARO E ESCURO
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i> Tema';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i> Tema';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// SCROLL SUAVE PARA LINKS DE NAVEGAÇÃO
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// MENU MOBILE
const navItems = document.querySelectorAll('.nav-item');
const mobileBtn = document.querySelector('.mobile-btn');
const navList = document.querySelector('.nav-list');

mobileBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});