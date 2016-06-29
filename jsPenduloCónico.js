/**
 * Created by Mark & Nik on 10/05/16.
 */
var angulo;
var cLongitud;
var cAngulo;
var cMasa;
var cRadio;

function Validar()//esta funcion es para que no se ingresen numeros negativos
{

    if(document.getElementById("tens").value < 0){
        var t = document.getElementById("tens");
        t.setAttribute("class", "red");
        alert("NO SE PUEDEN INGRESAR VALORES NEGATIVOS ");
    }else{
        var t = document.getElementById("tens");
        t.removeAttribute("class");
    }


    if(document.getElementById("masa").value < 0){
        var m = document.getElementById("masa");
        m.setAttribute("class", "red");
        alert("NO SE PUEDEN INGRESAR VALORES NEGATIVOS ");
    }else{
        var m = document.getElementById("masa");
        m.removeAttribute("class");
    }


    if(document.getElementById("angulo").value < 0){
        var a = document.getElementById("angulo");
        a.setAttribute("class", "red");
        alert("NO SE PUEDEN INGRESAR VALORES NEGATIVOS ");
    }else{
        var a = document.getElementById("angulo");
        a.removeAttribute("class");
    }


    if(document.getElementById("radio").value < 0){
        var r = document.getElementById("radio");
        r.setAttribute("class", "red");
        alert("NO SE PUEDEN INGRESAR VALORES NEGATIVOS ");
    }else{
        var r = document.getElementById("radio");
        r.removeAttribute("class");
    }


    if(document.getElementById("longitud").value < 0){
        var l = document.getElementById("longitud");
        l.setAttribute("class", "red");
        alert("NO SE PUEDEN INGRESAR VALORES NEGATIVOS ");
    }else{
        var l = document.getElementById("longitud");
        l.removeAttribute("class");
    }
}

function Calcular()
{

    Validar();//llamamos a la funcion para verificar que no sea negativo
    
    var resultado=0;
    var unidad;
    var opcion = document.getElementById("varC").value;

    switch (opcion){
        case "1"://calculo de la Tension
            resultado = (document.getElementById("masa").value * 9.8)/(Math.cos(document.getElementById("angulo").value*Math.PI/180));
            unidad = " (N)";
            angulo = document.getElementById("angulo").value;
            break;

        case "2"://calculo de la Longitud
            resultado = document.getElementById("radio").value / Math.sin(document.getElementById("angulo").value*Math.PI/180);
            unidad = " (m)";
            angulo = document.getElementById("angulo").value;
            break;

        case "3"://calculo de Masa
            resultado = (document.getElementById("tens").value * Math.cos(document.getElementById("angulo").value*Math.PI/180)) / 9.8;
            unidad = " (kg)";
            angulo = document.getElementById("angulo").value;
            break;

        case "4"://calculo del Angulo
            resultado = Math.asin(document.getElementById("radio").value / document.getElementById("longitud").value);

            //resultado = resultado * 180 / Math.PI; //Convierte correctamente el angulo en Grados
            unidad = "°";
            angulo = resultado;
            break;

        case "5"://calculo de la Velocidad
            resultado = Math.sqrt(9.8 * document.getElementById("radio").value * Math.tan(document.getElementById("angulo").value*Math.PI/180));
            unidad = " (km/h)";
            angulo = document.getElementById("angulo").value;
            break;

        case "6"://calculo del Radio
            resultado = document.getElementById("longitud").value * Math.sin(document.getElementById("angulo").value*Math.PI/180);
            unidad = " (m)";
            angulo = document.getElementById("angulo").value;
            break;
    }

    var resultadoFinal = resultado.toFixed(2);
    document.getElementById("res").value = resultadoFinal + unidad;

    //unidades

    var uMasa = document.getElementById("select-masa").value;
    if(uMasa == 1){
        cMasa = document.getElementById("masa").value;
    }else{
        cMasa = document.getElementById("masa").value/1000;
    }


    var uAngulo = document.getElementById("select-angulo").value;
    if(uAngulo == 1){
        cAngulo = document.getElementById("angulo").value;
    }else{
        cAngulo = document.getElementById("angulo").value * 180 / Math.PI;
    }
    
    var uRadio = document.getElementById("select-radio").value;
    switch(uRadio)
    {
        case "1":
            cRadio = document.getElementById("radio").value;
            break;
        case "2":
            cRadio = document.getElementById("radio").value / 100;
            break;
        case "3":
            cRadio = document.getElementById("radio").value * 1000;
            break;
    }

    var uLongitud = document.getElementById("select-longitud").value;
    switch(uLongitud)
    {
        case "1":
            cLongitud = document.getElementById("longitud").value;
            break;
        case "2":
            cLongitud = document.getElementById("longitud").value / 100;
            break;
        case "3":
            cLongitud = document.getElementById("longitud").value * 1000;
            break;
    }

    borrarCanvas();
    dibujo();
}

// Esta funcion es para desactivar el campo elegido a calcular
function desactivar() {
    var opcion = document.getElementById("varC").value;
    var t = document.getElementById("tens");
    var l= document.getElementById("longitud");
    var m= document.getElementById("masa");
    var a= document.getElementById("angulo");
    var r= document.getElementById("radio");

    switch (opcion){

        case "0":

            t.removeAttribute("disabled");
            l.removeAttribute("disabled");
            m.removeAttribute("disabled");
            a.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "1":

            t.setAttribute("disabled","disabled");
            l.removeAttribute("disabled");
            m.removeAttribute("disabled");
            a.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "2":

            l.setAttribute("disabled","disabled");
            t.removeAttribute("disabled");
            m.removeAttribute("disabled");
            a.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "3":

            m.setAttribute("disabled","disabled");
            t.removeAttribute("disabled");
            l.removeAttribute("disabled");
            a.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "4":

            a.setAttribute("disabled","disabled");
            t.removeAttribute("disabled");
            l.removeAttribute("disabled");
            m.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "5":

            t.removeAttribute("disabled");
            l.removeAttribute("disabled");
            m.removeAttribute("disabled");
            a.removeAttribute("disabled");
            r.removeAttribute("disabled");
            break;

        case "6":

            r.setAttribute("disabled","disabled");
            t.removeAttribute("disabled");
            l.removeAttribute("disabled");
            m.removeAttribute("disabled");
            a.removeAttribute("disabled");
            break;
    }
}