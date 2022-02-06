/*
Santino Canepa
ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let result;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	result = numero1 + numero2;

	result = parseInt(result);

	mensaje = "la suma es " + result;

	alert(mensaje);
}

function restar()
{
	let numero1;
	let numero2;
	let result;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	result = numero1 - numero2;
	result = parseInt(result);

	mensaje = "la resta es " + result;

	alert(mensaje);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let result;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	result = numero1 * numero2;
	result = parseInt(result);

	mensaje = "la multiplicación es " + result;

	alert(mensaje);
}

function dividir()
{
	let numero1;
	let numero2;
	let result;
	let mensaje;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseFloat(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseFloat(numero2);

	result = numero1 / numero2;
	result = parseFloat(result);

	mensaje = "la división es " + result;

	alert(mensaje);
}

