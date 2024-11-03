"use strict";

function verificarNumeroTarjeta(numero) {
    let suma = 0;
    let alternar = false;

    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero[i]);

        if (alternar) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
        alternar = !alternar;
    }

    return suma % 10 === 0;
}
let numeroTarjeta = "5425654258465254";  
let com=verificarNumeroTarjeta(numeroTarjeta);
if (com==false){
    console.log("No es valida");
    }else{
        console.log("Es valida");
    }