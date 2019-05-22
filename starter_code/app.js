'use strict';

/**
 * Created by David on 21/05/2019.
 */





const app = new Vue({
    el: '#app',
    data: {

        listaPalabras:['perro','casa','gato','ganzo','mamut','avestruz','abejorro','tarantula'],
        juego:{
            estado:'before_play',
            palabraOculta:null,
            palabraAdivinada:null,
            numIntentos:0
        }
    },
    methods: {
        onClickStart(){

        }
    },
    mounted() {

    }
});