var hangman;

function Hangman() {
  this.words = ["javascript","mongodb","express","angular","node"];
  this.secretWord = ""; // Selected secretWord will be put here by getWord(). 
  this.letters = []; // Stores wrong letters that are already clicked.
  this.guessedLetter = ""; // Empty string to store correct letters to compare to secretWord.
  this.errorsLeft = 10; // Decreases every time a user guesses wrong. 
}

// getWord() gives us a random number that we use to pick an index in the words array.
// Once we have that number, we use it to put the word into the secretWord empty string.
Hangman.prototype.getWord = function() {
  var selectedNumber = Math.floor(Math.random() * this.words.length);
  
  this.secretWord = this.words[selectedNumber]; // Gives us our secret word.

  console.log(this.words[selectedNumber]); // Tests if we're getting a #.

  return this.secretWord; // Returns the secretWord.
};

// checkIfLetter simply checks if the letter input was a letter.
Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 48 && keyCode <= 57) { // Numbers
      console.log("Please enter a letter, numbers are not accepted.");
      return false;
  } 
  else (keyCode >= 65 && keyCode <= 90 || // Alphabet upper case.
        keyCode >= 97 && keyCode <= 122) // Alphabet lower case.             
  {
      return true;
  } 
};

Hangman.prototype.checkClickedLetters = function (key) {
  // if (this.letters.indexOf(key) === -1) {
  //   this.letters.push(String.fromCharCode(key).toUpperCase);
  //   return true;
  // }
  // return false;
};

Hangman.prototype.addCorrectLetter = function (i) {

};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
//hangman.getWord();
  console.log('I am working!');
};

document.onkeypress = function (e) {
  var inputKeycode = e;
  var inputKeycodeToLetter = String.fromCharCode(e.which)
  console.log(inputKeycode.which); 
  console.log(inputKeycodeToLetter);
  
  
};