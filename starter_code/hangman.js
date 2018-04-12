
function Hangman() {
  this.words = ['avion', 'barco', 'auto', 'motocicleta'];
  this.secretWord = this.getWord();
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10
}

Hangman.prototype.getWord = function () {
  var random = Math.floor(Math.random() * this.words.length);
  return this.words[random]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode < 90 && keyCode > 60){
    return true
  }else{
    return false
  }
 };


Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.includes(key)){
    console.log(false) 
  }else{
    this.letters.push(key)
    console.log(this.letters) 
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase()
 };

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft > 0){
    return false
  }else{
    return true
  }
};

Hangman.prototype.checkWinner = function () {
  var secretWordArray = this.secretWord.split('').sort().join('');
  var guessedLettersArray = this.guessedLetter.split('').sort().join('');
  console.log(secretWordArray + guessedLettersArray)
  if(secretWordArray == guessedLettersArray){
    return true
  }else{
    return false
  }
  
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};
var button = document.getElementById('start-game-button')
button.addEventListener("click", function(){
  var hangman = new Hangman()
  var newGame = new HangmanCanvas(hangman.secretWord)
  newGame.drawLines()

})


document.onkeydown = function (e) {
  hangman.checkIfLetter(e.keyCode)
  if(hangman.checkClickedLetters(e.keyCode)){}
};
