/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/ 
//Santino Canepa / Tp1
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    resultadoSuma = precio1 + precio2 + precio3;

    alert("la suma es " + resultadoSuma);
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio;
    let promedioFinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    promedio = precio1 + precio2 + precio3;

    promedioFinal = promedio / 3;

    alert("el promedio es " + promedioFinal.toFixed(2));
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoSuma;
    let mensajefinal;

    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio1 = parseFloat(precio1);

    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio2 = parseFloat(precio2);

    precio3 = document.getElementById("txtIdPrecioTres").value;
    precio3 = parseFloat(precio3);

    resultadoSuma = precio1 + precio2 + precio3;

    mensajefinal = resultadoSuma + (resultadoSuma * 0.21);

    alert("el resultado es " + mensajefinal.toFixed(2));
}