import {stock_bathroom} from "./stock_bathroom.js"


const contenedor = document.getElementById ('contenedor-productos');
const botonVaciar = document.getElementById ('vaciar-carrito')
const contadorCarrito = document.getElementById ('contadorCarrito')
const precioTotal = document.getElementById ('precioTotal')

//Funcion para vaciar el carrito de todos los productos. Agregué que borre el local storage para que al recargar la página no siga trayendo el carrito anterior que no queríamos y por eso vaciamos. Podría verse la opción de que exista un alert que prevenga la situación de borrar todo el carro y perder los datos para siempre. 

botonVaciar.addEventListener ( 'click', () => {
    carrito.length = 0
    localStorage.removeItem("carrito")
    actualizarCarrito ()
}

)

//Creacion de las cards de Productos
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



let carrito = []

//Agregar productos al Local Storage
document.addEventListener ('DOMContentLoaded', () => {
    if (localStorage.getItem ('carrito')) {
        carrito = JSON.parse (localStorage.getItem ('carrito'))
        actualizarCarrito ()
    }
})

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

//Hay que agregar que cuando finaliza el carrito, el producto.stock disminuya la cantidad de productos disponibles en cada una de las cards elegidas. O bien se puede hacer que al momento de cargar en el carrito ya se vea afectado el stock. 