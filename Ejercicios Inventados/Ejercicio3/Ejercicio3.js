"use strict";
const botonE = document.getElementById("eliminar");
const prioridad = document.getElementById("prioridad");
const tarea = document.getElementById("nuevaTarea");
const botonA = document.getElementById("agregar");
const list = document.getElementById("lista");

botonA.addEventListener("click", añadirTB);
botonE.addEventListener("click", borrarT);

function añadirTB() {
    const Tarea = tarea.value.trim(); // Elimina espacios en blanco al inicio y final
    if (Tarea === "") {
        alert("Necesitas introducir una tarea");
    } else {
        // Crear un nuevo elemento `li` para la tarea
        const listItem = document.createElement("li");
        listItem.textContent = Tarea;

        // Asignar el color de fondo según la prioridad seleccionada
        if (prioridad.value === "baja") {
            listItem.style.backgroundColor = "green";
        } else if (prioridad.value === "media") {
            listItem.style.backgroundColor = "yellow";
        } else if (prioridad.value === "alta") {
            listItem.style.backgroundColor = "red";
        }

        // Añadir el nuevo `li` a la lista `ul`
        list.appendChild(listItem);

        // Limpiar el campo de entrada después de agregar la tarea
        tarea.value = "";
    }
}
function borrarT(){
    if (list.lastChild) {
        list.removeChild(list.lastChild); // Elimina el último elemento `li` en la lista
    } else {
        alert("No hay tareas para eliminar");
    }
}
