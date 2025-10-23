// Lógica del menú

// Selección de elementos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Definimos evento click sobre el boton del menú
burger.addEventListener("click", function() {

    let isOpen = menu_opt.classList.contains("menu-show")
    
    if (isOpen === false) {

        menu_opt.classList.add("menu-show");

    } else {

        menu_opt.classList.remove("menu-show");

    }
    
    
});