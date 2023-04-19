    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    raio = 10;

    function desenhaCirculo(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        if (evento.shiftKey && evento.altKey) {
            alert("Só aperte uma tecla por vez pfvr.")
        } else if (evento.shiftKey && raio < 40) {
            raio = raio + 10;
        } else if (evento.altKey && raio > 10) {
            raio = raio - 5;
        } 

        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();
        console.log(x + ',' + y);   
        
    }

    tela.onclick = desenhaCirculo;
