import { agregarNombre, vaciarLista, sortear, mostrarLista, aleatorio} from './src/utils/index.js'
  

// DOM
const $btnAgregar = document.getElementById('btn-agregar');
const $btnVaciarLista = document.getElementById('btn-vaciarLista');
const $btnSortear = document.getElementById('btn-sortear');
const $inputGanadores = document.getElementById('input__ganadores');


// Inicialización de la lista de nombres.
const lista = [];

// Cantidad de ganadores.
let cantidadGanadores = 1;



function initApp(){
    
    //Input para elegir la cantidad de ganadores.
    $inputGanadores.addEventListener('input', ()=>{

        cantidadGanadores = Number($inputGanadores.value);
    })
   
    // Botón para agregar un nombre la lista.
    $btnAgregar.addEventListener('click', ()=> {
      
        agregarNombre(lista);
    });

    // Botón para vaciar la lista.
    $btnVaciarLista.addEventListener('click', () => {

        vaciarLista(lista);
        mostrarLista(lista);
        
    });

    //Botón para realizar el sorteo.
    $btnSortear.addEventListener('click', () => {

        aleatorio(lista);
        sortear(lista, cantidadGanadores);

    });

}

document.addEventListener('DOMContentLoaded', initApp());
