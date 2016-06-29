/**
 * Created by Nik & Mark on 11/06/2016.
 */

//Dibujo predeterminado para la pagina
function dibujoInicio() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var centerY = myCanvas.height * 2/3;
    var radius = 20;
    var angIngresado= 30; //

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

    //Comienzan un Path nuevo
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

    //Comienzan un Path nuevo
    ctx.beginPath();
    ctx.strokeStyle="#7C858B";
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );

    ctx.arc(centerX+lineaHor+radioX,lineaVer+radioY,radius,radius,(Math.PI/180)*360,true);
    ctx.fillStyle = '#7C858B';
    ctx.fill();
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX+lineaHor,lineaVer);//Linea a la derecha
    ctx.stroke();
    ctx.closePath();
}


//Dibujo a partir de los datos ingresados por el usuario
function dibujo() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    var centerX = myCanvas.width / 2;
    var centerY = cLongitud * 70;
    var radius = cMasa*4;
    var angIngresado=0; //angulo en grados para que arranque en cero la animacion

function animar (){

    myCanvas.width= myCanvas.width;
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

    //Comienzan un Path nuevo
    //Pendulo izquierda
    ctx.beginPath();
    ctx.strokeStyle="#194D80";
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );

    var radioY= radius * Math.cos(angIngresado * Math.PI /180 );
    var radioX= radius * Math.sin(angIngresado * Math.PI /180 );
    ctx.arc(centerX-lineaHor-radioX,lineaVer+radioY,radius,-radius,2*Math.PI);
    ctx.fillStyle = '#194D80';
    ctx.fill();
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX-lineaHor,lineaVer); //Linea a la izquierda
    ctx.stroke();
    ctx.closePath();

    //Comienzan un Path nuevo
    //Pendulo Derecha
    ctx.beginPath();
    ctx.strokeStyle="#7C858B";
    var lineaVer = (centerY-radius) * Math.cos(angIngresado * Math.PI /180 );
    var lineaHor = (centerY-radius) * Math.sin(angIngresado * Math.PI /180 );

    ctx.arc(centerX+lineaHor+radioX,lineaVer+radioY,radius,radius,(Math.PI/180)*360,true);
    ctx.fillStyle = '#7C858B';
    ctx.fill();
    ctx.moveTo(centerX,0);
    ctx.lineTo(centerX+lineaHor,lineaVer);//Linea a la derecha
    ctx.stroke();
    ctx.closePath();

    angIngresado += 0.5;

    if(angIngresado >= cAngulo){
        clearInterval(id);
    }

}
   var id = setInterval(animar, 10);
}


//Borrar  dibujo en el lienzo
function borrarCanvas() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    ctx.clearRect(0,0,550,300);
}