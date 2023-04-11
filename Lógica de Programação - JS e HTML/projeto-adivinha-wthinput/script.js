function sorteia() {
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros (quantidade) {
    var segredos = [];
    var numero = 1;

    while (numero <= quantidade){

        var numeroAleatorio = sorteia();

        var achou = false;

        for (var posicao = 0; posicao < segredos.length; posicao++) {
            if (segredos[posicao] == numeroAleatorio) {
                achou = true;
                break
            }
        }

        if (achou == false) {
            segredos.push(numeroAleatorio);
        }
    
        numero++;
    }

    return segredos;
}

var segredos = sorteiaNumeros(3);
console.log(segredos);

var input = document.querySelector("input");
input.focus();

function verifica() {
    var achou = false;

    for (i = 0; i < segredos.length; i++) {
        if (input.value == segredos[i] ) {
            alert("Você acertou");
            achou = true;
            break
        } 
    }
    if (achou == false) {
        alert ("Você errou!")
    }

    input.value = "";
    input.focus();
}

var button = document.querySelector("button");
button.onclick = verifica;

