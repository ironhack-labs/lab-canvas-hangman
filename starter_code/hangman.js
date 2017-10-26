var hangman = new Hangman ();

// words. An array where we will store all the words that the player need to guess.
// We will take one of them randomly.

// secretWord. Here we will store the word chosen for each game.

// letters. An array to store the letters the user already clicked, so we do not repeat them.

// guessedLetter. A string to store the letters the user clicked and guessed.
// We will use this to know when the user wins.

// errorsLeft. It should start at 10, and decrease every time a user clicks on a letter that is not in the word.

function Hangman() {
  this.words=["JavaScript", "Butterfly", "Peanutbutter", "Waterbottle"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
}


// _checkClickedLetters. Checks if the pressed letter already pressed and return true if it was not or false in the opposite case.
// _checkGameOver. Returns a bolean value, true if the users lose, and false in any other case.
// _checkWinner. Check if the users win and return a boolean value.
// _addCorrectLetter. Adds to guessedLetter variable, the letter that was pressed. Also, should checks if the users win.
// _addWrongLetter. Should substrac one from the variable errorsLeft and check if the game is over.




Hangman.prototype._getWord = function () {
  var randomNum = Math.floor(Math.random()*this.words.length);
  return this.words[randomNum];

};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if (keyCode>=65 && keyCode<=90) {
    return true;
  }
  else {
   return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  var letterSearch = this.letters.find(function (element){
    return key === element;
  });

  if (letterSearch === undefined) {
    return true;
  }
  else {
    return false;
  }
};

Hangman.prototype._addCorrectLetter = function(i){

  for (var ix=0; ix <this.secretWord.length; ix++) {
    if (this.secretWord[ix]==i) {
      this.guessedLetter += i;
      this.letters.push(i);
    }
  }

  if (this.guessedLetter.length===this.secretWord.length) {
    return true;
  }
  else {
    return false;
  }
  
};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
