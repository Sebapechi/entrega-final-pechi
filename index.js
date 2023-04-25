let nombre = prompt ("ingrese su nombre")
let Variableletra = nombre.charAt(0).toUpperCase()

if (nombre !="") 
{console.log ("Hola" + "" + nombre)}
else{
    console.log ("No ingresaste tu nombre")
    console.log (Variableletra +nombre.slice(1))
    alert ("Hola" +  nombre)
    nombre = prompt ("ingresa tu nombre nuevamente")
    console.log (Variableletra +nombre.slice(1))
    alert ("Hola" +  nombre)
 }
    


