let hangman = new Hangman();

class HangmanCanvas {
  constructor() {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.closePath();
  }

  drawLines() {
    let initX = 100;
    let lineY = 750;
    let posArray = []
    for (let i = 0; i < hangman.secretWord.length; i++) {
      posArray.push(initX);
      this.ctx.beginPath();
      this.ctx.moveTo(initX, lineY);
      this.ctx.lineTo(initX + 100, lineY);
      this.ctx.stroke();
      this.ctx.closePath();
      initX += 150;
    }
    return posArray;
  }

  writeCorrectLetter(letter) {    
    if(hangman.checkClickedLetters(letter)){
      if(!hangman.secretWord.includes(letter)) {
        return hangman.letters.push(letter);
      } else {
        let letterPos = hangman.secretWord.indexOf(letter);
        this.ctx.beginPath();
        this.ctx.fillText(letter, posArray[letterPos], 750);
        this.ctx.closePath();
        return hangman.addCorrectLetter(letterPos);
      }
    } 
  }

  // writeCorrectLetter(i) {
  //   if (hangman.secretWord.includes(e.key)) {
  //     hangman.addCorrectLetter(i);
  //   } else {
  //     return;
  //   }
  // }

  writeWrongLetter(letter, errorsLeft) {
    let initX = 650;
    let initY = 200;
  }

}

//HangmanCanvas.prototype.createBoard = function () {

//};

//HangmanCanvas.prototype.

//HangmanCanvas.prototype.writeCorrectLetter = function (index) {

//};

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };

