

export function mostrarMensaje(mensaje){
    
     const $mostrarMensaje = document.getElementById('mostrarMensaje');
     $mostrarMensaje.textContent = '';
     $mostrarMensaje.classList.add('sorteo__mensaje');
  
     
     const $parrafo = document.createElement('p');
     $parrafo.textContent = `${mensaje}`;

     $mostrarMensaje.appendChild($parrafo);
    


}