
class Hangman {
  constructor (){
    this.words = ["IRONHACK"];
    this.secretWord = "";
    this.letters = []
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }
  getWord(){
    return this.words[Math.floor(Math.random()*this.words.length)];
  }
  checkIfLetter (num) {
    return num >64 && num < 91
  }
  checkClickedLetters (letter) {
    return !(this.letters.includes(letter))
  }
  checkGameOver () {
    return this.errorsLeft == 0
  }
  checkWinner (){
    console.log(this)
    var guessed = this.guessedLetter.toUpperCase().split("").sort().join("")
    var original = this.secretWord.toUpperCase().split("").sort().join("")
    console.log("guessed",guessed)
    console.log(original)
    return guessed === original
  }
  addCorrectLetter(num) {
      var letter = this.secretWord.toUpperCase().split("")[num]
      this.guessedLetter += letter;
      this.checkWinner();
  }

  addWrongLetter() {
    this.errorsLeft -= 1;
    this.checkGameOver();
  }
}



var hangman;
var canvas;


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  var word = hangman.getWord()
  hangman.secretWord = word
  canvas = new HangmanCanvas(word)
  canvas.createBoard()
  canvas.drawLines()
};


document.onkeydown = function (e) {
  console.log("event", e.keyCode, e.key)
  if(hangman.checkIfLetter(e.keyCode)) {
    if(hangman.checkClickedLetters(e.key.toUpperCase())) {
      if(hangman.secretWord.includes(e.key.toUpperCase())) {
        var index=hangman.secretWord.indexOf(e.key.toUpperCase())
        hangman.addCorrectLetter(index)
        canvas.writeCorrectLetter(index)
        if(hangman.checkWinner()){alert ("You win")}
      }
      else{
        hangman.addWrongLetter()
        canvas.writeWrongLetter(e.key.toUpperCase(), hangman.errorsLeft)
        canvas.drawHangman(hangman.errorsLeft)
        if(hangman.checkGameOver()) {alert("You loose")}
      }
    }
  }
};
