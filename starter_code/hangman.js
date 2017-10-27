var hangman;

function Hangman() {
  this.words = [
    'IRONHACK',
    'OBLIVION',
    'SKYRIM',
    'OCARINA',
    'GANONDORF',
    'TRIFORCE',
    'GOBLIN',
    'DIN',
    'FARORE',
    'NAYRU',
    'DODONGO',
    'DARUNIA'
  ];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  if(keyCode > 64 && keyCode < 91){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype._checkLetter = function(key){
  if(this.secretWord.split('').includes(String.fromCharCode(key))){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype._checkClickedLetters = function(key) {
  if(!this.letters.includes(key)){
    this.letters.push(key.toUpperCase());
    return false;
  } else{
    return true;
  }
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord.substr(i, 1).toUpperCase();
};

Hangman.prototype._addWrongLetter = function (letter){
  this.errorsLeft--;
};

Hangman.prototype._checkGameOver = function() {
  if(this.errorsLeft == 1){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype._checkWinner = function() {
  if(this.guessedLetter.split('').sort().join('') == this.secretWord.split('').sort().join('')){
    return true;
  } else{
    return false;
  }
};
