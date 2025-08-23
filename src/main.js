
import { agregarNombre } from "./utils/agregar-nombre.js";
import { vaciarLista  } from "./utils/vaciar-lista.js";
import { mostrarLista } from "./components/mostrar-lista.js";
import { aleatorio } from "./utils/sortear.js";
import { sortear } from "./utils/sortear.js";        


const $btnAgregar = document.getElementById('btnAgregar');
const $btnVaciarLista = document.getElementById('btnVaciarLista');
const $btnSortear = document.getElementById('btnSortear');

// Cantidad de ganadores.
const cantidadGanadores = 1;

// Inicialización de la lista de nombres.
let lista = [];



function initApp(){

    // Botón para agregar un nombre la lista.
    $btnAgregar.addEventListener('click', ()=> agregarNombre(lista) );

    // Botón para vaciar la lista.
    $btnVaciarLista.addEventListener('click', () => {

        vaciarLista(lista);
        mostrarLista(lista);
        console.log(lista);

    });

    //Botón para realizar el sorteo.
    $btnSortear.addEventListener('click', () => {
    
        aleatorio(lista)
        sortear(lista, cantidadGanadores)

    });


}

initApp()