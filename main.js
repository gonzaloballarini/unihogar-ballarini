import { stockliving } from "./stock.js"
let modalIsOpen = false;
let modal = document.getElementById ("modal");
window.addEventListener('load', ()=> {
    modal.classList.add ("visibility:hidden");
} )

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
            contenedor.appendChild(div);   
        });
}; 

mostrarProductos (stockliving)

//Tengo el problema que solo funciona con el Id nro. 1 no con los demás...probé con un for each pero no me funcionó...
let btn = document.getElementById ("boton");
btn.addEventListener ("click", modalfunc)
function modalfunc (){
    console.log ("Respuesta al evento"), 
    prompt ("Usted está a punto de agregar al carrito el producto quiere continuar?"); 
}




