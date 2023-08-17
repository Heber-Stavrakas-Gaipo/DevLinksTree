function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = html.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Imagem de perfil para o tema claro")
  } else {
    img.setAttribute("src", "https://github.com/heber-stavrakas-gaipo.png")
    img.setAttribute("alt", "Imagem de perfil para o tema escuro")
  }
}
