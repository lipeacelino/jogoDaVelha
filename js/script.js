let vez = 1
let acabou = false

//Quando a vez == 1 então a vez é do jogador: ✘ 
//Quando a vez == 2 então a vez é do jogador: ○ 

reload = () => location.reload()

let vezDeJogar = document.getElementsByClassName("vezDeJogar") [0]
vezDeJogar.innerHTML="A vez é de: ✘"

function fimDeJogo() {
   
    //vencendo na horizontal
    if (!!(document.getElementById("a1").innerHTML && document.getElementById("a2").innerHTML && document.getElementById("a3").innerHTML)) {
        if ((document.getElementById("a1").innerHTML === document.getElementById("a2").innerHTML) && 
        (document.getElementById("a2").innerHTML === document.getElementById("a3").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
    if (!!(document.getElementById("b1").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("b3").innerHTML)) {
        if ((document.getElementById("b1").innerHTML === document.getElementById("b2").innerHTML) && 
        (document.getElementById("b2").innerHTML === document.getElementById("b3").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
    if (!!(document.getElementById("c1").innerHTML && document.getElementById("c2").innerHTML && document.getElementById("c3").innerHTML)) {
        if ((document.getElementById("c1").innerHTML === document.getElementById("c2").innerHTML) &&
        (document.getElementById("c2").innerHTML === document.getElementById("c3").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
    //vencendo na vertical
    if (!!(document.getElementById("a1").innerHTML && document.getElementById("b1").innerHTML)) {
        if ((document.getElementById("a1").innerHTML === document.getElementById("b1").innerHTML) &&
        (document.getElementById("b1").innerHTML === document.getElementById("c1").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
    if (!!(document.getElementById("a2").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c2").innerHTML)) {
        if ((document.getElementById("a2").innerHTML === document.getElementById("b2").innerHTML) &&
        (document.getElementById("b2").innerHTML === document.getElementById("c2").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }

    if (!!(document.getElementById("a3").innerHTML && document.getElementById("b3").innerHTML && document.getElementById("c3").innerHTML)) {
        if ((document.getElementById("a3").innerHTML === document.getElementById("b3").innerHTML) &&
        (document.getElementById("b3").innerHTML === document.getElementById("c3").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
    //vencendo na tranversal
    if (!!(document.getElementById("a3").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c1").innerHTML)) {
        if ((document.getElementById("a3").innerHTML === document.getElementById("b2").innerHTML) &&
        (document.getElementById("b2").innerHTML === document.getElementById("c1").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }

    if (!!(document.getElementById("a1").innerHTML && document.getElementById("b2").innerHTML && document.getElementById("c3").innerHTML)) {
        if ((document.getElementById("a1").innerHTML === document.getElementById("b2").innerHTML) &&
        (document.getElementById("b2").innerHTML === document.getElementById("c3").innerHTML)) {
            vezDeJogar.innerHTML=`O jogador ${vez} venceu!`
            acabou = true
        }
    }
    
}

function addPeca(ele) {
    if (ele.innerHTML.length === 0) {
        if (vez === 1 && acabou !== true) {
            ele.innerHTML = "✘"
            fimDeJogo()
            if (acabou !== true){
                vez = 2
                vezDeJogar.innerHTML="A vez é de: ○"
            }
        }

        else if (vez === 2 && acabou !== true) {
            ele.innerHTML = "○"
            fimDeJogo()
            if(acabou !== true) {
                vez = 1
                vezDeJogar.innerHTML="A vez é de: ✘"
            } 
        }
    }
}
 