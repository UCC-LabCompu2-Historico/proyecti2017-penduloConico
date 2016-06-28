/**
 * Created by Nicolas Grupe on 11/06/2016.
 */


function dibujoInicio() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var centerY = myCanvas.height * 2/3;
    var radius = 20;
    var angIngresado= 30; //Se supone que este es el valor que ingreso el usuario y esta en grados

    ctx.beginPath();
    //Dibuja circulo
    ctx.arc(centerX,centerY,radius,0,2*Math.PI); //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    //Dibuja Linea
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX,centerY-radius);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Si van a cambiar de color, comienzan un Path nuevo
    ctx.beginPath();
    ctx.strokeStyle="#194D80";
    ctx.moveTo(centerX,0);
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );
    ctx.lineTo(centerX-lineaHor,lineaVer); //Linea a la izquierda

    var radioY= radius * Math.cos(angIngresado * Math.PI /180 );
    var radioX= radius * Math.sin(angIngresado * Math.PI /180 );
    ctx.arc(centerX-lineaHor-radioX,lineaVer+radioY,radius,-radius,2*Math.PI);
    ctx.fillStyle = '#194D80';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Si van a cambiar de color, comienzan un Path nuevo
    ctx.beginPath();
    ctx.strokeStyle="#7C858B";
    ctx.moveTo(centerX,0);
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );
    ctx.lineTo(centerX+lineaHor,lineaVer);//Linea a la derecha

    ctx.arc(centerX+lineaHor+radioX,lineaVer+radioY,radius,radius,(Math.PI/180)*360,true);
    ctx.fillStyle = '#7C858B';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function dibujo() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var centerY = cLongitud * 60;
    var radius = cMasa*4;
    var angIngresado= cAngulo; //Se supone que este es el valor que ingreso el usuario y esta en grados

    ctx.beginPath();
    //Dibuja circulo
    ctx.arc(centerX,centerY,radius,0,2*Math.PI); //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    //Dibuja Linea
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX,centerY-radius);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Si van a cambiar de color, comienzan un Path nuevo
    ctx.beginPath();
    ctx.strokeStyle="#194D80";
    ctx.moveTo(centerX,0);
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );
    ctx.lineTo(centerX-lineaHor,lineaVer); //Linea a la izquierda

    var radioY= radius * Math.cos(angIngresado * Math.PI /180 );
    var radioX= radius * Math.sin(angIngresado * Math.PI /180 );
    ctx.arc(centerX-lineaHor-radioX,lineaVer+radioY,radius,-radius,2*Math.PI);
    ctx.fillStyle = '#194D80';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //Si van a cambiar de color, comienzan un Path nuevo
    ctx.beginPath();
    ctx.strokeStyle="#7C858B";
    ctx.moveTo(centerX,0);
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );
    ctx.lineTo(centerX+lineaHor,lineaVer);//Linea a la derecha

    ctx.arc(centerX+lineaHor+radioX,lineaVer+radioY,radius,radius,(Math.PI/180)*360,true);
    ctx.fillStyle = '#7C858B';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function borrarCanvas() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    ctx.clearRect(0,0,550,250);
}