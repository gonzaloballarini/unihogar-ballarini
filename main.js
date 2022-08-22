import { stockliving } from "./stock.js"

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
                                <a class="btn btn-primary" id=boton${stockliving.id} style= float:right>Comprar</a>
                                </div>
            `;
            contenedor.appendChild(div);   
        });
}; 

mostrarProductos (stockliving)


