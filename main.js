import { agregarNombre, vaciarLista, sortear, mostrarLista, aleatorio } from './src/utils/index.js'
  


const $btnAgregar = document.getElementById('btnAgregar');
const $btnVaciarLista = document.getElementById('btnVaciarLista');
const $btnSortear = document.getElementById('btnSortear');
const $inputGanadores = document.getElementById('inputGanadores');



// Inicialización de la lista de nombres.
const lista = [];
let cantidaGanadores = 1;



function initApp(){

    //Input para elegir la cantidad de ganadores.
    $inputGanadores.addEventListener('input', ()=>{

        cantidaGanadores = Number($inputGanadores.value);

    })
   
    // Botón para agregar un nombre la lista.
    $btnAgregar.addEventListener('click', ()=> {
      
        agregarNombre(lista);
        document.getElementById('textareaNombre').value = '';
    
    });

    // Botón para vaciar la lista.
    $btnVaciarLista.addEventListener('click', () => {

        vaciarLista(lista);
        mostrarLista(lista);
        $btnAgregar.disabled = false;
    });

    //Botón para realizar el sorteo.
    $btnSortear.addEventListener('click', () => {

        aleatorio(lista);
        sortear(lista, cantidaGanadores);
        $btnSortear.disabled = true;

    });


}

initApp()