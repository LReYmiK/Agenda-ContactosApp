function guardarContacto(db, contacto){
    db.setItem(contacto.id, JSON.stringify(contacto));
    location.href = '/';
}

function cargarContactos(db, parentNode){
    let claves = Object.keys(db);
    
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave));

        crearContacto(parentNode, contacto, db);
    }
}

function crearContacto(parentNode, contacto, db){
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_outline';

    divContacto.classList.add('tareas');
    iconoBorrar.classList.add('material-icons', 'icono');

    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id);
        location.href = '/';
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);
}