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

 function Persona (obj){
    this.nombre = obj.nombre
    this.edad = obj.edad
    this.trabaja = obj.trabaja
    this.profecion = obj.profecion
    this.CambiarNombre = function (NuevoNombre) {
        this.nombre = NuevoNombre
    }
 
 }

 let Sebastian = new Persona ( {
    nombre: 'Sebastian',
    edad: 22,
    trabaja: 'ture',
    profecion: 'Jugador de rugby',
 } )

 console.log(Sebastian)

 Sebastian.CambiarNombre('Sebastian Pechi')
 console.log(Sebastian)

 class productos {
    constructor(OBJ) {
        this.Nombre = OBJ.Nombre.toUpperCase()
        this.Cantidad = parseInt(OBJ.Cantidad)
        this.Precio = Number(OBJ.Precio)
    }

     //Metodo
     Iva = () => this.Precio * 1.21
     total = () => this.Precio * this.Cantidad
     Verproducto = () => {
        return `Nombre: ${this.nombre} Cantidad: ${this.cantidad} Precio: ${this.precio}`
     }

 }

let trueOfalse = true

const Nombre = prompt('ingresa el Nombre del producto')
const Cantidad = prompt('ingrece la Cantidad del producto')
const Precio = prompt('ingrse el Precio del producto')

function ingresoproducto() {
    while(trueOfalse){
        if(Nombre === '' || Cantidad === '' || Precio === ''){
            alert('NO PUEDES DEJAR ESPACIOS VACIOS')
            Nombre = prompt('ingresa el Nombre del producto')
            Cantidad = prompt('ingrece la Cantidad del producto')
            Precio = prompt('ingrse el Precio del producto')
            trueOfalse = true
        } else {
           let producto = new productos({
              Nombre: Nombre,
              Cantidad: Cantidad,
              Precio: Precio,
           })

             console.log(producto)

             producto.Iva()
             producto.total()
             alert(producto.Verproducto())



              trueOfalse = false
            
        }  
    
    }
}



let nombresArr = []
let costArr = []
let sizeArr = []
let true0false = []

class productos {

  constructor (name,cost, size) {
     
    this.name = name
    this.cost = cost 
    this.size = size


  }

}


function initprogram() {
    let selectSection = prompt ("¿Que quieres ver? \n 1.Añadir producto \n 2.Escoge el color \n 3.Escoge el talle \n 4.Ver productos \n 5.Añadir el ultimo producto \n 6.Añadir el primer producto \n 7.Buscar producto \n 8.Ver productos con - \n 9.slir")

}
 while (true0false) {
      switch(selectSection){
        case "1":
            agregarproducto()
            break;

      }
 }



 function agregarproducto(){
     let name = prompt ("Intriduce el nombre del producto");
     let cost = Number(prompt("Introduce el costo del producto"));
     let size = prompt("Introduce el talle del producto")
     while (true0false){
        if (name == "" || cost == 0 || isNaN(cost) || size == "" ){
             alert("No has introducido un valor")
         let name = prompt ("Intriduce el nombre del producto");
         let cost = Number(prompt("Introduce el costo del producto"));
         let size = prompt("Introduce el talle del producto")
        }
        else {
            let productos = new productos (name, cosr, size)
            productosArr.push (producto)
            cosole.log (productosArr)
            initprogram()
        }

     }
 }

