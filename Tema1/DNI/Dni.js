"use strict"
let ndni=prompt("Introduzca su DNI");
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let numero = ndni.slice(0 , 8); //Con slice cojo los 8 primeros digitos de el ndni (el octavo no se coje)
let letra = ndni.slice(8).toUpperCase(); //Y aqui cojo del octavo hacia adelante
let resto = numero % 23;
    if(letra===letrasDNI[resto]){
        alert("La letra es correcta");
    }else{
        alert("La letra es incorrecta");
    }