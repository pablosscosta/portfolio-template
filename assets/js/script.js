const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';

  // Identificando qual seção está visível
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  // Destacando o link ativo no menu
  navLinks.forEach(link => {
    link.classList.remove('text-blue-600', 'bg-blue-200'); // Remove destaque anterior
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('text-blue-600', 'bg-blue-200'); // Adiciona destaque à seção ativa
    }
  });
});
