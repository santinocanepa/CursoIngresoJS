/*
Santino Canepa
Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;

	importe = document.getElementById("txtIdImporte").value
	importe = parseFloat(importe)

	descuento = importe -(importe * 0.25) ;

	document.getElementById("txtIdResultado").value = descuento


}
