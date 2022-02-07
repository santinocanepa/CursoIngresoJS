/*
Santino Canepa
Ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
    let edad;
	let nombremostrado;

	nombre=document.getElementById("txtIdNombre").value;

	edad=document.getElementById("txtIdEdad").value;

	nombremostrado = "usted se llama " + nombre + " y tiene " + edad + " años";

	alert(nombremostrado);
}

