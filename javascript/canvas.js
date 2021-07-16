class HangmanCanvas {

  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 5;
    
    this.createBoard(); 
  }

  createBoard() {    
    this.context.clearRect(1, 1, 700, 700);
    this.context.strokeRect(1, 1, 700, 700);
    this.drawLines();
  }

  drawLines() {
    this.context.strokeStyle = 'black';

    for(var count=0; count <= this.secretWord.length-1; count++) {
      this.context.strokeRect(80 + (52.5*count), 120, 30, 2);
    }
  }

  writeCorrectLetter(letter) {
    document.getElementById('pickedLetters').innerText += " " + letter.toUpperCase(); 
    var secretWord = this.secretWord;       
    var indices = [];
    for(var count=0; count < this.secretWord.length; count++) {
        if (secretWord[count] === letter) {
          indices.push(count);
          this.writeCorrectLetterToCanvas(count, letter);
        }
    }
    console.log("Indices "+indices);
  }

  writeCorrectLetterToCanvas(count, letter) {
    this.context.fillStyle = 'orange';
    this.context.font = '34px Arial';
    this.context.fillText(letter.toUpperCase(), 80 + count * 54, 90);
  }

  writeWrongLetter(letter, errorsLeft) {
    document.getElementById('pickedLetters').innerText += " " + letter; 
    document.getElementById('wrongLetters').innerText += " " + letter;
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    if(errorsLeft == 9) {
      this.drawLine(30, 640, 130, 640);      
    }

    if(errorsLeft == 8) {
      this.drawLine(30, 640, 80, 540);     
    }

    if(errorsLeft == 7) {
        this.drawLine(80, 540, 130, 640);
    }

    if(errorsLeft == 6) {
        this.drawLine(80, 540, 80, 240);
    }

    if(errorsLeft == 5) {
      this.drawLine(80, 240, 330, 240);
    }

    if(errorsLeft == 4) {
      this.drawLine(330, 240, 330, 300);
    }

    if(errorsLeft == 3) {
      this.context.closePath();
      this.context.beginPath();
      this.context.fillStyle = 'black';
      this.context.arc(330, 350, 50, 0, 2 * Math.PI);
      this.context.fill();
    }

    if(errorsLeft == 2) {
      this.drawLine(330, 380, 330, 550);
    }

    if(errorsLeft == 1) {
      this.drawLine(330, 550, 270, 620);
    }

    if(errorsLeft == 0) {
      this.drawLine(330, 550, 380, 620);
    }
     
    // close the path
    this.context.closePath();
  }

  drawLine(startX, startY, stopX, stopY) {
    this.context.moveTo(startX, startY); 
    this.context.lineTo(stopX, stopY);        
    this.context.stroke();
  }

  gameOver() {
  }

  winner() {
    // ... your code goes here
  }
}
