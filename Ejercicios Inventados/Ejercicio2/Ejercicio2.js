"use strict"
let incrementar=document.getElementById("incrementar");
let decrementar=document.getElementById("decrementar");
let restablecer=document.getElementById("restablecer");
let con=document.getElementById("contenedor");
let contador=0;

function incrementarf(){
    contador++;
    con.innerHTML="<p>"+contador+"</p>";
}
incrementar.addEventListener("click", incrementarf);
function decrementarf(){
    contador--;
    con.innerHTML="<p>"+contador+"</p>";
}
decrementar.addEventListener("click", decrementarf);
function restablecerf(){
    contador=0;
    con.innerHTML="<p>"+contador+"</p>";

}
restablecer.addEventListener("click", restablecerf);