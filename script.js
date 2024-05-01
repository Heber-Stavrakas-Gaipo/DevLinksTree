function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = html.querySelector("#profile img")
  const octocat = html.querySelector("#octocat")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/heber-stavrakas-gaipo.png")
    img.setAttribute("alt", "Imagem de perfil para o tema claro")
    octocat.setAttribute("src", "./assets/octocat-lightMode.png")
  } else {
    img.setAttribute("src", "https://github.com/heber-stavrakas-gaipo.png")
    img.setAttribute("alt", "Imagem de perfil para o tema escuro")
    octocat.setAttribute("src", "./assets/octocat-darkMode.png")
  }
}
