var hangman;

function Hangman() {
  this.words = ["coding", "enjoy", "basketball", "wizard", "beer", "barman", "parties", "lesson", "codewars", "downhill", "forest", "function", "friends", "athlete", "design", "canvas", "compass", "html", "background", "limitless", "infinite", "foodie", "springroll", "summer", "pumpkin", "science", "nature", "parachute"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var word = Math.floor(Math.random() * this.words.length)
  return this.words[word];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 65 && keyCode <= 90) ? true : false
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key) === true){
    return false
  } 
  else {
    this.letters.push(key);
    return true}
};

Hangman.prototype.addCorrectLetter = function (key) {
  this.guessedLetter += key
  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  return letter
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft === 0) ? true : false
};

Hangman.prototype.checkWinner = function () {
  var letterSet = new Set(this.secretWord);
  return (letterSet.size === this.guessedLetter.length) ? true : false
};

window.onload = function(){

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines(hangmanCanvas);
};


document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.keyCode) === false) {
    console.log("not a letter please press a letter")
  }
  else {
    if (hangman.checkClickedLetters(e.key) === false){
      console.log("that letter was pressed already")
    }
      else {
        if (hangman.secretWord.includes(e.key)=== true){
          console.log("la incluye")
          if (hangman.addCorrectLetter(e.key) === false){
            var checkString = hangman.secretWord
            while (checkString.indexOf() != -1){
              hangmanCanvas.writeCorrectLetter(checkString.indexOf(), e.key)
              checkString.replace(e.key, " ");
            }
            if (hangman.checkWinner()=== true){return hangmanCanvas.winner()}
          }
          else{

          }
        }
        else{
          hangman.addWrongLetter(e.key);
          hangmanCanvas.writeWrongLetter(e.key, hangman.errorsLeft);
          hangmanCanvas.drawHangman(hangman.errorsLeft);
          if (hangman.checkGameOver() === true){
            hangmanCanvas.gameOver();
          }
        }
    }
  }
  
  
  
};

};
