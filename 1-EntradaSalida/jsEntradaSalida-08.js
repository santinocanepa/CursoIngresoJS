/*
santino canepa
ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;
	let mensaje;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseFloat(dividendo);

	divisor = document.getElementById("txtIdNumeroDivisor").value;
	divisor = parseFloat(divisor);

	resultado = dividendo % divisor;

	mensaje = "El resto es " + resultado;

	alert(mensaje);
}
