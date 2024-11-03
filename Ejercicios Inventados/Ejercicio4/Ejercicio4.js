"use strict"

const numI = document.getElementById("numero");
const BotonA = document.getElementById("adivinar");
const BotonR = document.getElementById("reiniciar");
const result = document.getElementById("resultado");
const intentos = document.getElementById("intentos");
const pista = document.getElementById("pista");

let numeroA = Math.floor(Math.random() * 100) + 1;
let Nintentos = 10;

function Empezarjuego() {
    const num = parseInt(numI.value);

   
    if (isNaN(num) || num < 1 || num > 100) {
        alert("Por favor, introduce un número válido entre 1 y 100.");
        return;
    }
    if (hayganador(num, numeroA)) {
        result.textContent = "¡Felicidades! Adivinaste el número: " + numeroA;
        result.style.backgroundColor = "green";
        BotonA.disabled = true; 
        pista.textContent = ""; 
    } else {
        Nintentos--;
        result.textContent = "Número incorrecto.";
        intentos.textContent = "Intentos restantes: " + Nintentos;

        if (Nintentos === 0) {
            intentos.textContent = "No quedan más intentos. El número era " + numeroA;
            intentos.style.backgroundColor = "red";
            intentos.style.color = "white";
            BotonA.disabled = true; 
            pista.textContent = ""; 
        } else {
            if (num < numeroA) {
                pista.textContent = "El número secreto es mayor.";
            } else {
                pista.textContent = "El número secreto es menor.";
            }
        }
    }
    numI.value = "";
}

function Reinicio() {
    numeroA = Math.floor(Math.random() * 100) + 1;
    Nintentos = 10;
    result.textContent = "";
    intentos.textContent = "Intentos restantes: " + Nintentos;
    pista.textContent = "";
    result.style.backgroundColor = "";
    intentos.style.backgroundColor = ""; 
    intentos.style.color = ""; 
    BotonA.disabled = false; 
}


function hayganador(num, numA) {
    return num === numA;
}


BotonA.addEventListener("click", Empezarjuego);
BotonR.addEventListener("click", Reinicio);

