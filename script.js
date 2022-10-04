let canvas = /** @type {HTMLCanvasElement} */ document.getElementById("screen");
let ctx = /** @type {CanvasRenderingContext2D} */ canvas.getContext("2d");

const TILE = 16;
const WIDTH = canvas.getAttribute("width");
const HEIGHT = canvas.getAttribute("height");
const NUM_TILES_W = Math.floor(WIDTH / TILE);
const NUM_TILES_H = Math.floor(WIDTH / TILE);

let i = 0;
let direcao = "RIGHT";
let snake = [];
snake[0] = { x: 9 * TILE, y: 9 * TILE };
let comida = {
	x: Math.floor(Math.random() * NUM_TILES_W) * TILE,
	y: Math.floor(Math.random() * NUM_TILES_H) * TILE
};

let pontos = 0;
let paragrafo = document.createElement("p");
let textponto = document.createTextNode(pontos);
paragrafo.appendChild(textponto);

let body = document.querySelector("body");
body.appendChild(paragrafo);

document.addEventListener("keydown", entradaTeclado);

function draw() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);

	ctx.fillStyle = "red";
	ctx.fillRect(comida.x, comida.y, 1 * TILE, 1 * TILE);

	ctx.fillStyle = "green";
	for (let i = 0; i < snake.length; i++) {
		ctx.fillRect(snake[i].x, snake[i].y, 1 * TILE, 1 * TILE);
	}

	let posx = snake[0].x;
	let posy = snake[0].y;

	switch (direcao) {
		case "LEFT": {
			posx -= TILE;
			break;
		}
		case "UP": {
			posy -= TILE;
			break;
		}
		case "RIGHT": {
			posx += TILE;
			break;
		}
		case "DOWN": {
			posy += TILE;
			break;
		}
	}

	if (posx > WIDTH - TILE) {
		posx = 0;
		direcao = "RIGHT";
	}
	if (posx < 0) {
		posx = WIDTH - TILE;
		direcao = "LEFT";
	}
	if (posy > HEIGHT - TILE) {
		posy = 0;
		direcao = "DOWN";
	}
	if (posy < 0) {
		posy = HEIGHT - TILE;
		direcao = "UP";
	}

	let snakehead = {
		x: posx,
		y: posy
	};

	console.log(snakehead.x, snakehead.y);

	snake.unshift(snakehead);

	if (snakehead.x === comida.x && snakehead.y === comida.y) {
		pontos++;
		paragrafo.innerText = pontos;
		comida = {
			x: Math.floor(Math.random() * NUM_TILES_W) * TILE,
			y: Math.floor(Math.random() * NUM_TILES_H) * TILE
		};
	} else {
		snake.pop();
	}

	for (let i = 1; i < snake.length; i++) {
		if (snakehead.x === snake[i].x && snakehead.y === snake[i].y) {
			ctx.fillStyle = "black";
			ctx.font = "30px Arial";
			ctx.fillText("Game Over", WIDTH / 4, HEIGHT / 2);
			clearInterval(gamerun);
		}
	}
}

//element.addEventListener(event, function, useCapture);

let gamerun = setInterval(draw, 50);

function entradaTeclado(event) {
	if (event.keyCode == 37 && direcao !== "RIGHT") {
		direcao = "LEFT";
	} else if (event.keyCode == 38 && direcao !== "DOWN") {
		direcao = "UP";
	} else if (event.keyCode == 39 && direcao !== "LEFT") {
		direcao = "RIGHT";
	} else if (event.keyCode == 40 && direcao !== "UP") {
		direcao = "DOWN";
	}
}
