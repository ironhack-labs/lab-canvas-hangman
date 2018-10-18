var hangman;

class Hangman{
  constructor(words, letter){
    this.words = ['sdafc', 'adfqwerf', 'aefaw'];
    this.secretWord = ('');
    this.letters = [];
    this.guessedLetter = ('');
    this.errorsLeft = 10;
  }
  getWord() {
    return this.words[Math.floor(Math.random()*this.words.length)]
  }

  checkIfLetter (str){
    str = str.toUpperCase()
      if (str.length===1 && str.match(/[A-Z]/i)){
        //this.letters.push(str) wrong just keeping it to show the push function
        
        return true
      }
      else {
        return false
      }
  }
  checkClickedLetters(letter){
    if (this.letters.includes(letter)){
      this.guessedLetter += letter
      return false
    }
    else {
      return true
    }
  }
    
  checkGameOver(){
    if (this.errorsLeft === 0){
      return true
    }
    else {
      return false
    }

  }
  
  checkWinner(){
    //if (this.checkGameOver() > 0 && (this.secretWord === this.letter[i])
    var secretArray = this.secretWord.split('');
    for (var i = 0; i < secretArray.length; i++){
      if (!this.guessedLetter.includes(secretArray[i])){
        return false
      }
    }
    return true
  }

  //Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins
  addCorrectLetter(secretWordPositon) {
    this.guessedLetter = this.secretWord[secretWordPosition].toUpperCase();
    this.checkWinner();
  }
  
  //Should subtract one from the variable errorsLeft and check if the game is over.
  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)){
      this.errorsLeft --;
      this.checkGameOver();
    }
  }


      
}

//var hangman = new Hangman ()



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