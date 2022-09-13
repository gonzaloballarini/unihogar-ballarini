let btnDarkMode = document.getElementById ("botonDarkMode")
let btnLightMode = document.getElementById ("botonLightMode")

//Insertando Local Storage al Proyecto
//esto es para inicializar en un valor
let darkMode 
if (localStorage.getItem ("darkMode")) {
    darkMode = localStorage.getItem ("darkMode")
} else {
    darkMode = localStorage.setItem ("darkMode", "light")
}

console.log (darkMode)

//Condicional sujeta a los valores guardados en el local storage que modifica el skin del sitio.
if (darkMode == "dark"){
    document.body.style.backgroundColor= "black"
    document.body.style.color= "antiquewhite"
}


//Boton para Cambiar a modo nocturno en la pagina contacto.html
//A diferencias del profe, yo no pude hacerlo con una class porque ya tengo definida una en css muy distinta y no me funcionaba en todo el formulario. 
btnDarkMode.addEventListener ("click", ()=> {
    document.body.style.backgroundColor= "black"
    document.body.style.color= "antiquewhite"
    localStorage.setItem ("darkMode", "dark")
})


//Boton para Cambiar a modo diurno en la pagina contacto.html
btnLightMode.addEventListener ("click", ()=> {
    document.body.style.backgroundColor= "antiquewhite"
    document.body.style.color= "black"
    localStorage.setItem ("darkMode", "light")
})

//Boton para Eliminar Preferencias. Este botón el profe lo enseñó para borrar el local storage, pero sería inutil tenerlo a disposicion del usuario, porque con el light y el dark sería suficiente. 
let eliminarModo = document.getElementById ("eliminarMode")
eliminarModo.addEventListener ("click", ()=>{
    localStorage.removeItem ("darkMode")
})


