'use strict';

/**
 * Created by David on 23/05/2019.
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
    centroHead: {x: 100, y: 75},
    cuerpo: {
        radioHead: 40,
        torso: 50
    },
    ctx: null,
    configStroke: function () {
        this.getCtx().lineWidth = "8";
        this.getCtx().strokeStyle = "green";
    },
    getCtx: function () {

        if (this.ctx === null) {
            var c = document.getElementById("hangman");

            this.ctx = c.getContext("2d");
        }

        return this.ctx;
    },
    error1: function () {
        //La cabeza
        let ctx = this.getCtx();

        ctx.beginPath();
        this.configStroke();
        ctx.arc(this.centroHead.x, this.centroHead.y, this.cuerpo.radioHead, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        return true;

    },
    error2: function () {
        //cuello
        let ctx = this.getCtx();


        this.configStroke();
        ctx.moveTo(this.centroHead.x, this.centroHead.y + this.cuerpo.radioHead);
        let largo = this.centroHead.y + this.cuerpo.radioHead + this.cuerpo.torso;
        ctx.lineTo(this.centroHead.x, largo);
        ctx.stroke(); // Draw it
        return true;

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
