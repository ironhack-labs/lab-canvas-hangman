'use strict';

/**
 * Created by David on 23/05/2019.
 */

let Controller={
    letrasValidas:[],
    inicializar:function(){

        let body= document.getElementById("body");
        if(body===null ){
            alert("se requiere que el body tenga id=body")
        }

        body.onkeydown=this.onKeyPress;

    },
    onKeyPress:function($event){

        let letraRaw=$event.key.toString().toLocaleLowerCase();

        console.log(letraRaw);
    }
};

Controller.inicializar();