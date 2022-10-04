let texto = document.getElementById("texto")

document.addEventListener("keydown", (event)=> {
    console.log(event)
    texto.innerHTML += event.key
})

let contador = 0
let execucao = setInterval(() => {
    texto.innerHTML = contador
    contador++


    if (contador === 5 ){
        contador = 0
        //clearInterval(execucao)
    }
}, 1000)


