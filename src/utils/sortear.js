import { mostrarMensaje } from './index.js';


// Genera un número aleatorio.
export function aleatorio(lista){
    return Math.floor(Math.random() * lista.length);
}


// Sorte el ganador o los ganadores.
export function sortear(lista, cantidadGanadores){
    
    //Si hay más nombres que cantidad de ganadores hace el sorteo.
    if( lista.length > cantidadGanadores){

        // Deshabilita el botón Agregar.
        document.getElementById('btnAgregar').disabled  = true;

        // Guarda indices únicos.
        const indices = new Set();

        // Genera indices únicos, para que no se repitan los ganadores.
        while(indices.size < cantidadGanadores){

            indices.add(aleatorio(lista));
        };
   
        
        // Convertimos el Set de índices en un array.
        // Obtenemos los nombres de la lista en esas posiciones.
        const ganadores = [...indices].map(i => lista[i]);
       
        const $mostrarMensaje = document.getElementById('mostrarMensaje');
        $mostrarMensaje.textContent = '';

        // Limpia la clase
        $mostrarMensaje.className = '';

        
        $mostrarMensaje.classList.add('mensaje-ganadores');

        // Mustra los ganadores en el html
        ganadores.forEach((el, i) => {

            const $parrafo = document.createElement('p');
            $parrafo.textContent = `Ganador ${i + 1}: ${el}`;
            $mostrarMensaje.appendChild($parrafo);

        });
        
        

    }else{

        mostrarMensaje("informacion", `Debe haber más de ${cantidadGanadores} ${(lista.length === 1)?'nombre':'nombres'} en la lista.`);
        
    };


}