'use strict';

/**
 * Created by David on 21/05/2019.
 */

let AnimacionInterfaz = {
    esperaLong: async function () {


        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('1');
                resolve();
            }, 1500)
        });

        await promise; // wait till the promise resolves (*)
        return true;
    }
};


let DrawAhorcado = {
    error1: function () {

    },
    error2: function () {

    },
    error3: function () {

    },
    error4: function () {

    },
    error5: function () {

    },
    error6: function () {

    },
    error7: function () {

    },
    fromNumError: function (numError) {

        let lista = [
            this.error1,
            this.error2,
            this.error3,
            this.error4,
            this.error5,
            this.error6,
            this.error7
        ];

        return lista[numError - 1]();


    }
};

const app = new Vue({
    el: '#app',
    data: {
        juego: {},
        juego_estado: ConfigJuego.estados.before_play,
        isShowCanvas: false,
        cssClassBotonStart: '',
        cssClassLogo: '',
        ctx: null
    },
    methods: {
        onKeyPress(event) {
            console.log(event);
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
        let canvas = document.getElementById("hangman");
        let ctx = canvas.getContext("2d");

        this.ctx = ctx;

        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        ctx.stroke();

    }
});