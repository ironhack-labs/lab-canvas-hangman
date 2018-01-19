var hangman;

function Hangman() {
  this.words = ['Ironhack', 'Barcelona'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.revealedString = '';

  this.init();

}

Hangman.prototype.init = function(){
  this.secretWord = this.getWord();
  this.generateRevealedStr();
}

Hangman.prototype.getWord = function () {
  var len = this.words.length;
  var ranNum = Math.floor(Math.random() * len);
  return this.words[ranNum];
};

Hangman.prototype.generateRevealedStr = function (){
  var len = this.secretWord.length;
  for(i = 0; i < len; i++){
    this.revealedString += '_';
  }
}

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode>=65 && keyCode<=90;
};

Hangman.prototype.checkIfCorrect = function (keyCode){
  if(this.checkIfLetter(keyCode)){
    var present = false;
    for( i=0; i<this.secretWord.length; i++){
      if(this.secretWord[i].toLowerCase===String.fromCharCode(keyCode).toLowerCase){
        this.revealedString[i] = this.secretWord[i].toLowerCase;
        present = true;
      }
    }
    if(!present){
      this.errorsLeft--;
    }
  }
}

Hangman.prototype.checkClickedLetters = function (key) {

};

Hangman.prototype.addCorrectLetter = function (i) {

};

Hangman.prototype.userHasLost = function (){
  return this.errorsLeft===0;
}

Hangman.prototype.userHasWon = function (){
  return this.revealedString === this.secretWord;
}

Hangman.prototype.checkGameOver = function () {
  return this.userHasLost() || this.userHasWon();
};

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  console.log(hangman);
};


document.onkeydown = function (e) {
  hangman.checkIfCorrect(e.key);
  console.log(hangman);
  console.log('User has lost: ' + hangman.userHasLost(), '  User has won: ' +hangman.userHasWon(), '  Is gameover: ' +hangman.checkGameOver())

};
