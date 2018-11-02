
// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };

// let words = ['juxtaposition', 'building','vertical','bridge','alphabet','javascript'];
// function getWord(){
// let randomNumber = Math.floor(Math.random()* words.length)
//   let randomWord = words[randomNumber];
//   console.log(randomWord);
// }

// let secretWord = getWord;

// let letters = [];
// let guessedLetters = [];
// let errorsLeft = 10;
// function checkIfLetter(){


// }
  // console.log(checkIfLetter())

// function checkClickedLetters(){
//  if (guessedLetters === letters){
//     return false;
//  } if (guessedLetters !== letters){
//    return true;
//  }
// }





// checks if the game is over, depending on how many attemps the person has taken.

// function checkGameOver(){
//   if (){
//     return false;
//   } else {
//     return true;
//   }
// }





// checking the winner if the game is over. should take checkgameover to see if won by points.

// function checkWinner(){
//   if 
// }


class GameAnimator{

  constructor(){
    this.ctx = document.getElementById('theCanvas').getContext('2d');
    this.wrongLetterX = 900;
    this.wrongLetterY = 50;
  }

  drawLines(){
    let numberOfLines = this.wordToGuess.length;
    let x = 300;
    for(let i=0; i<numberOfLines; i++){
      this.ctx.lineWidth = 8;
      this.ctx.beginPath();
      this.ctx.moveTo(x, 300);
      this.ctx.lineTo(x + 50, 300);
      this.ctx.stroke();
      x+= 75;
    }
  }


  drawWrongLetter(whichLetter){
    this.ctx.font = '30px serif';
    this.ctx.fillText(whichLetter, this.wrongLetterX, this.wrongLetterY);
    this.wrongLetterX+= 50;
      if(this.wrongLetterX > 1100){
        this.wrongLetterY += 50;
        this.wrongLetterX = 900;
      }
  }


  drawCorrectLetter(whichLetter, indexes){
    console.log('correct guess')
    console.log(whichLetter);
    console.log(indexes);
    this.ctx.font = '30px serif';

    indexes.forEach((theIndex)=>{
      this.ctx.fillText(whichLetter, 310 + theIndex*75, 280)
    })



  }




}