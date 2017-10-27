var hangman;

var words = [
  "lunch",
  "zebra",
  "xylophone",
  "dynamite",
];

var secretWord;
var letters;
var guessedLetter;
var errorsLeft;

function Hangman() {
    this.words = words;
    this.secretWord = this._getWord();
    // this.letters =
    // this.guessedLetter = guessedLetter;
    // this.errorsLeft = errorsLeft;
}

Hangman.prototype._getWord = function () {
    secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return secretWord;
};

Hangman.prototype._checkIfLetter = function(keyCode) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        return true;
    }
    else {
        return false;
    }
};

Hangman.prototype._checkClickedLetters = function(key) {

};

Hangman.prototype._addCorrectLetter = function(i){

};

Hangman.prototype._addWrongLetter = function (letter){

};

Hangman.prototype._checkGameOver = function() {

};

Hangman.prototype._checkWinner = function() {

};

// document.getElementById("start-game-button").onclick = function(){
//   hangman = new Hangman();
// };


document.onkeydown = function(e) {

};
