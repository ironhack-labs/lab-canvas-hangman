var hangman;

// function Hangman() {

// }
class Hangman {
  constructor(){
    this.words = ["peter", "parker", "spiderman"];
    this.secretWord = "peter";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    if ((64 < keyCode) && (keyCode <91)) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter){
    if (this.letters.includes(letter.toUpperCase())) 
      return false;
    else 
      return true;
  }

  checkIfIncluded(letter){
    if (this.secretWord.indexOf(letter) >= 0) {
      this.addCorrectLetter(this.secretWord.indexOf(letter));
    } else {
      this.addWrongLetter(letter);
    }
    
  }

  addCorrectLetter(index){
    this.guessedLetter += this.secretWord[index].toUpperCase();
    console.log(this.guessedLetter);
  }

  addWrongLetter(letter){
    this.errorsLeft--;
    return letter;
  }

  checkGameOver() {
    if(this.errorsLeft === 0){
      return true;
    } else {
      return false;
    }
  }

  checkWinner(){
    for(var i =0; i<this.secretWord.length; i++){
      console.log(this.secretWord[i]);
      if(!this.guessedLetter.includes(this.secretWord[i])){
        return false;
      }
    }
    return true;
  }
}

var hangman = new Hangman();


// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
