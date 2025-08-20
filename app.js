const $btnAgregar = document.getElementById('btnAgregar');
const $btnSortear = document.getElementById('btnSortear');


// Lista donde van a ir los nombres
const lista = [];
const cantidadGanadores = 3;


// Botón para agregar un nombre la lista
$btnAgregar.addEventListener('click', ()=> agregarNombre() );

//Botón para realizar el sorteo
$btnSortear.addEventListener('click', () => sortear(lista, cantidadGanadores));



// Valida que el campo no este vacio y que sea un string
const validarStrig = (string) => {

    if(typeof string !== 'string') return console.error('El valor ingresado es incorrecto.');
    if(string.trim().length === 0) return console.warn('No ingreso un nombre.');
    if(/\d/.test(string)) return console.error('No debe tener números.');

    return true;
};



// Agregar los nombres a la lista.
function agregarNombre () {

    const nombre = document.getElementById('inputNombre').value;

    // Si el nombre es valido, lo agrega a la lista.
    if(validarStrig(nombre)){

        document.getElementById('inputNombre').value = '';

        lista.push(nombre);
        console.log(lista)
        actulizarLista(lista);
        
        return lista;
    }
}



// Actualiza la lista en el Html.
function actulizarLista(lista) {

    const $listaHtml = document.getElementById('listaHtml');

    // limpiar antes de volver a renderizar
    $listaHtml.innerHTML = '';

    // Si la lista tiene un nombre o más, la genera en el html.
    if(lista.length >= 1){
        
        const $h2 = document.createElement('h2');
        $h2.textContent = 'Lista';


        const $ul = document.createElement('ul'),
            $fragment = document.createDocumentFragment();
            

        // Genera los li de la ul
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


// Genera un número aleatorio
function aleatorio(lista){
    return Math.floor(Math.random() * lista.length);
}


function sortear(lista, cantidadGanadores){
    

    if( lista.length > cantidadGanadores){

        const indices = new Set();

        while(indices.size < cantidadGanadores){

            indices.add(aleatorio(lista));
        }
        console.log(indices);


        let ganadores = [...indices].map(i => lista[i]);
       
        for(let i = 0; i < cantidadGanadores; i++){

            console.log(`Ganador ${i + 1}: ${ganadores[i]}`);
        }


    }else{

        console.error(`Debe haber más de ${cantidadGanadores} nombres en la lista.`)
    };

    

}

