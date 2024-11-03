/*the Hamming distance between two strings of equal length is 
the number of positions at which the corresponding symbols are
different. In other words, it measures the minimum number of 
substitutions required to change one string into the other, 
or the minimum number of errors that could have transformed 
one string into the other. In a more general context, the 
Hamming distance is one of several string metrics for measuring
the edit distance between two sequences.

Si las cadenas tienen distinta longitud, devuelve -1

Sube la función Javascript que calcula la distancia Hamming entre dos cadenas */
//Carlos Infante Carranza//

let palabra1="pito"; 
let palabra2="mios";

function distanciaHamming(palabra1, palabra2){  //Comenzamos la funcion pasando las palabras
    let distancia=0;                            //Iniciamos un contador 
    while(palabra1.length!=palabra2.length){    //Vemos si las palabras son iguales en cuanto a longitud 
        return -1;                              //Si ni siquiera son iguales respecto al tamaño sale devolviendo un -1
    }

    for(let i = 0;i<palabra1.length;i++){       //Hacemos un bucle para ir comparando letra a letra
        if(palabra1[i]!=palabra2[i]){           //si las palabras son distintas en "esa letra" 
            distancia++;                        //Añadimos 1 al contador 
        }
    }
    return distancia;                           //Y devolvemos la distancia
}

console.log("La distancia de hamming entre "+ palabra1 + " y "+palabra2+ " es "+distanciaHamming(palabra1,palabra2));
//Y aqui hacemos un "console.log" bien bonico para mostrar la distancia de hamming