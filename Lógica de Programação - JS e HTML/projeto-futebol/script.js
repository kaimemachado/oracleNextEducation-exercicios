function pulaLinha () {
    document.write("<br>");
    document.write("<br>");
}

function mostra (frase) {
    document.write (frase);
    pulaLinha();
}

var vitorias = parseInt(prompt ("Entre com o número de vitórias: "));
var empates =  parseInt(prompt("Entre com o número de empates: "));

var pontos = (vitorias * 3) + empates;

mostra ("Os pontos do seu time é " + pontos);

if (pontos > 28){
    mostra ("O seu time está melhor do que o ano passado")
} else if (pontos < 28) {
    mostra ("O seu time está pior do que o ano passado")
} else {
    mostra ("O seu time está igual ao ano passado")
}