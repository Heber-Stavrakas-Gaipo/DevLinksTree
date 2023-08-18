function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = html.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/heber-stavrakas-gaipo.png") //Ainda será adicionada uma foto para tema claro
    img.setAttribute("alt", "Imagem de perfil para o tema claro")
  } else {
    img.setAttribute("src", "https://github.com/heber-stavrakas-gaipo.png") // E outra para escuro
    img.setAttribute("alt", "Imagem de perfil para o tema escuro")
  }
}
