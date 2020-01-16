let hangman;

 class Hangman {
   constructor() {
    this.words = ['hola','caracol','burbuja'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
   }
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() *
      this.words.length)];
      return this.secretWord;
  }
 
  checkIfLetter(keyCode) { 
    if (keyCode >= 65 && keyCode <= 90 ){
      return true
    } else{
      return false
  }
} 

  checkClickedLetters(key) {
    if(this.letters.includes(key)){
    return false;
  } else {
    return true;
  }
} 

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord.charAt(i).toUpperCase();
    return this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    return this.checkGameOver();
  }

   checkGameOver() {
    if(this.errorsLeft <= 0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    if(this.guessedLetter.length === this.secretWord.length){
      return true;
    } else {
      return false;
    }
  }

} 
document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
