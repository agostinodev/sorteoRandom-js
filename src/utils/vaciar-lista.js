import { mostrarAlertas } from './index.js';


// Limpia la lista y la lista en el html.
export function vaciarLista( lista ){

    
    // Limpia el textTarea.
    document.getElementById('textarea__nombres').value = '';

    // Limpia la lista de nombres y en el html.
    lista.length = 0;

    //Deshabilita el botón Agregar.
    document.getElementById('btn-agregar').disabled = false;
    //Deshabilita el botón Sortear.
    document.getElementById('btn-sortear').disabled= true;
    
    mostrarAlertas("listaVacia", 'La lista esta vacia.');

    return lista;


}