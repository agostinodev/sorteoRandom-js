
export function mostrarGanadores(listaGanadores) {
    
    //Limpia el contenedor mensaje
    const $alertas = document.getElementById('alertas');
    $alertas.textContent = '';
    $alertas.className = '';

    
    //Fecha y hora del sorteo
    const fecha = new Date().toLocaleString();

    const $ganadores = document.createElement('div');
    $ganadores.classList.add('ganadores');
    $ganadores.innerHTML = `
        <div class="ganadores__encabezado">
            <p class="ganadores__titulo">Sorteo.<span>Random()</span></p>
            <p class="ganadores__fecha">Fecha: ${fecha}</p>
        </div>
        <ul class="ganadores__lista"></ul>
    `;

    $alertas.appendChild($ganadores);


    const $fragment = document.createDocumentFragment();

    // Mustra los ganadores en el html
    listaGanadores.forEach((el, i) => {

        const $ganadorItem = document.createElement('li');
        $ganadorItem.innerHTML = `<i class="fa-solid fa-medal fa-xs"></i> <span>Ganador ${i + 1}:</span> ${el}`;
        $fragment.appendChild($ganadorItem);

    });

    document.querySelector('.ganadores__lista').appendChild($fragment);

}