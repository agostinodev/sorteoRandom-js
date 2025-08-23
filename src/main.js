import { agregarNombre, vaciarLista, sortear, mostrarLista, aleatorio } from './utils/index.js'
  


const $btnAgregar = document.getElementById('btnAgregar');
const $btnVaciarLista = document.getElementById('btnVaciarLista');
const $btnSortear = document.getElementById('btnSortear');

// Cantidad de ganadores.
const cantidadGanadores = 1;

// Inicialización de la lista de nombres.
const lista = [];



function initApp(){

    // Botón para agregar un nombre la lista.
    $btnAgregar.addEventListener('click', ()=> {
      
        agregarNombre(lista);

        console.log(lista)
    
    });

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