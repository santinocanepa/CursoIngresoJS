/* 
Santino Canepa
Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;

	nombre= prompt("ingrese nombre");

    document.getElementById("txtIdNombre").value= nombre;

}
/* lo que funciona aca es que, primero el let da una variable. Luego 
se usa esa variable agregandole un prompt para que al tocar "mostrar"
saque una ventana y asi dejar el dato.
 Finalmente igual el documento de texto al nombre (la variable) para que quede ahi  */
