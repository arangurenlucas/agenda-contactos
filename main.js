const nombre = document.querySelector(".nombre");
const numero = document.querySelector(".numero");
const direccion = document.querySelector(".direccion");
const btnAgregarContacto = document.querySelector(".btn-agregar-contacto");

const listadoContactos = document.querySelector(".listado-contactos");

const db = window.localStorage;

btnAgregarContacto.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value,
  };
  guardarContacto(db, contacto);
};
cargarContactos(db, listadoContactos);
