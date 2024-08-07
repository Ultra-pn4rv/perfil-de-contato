function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // pegar a tag img
    const img = document.querySelector("#profile img");

    // substituir a imagem
    if(html.classList.contains("light")) {
        // se tiver a img mode, add a img light
        img.setAttribute("src", "./assets/avatar-light.jpg");
    } else {
        // se nao, mantém a img atual
        img.setAttribute("src", "./assets/avatar.jpg");
    }
}