function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);
var chute = parseInt(prompt("Digite seu chute!"));

for (i = 1; i < 3; i++) {
    if (numeroPensado == chute) {
        mostra ("Você acertou!");
        break
    } else {
        alert ("Tente novamente!")
        chute = parseInt(prompt("Digite seu chute!"));
    }
}

