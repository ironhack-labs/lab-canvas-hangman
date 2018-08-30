var hangman;


function Hangman() {
  this.words = ["pablo", "alfonso", "pepe"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
}

Hangman.prototype.getWord = function () {
 return ""
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}
Hangman.prototype.checkClickedLetters = function (key) {
 return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function (key) {

}
  
document.getElementById('start-game-button').onclick = function () {

};
  hangman = new Hangman();


document.onkeydown = function (e) {

};
