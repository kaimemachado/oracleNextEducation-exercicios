function pulaLinha () {
    document.write ("<br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc (nome, peso, altura) {
    return peso / (altura * altura);
}

var nome = prompt ("Informe seu nome");
var peso = prompt("Informe seu peso");
var altura = prompt("Informe sua altura");


var imc = calculaImc (nome, peso, altura);

if (imc < 18.5) {
    mostra ("Abaixo do peso");
} else if (imc > 35) {
    mostra ("Você está acima do peso");
} else {
    mostra ("Você está com o peso ideal");
}

mostra ("Olá " + nome);
mostra ("Sua altura é: " + altura);
mostra("Seu peso é: " + peso);
mostra("Portanto, seu imc é: " + imc);
if (imc < 18.5) {
    mostra ("Abaixo do peso");
} else if (imc > 35) {
    mostra ("Você está acima do peso");
} else {
    mostra ("Você está com o peso ideal");
}