function Productos (categoria, tipo, precio){
    this.categoria = categoria, 
    this.tipo = tipo, 
    this.precio = precio
}


const producto1 = new Productos ("Dormitorio", "Sabana King", 17800)
const producto2 = new Productos ("Dormitorio", "Acolchado", 27800)
const producto3 = new Productos ("Dormitorio", "Cover", 22500)
const producto4 = new Productos ("Dormitorio", "Frazada", 19000)
const producto5 = new Productos ("Dormitorio", "Sabana de 180 Hilos", 20300)
const producto6 = new Productos ("Dormitorio", "Frazada de Micropolar", 21150)
const producto7 = new Productos ("Dormitorio", "Funda de Almohadas", 5400)
const producto8 = new Productos ("Dormitorio", "Respaldar", 46199)
const producto9 = new Productos ("Dormitorio", "Sabana Queen", 16900)
const producto10 = new Productos ("Dormitorio", "Funda de Colchón", 6999)
const producto11 = new Productos ("Dormitorio", "Cubresommier", 5999)
const producto12 = new Productos ("Dormitorio", "Velador para Mesa de Luz", 14000)
const producto13 = new Productos ("Dormitorio", "Sabanas de Disney", 9800)
const producto14 = new Productos ("Dormitorio", "Acolchados para Niños", 13900)
const producto15 = new Productos ("Dormitorio", "Alfombras para dormitorios", 2500)

const ArrayDormitorio = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]

console.log (ArrayDormitorio)

ArrayDormitorio.push(producto13, producto14, producto15)

console.log (ArrayDormitorio)

const producto21 = new Productos ("Baño", "Portacepillos", 1800)
const producto22 = new Productos ("Baño", "Cortina de Baños", 2780)
const producto23 = new Productos ("Baño", "Alfombra", 2500)
const producto24 = new Productos ("Baño", "Forro para cortina de baño", 1000)
const producto25 = new Productos ("Baño", "Alfombra", 3000)
const producto26 = new Productos ("Baño", "Portajabon", 150)
const producto27 = new Productos ("Baño", "Gancho para cortina de baño", 1500)
const producto28 = new Productos ("Baño", "Barral de cortina de baño", 3000)
const producto29 = new Productos ("Baño", "Cover de inodoro", 1690)
const producto30 = new Productos ("Baño", "Soporte para ducha", 5487)
const producto31 = new Productos ("Baño", "Toallas", 4300)
const producto32 = new Productos ("Baño", "Toallon", 5700)
const producto33 = new Productos ("Baño", "Conjunto de Toalla y Toallon", 8900)
const producto34 = new Productos ("Baño", "Bolsas de Higiene", 1390)
const producto35 = new Productos ("Baño", "Botiquin de Primeros Auxilios", 1900)

const ArrayBathroom = [producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35]

console.log (ArrayBathroom)

//Tecnica de Concatenar dos arrays. 
const totalproductos = ArrayDormitorio.concat(ArrayBathroom)
console.log (totalproductos)

//Funcion para incorporar objetos en un array.
/* function busqueda (){
    let categoriaIngresado = prompt("Ingrese la categoría del producto")
    let tipoIngresado = prompt("Ingrese el tipo de producto que desea incorporar")
    let precioIngresado = parseInt(prompt ("Ingrese el precio del mismo")) 
    let productoIngresado = new Productos (
        categoriaIngresado, tipoIngresado, precioIngresado
    )
    console.log (productoIngresado)
    totalproductos.push(productoIngresado)
} */

/* busqueda ()
console.log (totalproductos)
 */

//For of para recorrer un array y filtrar segun un parámetro. 
/* for (let barato of totalproductos){
    if (barato.precio < 2500){
        console.log (barato)
    }
}
 */

//Find para encontrar un producto. Futuro buscador del sitio.
/* let search = prompt("Ingrese el producto de dormitorio que está buscando")
const busqueda1 = ArrayDormitorio.find ((el)=> el.tipo == search)
console.log(busqueda1)
alert ("Su busqueda arrojo el siguiente producto  "+busqueda1.tipo+" por el precio de "+busqueda1.precio+" pesos")
 */

//Filter para encontrar un producto. Futuro buscador del sitio. 
/* let search2 = prompt ("Ingrese el producto de baño que está buscando")
const busqueda2 = ArrayBathroom.filter ((el)=> el.tipo == search2)
console.log (busqueda2)
 */

//No se porque motivos no funciona el alert y me larga undefined cuando el console log imprime bien los valores de busqueda. Será por el hecho de que muestra dos productos? Y no sabe cual mostrar??? 
/* alert ("Su busqueda arrojo el/los siguiente/s producto/s  "+busqueda2.tipo+" por el precio de "+busqueda2.precio+" pesos")
 */
//Consola que muestra los precios sin IVA para el caso de querer mapear y actualizar los precios. 
/* const preciosinIVA = totalproductos.map ((elemento)=> elemento.precio - elemento.precio*21/100)
console.log (preciosinIVA)
 */

//Probando el DOM 
let lupaBuscadora = document.getElementById ("lupaBuscadora")
console.log (lupaBuscadora)

//No entiendo por que cuando quiero llamar el formulario que está en la página contacto.html me dice "null"
let form = document.getElementById ("formulario")
console.log (form)

let cards = document.getElementById ("cardProducto")
console.log (cards)


//
