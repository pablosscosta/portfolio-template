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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#projetos .grid");

  fetch("assets/data/projetos.json")
    .then((res) => res.json())
    .then((projetos) => {
      projetos.forEach((projeto) => {
        const card = document.createElement("div");
        card.className =
          "bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center";
        card.setAttribute("data-aos", "zoom-in");

        card.innerHTML = `
          <img src="${projeto.imagem}" alt="${projeto.titulo}" class="h-48 object-cover mb-4 rounded-lg" />
          <h3 class="text-xl font-semibold text-blue-600 mb-2">${projeto.titulo}</h3>
          <p class="text-gray-600 mb-4">${projeto.descricao}</p>
          <div class="flex flex-wrap justify-center gap-2 mb-4">
            ${projeto.tecnologias
              .map(
                (tech) =>
                  `<span class="bg-gray-200 text-sm px-2 py-1 rounded">${tech}</span>`
              )
              .join("")}
          </div>
          <div class="flex gap-4">
            <a href="${projeto.repositorio}" target="_blank" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Ver repositório</a>
            ${
              projeto.deploy
                ? `<a href="${projeto.deploy}" target="_blank" class="bg-gray-100 text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition">Ver online</a>`
                : ""
            }
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Erro ao carregar projetos:", err);
      container.innerHTML =
        "<p class='text-center text-red-500'>Não foi possível carregar os projetos.</p>";
    });
});