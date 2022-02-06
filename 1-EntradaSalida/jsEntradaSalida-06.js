/*
santino canepa
ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let result;
	let mensaje;

	//parseInt crea un numero no entero a entero 
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);

	result = numero1 + numero2;

	mensaje = "el resultado es " + result;

	alert(mensaje);

}

