var hangman;

 function Hangman() {
   this.words = ['today', 'banana', 'universe'];
   this.secretWord = '';
   this.letters = [];
   this.guessedLetter = '';
   this.errorsLeft = 10;

 }

// Returns a random word from an array
Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase()
 };

 //This function should check if the key (via keyCode) the user has typed is a letter.  Returns true if it is a letter.
Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    this.letters.push(keyCode)
    return true
  } else {
    return false
  }
 };

 //This function checks if the pressed letter has already been pressed and returns true if the was not or false in the opposite case.
Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false
  } else {
    return true
  }
};

//This function adds to the guessedLetter variable letter that was pressed.  Also, it should check if the user winns.
Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i]
  this.checkWinner()
};

Hangman.prototype.addWrongLetter = function (letter) {
    this.errorsLeft--;
    this.checkGameOver()
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true
  } else {
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length === this.secretWord.length ) {
    return true
  } else {
    return false
  }

};

document.getElementById('start-game-button').onclick = function () {
  console.log('Hello')
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
  console.log(hangman)
  console.log(hangmanCanvas)
};


document.onkeydown = function (e) {
 // console.log(e,e.keyCode)
  if (hangman.checkIfLetter(e.keyCode)) {
    let upCase = e.key.toUpperCase()
 //   console.log(upCase)
    if (hangman.checkClickedLetters(upCase)) {
      hangman.letters.push(upCase)
      console.log(hangman.letters)
      if (hangman.secretWord.indexOf(upCase) >= 0) {
        console.log('You Done Good')
        hangman.checkWinner()
        console.log(hangman)
      } else {
        hangman.addWrongLetter
        console.log('Wrong Letter')
        console.log(hangman.errorsLeft)
      }
    } else {
      e = prompt('The letter has been selected please select another alphabet key')
    }
  } else {
    e = prompt('Please select another alphabet key')
  }
};
