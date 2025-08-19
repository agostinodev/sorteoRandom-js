const $btnAgregar = document.getElementById('btnAgregar');
const $btnSortear = document.getElementById('btnSortear');


// Lista donde van a ir los nombres
const lista = [];


// Botón que nos permite agregar un nombre la lista
$btnAgregar.addEventListener('click', ()=>{

    agregarNombre();

});



// Funcion para validar que el tipo de dato sea un string sin números, que no este vacio y que no se ingrese otro tipo de dato.
const validarStrig = (string) => {

    if(typeof string !== 'string') return console.error('El valor ingresado es incorrecto.');
    if(string.trim().length === 0) return console.warn('No ingreso un nombre.');
    if(/\d/.test(string)) return console.error('No debe tener números.');

    return true;
};



// Funcion para agregar nombres a la lista.
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



// Funcion para actualizar la lista en el Html.
function actulizarLista(lista) {

    const $listaHtml = document.getElementById('listaHtml');
    $listaHtml.innerHTML = '';

    // Si la lista tiene un nombre o más, la genera en el html.
    if(lista.length >= 1){
        
        const $h2 = document.createElement('h2');
        $h2.textContent = 'Lista';


        const $ul = document.createElement('ul'),
            $fragment = document.createDocumentFragment();
            

        // Agrega cada elemento a la lista Html
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

