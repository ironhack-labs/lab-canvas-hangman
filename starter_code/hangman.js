const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let hangman;
let tries = 0;
let canvasP = new HangmanCanvas();
let cond = true;

class Hangman {
  constructor() {
      this.words = ['Perrito','almohada','telefono', 'construir', 'elementos'];
      this.secretWord = '';
      this.letters = [];
      this.guessedLetter = '';
      this.wrongLetter = '';
      this.errorsLeft = 10;
      this.ctx = document.getElementById('hangman').getContext('2d');
   }

   getWord() {
      return this.words[Math.floor(Math.random()*this.words.length)].toUpperCase();
   }

   checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true
    } else{
      return false
    }
   }

   checkClickedLetters(key) {
      if(this.letters.includes(key)){
        return false
      }else{
        return true
      }
   }

   addCorrectLetter(i) {
    this.guessedLetter += this.letters[i].toUpperCase()
   }

   addWrongLetter(letter) {
    this.wrongLetter += letter;
    this.errorsLeft --
    this.checkGameOver()
   }

   checkGameOver() {
      if(this.errorsLeft === 0){
        return true
      }else{
        return false
      }
   }

   checkWinner() {
    if(this.secretWord.length === this.guessedLetter.length){
      return true
    } else{
      return false
    }
   }
}

document.getElementById('start-game-button').onclick = () => {
  cond = true;
  hangman = new Hangman();
  canvasP.createBoard();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hangman.secretWord = hangman.getWord();
  hangman.letters = hangman.secretWord.split('')
  canvasP.drawLines(hangman.letters);
  ctx.font = '40px Courier';
  ctx.fillText('Letras erróneas', 600, 400);
  tries = 0
};

document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode) && cond){

    let letter = String.fromCharCode(e.keyCode);
    
    if(hangman.checkClickedLetters(letter) && hangman.wrongLetter.indexOf(letter) == -1){
        hangman.addWrongLetter(letter)
        canvasP.drawHangman()[tries]();
        tries++;
        if(tries >= 10){
          cond = false;
          ctx.font = '50px Courier';
          ctx.fillText('Game Over', 600, 300);
        }
        ctx.font = '40px Courier';
        ctx.fillText(hangman.wrongLetter, 600, 500);
      
    }else{
      let i = 0;
      if(hangman.guessedLetter.indexOf(letter) == -1){
        hangman.letters.forEach(element => {
          if(element == letter){
            hangman.addCorrectLetter(i);
            ctx.font = '40px Courier';
            ctx.fillText(letter, 410+80*i, 680);
          }
          if(hangman.checkWinner()){
            cond = false;
            ctx.font = '50px Courier';
            ctx.fillText('Ganaste', 600, 300);
          }
          i++;
        });
      }
    }


  }
};