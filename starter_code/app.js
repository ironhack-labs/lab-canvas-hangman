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

const app = new Vue({
    el: '#app',
    data: {
        juego: null,
        juego_estado: ConfigJuego.estados.before_play,
        isShowStar: true,
        cssClassBotonStart: '',
        cssClassLogo:''
    },
    methods: {
        onClickStart() {
            //incializar el juego
            let palabra = ConfigJuego.getRandomPalabra();
            this.juego = new Juego(palabra);
        },
        onKeyPress(event) {
            console.log(event);
        },
        async start() {

            /* animacion de salir y ocultar boton ********** */
            this.cssClassBotonStart = 'salidaBoton';
            this.cssClassLogo='salidaLogo';

            await  AnimacionInterfaz.esperaLong();

            app.cssClassBotonStart = 'noDisplay';
            app.cssClassLogo = 'noDisplay';



            /* configuracion del juego *************************** */

            let palabra = ConfigJuego.getRandomPalabra();

            console.log('2');


            //
            // await setTimeout( ()=>{
            //     app.cssClassBotonStart='noDisplay';
            //     return new Promise();
            //     console.log(1);
            // },1500) ;



        }
    },
    computed: {
        isShowCmdStart() {
            return this.juego_estado === ConfigJuego.estados.before_play;
        },
        isShowCanvas() {

        },

        getCssClassBotonStart() {
            return this.cssClassBotonStart;
        },

        getCssClassLogo(){
            return this.cssClassLogo;
        }
    }
    ,
    mounted() {
        this.cssClassBotonStart = 'entradaBoton';

    }
});