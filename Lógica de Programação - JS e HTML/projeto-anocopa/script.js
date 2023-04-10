function pulaLinha() {
    document.write("<br>")
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

var anoCopa = parseInt(prompt("Em que ano deseja saber?"))
var limite = parseInt(prompt("Entre até qual ano você quer"))

while (anoCopa < limite) {
    mostra ("Teve copa em " + anoCopa);
    anoCopa += 4;
}