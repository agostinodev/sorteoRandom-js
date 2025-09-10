import { mostrarMensaje } from './index.js';


// Limpia la lista y la lista en el html.
export function vaciarLista( lista ){

    // Limpia la lista en el HTMl.
    const $mensajeContainer = document.getElementById('mensaje-container');
    $mensajeContainer.textContent = '';
    $mensajeContainer.classList.remove('sorteo__mensaje')
    
    // Elimina la clase que le da estilo a la lista.
    const $sorteoListaContainer = document.getElementById('sorteo__list-container')
    $sorteoListaContainer.classList.remove('sorteo__list');

    // Limpia el textTarea.
    document.getElementById('textarea-nombres').value = '';

    // Limpia la lista de nombres.
    lista.length = 0;

    //Deshabilita el botón Agregar.
    document.getElementById('btn-agregar').disabled = false;
    document.getElementById('btn-sortear').disabled= true;
    
    mostrarMensaje("listaVacia", 'La lista esta vacia.');

    return lista;


}