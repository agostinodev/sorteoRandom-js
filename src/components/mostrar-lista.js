

// Actualiza la lista en el Html.
export function mostrarLista(lista) {

    const $listaHtml = document.getElementById('listaHtml');

    // limpiar antes de volver a renderizar.
    $listaHtml.innerHTML = '';

    // Si la lista tiene un nombre o más, la genera en el html.
    if(lista.length >= 1){
        
        $listaHtml.classList.add('sorteo__list');
        
        const $h2 = document.createElement('h2');
        $h2.textContent = 'Lista';


        const $ul = document.createElement('ul'),
            $fragment = document.createDocumentFragment();
            

        // Genera los li de la ul.
        lista.forEach(el => {
            
            const $li = document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
        });


            $listaHtml.appendChild($h2);
            $listaHtml.appendChild($ul);
            $ul.appendChild($fragment);

    }

}