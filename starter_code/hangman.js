var hangman;

function Hangman() {
    this.words = [ 'saxofone', 'piano', 'reco-reco', 'harmonic', 'panderinho'];
    // transformar objeto, em string:
    this.secretWord = wordRandom.toString('');
    this.letters = [] ;
    this.guessedLetter ='';
    this.errorsLeft = 10;
}
  let wordRandom = ('');
  Hangman.prototype.getWord = function () {
  wordRandom = this.words[Math.floor(this.words.length * Math.random ())];
};

// codeKey = ref. > ascii table
let codeKey = Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode >= 64 && keyCode <= 123) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
    // this.words.localeCompare(this.secretWord){
    if (key === codeKey){
    return true;
  } else {
    return false;
  }
};


Hangman.prototype.addCorrectLetter = function (i) {
  for (i = 0; i < wordRandom.length; i += 1) {
    if (wordRandom[i] === guessedLetter){
      return this.guessedLetter = wordRandom[i] + guessedLetter;
    } else {
      return false
    }
  }
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
