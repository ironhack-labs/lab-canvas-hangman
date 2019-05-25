let canvas = document.getElementById("hangman");
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

class HangmanCanvas {
  constructor (array){
    this.ctx = canvas.getContext('2d');
    this.uncoveredArray = array;
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
    for (let i = 0; i < hangman.uncoveredArray.length; i++) {
      x += 50;
      this.ctx.fillStyle = "black";
      this.ctx.textAlign = "center";
      this.ctx.font = "40px Arial";
      this.ctx.fillText(hangman.uncoveredArray[i], x, y);
      
    }
  }

  drawHangman(){
    switch (11 - hangman.errorsLeft){
      case 1:{
        // Draw base line
        console.log('Drawing base');
        break;
      }
      case 2:{
        //Draw pole
        console.log('Drawing pole');
        break;
      }
      case 3:{
        //Draw horizontal beam
        console.log('Drawing horizontal beam');
        break;
      }
      case 4:{
        //Draw rope
        console.log('Drawing rope');
        break;
      }
      case 5:{
        //Draw head
        console.log('Drawing head');
        break;
      }
      case 6:{
        //Draw body
        console.log('Drawing body');
        break;
      }
      case 7:{
        //Draw ledt hand
        console.log('Drawing left hand');
        break;
      }
      case 8:{
        //Draw right hand
        console.log('Drawing right hand');
        break;
      }
      case 9:{
        //Draw right foot
        console.log('Drawing right foot');
        break;
      }
      case 10:{
        //Draw left foot
        console.log('Drawing left foot');
        break;
      }
    }
  }

  gameOver() {

  }

  winner() {

  }
}


// createBoard(wordArray);
// for (let i = 1; i < wordArray.length; i ++){
//   drawHangman(i);

// }

