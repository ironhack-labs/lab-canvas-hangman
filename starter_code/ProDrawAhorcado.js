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


class ProDrawAhorcado {
    constructor(idCanvas) {

        this.centroHead = {x: 248, y: 82};
        this.cuerpo = {
            radioHead: 40,
            torso: 120,
            brazo: 25,
            anguloBrazo: Math.PI / 6,
            pierna: 35,
            anguloPierna: Math.PI / 7

        };

        var c = document.getElementById(idCanvas);

        this.ctx = c.getContext("2d");
    }

    configStroke () {
        this.ctx.lineWidth = "8";
        this.ctx.strokeStyle = "green";
    }



    error1 () {
        //La cabeza
        let ctx = this.ctx;

        ctx.beginPath();
        this.configStroke();
        ctx.arc(this.centroHead.x, this.centroHead.y, this.cuerpo.radioHead, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        return true;

    }

    getTorsoIni () {
        return [
            this.centroHead.x,
            this.centroHead.y + this.cuerpo.radioHead +8
        ];
    }

    getTorsoFin() {
        return [
            this.centroHead.x,
            this.centroHead.y + this.cuerpo.radioHead + this.cuerpo.torso
        ];
    }


    error2() {
        //cuello
        let ctx =this.ctx;


        this.configStroke();

        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1]);
        ctx.lineTo(this.getTorsoFin()[0], this.getTorsoFin()[1]);

        ctx.stroke();
        return true;

    }

    error3() {

        //brazo izquierdo
        let ctx = this.ctx;

        this.configStroke();


        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1] * 1.15);

        ctx.lineTo(this.getTorsoIni()[0] * .5, this.getTorsoFin()[1] * .8);

        ctx.stroke();
        return true;

    }


    error4 () {
        //brazo izquierdo
        let ctx =this.ctx;

        this.configStroke();

        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1] * 1.15);
        ctx.lineTo(this.getTorsoIni()[0] * 1.5, this.getTorsoFin()[1] * .8);

        ctx.stroke();

        return true;
    }

    error5 () {

        //brazo izquierdo
        let ctx =this.ctx;


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1] * .99);

        ctx.lineTo(this.getTorsoFin()[0] * .5, this.getTorsoFin()[1] * 1.4);

        ctx.stroke();
        return true;


    }

    error6 () {

        //brazo derecho
        let ctx = this.ctx;


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1] * .99);

        ctx.lineTo(this.getTorsoFin()[0] * 1.5, this.getTorsoFin()[1] * 1.4);

        ctx.stroke();
        return true;

    }


    fromNumError (numError) {

        let lista = [
            this.error1,
            this.error2,
            this.error3,
            this.error4,
            this.error5,
            this.error6

        ];

        return lista[numError - 1]();
    }

}