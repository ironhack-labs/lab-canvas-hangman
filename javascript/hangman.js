class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(key) {
    if(key >= 65 && key <= 90) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft == 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {

    let guessedOrdered = [...this.guessedLetters].sort().join("");
    let secretOrdered = [...this.secretWord].sort().join("");

    if(guessedOrdered == secretOrdered) {
      return true;
    } else {
      return false;
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  
  let letterKey = event.key;
  let letterCode = event.keyCode;
  let arr = [...hangman.secretWord];  

  if(hangman.checkIfLetter(letterCode)) {
    
    if(arr.includes(letterKey)) {

      arr.forEach((letter, index) => {
        if (letter === letterKey) {
          hangman.addCorrectLetter(letterKey);
          hangmanCanvas.writeCorrectLetter(index);
        }
      });

    } else {
      hangman.addWrongLetter(letterKey);
      hangmanCanvas.writeWrongLetter(letterKey, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }

  } else {
    alert("Press a letter key!");
  }
  if(hangman.checkGameOver()) {
    hangmanCanvas.gameOver();
  } 
  if(hangman.checkWinner()) {
    hangmanCanvas.winner();
  } 
});
