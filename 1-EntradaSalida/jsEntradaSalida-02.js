/*
Santino Canepa
ejercicio 2
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
/* para declarar variables se usa la palabra reservada let */ 
function mostrar()
{
	let nombre;

	nombre = prompt("ingrese su nombre");

	alert(nombre);

	let apellido;

	apellido = prompt("ingrese su apellido");

	alert(apellido);

	alert("muchas gracias");
}

/* con let hago una variable 
usando la variable + el prompt hago que salga la caja para que el 
usario logre poner su dato, y finalmente el alert tira un 
mensaje sin "" para que se refiera a la variable NOMBRE, osea lo que ponga
el mismo usuario 
*/