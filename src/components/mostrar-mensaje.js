

export function mostrarMensaje(tipo, mensaje){

     const $mostrarMensaje = document.getElementById('mostrarMensaje');
     $mostrarMensaje.textContent = '';

     // Limpia la clase
     $mostrarMensaje.className = '';

     if(tipo === "informacion"){
          $mostrarMensaje.classList.add('mensaje-informacion');

     }

     if(tipo === "listaAgregada"){
          $mostrarMensaje.classList.add('mensaje-listaAgregada');

     };

     if(tipo === "listaVacia"){
          $mostrarMensaje.classList.add('mensaje-listaVacia');

     };
  
     
     const $parrafo = document.createElement('p');
     $parrafo.textContent = `${mensaje}`;

     $mostrarMensaje.appendChild($parrafo);
    


}