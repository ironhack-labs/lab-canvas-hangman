class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {

    let x = 400
    let y = 700

    let a = 420
    let b = 700


    for ( let i = 0; i < this.secretWord.length; i++ ) {

    this.context.strokeStyle = "red";
    this.context.beginPath();
   
    this.context.moveTo(x, y);
    this.context.lineTo(a, b);
    this.context.stroke();

    x += 50
    a = x+20

    }
  }

  writeCorrectLetter(index) {

    
    this.context.fillStyle = "green"
    this.context.font = "35px arial"

    this.context.fillText(this.secretWord.charAt(index) , 400 + (index*50), 695)

    console.log(index)

  }

  writeWrongLetter(letter, errorsLeft) {

    if (errorsLeft > -1) {
    
    this.context.fillStyle = "red"
    this.context.font = "50px arial"
    let firstLetterX = 800 + (errorsLeft * 40)
    this.context.fillText(letter, firstLetterX, 50 ); 
    this.drawHangman(errorsLeft)
    }
  }

  drawHangman(errorsLeft) {

    switch(errorsLeft) {

      case 9:
        this.context.strokeStyle = "red";
        this.context.lineWidth = 10;
        this.context.beginPath();
        this.context.moveTo(200, 600);
        this.context.lineTo(300, 700);
        this.context.stroke();
        break;

      case 8:
        this.context.lineTo(100, 700);
        this.context.stroke();
        break;

      case 7:
        this.context.lineTo(200, 600);
        this.context.stroke();
        break;

      case 6:
        this.context.lineTo(200, 100)
        this.context.stroke();
        break;

      case 5:
        this.context.lineTo(600, 100)
        this.context.stroke();
        break;

      case 4:
        this.context.lineTo(600, 150)
        this.context.stroke();
        this.context.closePath()
        break;

      case 3:
        this.context.beginPath();
        this.context.arc(600, 200, 50, 0, Math.PI * 2)
        this.context.stroke()
        this.context.closePath()
        break;

      case 2:
        this.context.beginPath()
        this.context.moveTo(600, 250)
        this.context.lineTo(600, 450)
        this.context.stroke();
        break;

      case 1:
        this.context.lineTo(530, 570)
        this.context.stroke();
        break;

      case 0:
        this.context.moveTo(650, 570)
        this.context.lineTo(600, 450)
        this.context.stroke();
        break;
    }
  }


  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
