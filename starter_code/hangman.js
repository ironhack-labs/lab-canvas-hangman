var hangman;

function Hangman() {

 this.words = [];
 this.secretWord = '';
 this.letters = [];
 this.guessedLetter = '';
 this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {

  var self = this;

  var newWord = ""; 
    //if word has some word

    if(self.words > 0) {
      return newWord = self.words[Math.floor(Math.random()*self.words.length)];
    }

  return newWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {

   if (keyCode > 65 && keyCode < 90){
    return true;
  } else if(keyCode > 97 && keyCode < 122 ) {
    return true;
  } else {
    return false;
  }

};

Hangman.prototype.checkClickedLetters = function (key) {
  var self = this;
  
  if(self.letters.indexOf(key) === -1){
    return true;
  }
  else {
    return false;
  }

};

Hangman.prototype.addCorrectLetter = function (key) {
  var self = this;
 
  return;
    

};

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
