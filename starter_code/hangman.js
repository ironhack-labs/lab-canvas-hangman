var hangman;

function Hangman() {
  this.words = [];
  this.secretWord = "";
  this.letters = [];

}

Hangman.prototype.getWord = function () {
  return '';
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (typeof keyCode == "number" && keyCode >= 65 && keyCode <=90){
    return true
  }else {
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  
  if (typeof key == "string"){
    console.log(this.letters);    
    // if(key == this.letters.find(key)){
    //   return false
    // }
    return true
  }
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
};


document.onkeydown = function (e) {

};
