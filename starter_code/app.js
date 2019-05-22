'use strict';

/**
 * Created by David on 21/05/2019.
 */


const app = new Vue({
    el: '#app',
    data: {
        juego:null
    },
    methods: {
        onClickStart(){
            //incializar el juego
            let palabra= ConfigJuego.getRandomPalabra();
            this.juego=new Juego(palabra);
        }
    },
    computed:{
        getLista
    }
    ,
    mounted() {


    }
});