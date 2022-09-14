import {stock_bathroom} from "./stock_01_bathroom.js";

//Creacion de las cards de Productos
const contenedor = document.getElementById ('contenedor-productos');
stock_bathroom.forEach( (producto) => {
            const div = document.createElement ('div');
            div.classList.add ('card')
            div.innerHTML +=  ` <div class="card-image">
                                <img src=${producto.img} style= width:100%>
                                <span class= "card-title">${producto.nombre}</span><br>         </div>
                                <div>
                                <p>${producto.descripcion}</p>
                                <p>${producto.precio}</p>
                                <p id="stock">Productos disponibles: ${producto.stock} </p>
                                <button id="agregar${producto.id}" class="boton-agregar">Comprar <i class= "fas fa-shopping-cart"></i></button>
                                </div>`;
            contenedor.appendChild(div);

            //Puesta en funcionamiento del Button "Comprar" a traves de un listener que llama a la funcion Agregar al carrito, descripta mas abajo.
            const boton = document.getElementById (`agregar${producto.id}`)
            boton.addEventListener ('click', ()=> {
                agregarAlCarrito(producto.id)
                Swal.fire({
                    title: 'Añadido Exitosamente',
                    text: 'Su producto ya se encuentra añadido al carrito!',
                    icon: 'success',
                    confirmButtonText: 'Continuar'})
            });
        });

//Array de carrito vacío que se va a llenar con los objetos que la función Agregar al carrito y que depende de los objetos sobre los cuales el usuario apriete click.
let carrito = []


//Metodo para que al clickear sobre un producto agregue al array Carrito que se encuentra vacío//
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
    const item = stock_bathroom.find ((prod) => prod.id === prodId)
    carrito.push (item);
    console.log (carrito);
}
actualizarCarrito ();
}

//Funcion para vaciar el carrito de todos los productos. 
//Agregué un evento que borre el local storage para que al recargar la página no siga trayendo el carrito anterior que no queríamos y por eso vaciamos. 
//Podría verse la opción de que exista un alert que prevenga la situación de borrar todo el carro y perder los datos para siempre. 
const botonVaciar = document.getElementById ('vaciar-carrito')
botonVaciar.addEventListener ( 'click', () => {
    carrito.length = 0
    localStorage.removeItem("carrito")
    actualizarCarrito ()
})

const contadorCarrito = document.getElementById ('contadorCarrito')
const precioTotal = document.getElementById ('precioTotal')

//Agregar productos al Local Storage
document.addEventListener ('DOMContentLoaded', () => {
    if (localStorage.getItem ('carrito')) {
        carrito = JSON.parse (localStorage.getItem ('carrito'))
        actualizarCarrito ()
    }
})



//Funcion para eliminar productos del carrito. 
//Esta no funciona porque no la llama el innerHtml de la Funcion Modal. Vaya a saber que demonios ocurre, por eso no esta brillante, porque nadie la llama. 

const eliminarDelCarrito = (prodId) => { 
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf (item)
    carrito.splice(indice, 1) 
    actualizarCarrito ()
}


//Funcion para que se agreguen los productos al carrito, es decir para que tome el array carrito y lo muestre en una ventana//
const contenedorCarrito = document.getElementById ('carrito-contenedor')

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach ( (prod) => {
        const div = document.createElement ('div')
        div.className = ('productoEnCarrito') 
        div.innerHTML = ` 
            <p>${prod.nombre}</p>
            <p>Precio:$ ${prod.precio} </p>
            <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
            <button.onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild (div)
        localStorage.setItem ('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio*prod.cantidad, 0)
}


//Hay que solucionar el eliminar producto del carrito que no funciona porque nadie lo llama. 

//Hay un problema cuando suma los productos me pone como 10 decimales, probé con .toFixed() y no me anduvo. No es en todas las sumas, pero por ejemplo si agrego los 12 productos de una sección, me da con un chorizo de decimales. 

//Me toma las cards de cada una de las secciones o paginas.html como si fuera la misma card. Es decir que por ejemplo la card. Nro. 1  de todos los html, me la toma como card.Nro.1 en todos por igual. Es decir que, si selecciono la primera card de todos los html, me agrega al carro 1 solo producto y me lo agrega 7 veces (que es la cantidad de secciones). Para solucionar ya le puse un id distinto a cada objeto de array de cada seccion. Probé cambiando los id tanto del contenedor-productos, como del contenedor-carrito y tampoco....

//Hay que agregar una función que cuando finaliza el carrito, actualiza el valor del item "producto.stock" que figura en la card. Es decir que disminuya la cantidad de productos disponibles en cada una de las cards elegidas. O bien se puede hacer que al momento de cargar en el carrito, inmediatamente se descuente un nro del stock.  



