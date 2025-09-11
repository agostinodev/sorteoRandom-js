
export function mostrarGanadores(listaGanadores) {
    
    //Limpia el contenedor mensaje
    const $mensajeContainer = document.getElementById('mensaje-container');
    $mensajeContainer.textContent = '';
    $mensajeContainer.className = '';

    
    //Fecha y hora del sorteo
    const fecha = new Date().toLocaleString();

    const $ganadoresContainer = document.createElement('div');
    $ganadoresContainer.classList.add('ganadores-container');
    $ganadoresContainer.innerHTML = `
        <div class="ganadores__date-container">
            <p class="ganadores__title">Sorteo.<span>Random()</span></p>
            <p class="ganadores__date">Fecha: ${fecha}</p>
        </div>
        <ul class="ganadores__list"></ul>
    `;

    $mensajeContainer.appendChild($ganadoresContainer);


    const $fragment = document.createDocumentFragment();

    // Mustra los ganadores en el html
    listaGanadores.forEach((el, i) => {

        const $liGanador = document.createElement('li');
        $liGanador.innerHTML = `<i class="fa-solid fa-medal fa-xs"></i> <span>Ganador ${i + 1}:</span> ${el}`;
        $fragment.appendChild($liGanador);

    });

    document.querySelector('.ganadores__list').appendChild($fragment);

}