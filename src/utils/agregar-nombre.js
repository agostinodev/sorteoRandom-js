import { validarLista, mostrarLista, mostrarAlertas } from './index.js';


// Agregar los nombres a la lista.
export function agregarNombre ( lista ) {

    const $textareaNombres = document.getElementById('textarea__nombres').value;
    

    //El string que recibe de textarea lo pasa a un arreglo, tomando "\n" y "," para separar las palabras.
    const nombres = $textareaNombres.split(/[\n,]+/).map(el => el.trim()).filter(Boolean);
    

    // Si el nombre es valido lo agrega a la lista y lo agrega a la lista del html.
    if(validarLista(nombres)){

        // Valida que no haya nombres repetidos en la lista.
        if(nombres.some( el => lista.includes(el))){
            return mostrarAlertas("informacion", 'El nombre ya está en la lista. No pueden haber nombres repetidos.');
        }
        

        lista.push(...nombres);


        mostrarLista(lista);
        mostrarAlertas("listaAgregada",'Lista agregada.');


        const $btnSortear = document.getElementById('btn-sortear');
        $btnSortear.disabled = false;

        // Limpia el textarea
        document.getElementById('textarea__nombres').value = '';


        return lista;
    }

    
    
}