# DOM_MANIPULATION

Para deifnir un evento sobre un elemento de HTML, podemos usar la función built-it de JS llamada -> addEventListener()



## PRIMERA VERSION DEL MENU RESPONSIVE:

// Lógica del menú

// Selección de elementos del HTML
let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");

// Variable para saber si el menu esta abierto o cerrado
let isOpen = false;

// Definimos evento click sobre el boton del menú
burger.addEventListener("click", function(){
    
    if (isOpen === false) {

        menu_opt.style.right = "0";
        isOpen = true;

    } else {

        menu_opt.style.right = "-100%";
        isOpen = false;

    }
    
});