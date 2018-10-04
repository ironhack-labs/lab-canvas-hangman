var hangman;
function Hangman() {
  this.words = ["javascript","canvas","medianoche","mosquitera","maullido","calendario","cigarrillo"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter= "";
  this.errorsLeft = 10;
  this.guessed = undefined;
}
Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]
  return this.secretWord;
};
Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};
Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};
Hangman.prototype.checkIfIncluded = function (i){
  var alphabet = String.fromCharCode(i);
  if (this.secretWord.indexOf(alphabet)>=0){
    this.addCorrectLetter(alphabet);
    this.guessed = true;
    return true;
  } else {
    this.addWrongLetter(alphabet);
    this.guessed = false;
    return false;
  }
}
 Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
    //console.log(this.guessedLetter);
  //}
};
 Hangman.prototype.addWrongLetter = function (letter) {
  if(this.secretWord.includes(letter) === false){
    this.errorsLeft -= 1;
    return this.checkGameOver()
    }
  };
 Hangman.prototype.checkGameOver = function () {
 if (this.errorsLeft == 0){
  return true;
 } else {
   return false;
 }
};
 Hangman.prototype.checkWinner = function () {
 
  if (this.secretWord.length == this.guessedLetter.length){
    return true;
  } else {
    return false;
  }
  
};
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  anotherOne = new HangmanCanvas(hangman.secretWord);
  anotherOne.createBoard();
  anotherOne.drawLines();

};


document.onkeydown = function (e) {
  var letterCode = e.key.charCodeAt(0);
  var letter = e.key;
  if(hangman.checkIfLetter(letterCode)){
    if(hangman.checkClickedLetters(letter)){
      hangman.letters.push(letter)
      if(canvas.secretWord.includes(letter)){
        var index = hangman.secretWord.indexOf(letter);
        hangman.addCorrectLetter(index);
        canvas.writeCorrectLetter(index);
      } else {
        hangman.addWrongLetter(letter);
        canvas.writeWrongLetter(letter, hangman.errorsLeft);
        canvas.drawHangman(10-hangman.errorsLeft);
      }
    }
  }
}

