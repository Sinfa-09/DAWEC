"use strict"
let botonA=document.getElementById("agregarTarea");
let botonE=document.getElementById("eliminarTarea");
function agregartarea(){
    let tarea=nuevaTarea.value;
    if (tarea==""){
        alert("No se ha añadido nunguna tarea")
    }else{
        listaTareas.innerHTML+="<li id="+tarea+">"+tarea+"</li>";
        
    }
}
botonA.addEventListener("click", agregartarea)

    function borrartarea(){
        let tareas=document.getElementById("listaTareas");
        tareas.innerHTML="";
    }
botonE.addEventListener("click", borrartarea);
