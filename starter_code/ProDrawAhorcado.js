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

        this.centroHead = {x: 248, y: 117};
        this.cuerpo = {
            radioHead: 40,
            torso: 120,
            brazo: 65,
            pierna: 95
        };

        this.canvas = document.getElementById(idCanvas);

        this.ctx = this.canvas.getContext("2d");
    }

    configStroke() {
        this.ctx.lineWidth = "8";
        this.ctx.strokeStyle = "green";
    }


    error1() {
        //La cabeza
        let ctx = this.ctx;

        ctx.beginPath();
        this.configStroke();
        ctx.arc(this.centroHead.x, this.centroHead.y, this.cuerpo.radioHead, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        return true;

    }

    getTorsoIni() {
        return [
            this.centroHead.x,
            this.centroHead.y + this.cuerpo.radioHead + 8
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
        let ctx = this.ctx;


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

        ctx.lineTo(this.getTorsoIni()[0] - this.cuerpo.brazo, this.getTorsoFin()[1] * .8);

        ctx.stroke();
        return true;

    }


    error4() {
        //brazo izquierdo
        let ctx = this.ctx;

        this.configStroke();

        ctx.moveTo(this.getTorsoIni()[0], this.getTorsoIni()[1] * 1.15);
        ctx.lineTo(this.getTorsoIni()[0] + this.cuerpo.brazo, this.getTorsoFin()[1] * .8);

        ctx.stroke();

        return true;
    }

    error5() {

        //pierna izquierdo
        let ctx = this.ctx;


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1] * .99);

        ctx.lineTo(this.getTorsoFin()[0] - this.cuerpo.brazo, this.getTorsoFin()[1] * 1.4);

        ctx.stroke();
        return true;


    }

    error6() {

        //pierna derecho
        let ctx = this.ctx;


        this.configStroke();


        ctx.moveTo(this.getTorsoFin()[0], this.getTorsoFin()[1] * .99);

        ctx.lineTo(this.getTorsoFin()[0] +this.cuerpo.brazo, this.getTorsoFin()[1] * 1.4);

        ctx.stroke();
        return true;

    }


    fromNumError(numError) {

        if (numError === 1) {
            this.error1();
        } else if (numError === 2) {
            this.error2();
        } else if (numError === 3) {
            this.error3();
        } else if (numError === 4) {
            this.error4();
        } else if (numError === 5) {
            this.error5();
        } else if (numError === 6) {
            this.error6();
        } else {
            alert("no tenemos 7 error")
        }

    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}