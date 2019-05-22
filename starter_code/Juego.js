'use strict';


/**
 * Created by David on 21/05/2019.
 */



const ConfigJuego = {

        estados: {
            'before_play': 0,
            'on_play': 1,
            'end_win': 2,
            'end_loose': 3
        },
        getlistaPalabrasPosibles: function () {
            return ['perro', 'casa', 'gato', 'ganzo', 'mamut', 'avestruz', 'abejorro', 'tarantula'];
        }
        ,
        getRandomPalabra: function () {

            function f(lista) {
                let index = Math.floor(Math.random() * lista.length);
                return lista[index];
            }

            if (this.listaPalabrasRandomProporcionadas.length === this.getlistaPalabrasPosibles().length) {
                this.listaPalabrasRandomProporcionadas.length = [];
            }

            let p = null;
            do {
                p = f(this.getlistaPalabrasPosibles());

            } while (this.listaPalabrasRandomProporcionadas.indexOf(p) > -1);

            this.listaPalabrasRandomProporcionadas.push(p);

            return p;
        },

        listaPalabrasRandomProporcionadas: [],
        numMaximoIntentos: 7

    }
;


class ResultadoTurno {
    constructor(success, msg, numIntentosRestantes, estadoJuego) {

        this.success = success;
        this.msg = msg;
        this.numIntentosRestantes = numIntentosRestantes;
        this.estadoJuego = estadoJuego;
    }
}


const FactoryResultadoTurno = {
    errorLetraRepetida: (letra, intentosRestantes,) => {
        var m = new ResultadoTurno(
            false,
            `La letra ${letra} ya se intentó anteriormente, intentar otra letra`,
            intentosRestantes,
            ConfigJuego.estados.on_play);

        return m;
    },
    jugadaGanadora: () => {
        var m = new ResultadoTurno(
            true,
            `Ganaste !!!`,
            0,
            ConfigJuego.estados.end_win)
        ;

        return m;
    },
    jugadaPerdedora: () => {
        var m = new ResultadoTurno(
            true,
            `Perdiste :( !!!`,
            0,
            ConfigJuego.estados.end_loose)
        ;

        return m;
    },
    seguirJugando: (numIntentosRestantes) => {
        var m = new ResultadoTurno(
            true,
            ``,
            numIntentosRestantes,
            ConfigJuego.estados.on_play)
        ;

        return m;
    }
};

class Juego {
    constructor(palabraOculta) {

        if (palabraOculta === "" || palabraOculta === undefined) {
            throw  Error("se requiere la palabra oculta");
        }

        this.estado = ConfigJuego.estados.before_play;

        this.getPalabraOculta = () => {
            return palabraOculta;
        };


        this.listaLetrasIntentadas = [];
        this.listaLetrasPalabraOculta = palabraOculta.split('');
        this.listaLetrasPalabraAdivinada = this.listaLetrasPalabraOculta.map(letra => {
            return "_";
        });


        this.numIntentos = 0;
        this.numAciertos = 0;

    }

    getPalabraAdivinada() {
        return this.listaLetrasPalabraAdivinada.join('');
    }

    ejecutarJugada(letra) {

        /* buscar si hay coincidencia de letras*/

        let index = this.listaLetrasIntentadas.findIndex(x => {
            return x === letra;
        });

        if (index > -1) {
            return FactoryResultadoTurno.errorLetraRepetida(letra, ConfigJuego.numMaximoIntentos - this.numIntentos)
        }

        let numLetras = this.listaLetrasPalabraAdivinada.length;

        /* buscar si existe la letra en la palabra*/


        this.numIntentos++;

        /* no importa cuantas veces se repita la letra solo se aceirta una vez*/
        let isLetraEsAcertada = false;

        for (let i = 0; i < numLetras; i++) {

            if (letra === this.listaLetrasPalabraOculta[i]) {

                //hay coincidencia - poner la letra adivinada
                this.listaLetrasPalabraAdivinada[i] = letra;
                isLetraEsAcertada = true;
            }
        }

        if (isLetraEsAcertada) {

            this.numAciertos++;

            //Evaluar si gano

            if (this.numAciertos === numLetras) {
                return FactoryResultadoTurno.jugadaGanadora();
            }

        }


        //Evaluar si ya perdio
        if (this.numIntentos === ConfigJuego.numMaximoIntentos) {
            return FactoryResultadoTurno.jugadaPerdedora();
        }


        let num = ConfigJuego.numMaximoIntentos - this.numIntentos;
        return FactoryResultadoTurno.seguirJugando(num);
    }

}