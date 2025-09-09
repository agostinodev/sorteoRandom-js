import { mostrarMensaje } from './index.js';


// Limpia la lista y la lista en el html.
export function vaciarLista( lista ){

    // Limpia la lista en el HTMl.
    const $mensajeContainer = document.getElementById('mensaje-container');
    $mensajeContainer.textContent = '';
    $mensajeContainer.classList.remove('sorteo__mensaje')
    
    // Elimina la clase que le da estilo a la lista.
    const $listaContainer = document.getElementById('lista-container')
    $listaContainer.classList.remove('sorteo__lista');

    // Limpia el textTarea.
    document.getElementById('textarea-nombres').value = '';

    // Limpia la lista de nombres
    lista.length = 0;

    mostrarMensaje("listaVacia", 'La lista esta vacia.');

    return lista;


}