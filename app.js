const btnAgregar = document.getElementById('btnAgregar');
const btnSortear = document.getElementById('btnSortear');


const lista = [];


btnAgregar.addEventListener('click', ()=>{

    agregarNombre()


});



const validarStrig = (string) => {

    if(typeof string !== 'string') return console.error('El valor ingresado es incorrecto.');
    if(string.trim().length === 0) return console.warn('No ingreso un nombre.');
    if(/\d/.test(string)) return console.error('No debe tener números.');

    return true;
};





function agregarNombre () {

    const nombre = document.getElementById('inputNombre').value;


    if(validarStrig(nombre)){

        document.getElementById('inputNombre').value = '';

        return lista.push(nombre);
    }
}




