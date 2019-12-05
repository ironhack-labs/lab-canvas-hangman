let hangman;

class Hangman {
  constructor() {
    this.words = ['PEPE','JUAN','FRANCISCO','TOPOYIYO','PECADOR']
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    return this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) {
      return true;
      }else return false;  
  }

  checkClickedLetters(key) {
    if(!this.letters.includes(key)) {
      return true;
      }return false; 
  }

  addCorrectLetter(i) {
    if(this.secretWord.includes(this.secretWord[i])){
      this.guessedLetter += this.secretWord[i].toUpperCase();
      this.checkWinner();
    }
  }

  addWrongLetter(letter) {
    if(!this.secretWord.includes(letter)){
      this.errorsLeft--;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true;
    }else return false;
  }

  checkWinner() {
    if(this.secretWord.localeCompare(this.guessedLetter) && this.secretWord.length === this.guessedLetter.length){
      return true;
      }else return false;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
