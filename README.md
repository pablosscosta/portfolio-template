# 📁 Template de Portfólio Pessoal

## 👋 Sobre o projeto

Este é um template de portfólio pessoal feito com HTML, CSS (via Tailwind) e JavaScript.  
Ideal para profissionais que desejam apresentar seus projetos, habilidades e formas de contato de maneira simples e elegante.

---

## 🚀 Como usar

1. **Clone o repositório:**

```bash
git clone https://github.com/seuusuario/seu-repositorio.git
```

2. **Execute em um servidor local:**

Este projeto utiliza `fetch()` para carregar dados externos (JSON).  
Por isso, **não funciona corretamente ao abrir o `index.html` diretamente no navegador**.  
Use uma das opções abaixo para rodar localmente:

- Extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
- Servidor local com Python:

```bash
# Python 3
python -m http.server
```

- Ferramentas como Vite, Parcel ou outros bundlers

---

## ✏️ Personalização

### 1. Informações pessoais (`dados.json`)

Local: `assets/data/dados.json`

```json
{
  "nome": "Seu Nome",
  "titulo": "Seu título ou área de atuação",
  "email": "seuemail@exemplo.com",
  "linkedin": "https://linkedin.com/in/seuusuario",
  "github": "https://github.com/seuusuario"
}
```

### 2. Projetos (`projetos.json`)

Local: `assets/data/projetos.json`

Adicione, edite ou remova projetos conforme necessário.  
**Os campos `deploy` e `tecnologias` são opcionais.**

```json
{
  "titulo": "Nome do Projeto",
  "descricao": "Descrição breve do projeto.",
  "imagem": "assets/img/projeto-001.png",
  "tecnologias": ["HTML", "CSS", "JavaScript"],
  "repositorio": "https://github.com/seuusuario/repositorio",
  "deploy": "https://seudominio.com/projeto"
}
```

### 3. Imagem de perfil

Substitua o arquivo `assets/img/avatar.jpg` pela sua própria foto.  
Mantenha o nome do arquivo ou atualize o caminho no HTML.

---

## 🌐 Publicação

Você pode publicar seu portfólio gratuitamente usando:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

---

## 📦 Estrutura de pastas

```
├── assets/
│   ├── css/         → estilos personalizados (opcional)
│   ├── data/        → arquivos JSON com dados e projetos
│   ├── img/         → imagens dos projetos e avatar
│   └── js/          → script principal
├── index.html       → página principal
```

---

## 🛠️ Tecnologias usadas

- HTML  
- Tailwind CSS (via CDN)  
- JavaScript  
- AOS (Animate On Scroll)

---

## 📄 Licença

Este template é livre para uso pessoal e profissional.  
Sinta-se à vontade para adaptar e compartilhar!