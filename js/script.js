// Lógica del menú

// Selección de elementos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Definimos evento click sobre el boton del menú
burger.addEventListener("click", function() {

    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    menu_opt.classList.toggle("menu-show");

});



// Cambio de modo
let btnSwitchMode = document.querySelector(".theme-switch");

btnSwitchMode.addEventListener("click", function() {
    let body = document.querySelector("body");
    let to_dark_mode = document.querySelector(".to-dark-mode");
    let to_light_mode = document.querySelector(".to-light-mode");
    let condition = body.classList.contains("dark-theme");

    to_dark_mode.classList.toggle("hide-cont");
    to_light_mode.classList.toggle("hide-cont");
    
    if (condition) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }
});


// Cambiar imagenes de gatos
let btnHappy = document.querySelector(".btn-happy");
let btnSad = document.querySelector(".btn-sad");

btnSad.addEventListener("click", function() {
    let img = document.querySelector(".img-cont > img");
    img.src = "img/sad_cat.jpg";
});

btnHappy.addEventListener("click", function() {
    let img = document.querySelector(".img-cont > img");
    img.src = "img/happy_cat.jpg";
});


// Lógica abrir/cerrar de la ventana modal
let btnOpenModal = document.querySelector("#openModal");

btnOpenModal.addEventListener("click", openModalWindow);

// Función propia para abrir ventana modal
function openModalWindow() {
    let modalWindow = document.querySelector("#modalWindow");
    modalWindow.classList.add("show-modal");   
}

let btnCloseModal = document.querySelector("#modalWindow > .modal-content > .close");
let btnCloseModalAccept = document.querySelector("#modalWindow > .modal-content > #closeModalAccept");

btnCloseModal.addEventListener("click", closeModalWindow);
btnCloseModalAccept.addEventListener("click", closeModalWindow);

// Función para cerrar la ventana modal 
function closeModalWindow() {
    let modalWindow = document.querySelector("#modalWindow");
    modalWindow.classList.remove("show-modal");  
}


// Cerrar ventana modal cuando se detecta click fuera
window.addEventListener("click", function(event) {
    
    // llama solo a la función de cerrar modal siempre que el click no sea en la propia ventana modal
    let modal = document.querySelector("#modalWindow");

    if (event.target == modal) {
        closeModalWindow();
    }

});