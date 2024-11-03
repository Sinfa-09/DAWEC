"use strict"

let tablero = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let jugadorActual = 'X';
    function mostrarTablero(){
        console.log ("________________________________");
        console.log (tablero[0],+"|"+tablero[1],+"|"+tablero[2]);
        console.log ("________________________________");
        console.log (tablero[3],+"|"+tablero[4],+"|"+tablero[5]);
        console.log ("________________________________");
        console.log (tablero[6],+"|"+tablero[7],+"|"+tablero[8]);
        console.log ("________________________________");

    }
    function hayGanador() {
        const combinacionesGanadoras = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];
    
        for (let combinacion of combinacionesGanadoras) {
            const [a, b, c] = combinacion;
            if (tablero[a] === jugadorActual && tablero[b] === jugadorActual && tablero[c] === jugadorActual) {
                return true;
            }
        }
        return false;
    }
    function realizarTurno() {
        mostrarTablero();
        let posicion = parseInt(prompt("Jugador "+jugadorActual+", elige una posición (1-9):")) - 1;
    
        if (tablero[posicion] === ' ') { //Vemos si la casilla esta vacia
            tablero[posicion] = jugadorActual;  //Si lo esta ponemos hay la ficha del jugador actual
    
            if (hayGanador()) {         
                mostrarTablero();
                alert ('¡Jugador ' + jugadorActual + ' ha ganado!');
            } else if (!tablero.includes(' ')) {     //Busca algun sitio libre
                mostrarTablero();
                alert("¡Empate!");
            } else {
                // Cambia de turno al otro jugador
                if (jugadorActual === 'X') {
                    jugadorActual = 'O';
                } else {
                    jugadorActual = 'X';
                }
                realizarTurno(); // Siguiente turno
            }
        } else {
            alert("Casilla ocupada, intenta otra vez.");
            realizarTurno();  // Repetir turno
        }
    }
    realizarTurno();