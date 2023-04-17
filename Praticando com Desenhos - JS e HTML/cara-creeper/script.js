
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

//cabeça
pincel.fillStyle = "darkgreen";
pincel.fillRect (0, 0, 350, 300);

//olhos
pincel.fillStyle = "black";
pincel.fillRect(45, 50, 90, 90);
pincel.fillRect (205, 50, 90, 90);

//nariz
pincel.fillRect(135, 140, 70, 100);

//boca
pincel.fillRect (95, 190, 40, 110);
pincel.fillRect (205, 190, 40, 110);