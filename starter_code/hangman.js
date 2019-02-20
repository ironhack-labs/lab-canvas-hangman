var hangman;

function Hangman() {
  this.words= ['ADIDAS', 'NIKE', 'PUMA', 'REEBOK'];
  this.secretWord= "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var indexRandom = Math.floor(Math.random()*this.words.length)
    console.log(indexRandom)
    this.secretWord= String(this.words[indexRandom])
    return String(this.words[indexRandom])
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (64 < keycode && keycode < 123){
    return true
  }
  return false
};

Hangman.prototype.checkClickedLetters = function (key) {
  var key = letter.charCodeAt();

  if (this.checkIfLetter(key)){
    for(var i=0; i<= this.letters.length; i++){
      if (letter == this.letters[i]){
        return false
      }
  }    
  }
  return true
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[index].toUpperCase()
  this.checkWinner()
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver()
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft=== 0){
    return true
  }
  return false 
};

Hangman.prototype.checkWinner = function () {
  var guessedLetterArr = this.guessedLetter.toLowerCase().split('')
  var secretWordArr = this.secretWord.toLowerCase().split('')
  
  if (secretWordArr.sort().toString() === guessedLetterArr.sort().toString()){
    return true
  }
  return false
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
