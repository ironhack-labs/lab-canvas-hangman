var hangman;

function Hangman() {
  this.words = ['ANDREI','PAPU','YAIZA','AVELLO','MANU','MARKNOESTA'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var random = Math.round(Math.random() * this.words.length);
  this.secretWord = this.words[random];
  return this.words[random];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return Number.isInteger(keyCode) ? keyCode <= 90 && keyCode >= 65 : false;
};

Hangman.prototype._checkClickedLetters = function(key) {
  if (this.letters.includes(String.fromCharCode(key))){
    return false;
  } else {
   this.letters.push(String.fromCharCode(key));
    return true;
  };
};

Hangman.prototype._addCorrectLetter = function(i){
  console.log('Posicion '+i);
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (word){
  this.errorsLeft-- ;
  this.letters.push(word);
};

Hangman.prototype._checkGameOver = function() {
  console.log("quedan "+this.errorsLeft);
  return this.errorsLeft == 0 ? true : false;
};

Hangman.prototype._checkWinner = function() {
  var auxArray = this.secretWord.split('');
  var that = this;
  var isComplete = true;
  auxArray.forEach(function(letter){
    if (!that.guessedLetter.includes(letter)){
       console.log('comparando :' +letter+' resultado: '+that.guessedLetter.includes(letter));
       isComplete = false;
     }else{
      // Put something ...
     }
   });

  return isComplete;
};

Hangman.prototype._checkIfExists = function(letter){
  console.log(this.secretWord.includes(letter));
  if (this.secretWord.includes(letter)){
    console.log('si esta incluida');
    return true;
  } else {
    console.log('no esta incluida');
    return false;
  }
};
