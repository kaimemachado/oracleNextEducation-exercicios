var segredos = [5,7,10,2];

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

