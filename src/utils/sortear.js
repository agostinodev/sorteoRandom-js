import { mostrarMensaje } from "../components/mostrar-mensaje.js";


// Genera un número aleatorio.
export function aleatorio(lista){
    console.log("aleatorio",lista);
    return Math.floor(Math.random() * lista.length);
}


// Sorte el ganador o los ganadores.
export function sortear(lista, cantidadGanadores){
    

    if( lista.length > cantidadGanadores){

        // Guarda indices únicos.
        const indices = new Set();

        // Genera indices únicos, para que no se repitan los ganadores.
        while(indices.size < cantidadGanadores){

            indices.add(aleatorio(lista));
        };
   
        
        // Convertimos el Set de índices en un array.
        // Obtenemos los nombres de la lista en esas posiciones.
        const ganadores = [...indices].map(i => lista[i]);
       
        

        for(let i = 0; i < cantidadGanadores; i++){

            mostrarMensaje(`Ganador ${i + 1}: ${ganadores[i]}`);
            //console.log(`Ganador ${i + 1}: ${ganadores[i]}`);
        }




    }else{

        mostrarMensaje(`Debe haber más de ${cantidadGanadores} ${(lista.length === 1)?'nombre':'nombres'} en la lista.`);
        //console.error(`Debe haber más de ${cantidadGanadores} nombres en la lista.`);
        
    };

    

}