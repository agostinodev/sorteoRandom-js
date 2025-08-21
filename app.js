// Botones
const $btnAgregar = document.getElementById('btnAgregar');
const $btnVaciarLista = document.getElementById('btnVaciarLista');
const $btnSortear = document.getElementById('btnSortear');


// Cantidad de ganadores
const cantidadGanadores = 3;
// Inicialización de lista de nombre
let lista = [];


// Botón para agregar un nombre la lista.
$btnAgregar.addEventListener('click', ()=> agregarNombre() );
// Botón para vaciar la lista.
$btnVaciarLista.addEventListener('click', () => {
    vaciarLista();
    actulizarLista(lista);
    console.log(lista);
});

//Botón para realizar el sorteo.
$btnSortear.addEventListener('click', () => sortear(lista, cantidadGanadores));


// Valida la lista.
const validarLista = (lista) => {

    //Valida que la lista no esté vacia.
    if(lista.length === 0) return console.error('La lista de nombres esta vacia.')

    //Valida que el nombre no sea un número o que no contenga números.    
    lista.find( el => {

        if(/\d/.test(el)) return console.error('El nombre NO debe tener números.');

    })
 
    return true;
};



// Agregar los nombres a la lista.
function agregarNombre () {

    const $nombres = document.getElementById('textareaNombre').value;

    //El string que recibe de textarea lo pasa a un arreglo, tomando "\n" y "," para separar las palabras.
    lista = $nombres.split(/[\n,]+/).map(el => el.trim()).filter(Boolean);

    // Si la lista es valida, la acutualiza en el Html y retorna la lista
    if(validarLista(lista)){

        actulizarLista(lista);
        console.log(lista);
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



function vaciarLista(){

    document.getElementById('textareaNombre').value = '';
    lista = [];

}






// Genera un número aleatorio
function aleatorio(lista){
    return Math.floor(Math.random() * lista.length);
}


// Sorte el ganador o los ganadores
function sortear(lista, cantidadGanadores){
    

    if( lista.length > cantidadGanadores){

        // Guarda indices únicos.
        const indices = new Set();

        // Genera indices únicos, para que no se repitan los ganadores.
        while(indices.size < cantidadGanadores){

            indices.add(aleatorio(lista));
        };
   
        
        // Convertimos el Set de índices en un array.
        // Obtenemos los nombres de la lista en esas posiciones.
        const ganadores = [...indices].map(i => lista[i]);
       


        for(let i = 0; i < cantidadGanadores; i++){

            console.log(`Ganador ${i + 1}: ${ganadores[i]}`);
        }


    }else{

        console.error(`Debe haber más de ${cantidadGanadores} nombres en la lista.`);
        
    };

    

}

