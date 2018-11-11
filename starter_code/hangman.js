var hangman;

function Hangman() {
  this.words = ['ironhack', 'leon', 'tigre', 'perro', 'pollollon'];
  this.secretWord = secretWord;
  this.letters = [];
  this.guessedLetters = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  this.words[Math.floor(Math.random)*this.words.length}
};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if(keyCode > 90 && keyCode < 65  ) {
   return this.letters.push(String.fromCharCode(keyCode))
  }else{
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  this.letters.forEach(function(letter){
    if(key === letter){
      return true
    }else{
      return false
    }
  })
};


Hangman.prototype.addCorrectLetter = function () {
  this.secretWord.forEach(function(word){
      for(x = 0; x < word.length; x++){
        if(word.charAt(x) === this.letters){
          return this.guessedLetters = word.charAt(x);
        }
      }
    })

      if(this.secretWord.length === this.guessedLetters.length){
        return 'YOU WON'
      }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.secretWord.forEach(function(word){
    for(i = 0; i < word.length; i++){
      if(word.charAt(i) !== this.letters){
        return this.errorsLeft -= 1;
      }
    }
  })

  if(this.errorsLeft === 0){
    return "GAME OVERRRRR"
  }
};

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
