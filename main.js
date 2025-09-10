import { agregarNombre, vaciarLista, sortear, mostrarLista, aleatorio} from './src/utils/index.js'
  

// DOM
const $btnAgregar = document.getElementById('btn-agregar');
const $btnVaciarLista = document.getElementById('btn-vaciarLista');
const $btnSortear = document.getElementById('btn-sortear');
const $inputGanadores = document.getElementById('input-ganadores');


// Inicialización de la lista de nombres.
const lista = [];

// Cantidad de ganadores.
let cantidaGanadores = 1;



function initApp(){
    
    //Input para elegir la cantidad de ganadores.
    $inputGanadores.addEventListener('input', ()=>{

        cantidaGanadores = Number($inputGanadores.value);

    })
   
    // Botón para agregar un nombre la lista.
    $btnAgregar.addEventListener('click', ()=> {
      
        agregarNombre(lista);
        document.getElementById('textarea-nombres').value = '';
    
    });

    // Botón para vaciar la lista.
    $btnVaciarLista.addEventListener('click', () => {

        vaciarLista(lista);
        mostrarLista(lista);
        $btnAgregar.disabled = false;
    });

    //Botón para realizar el sorteo.
    $btnSortear.addEventListener('click', () => {
        console.log(cantidaGanadores)
        aleatorio(lista);
        sortear(lista, cantidaGanadores);

    });

}

initApp()