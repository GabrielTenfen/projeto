const toggleMode = () => {
  const html = document.documentElement
  /*
  if (html.classList.contains(`light`)) {
    html.classList.remove(`light`)
  } else {
    html.classList.add(`light`)
  }
  */

  html.classList.toggle(`light`)

  // pegar a tag img
  const img = document.querySelector(`#profile img`)

  // substituir a img
  if (html.classList.contains(`light`)) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute(`src`, `./assets/avatar-light.png`)
    img.setAttribute(
      `alt`,
      `Foto de Mayk Brito sorrindo, usando óculos escuro e casaco preta, sem barba e fundo degrade entre roxo e azul.`
    )
  } else {
    // se tiver sem light mode, manter a imagem light
    img.setAttribute(`src`, `./assets/avatar.png`)
  }
}
