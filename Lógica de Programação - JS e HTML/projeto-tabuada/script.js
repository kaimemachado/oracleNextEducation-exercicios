function pulaLinha() {
    document.write("<br>")
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

var multiplicador = parseInt(prompt("Digite um número pelo qual quer multiplicar9"));

for (i = 0; i <= 10; i++) {
    mostra (multiplicador + " x " + i + " = " + (multiplicador * i));
    i + 1;
}