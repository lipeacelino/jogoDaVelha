let vez = 1 

//Quando a vez == 1 então a vez é do jogador: ✘ 
//Quando a vez == 2 então a vez é do jogador: ○ 

reload = () => location.reload()

let vezDeJogar = document.getElementsByClassName("placar") [0]
vezDeJogar.innerHTML="A vez é de: ✘"

function fimDeJogo() {
   
    //vencendo na horizontal
    if (document.getElementById("a1").innerHTML && document.getElementById("a2").innerHTML && document.getElementById("a3").innerHTML != undefined) {
        if ((document.getElementById("a1").innerHTML && document.getElementById("a2").innerHTML) === document.getElementById("a3").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }
    
    if (document.getElementById("b1").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("b3").innerHTML != undefined) {
        if ((document.getElementById("b1").innerHTML && document.getElementById("b2").innerHTML) === document.getElementById("b3").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }
    
    if (document.getElementById("c1").innerHTML && document.getElementById("c2").innerHTML && document.getElementById("c3").innerHTML != undefined) {
        if ((document.getElementById("c1").innerHTML && document.getElementById("c2").innerHTML) === document.getElementById("c3").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }
    
    //vencendo na vertical
    if (document.getElementById("a1").innerHTML && document.getElementById("b1").innerHTML && document.getElementById("c1").innerHTML != undefined) {
        if ((document.getElementById("a1").innerHTML && document.getElementById("b1").innerHTML) === document.getElementById("c1").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }

    if (document.getElementById("a2").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c2").innerHTML != undefined) {
        if ((document.getElementById("a2").innerHTML && document.getElementById("b2").innerHTML) === document.getElementById("c2").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }

    if (document.getElementById("a3").innerHTML && document.getElementById("b3").innerHTML && document.getElementById("c3").innerHTML != undefined) {
        if ((document.getElementById("a3").innerHTML && document.getElementById("b3").innerHTML) === document.getElementById("c3").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }
    
    //vencendo na tranversal
    
    
    if (document.getElementById("a3").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c1").innerHTML != undefined) {
        if ((document.getElementById("a3").innerHTML && document.getElementById("b2").innerHTML) === document.getElementById("c1").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!`)
        }
    }

    if (document.getElementById("a1").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c3").innerHTML != undefined) {
        if ((document.getElementById("a1").innerHTML && document.getElementById("b2").innerHTML) === document.getElementById("c3").innerHTML) {
            console.log(`Fim de jogo otário! O jogador ${vez} venceu!` )
        }
    }
    
    
}

function addPeca(ele) {
    if (ele.innerHTML.length === 0) {
        if (vez === 1) {
            ele.innerHTML = "✘"
            vez = 2
            fimDeJogo()
            vezDeJogar.innerHTML="A vez é de: ○"
        }

        else if (vez === 2) {
            ele.innerHTML = "○"
            vez = 1
            fimDeJogo()
            vezDeJogar.innerHTML="A vez é de: ✘" 
        }
    }
}
 