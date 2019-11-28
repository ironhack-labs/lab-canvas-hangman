let hangman;

class Hangman {
constructor() {
  this.words = ["foo", "bar", "muh"];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = "";
  this.errorLeft = 10;
  }

   getWord(){
    let secretIndex = Math.floor(Math.random()*this.words.length);
    this.SecretWord = this.words[secretIndex];
    return this.secretWord;
  }

   checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122){
      return true;
      }
      else{
        return false;
      }
    }

   checkClickedLetters(key) {
    let newLetter=key;
    if (this.letters.includes(key)){
      return false;
    }
    else{
      return true;
    }
   }

   addCorrectLetter(i) {
    this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
   }

   addWrongLetter(letter) {
    this.errorLeft = this.errorLeft - 1
   }

   checkGameOver() {

   }

   checkWinner() {

   }

 }

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
