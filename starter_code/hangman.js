class Hangman {
  constructor() {
    this.words = ['HELLO', 'AWESOME', 'WHATEVER', 'CHARTREUSE'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }
  checkIfLetter(letter) {
    letter = letter.toUpperCase()
    if(letter.length===1 && (letter>='A' && letter<='Z')) {
      return true
    } else {
      // console.log('It\'s not a letter')
      return false
    } 
  }
  checkClickedLetters(letter) {
    if(this.checkIfLetter(letter)==true) {
      if(this.letters.includes(letter)) {
        // this.guessedLetter += letter
        return false
      } else {
        // this.errorsLeft--
        return true
      }
    }
  }
  checkGameOver(){
    if(this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }
  checkWinner(){
    let secretWordArr = this.secretWord.split('')
    let counter = 0
    let test = this.guessedLetter
    secretWordArr.forEach(function(el) {
      if(test.includes(el)) {
        counter++
      }
    })
    if(this.secretWord.length==counter){
      return true
    } else {
      return false
    }  
  }
  addCorrectLetter(letter) {
    this.guessedLetter += letter
    this.checkWinner()
  }
  addWrongLetter() {
    this.errorsLeft--
    this.checkGameOver()
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

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


// document.onkeydown = function (e) {

// };



//Collapse 