

export function mostrarAlertas(tipo, mensaje){

     const $alertas = document.getElementById('alertas');
     $alertas.textContent = '';

     const $mensajes = document.createElement('div');
     $mensajes.classList.add('mensajes');

     
     // Segun el tipo de iformacion cambia la clase en el html.
     if(tipo === "informacion"){
          $mensajes.classList.add('mensaje-informacion');

     }

     if(tipo === "listaAgregada"){
          $mensajes.classList.add('mensaje-listaAgregada');

     };

     if(tipo === "listaVacia"){
         $mensajes.classList.add('mensaje-listaVacia');
     };
  
     // Muestra el msj en el Html
     const $p = document.createElement('p');
     $p.textContent = `${mensaje}`;


     $alertas.appendChild($mensajes);
     $mensajes.appendChild($p);
    

}