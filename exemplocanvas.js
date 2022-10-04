let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

const imagem = new Image();
imagem.src="character.png";

imagem.onload = function(){
    ctx.drawImage(imagem,48,0, 16, 30, 500/2, 400/2, 16, 30);
};
    