class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath();
      this.context.moveTo(500 + 60 * i, 500);
      this.context.lineTo(550 + 60 * i, 500);
      this.context.stroke();
      this.context.closePath()
    }
  }

  writeCorrectLetter(index) {
    
    
      this.context.beginPath()
      this.context.font = "80px Comic Sans MS";
      this.context.fillStyle = "#BAC600"
      this.context.fillText(hangman.guessedLetters ,500 + 60 * index, 490)
      this.context.closePath()
    
  }

  writeWrongLetter(letter, errorsLeft) {
    for(let i = 0; i < this.secretWord.length; i++){
      this.context.beginPath()
      this.context.font = "80px Comic Sans MS";
      this.context.fillStyle = "#BAC600"
      this.context.fillText(this.letters,100 + 60 * index, 0)
      this.context.closePath()
    }
  }

  drawHangman(errorsLeft) { 
    this.context.beginPath();
    

    if (errorsLeft === 9){
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
    else if (errorsLeft === 8){
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 7){
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 6){
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 5){
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 4){
    this.context.moveTo(450, 100);
    this.context.lineTo(450, 150);
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 3){
    this.context.arc(450, 180, 30, 0, 2 * Math.PI, false)
    this.context.moveTo(450, 100);
    this.context.lineTo(450, 150);
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }

  else if (errorsLeft === 2){
    this.context.moveTo(450, 210);
    this.context.lineTo(450, 300);
    this.context.moveTo(480, 180);
    this.context.arc(450, 180, 30, 0, 2 * Math.PI, false)
    this.context.moveTo(450, 100);
    this.context.lineTo(450, 150);
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 1){
    this.context.moveTo(450, 300);
    this.context.lineTo(400, 350);
    this.context.moveTo(450, 210);
    this.context.lineTo(450, 300);
    this.context.moveTo(480, 180);
    this.context.arc(450, 180, 30, 0, 2 * Math.PI, false)
    this.context.moveTo(450, 100);
    this.context.lineTo(450, 150);
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
  }
  else if (errorsLeft === 0){
    this.context.moveTo(450, 300);
    this.context.lineTo(500, 350);
    this.context.moveTo(450, 300);
    this.context.lineTo(400, 350);
    this.context.moveTo(450, 210);
    this.context.lineTo(450, 300);
    this.context.moveTo(480, 180);
    this.context.arc(450, 180, 30, 0, 2 * Math.PI, false)
    this.context.moveTo(450, 100);
    this.context.lineTo(450, 150);
    this.context.moveTo(300, 100);
    this.context.lineTo(450, 100);
    this.context.moveTo(300, 100);
    this.context.lineTo(300, 400);
    this.context.moveTo(300, 400);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(200, 500);
    this.context.moveTo(400, 500);
    this.context.lineTo(300, 400);
    this.context.stroke();
  }
  this.context.stroke();
  this.context.closePath();
    
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
