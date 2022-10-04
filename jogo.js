let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")


let tileset = new Image()
tileset.src = "tileset.gif"

let camerax = 50
let cameray = 0
let speed = 5

let canvas_width = 700
let canvas_heigth = 500

let zoom = 2


const draw = () => {
    ctx.clearRect(0, 0, 700, 500);
    ctx.drawImage(tileset, camerax , cameray, canvas_width/zoom, canvas_heigth/zoom, 0, 0, canvas_width, canvas_heigth);
}

let gamerun = setInterval(draw, 1);

document.addEventListener("keydown", (event) => {
    console.log(event)

    switch(event.key){
        case "ArrowDown": {
            if (cameray === canvas_width) cameray = canvas_width
            else cameray += speed
            break;
        }
        case "ArrowUp": {
            if (cameray === 0 ) cameray = 0
            else cameray -= speed
            break;
        }
        case "ArrowLeft": {
            if (camerax === 0 ) camerax = 0
            else camerax -= speed
            break;
        }
        case "ArrowRight": {
            camerax += speed
            break;
        }
        case " ": {
            zoom += 0.1;
            break;
        }
        case "Enter": {
            zoom -= 0.1;
            break
        }
        default:
            break;
    }

    console.log(camerax, cameray)
    console.log(zoom)
})
/*
class Heroi {
    constructor (){
        this.nome= "link"
        this.arma =" espada"
        this.posx = 50
        this.posy = 50
    }
}

let h = new Heroi()
h.nome
h.arma
*/