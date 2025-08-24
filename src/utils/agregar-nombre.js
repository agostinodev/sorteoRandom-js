import { validarLista, mostrarLista, mostrarMensaje } from './index.js';


// Agregar los nombres a la lista.
export function agregarNombre ( lista ) {

    const $textTarea = document.getElementById('textareaNombre').value;
    

    //El string que recibe de textarea lo pasa a un arreglo, tomando "\n" y "," para separar las palabras.
    const nombres = $textTarea.split(/[\n,]+/).map(el => el.trim()).filter(Boolean);
    
    lista.push(...nombres);


    // Si la lista es valida, la acutualiza en el Html y retorna la lista
    if(validarLista(lista)){
        console.log("validacion",lista);
        mostrarLista(lista);
        mostrarMensaje("Lista agregada.");
        console.log(typeof lista)


        const $btnSortear = document.getElementById('btnSortear');
        $btnSortear.disabled = false;

        return lista;
    }
    
}