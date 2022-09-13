import { stockliving } from "./stock.js"


let modalIsOpen = false;
let modal = document.getElementById ("modal");
window.addEventListener('load', ()=> {
    modal.classList.add ("visibility:hidden");
} )
const compra = (id) => { 
    console.log (`hizo click en el producto con id: ${id}`)
    Swal.fire({
        title: 'Añadido Exitosamente',
        text: 'Su producto ya se encuentra añadido al carrito!',
        icon: 'success',
        confirmButtonText: 'Continuar'})  
}

Toastify({

    text: "Usted está en el Sector Living",
    
    duration: 3000
    
    }).showToast();

//Creacion de las cards de Productos

const mostrarProductos = (stockliving) =>{
    
    const contenedor = document.getElementById ('livingContenedor');
        stockliving.forEach( (stockliving) => {
            const div = document.createElement ('div');
            div.classList.add ('card')
            div.innerHTML +=  ` <div class="card-image">
                                <img src=${stockliving.img} style= width:100%>
                                <span class= "card-title">${stockliving.nombre}</span><br>
                                </div>
                                <div>
                                <p>${stockliving.descripcion}</p>
                                <p>${stockliving.precio}</p>
                                <a class="btn btn-primary" href="#${stockliving.id}" id=boton style= float:right>Comprar</a>
                                </div>
            `;
            div.onclick = () => compra (stockliving.id);
            contenedor.appendChild(div);   
        });
}; 

mostrarProductos (stockliving)


//Forma de guardar KEY + VALUE en el Local Storage - setItem.
let rol = "Gonzalo"
localStorage.setItem ("dia", "ocho de agosto")

localStorage.setItem ("rol", rol)


//Forma de extraer información del Local Storage - getItem.
let guardarRol = localStorage.getItem ("rol")
console.log (guardarRol)




