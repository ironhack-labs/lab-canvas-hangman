'use strict';

/**
 * Created by David on 21/05/2019.
 */
class ResultadoTurno {
    constructor(success, msg, numIntentosRestantes, estadoJuego) {

        this.success = success;
        this.msg = msg;
        this.numIntentosRestantes = numIntentosRestantes;
        this.estadoJuego = estadoJuego;
    }
}

let EstadosJuego = {'before_play': 0, 'on_play': 1, 'end_win': 2, 'end_loose': 3};


let FactoryResultadoTurno = {
    errorLetraRepetida: (letra, intentosRestantes,) => {
        var m = new ResultadoTurno(
            false,
            `La letra ${letra} ya se intentó anteriormente, intentar otra letra`,
            intentosRestantes,
            EstadosJuego.on_play);

        return m;
    },
    jugadaGanadora: () => {
        var m = new ResultadoTurno(
            true,
            `Ganaste !!!`,
            0,
            EstadosJuego.end_win)
        ;

        return m;
    },
    jugadaPerdedora: () => {
        var m = new ResultadoTurno(
            true,
            `Perdiste :( !!!`,
            0,
            EstadosJuego.end_loose)
        ;

        return m;
    },
    seguirJugando: (numIntentosRestantes) => {
        var m = new ResultadoTurno(
            true,
            `El juego sigue`,
            numIntentosRestantes,
            EstadosJuego.on_play)
        ;

        return m;
    }
};

class Juego {
    constructor(palabraOculta) {

        if (palabraOculta === "" || palabraOculta === undefined) {
            throw  Error("se requiere la palabra oculta");
        }

        this.estado = this.estados_juego.before_play;

        this.palabraOculta = palabraOculta;

        this.listaLetrasIntentadas = [];
        this.listaLetrasPalabraOculta = palabraOculta.splice('');
        this.listaLetrasPalabraAdivinada = lista.map(letra => {
            return "_";
        }).join('');


        this.numIntentos = 0;
        this.numAciertos = 0;
        this.numMaximoIntentos =10;
    }

    ejecutarJugada(letra) {

        /* buscar si hay coincidencia de letras*/

        let index = this.listaLetrasIntentadas.findIndex(x => {
            return x === letra;
        });

        if (index > -1) {
            return FactoryResultadoTurno.errorLetraRepetida(letra, this.numMaximoIntentos - this.numIntentos)
        }

        /* buscar si existe la letra en la palabra*/

        this.numIntentos++;

        for (let i = 0; i < this.listaLetrasPalabraOculta.length; i++) {
            if (letra === this.listaLetrasPalabraOculta[i]) {

                //hay coincidencia - poner la letra adivinada
                this.listaLetrasPalabraAdivinada[i] = letra;

                this.numAciertos++;
            }
        }

        //Evaluar si gano

        if (this.numAciertos === this.listaLetrasPalabraAdivinada.length) {

            return FactoryResultadoTurno.jugadaGanadora();

        }


        //Evaluar si ya perdio
        if (this.numIntentos === this.numMaximoIntentos) {
            return FactoryResultadoTurno.jugadaPerdedora();
        }


        return FactoryResultadoTurno.seguirJugando(this.numMaximoIntentos - this.numIntentos);
    }

}