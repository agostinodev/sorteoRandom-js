
export function mostrarGanadores(listaGanadores) {
    
    //Limpia el contenedor mensaje
    const $mensajeContainer = document.getElementById('mensaje-container');
    $mensajeContainer.textContent = '';
    $mensajeContainer.className = '';


    $mensajeContainer.classList.add('mensaje-ganadores');
    
    //Fecha y hora del sorteo
    const fecha = new Date().toLocaleString();

    const $ganadoresContainer = document.createElement('div');
    $ganadoresContainer.innerHTML = `
        <div class="ganadores__fecha-container">
            <p class="ganadores__fecha">Fecha: ${fecha}</p>
        </div>
        <ul class="ganadores__lista"></ul>
    `;

    $mensajeContainer.appendChild($ganadoresContainer);


    const $fragment = document.createDocumentFragment();

    // Mustra los ganadores en el html
    listaGanadores.forEach((el, i) => {

        const $liGanador = document.createElement('li');
        $liGanador.innerHTML = `<span>Ganador ${i + 1}:</span> ${el}`;
        $fragment.appendChild($liGanador);

    });

    document.querySelector('.ganadores__lista').appendChild($fragment);

}