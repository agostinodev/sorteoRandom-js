import { validarLista } from "./validacion.js";
import { mostrarLista } from "../components/mostrar-lista.js";
import { mostrarMensaje } from "../components/mostrar-mensaje.js";


// Agregar los nombres a la lista.
export function agregarNombre ( lista ) {

    const $nombres = document.getElementById('textareaNombre').value;

    //El string que recibe de textarea lo pasa a un arreglo, tomando "\n" y "," para separar las palabras.
    lista = $nombres.split(/[\n,]+/).map(el => el.trim()).filter(Boolean);

    // Si la lista es valida, la acutualiza en el Html y retorna la lista
    if(validarLista(lista)){

        mostrarLista(lista);
        mostrarMensaje("Lista agregada.");
        return lista;
    }
    
}