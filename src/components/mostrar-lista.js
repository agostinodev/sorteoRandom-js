

// Actualiza la lista en el Html.
export function mostrarLista(lista) {

    const $sorteoListaContainer = document.getElementById('sorteo__list-container');

    // limpiar antes de volver a renderizar.
    $sorteoListaContainer.innerHTML = '';

    // Si la lista tiene un nombre o más, la genera en el html.
    if(lista.length >= 1){
        
        $sorteoListaContainer.classList.add('sorteo__list');

        const $listaContainer = document.createElement('div');
        $listaContainer.classList.add('list-container');
        $listaContainer.innerHTML = `
             <div class="list__title-container">
                    <h2>Lista</h2>
                    <span>${lista.length}</span>
                </div>
                <ul class="list"></ul>
        `;

        $sorteoListaContainer.appendChild($listaContainer);

     
        const $fragment = document.createDocumentFragment();
            

        // Genera los li de la ul.
        lista.forEach(el => {
            
            const $li = document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
        });

        document.querySelector('.list').appendChild($fragment);  

    }

}