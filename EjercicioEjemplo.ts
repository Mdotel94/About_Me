//Ejercicio que nos dice si podemos votar o no segun si eres mayor de edad o no

let edad = prompt("Indica tu edad para saber si puedes votar", "Debes ser mayor de edad");

let edadCorrecta = confirm("Edad introducida correcta"+ edad);

//el if correcto seria: (Number(edad)>18 && edadCorrecta)

if(edad>=18 && edadCorrecta==true)
{
    console.log("Puedes votar");
}
else
{
    console.log("No puedes votar");
}