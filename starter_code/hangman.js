let hangman;

class Hangman {
  constructor() {
      this.words = ['ESPECIAL','CIRCULO','COMENTAR', 'REVISTA', 'CUADERNO'];
      this.secretWord = ''
      this.letters = [];
      this.guessedLetter = ''
      this.errorsLeft = 10;
   }

   getWord() {
      let word = () => this.words[Math.floor(Math.random()*this.words.length)]
      this.secretWord  = word()
      return this.secretWord
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
    this.guessedLetter += this.secretWord[i].toUpperCase()
   }

   addWrongLetter(letter) {
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
  hangman = new Hangman();
  let canvas = new HangmanCanvas();
  canvas.createBoard();
};

document.onkeydown = (e) => {

};