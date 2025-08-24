

// Limpia la lista y la lista del html.
export function vaciarLista( lista ){

    const $mostrarMensaje = document.getElementById('mostrarMensaje');
    $mostrarMensaje.textContent = '';
    $mostrarMensaje.classList.remove('sorteo__mensaje')
    
    const $listaHtml = document.getElementById('listaHtml')
    $listaHtml.classList.remove('sorteo__list');

    document.getElementById('textareaNombre').value = '';

    lista.length = 0;

    return lista;


}