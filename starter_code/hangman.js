var hangman;

function Hangman() {
this.words = ["table","house","ironhack","meatballs","blitzkrieg"];
this.secretWord = "";
this.letters = ["I","R"];
this.guessedLetter = "";
this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var array = this.words;
  var i = Math.floor(Math.random()*array.length);
  return array[i];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
 if (keyCode === 43) {
   return false;
 } else {
   return true;
 }
};

Hangman.prototype._checkClickedLetters = function(key) {
 if (this.letters.includes(key)) {
   return false;
 } else {
   return true;
 }
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.letters[i];
  this._checkWinner();
};

Hangman.prototype._addWrongLetter = function (letter){
    this.errorsLeft -= 1;
};

Hangman.prototype._checkGameOver = function() {
if(this.errorsLeft === 0) {
  return true;
} else {
  return false;
}
};

Hangman.prototype._checkWinner = function() {
  var secretWordFiltered = this.secretWord.split("").filter(function(elem, index, self) {
    return index == self.indexOf(elem);});

  var guessedLetterFiltered = this.guessedLetter.split("").filter(function(elem, index, self) {
    return index == self.indexOf(elem);});


if (secretWordFiltered.length === guessedLetterFiltered.length) {
  return true;
} else {
  return false;
}
};

document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
};


document.onkeydown = function(e) {

};
