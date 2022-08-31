fetch ("./javascript/ofertas_index.json")
.then (response => response.json())
.then (data => {
    console.log (data)
    const mostrarProductos = (data) =>{
    //Creacion de las cards de Productos
    const contenedor = document.getElementById ('carruseloffer1a');
        data.forEach( (data) => {
            const div = document.createElement ('div');
            div.classList.add ('card')
            div.innerHTML +=  ` <div class="card-image">
                                <img src=${data.img} style= width:100%>
                                <span class= "card-title">${data.nombre}</span><br>         </div>
                                <div>
                                <p>${data.descripcion}</p>
                                <p>${data.precio}</p><br><br>
                                <a class="btn btn-primary" href="#${data.id}" id=boton style= float:right>Comprar</a>
                                </div>
            `;
            div.onclick = () => compra (data.id);
            contenedor.appendChild(div);   
        });
    }
    mostrarProductos (data)
    return mostrarProductos
});

const compra = (id) => { 
    console.log (`hizo click en el producto con id: ${id}`)
    Swal.fire({
        title: 'Añadido Exitosamente',
        text: 'Su producto ya se encuentra añadido al carrito!',
        icon: 'success',
        confirmButtonText: 'Continuar'})  
}


