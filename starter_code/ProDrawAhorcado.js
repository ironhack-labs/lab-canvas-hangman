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
        torso: 120,
        brazo: 25,
        anguloBrazo: Math.PI / 6,
        pierna: 35,
        anguloPierna: Math.PI / 7

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
    getTorsoIni:function(){
        return [
            this.centroHead.x,
            this.centroHead.y + this.cuerpo.radioHead
        ]
    },
    getTorsoFin:function(){
        return [
            this.centroHead.x,
            this.centroHead.y + this.cuerpo.radioHead + this.cuerpo.torso
        ]
    },
    error2: function () {
        //cuello
        let ctx = this.getCtx();


        this.configStroke();

        ctx.moveTo( this.getTorsoIni()[0], this.getTorsoIni()[1]);
        ctx.lineTo(this.getTorsoFin()[0],this.getTorsoFin()[1]);

        ctx.stroke();
        return true;

    },
    error3: function () {

        //brazo izquierdo
        let ctx = this.getCtx();


        this.configStroke();


        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1]*1.15);

        ctx.lineTo(this.getTorsoIni()[0]*.5, this.getTorsoFin()[1]*.8);

        ctx.stroke();
        return true;

    },
    error4: function () {
        //brazo izquierdo
        let ctx = this.getCtx();

        this.configStroke();

        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1]*1.15);
        ctx.lineTo(this.getTorsoIni()[0]*1.5, this.getTorsoFin()[1]*.8);

        ctx.stroke();

        return true;
    },
    error5: function () {

        //brazo izquierdo
        let ctx = this.getCtx();


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1]*.99);

        ctx.lineTo(this.getTorsoFin()[0]*.5, this.getTorsoFin()[1]*1.4);

        ctx.stroke();
        return true;


    },
    error6: function () {

        //brazo derecho
        let ctx = this.getCtx();


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1]*.99);

        ctx.lineTo(this.getTorsoFin()[0]*1.5, this.getTorsoFin()[1]*1.4);

        ctx.stroke();
        return true;

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
