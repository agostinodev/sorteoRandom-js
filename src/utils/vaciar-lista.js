import { mostrarMensaje } from './index.js';


// Limpia la lista y la lista en el html.
export function vaciarLista( lista ){

    // Limpia la lista en el HTMl.
    const $mostrarMensaje = document.getElementById('mostrarMensaje');
    $mostrarMensaje.textContent = '';
    $mostrarMensaje.classList.remove('sorteo__mensaje')
    
    // Elimina la clase que le da estilo a la lista.
    const $listaHtml = document.getElementById('listaHtml')
    $listaHtml.classList.remove('sorteo__list');

    // Limpia el textTarea.
    document.getElementById('textareaNombre').value = '';

    // Limpia la lista de nombres
    lista.length = 0;

    mostrarMensaje("listaVacia", 'La lista esta vacia.');

    return lista;


}