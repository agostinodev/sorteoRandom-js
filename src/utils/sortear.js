import { mostrarGanadores, mostrarAlertas } from './index.js';



// Genera un número aleatorio.
export function aleatorio(lista){
    return Math.floor(Math.random() * lista.length);
}



// Sorte el ganador o los ganadores.
export function sortear(lista, cantidad){


    if( (cantidad <= 0) || (cantidad === null)|| (cantidad > 10) ){
        mostrarAlertas("informacion", 'La cantidad de ganadores es invalida. Min: 1 Max: 10.');
        throw new Error("La cantidad de ganadores es invalida.");

    } 
    

    //Para que la cantidad de ganadores no sea mayor a la lista.
    if( lista.length >= cantidad){

        // Deshabilita el botón Agregar.
        document.getElementById('btn-agregar').disabled  = true;
        // Deshabilita el botón Sortear.
        document.getElementById('btn-sortear').disabled = true;
        
        // Guarda indices únicos.
        const indices = new Set();

        // Genera indices únicos, para que no se repitan los ganadores.
        while(indices.size < cantidad){

            indices.add(aleatorio(lista));
        };
   
        
        // Convertimos el Set de índices en un array.
        // Obtenemos los nombres de la lista en esas posiciones.
        const ganadores = [...indices].map(i => lista[i]);


        mostrarGanadores(ganadores);
        
        document.getElementById('btn-sortear').disabled = true;

    }else{
        
        mostrarAlertas("informacion", `No puede haber más ganadores que nombres en la lista.`);
    
    };


}