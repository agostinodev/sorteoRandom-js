

// Actualiza la lista en el Html.
export function mostrarLista(lista) {

    const $lista= document.getElementById('lista');

    // limpiar antes de volver a renderizar.
    $lista.innerHTML = '';

    // Si la lista tiene un nombre o más, la genera en el html.
    if(lista.length >= 1){
        
        const $listaContenedor = document.createElement('div');
        $listaContenedor.classList.add('lista__contenedor');
        $listaContenedor.classList.add('lista__contenedor-animacion');

        if(lista.length > 1){
            $listaContenedor.classList.remove('lista__contenedor-animacion')
        }

        

        $listaContenedor.innerHTML = `
             <div class="lista__encabezado">
                    <h2 class="lista__titulo">Lista</h2>
                    <span class="lista__contador"><i class="fa-solid fa-user fa-xs"></i> ${lista.length}</span>
                </div>
                <ul class="lista__items"></ul>
        `;

        $lista.appendChild($listaContenedor);

     
        const $fragment = document.createDocumentFragment();
            

        // Genera los li de la ul.
        lista.forEach(el => {
            
            const $listaItem = document.createElement("li");
            $listaItem.textContent = el;
            $fragment.appendChild($listaItem);
        });

        document.querySelector('.lista__items').appendChild($fragment);  

    }

}