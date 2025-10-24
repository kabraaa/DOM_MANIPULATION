# DOM_MANIPULATION

Para deifnir un evento sobre un elemento de HTML, podemos usar la función built-it de JS llamada -> addEventListener()

Existen dos funciones built-in de JS muy útiles para trabajar clases de CSS. 

classList -> me devuelve la clase o clases que tiene asignadas
classList.add() -> me permite añadir una clase a la lista de clases de un elemento del DOM
classList.remove() -> me permite eliminar una clase de la lista de clases de un elemento del DOM


Función built-in de JS que me permite saber si una cadena de caracteres esta contenida dentro de otra cadena mas grande.

"Hola buenos dias que tal."

contains()


** CAMBIAR ICONOS DEL MENU

PISTA -> el icono "hamburguesa" se esta cargando desde font-awesome con la clase fa-bars




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



## Función built-in toggle() de JS