function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
// if(html.classList.contains("light")){
//     html.classList.remove("light")
// }else{
//     html.classList.add("light")
// }



// pegar a tag img
const img = document.querySelector("#profile img")


//condicao = light avatar-light senao avatar
// substituir a img

if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Willian Santos, sorrindo, usando óculos de sol, barba e fundo cor ...")
}else{
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Willian Santos, sorrindo, usando óculos e camisa preta, barba e fundo cor ...")
}

}