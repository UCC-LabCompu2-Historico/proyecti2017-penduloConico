/**
 * Created by Mark & Nik on 10/05/16.
 */

function Calcular()
{
    var resultado=0;
    var unidad;
    var opcion = document.getElementById("varC").value;

    switch (opcion){
        case "1"://calculo de la Tension
            resultado = (document.getElementById("masa").value * 9.8)/(Math.cos(document.getElementById("angulo").value*Math.PI/180));
            unidad = " (N)";
            break;

        case "2"://calculo de la Longitud
            resultado = document.getElementById("radio").value / Math.sin(document.getElementById("angulo").value*Math.PI/180);
            unidad = " (m)";
            break;

        case "3"://calculo de Masa
            resultado = (document.getElementById("tens").value * Math.cos(document.getElementById("angulo").value*Math.PI/180)) / 9.8;
            unidad = " (kg)";
            break;

        case "4"://calculo del Angulo
            resultado = Math.acos(document.getElementById("radio").value / document.getElementById("longitud").value);

            resultado = resultado * 180 / Math.PI; //No convierte correctamente el angulo en Grados
            unidad = "°";
            break;

        case "5"://calculo de la Velocidad
            resultado = Math.sqrt(9.8 * document.getElementById("radio").value * Math.tan(document.getElementById("angulo").value*Math.PI/180));
            unidad = " (km/h)";
            break;

        case "6"://calculo del Radio
            resultado = document.getElementById("longitud").value * Math.sin(document.getElementById("angulo").value*Math.PI/180);
            unidad = " (m)";
            break;
    }

    var resultadoFinal = resultado.toFixed(2);
    document.getElementById("res").value = resultadoFinal + unidad;
}