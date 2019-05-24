'use strict';

/**
 * Created by David on 21/05/2019.
 */

const app = new Vue({
    el: '#app',
    data: {
        juego: {},
        proDraw:null,
        juego_estado: ConfigJuego.estados.before_play,
        isShowCanvas: false,
        cssClassBotonStart: '',
        cssClassLogo: ''
    },
    methods: {
        getIsLetraMinusculaValida: function (letra) {

            if (letra === "ñ") {
                return true;
            }

            var reg = /^[a-z]/;
            return reg.test(letra)
        },
        onKeyPress($event) {

            let letra = $event.key.toString().toLocaleLowerCase();

            //validar letra **********************************
            if (!this.getIsLetraMinusculaValida(letra)) {
                return;
            }

            console.log(letra);

            let numErrorsOld=this.juego.numError;
            //enviar el evento al juego
            let turnoJugado = this.juego.ejecutarJugada(letra);



            this.estadoJuego=turnoJugado.estadoJuego;

            if(turnoJugado.estadoJuego===ConfigJuego.estados.end_win){
                alert("Ganaste");
            }else{
                alert("perdiste");
            }

            let numErrorsNew=this.juego.numError;

            if(numErrorsNew!==numErrorsOld){
                ProDrawAhorcado.fromNumError( numErrorsNew);
            }

        },
        async start() {

            /* animacion de salir y ocultar boton ********** */
            this.cssClassBotonStart = 'salidaBoton';
            this.cssClassLogo = 'salidaLogo';

            await AnimacionInterfaz.esperaLong();

            this.cssClassBotonStart = 'noDisplay';
            this.cssClassLogo = 'noDisplay';
            this.isShowCanvas = true;

            /* configuracion del juego *************************** */
            // console.log('2');

            let palabra = ConfigJuego.getRandomPalabra();

            this.juego = new Juego(palabra);
            this.juego_estado = this.juego.estado;

            // console.log('3');


        }
    },
    computed: {
        isShowCmdStart() {
            return this.juego_estado === ConfigJuego.estados.before_play;
        },

        getCssClassBotonStart() {
            return this.cssClassBotonStart;
        },

        getCssClassLogo() {
            return this.cssClassLogo;
        },

        getListaLetrasPalabraAdivinada() {
            return this.juego.listaLetrasPalabraAdivinada;
        },

        getListaLetrasIntentadas() {
            return this.juego.listaLetrasIntentadas;
        }
    }
    ,
    mounted() {
        this.cssClassBotonStart = 'entradaBoton';
        this.proDrawAhorcado=new ProDrawAhorcado('hangman');

    }
});