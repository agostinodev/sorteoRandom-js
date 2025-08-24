import { mostrarMensaje } from './index.js';


 // Valida la lista.
 export const validarLista = (lista) => {
    
    // Valida que la lista no esté vacia.
    if(lista.length === 0) return mostrarMensaje("informacion",'La lista de nombres está vacia.');
    //console.error('La lista de nombres esta vacia.')

    // Valida que el nombre no sea un número o que no contenga números.
    if(lista.some(el => /\d/.test(el))){
        mostrarMensaje("informacion",'El nombre NO debe tener números.');
        return false
    }

    // Valida que el nombre no tenga caracteres no alfanúmericos.
    if(lista.some(el => /\W/.test(el))){
        mostrarMensaje("informacion",'El nombre NO debe tener caracteres no alfanuméricos.');
        return false
    }

 
    return true;
};