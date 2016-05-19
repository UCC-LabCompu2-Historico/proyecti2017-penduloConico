/**
 * Created by Mark & Nik on 10/05/16.
 */

function shownVariables() {
    if(document.varC.varCal.value=="tension"){
        document.getElementById('valIngresar').style.display = 'block';
    }
    else{
        document.getElementById('valIngresar').style.display = 'none';
    }
}

function calcPendulo(nombre,valor){
    if(isNaN(valor)){
        alert("El valor "+nombre+" debe ser numerico");
        document.getElementsByName(nombre).value="";
        document.getElementById('resultados').style.display = 'none';
    }
    else if(document.valoresIngr.longitud!="" && document.valoresIngr.angulo!=""){
        document.getElementById('resultados').style.display = 'block';
        varLong=document.valoresIngr.longitud.value;
        varAng=document.valoresIngr.angulo.value;

        Total=2*Math.PI*Math.sqrt(Number(varLong)*Math.cos(Number(varAng)*Math.PI/180)/9.8);
        Total=Math.round(Total*100)/100;
        document.getElementById("resul_tension").value=Total;
    }
    else{
        document.getElementById('resultados').style.display = 'none';
    }

}