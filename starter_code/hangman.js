var hangman;

function Hangman() {
  this.words = ["hola", "adios", "palabra"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)].toUpperCase();
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if ((keyCode>=65 && keyCode <=90) || (keyCode>=97 && keyCode <=122) ){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
return this.letters.indexOf(key)===-1;
};

Hangman.prototype.addCorrectLetter = function (i) {
  var let = this.secretWord[i].toUpperCase();
  this.guessedLetter+=let;
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0){
    return true;
  } else{
    return false;
  }
};

Hangman.prototype.checkWinner = function () {

  for (var j=0; j< this.secretWord.length ; j++){
    if (this.guessedLetter.indexOf(this.secretWord[j])===-1){
      return false;
    } 
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {
  if (hangman!==undefined && hangmanCanvas.start === 0){
  if (hangman.checkIfLetter(e.keyCode)){
    var letUp = e.key.toUpperCase();
    if (hangman.checkClickedLetters(letUp)){
      hangman.letters.push(letUp);
      console.log(hangman.secretWord.indexOf(letUp));
      if (hangman.secretWord.indexOf(letUp)>=0){
        hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(letUp));
        hangman.addCorrectLetter(hangman.secretWord.indexOf(letUp));
        if (hangman.checkWinner()){
          hangmanCanvas.winner();
        }
      } else{
        hangman.addWrongLetter();
        hangmanCanvas.writeWrongLetter(letUp, hangman.errorsLeft);
      }
    } 
  } 
}
};
