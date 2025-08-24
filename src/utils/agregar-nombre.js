import { validarLista, mostrarLista, mostrarMensaje } from './index.js';


// Agregar los nombres a la lista.
export function agregarNombre ( lista ) {

    const $textTarea = document.getElementById('textareaNombre').value;
    

    //El string que recibe de textarea lo pasa a un arreglo, tomando "\n" y "," para separar las palabras.
    const nombres = $textTarea.split(/[\n,]+/).map(el => el.trim()).filter(Boolean);
    

    // Si el nombre es valido lo agrega a la lista y lo agrega a la lista del html.
    if(validarLista(nombres)){

        lista.push(...nombres);

        mostrarLista(lista);
        mostrarMensaje("listaAgregada",'Lista agregada.');


        const $btnSortear = document.getElementById('btnSortear');
        $btnSortear.disabled = false;

        return lista;
    }
    
}