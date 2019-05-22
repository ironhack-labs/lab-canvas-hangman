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
        numMaximoErrores: 7

    }
;


class ResultadoTurno {
    constructor(success, msg, numErrores, estadoJuego) {

        this.success = success;
        this.msg = msg;
        this.numErrores = numErrores;
        this.estadoJuego = estadoJuego;
    }
}


const FactoryResultadoTurno = {
    errorLetraRepetida: (letra, numErrores,) => {
        var m = new ResultadoTurno(
            false,
            `La letra ${letra} ya se intentó anteriormente, intentar otra letra`,
            numErrores,
            ConfigJuego.estados.on_play);

        return m;
    },
    jugadaGanadora: (numErrores) => {
        var m = new ResultadoTurno(
            true,
            `Ganaste !!!`,
            numErrores,
            ConfigJuego.estados.end_win)
        ;

        return m;
    },
    jugadaPerdedora: (numErrores) => {
        var m = new ResultadoTurno(
            true,
            `Perdiste :( !!!`,
            numErrores,
            ConfigJuego.estados.end_loose)
        ;

        return m;
    },
    seguirJugando: (numErrores) => {
        var m = new ResultadoTurno(
            true,
            ``,
            numErrores,
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


        this.numError = 0;
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
            return FactoryResultadoTurno.errorLetraRepetida(letra, this.numError)
        }

        let numLetras = this.listaLetrasPalabraAdivinada.length;


        /* registrar la letra intentada y contar intento*/
        this.listaLetrasIntentadas.push(letra);


        /* ver si hay acierto - no importa cuantas veces se repita la letra solo se aceirta una vez*/
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

        }else{
            this.numError++;
        }


        //Evaluar si ya perdio
        if (this.numError === ConfigJuego.numMaximoErrores) {
            return FactoryResultadoTurno.jugadaPerdedora();
        }



        return FactoryResultadoTurno.seguirJugando(this.numError);
    }

}