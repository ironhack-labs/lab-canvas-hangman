let canvas = document.getElementById("hangman");
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

class HangmanCanvas {
  constructor (){
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'black';
    this.ctx.fillRect(0, 0, 1200, 8000);
    this.ctx.lineWidth = 2.5;
  }

  renderWord(){
    // let gapWidth = 25;
    // let charWidth = 50;
    // let x1 = 100;
    // let x2 = x1 + charWidth;
    // let y = 400;
    let x = 199;
    let y = 390;
    hangman.uncoveredArray.forEach((item) => {
      x += 50;
      this.ctx.fillStyle = "black";
      this.ctx.textAlign = "center";
      this.ctx.font = "40px Arial";
      this.ctx.fillText(item, x, y);
    });
  }

  drawHangman(){
    switch (11 - hangman.errorsLeft){
      case 1:{
        // Draw base line
        console.log('Drawing base');
        this.ctx.beginPath()
        this.ctx.moveTo(25, 400);
        this.ctx.lineTo(125, 400);
        this.ctx.lineTo(75, 350);
        this.ctx.lineTo(25, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        break;
      }
      case 2:{
        //Draw pole
        console.log('Drawing pole');
        this.ctx.moveTo(75, 350);
        this.ctx.lineTo(75, 150);
        this.ctx.stroke();
        break;
      }
      case 3:{
        //Draw horizontal beam
        console.log('Drawing horizontal beam');
        this.ctx.moveTo(75, 150);
        this.ctx.lineTo(175, 150);
        this.ctx.stroke();
        break;
      }
      case 4:{
        //Draw rope
        console.log('Drawing rope');
        this.ctx.moveTo(175, 150);
        this.ctx.lineTo(175, 200);
        this.ctx.stroke();
        break;
      }
      case 5:{
        //Draw head
        console.log('Drawing head');
        this.ctx.beginPath();
        this.ctx.strokeStyle = "black"
        let x = 175
        let y = 220
        let radio = 20
        let anguloInicial = 0
        let anguloFinal = Math.PI*2
        this.ctx.arc(x, y, radio, anguloInicial, anguloFinal, true)
        this.ctx.stroke();
        break;
      }
      case 6:{
        //Draw body
        console.log('Drawing body');
        this.ctx.moveTo(175, 240);
        this.ctx.lineTo(175, 300);
        this.ctx.stroke();  
        break;
      }
      case 7:{
        //Draw ledt hand
        console.log('Drawing left hand');
        this.ctx.moveTo(175, 260);
        this.ctx.lineTo(160, 260);
        this.ctx.stroke();
        break;
      }
      case 8:{
        //Draw right hand
        console.log('Drawing right hand');
        this.ctx.moveTo(175, 260);
        this.ctx.lineTo(190, 260);
        this.ctx.stroke();
        break;
      }
      case 9:{
        //Draw right foot
        console.log('Drawing right foot');
        this.ctx.moveTo(175, 300);
        this.ctx.lineTo(190, 330);
        this.ctx.stroke();
        break;
      }
      case 10:{
        //Draw left foot
        console.log('Drawing left foot');
        this.ctx.moveTo(175, 300);
        this.ctx.lineTo(160, 330);
        this.ctx.stroke();
        break;
      }
    }
  }

  gameOver() {

  }

  winner() {

  }
}

