"use strict"
function elegirOpcion(){
    let opciones=["piedra","papel","tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * 3);
    const OpcionOrdenador=opciones[indiceAleatorio];
    return OpcionOrdenador;
}


function comprobarGanador(Opcionjugador, OpcionOrdenador){
    if (Opcionjugador===OpcionOrdenador){
        return "empate";
    }else if(
        (Opcionjugador==="piedra" && OpcionOrdenador==="tijeras") ||
        (Opcionjugador==="tijeras" && OpcionOrdenador==="papel") ||
        (Opcionjugador==="papel" && OpcionOrdenador==="piedra") 
    ){
        return "jugador";
    }else{
        return "ordenador";
    }
}

function comprobarOpcion(Opcionjugador){
    if(!["tijeras","papel","piedra"].includes(Opcionjugador)){
        return false;
    }else{
        return true;
    }

}
function juego(){
    let contJugador=0;
    let contOrdenador=0;
    while(true){
        let Opcionjugador=prompt("Elige piedra, papel o tijeras, de lo contrario para salir escribe salir");
        Opcionjugador=Opcionjugador.toLocaleLowerCase();
        if(Opcionjugador==="salir"){
            console.log("Fin del juego estos son los marcadores");
            console.log(contJugador);
            console.log(contOrdenador);
            break;
            
        }
        if(!comprobarOpcion(Opcionjugador)){
            alert("A ver cara nalga elige bien");
            continue;
        }
        let OpcionOrdenador=elegirOpcion();
        console.log("El ordenador eleje ");

        const ganador=comprobarGanador(Opcionjugador, OpcionOrdenador);

        if(ganador==="jugador"){
            alert ("Gano el jugador");
            contJugador++;
        }else if(ganador==="ordenador"){
            alert("Gano el ordenador");
            contOrdenador++;
        }else if (ganador==="empate"){
            alert("Habeis empatado");
        }
    }
}
juego();