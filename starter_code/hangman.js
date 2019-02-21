// Constructor

var hangman; 

function Hangman() {
  this.words = ["","","",];
  this.secretWord = "";
  this.letters= [];
  this.guessedLetter = "",
  this.errorsLeft = 10;
  };

Hangman.prototype.getWord = function () {
  var randomWord = this.words[Math.floor(Math.random()* this.words.length)];
  this.secretWord = randomWord;
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  var keyCode = keyCode;
    if (65 <= keyCode && keyCode <= 91) {
      return true;
    } else {
      console.log("You don't pressed a letter");
      return false;
    }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var keyPressed = key;
  if (this.letters.includes(keyPressed)) {
    console.log("This letter was already pressed");
    return false;
  } else {
    return true;
  } 
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) {
    console.log("You lost the game");
    return true;
  } else {
    return false;
  }
 };
 
 Hangman.prototype.checkWinner = function () {
    var guessedLetterArr = this.guessedLetter.toLowerCase().split('')
    var secretWordArr = this.secretWord.toLowerCase().split('')
    if (secretWordArr.sort().toString() === guessedLetterArr.sort().toString()){
      return true;
    } else {
      return false;
    }
};

Hangman.prototype.addCorrectLetter = function (userinput) {
  var letter = this.secretWord.toUpperCase().split("")[userinput]
  this.guessedLetter += letter;
  this.checkWinner();
}

Hangman.prototype.addWrongLetter = function (letter) {
  if (this.secretWord.indexOf(letter) == -1){
    console.log("This letter is wrong");
    console.log(this.errorsLeft)
    this.errorsLeft--;
    console.log(this.errorsLeft)
    this.checkGameOver();
    return true;
    } 
};


// Applying

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.words = [banana,apple,grape,pear,pinapple,cherry,blackberry];
  hangman.secretWord = "grape";
};


document.onkeydown = function (e) {

};
