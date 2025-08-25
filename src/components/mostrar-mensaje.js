

export function mostrarMensaje(tipo, mensaje){

     const $mensajeContainer = document.getElementById('mensaje-container');
     $mensajeContainer.textContent = '';

     // Limpia la clase
     $mensajeContainer.className = '';

     // Segun el tipo de iformacion cambia la clase en el html.
     if(tipo === "informacion"){
          $mensajeContainer.classList.add('mensaje-informacion');

     }

     if(tipo === "listaAgregada"){
          $mensajeContainer.classList.add('mensaje-listaAgregada');

     };

     if(tipo === "listaVacia"){
          $mensajeContainer.classList.add('mensaje-listaVacia');

     };
  
     
     const $parrafo = document.createElement('p');
     $parrafo.textContent = `${mensaje}`;

     $mensajeContainer.appendChild($parrafo);
    


}