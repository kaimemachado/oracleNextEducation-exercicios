function pulaLinha() {
    document.write("<br>")
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

var contador = parseInt(prompt("Quantas pessoas tem na sua família?"));
var c = 0;
var totalIdades = 0;

while (c < contador) {
    var idade = parseInt(prompt("Digite a idade: "));
    totalIdades = totalIdades + idade;
    c++;
}

var mediaDasIdades = totalIdades / contador;

mostra ("A média dos seus familiares é igual à: " + mediaDasIdades)