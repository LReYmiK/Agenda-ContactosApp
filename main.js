//1.Hacer un apuntador a las clases para poder utilizarlas
const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listadoTareas = document.querySelector('.listado-tareas');

//2. Cuando pulsemos el btn capturemos el nombre, numero y direccion lo guardamos dentro de un objeto y esto al localstorage
const db = localStorage;

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto);
};
cargarContactos(db, listadoTareas);