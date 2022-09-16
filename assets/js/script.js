function mudaImagem (imagem) {
    document.querySelector('.vaporfly').src = imagem;
}

function mudaCor (color) {
    const cor = document.querySelector('.circle');
    cor.style.backgroundColor = color;
}