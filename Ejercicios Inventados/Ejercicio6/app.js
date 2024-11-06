"use strict"



function numeroaleatorio(){
    let numA = Math.floor(Math.random() * 100) + 1;
    return numA;
}

function juego(){
    let numero=numeroaleatorio();
    let iq=0;
    while(true){
    alert ("El numero inicial es "+numero);
    let eleccion=prompt(`A ver tienes que adivinar si el numero es "mayor" o "menor" pero si no quieres jugar mas escribe "salir"`);

        if (eleccion==="salir"){
            alert("Bueno se acabo el juego tu IQ es " + iq );
            break;
        }
        if(eleccion!=="mayor" && eleccion!=="menor"){
            alert("Haber cara papaya elije mayor menor o salir");
            continue;
        }
        console.log ("He generado el siguiente numero sera menor sera mayor...");
        let siguientenum=numeroaleatorio();
        if(
            (eleccion==="mayor" && numero<siguientenum) ||
            (eleccion==="menor" && numero>siguientenum) 
        ){
                alert("Bravo tu coeficiente intelectual ha crecido el numero era "+eleccion);
                iq++;
            }else{
                alert("Mas tonto y no naces el numero no era "+eleccion);
                alert("Bueno se acabo el juego tu IQ es " + iq );
                break;
            }
            numero=siguientenum;
    }
}
juego();