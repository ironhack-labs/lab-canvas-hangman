// lo visual

class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    this.context.beginPath()
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {

    if (errorsLeft <= 9) {
      this.context.beginPath();
      this.context.arc(230, 90, 50, 0, Math.PI * 2);
      this.context.stroke();
    }
    if (errorsLeft <= 8) {
      this.context.beginPath();
      this.context.moveTo(230, 140);
      this.context.lineTo(230, 300);
      this.context.stroke();
    }
    if (errorsLeft <= 7) {
      this.context.beginPath();
      this.context.moveTo(230, 300);
      this.context.lineTo(260, 420);
      this.context.stroke();
    }
    if (errorsLeft <= 6) {
      this.context.beginPath();
      this.context.moveTo(230, 300);
      this.context.lineTo(200, 420);
      this.context.stroke();
      if (errorsLeft <= 5) {
        this.context.beginPath();
        this.context.moveTo(230, 160);
        this.context.lineTo(260, 280);
        this.context.stroke();
      }
      if (errorsLeft <= 4) {
        this.context.beginPath();
        this.context.moveTo(230, 160);
        this.context.lineTo(200, 280);

        this.context.stroke();
      }
      if (errorsLeft <= 3) {

      }
      if (errorsLeft <= 2) {

      }
      if (errorsLeft <= 1) {

      }
      if (errorsLeft <= 0) {
      }
    }



    // canvas.addEventListener('click', function(event){
    //
    // 	console.dir(event);
    // 	this.context.fillRect(event.offsetX, event.offsetY, 10, 10);
    // 	console.log('hello');
    //
    // 	functionArray[counter]();
    // 	counter++;
    // });

  }



  // ... your code goes here

  // funciones hagman por partes


  gameOver() {
    let fail = new Image();
    fail.scr= '/images/gameover.png';
    fail.addEventListener('load', e => {
      this.context.drawImage(fail, 340, 110);
    })

  }

  winner() {
    let youwin = new Image();
    youwin.src='/images/awesome.png'
    youwin.addEventListener('load', e => {
      this.context.drawImage(fail, 340, 110);
    })  }
}