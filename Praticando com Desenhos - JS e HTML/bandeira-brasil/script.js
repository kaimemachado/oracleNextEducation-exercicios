var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");


//fundo
pincel.fillStyle = "green";
pincel.fillRect (0, 0, 600, 400);

//triangulos
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo (50, 200);
pincel.lineTo (300, 350);
pincel.lineTo (550, 200);
pincel.lineTo (300, 50);
pincel.fill();

//circulo
pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2 * 3.14);
pincel.fill();