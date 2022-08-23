import { stockliving } from "./stock.js"
let modalIsOpen = false;
let modal = document.getElementById ("modal");
window.addEventListener('load', ()=> {
    modal.classList.add ("visibility:hidden");
} )
const compra = (id) => console.log (`hizo click en el producto con id: ${id}`)
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

//Tengo el problema que solo funciona con el Id nro. 1 no con los demás...probé con un for each pero no me funcionó...
let btn = document.getElementById ("boton");
btn.addEventListener ("click", modalfunc)
function modalfunc (){
    console.log ("Respuesta al evento"), 
    prompt ("Usted está a punto de agregar al carrito el producto quiere continuar?"); 
}

/*
dentro del div class el profe agrego una etique <a href> adentro le metió un <button class="open__modal">

let btn = document.getelementsbyclassname ("open___modal");
for (let i= 0; i<btn.length; i++){
    btn [i].addEventListener ("click", modal);
}

function modal (){
    console.log(this);
}

*/



