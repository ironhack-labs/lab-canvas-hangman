class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()* this.words.length)];
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <= 90; 
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)) {
      return false;
    } else {
      return true;
    }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    return this.errorsLeft --;
  }

  checkGameOver(errorsLeft) {
    if (this.errorsLeft <= 0){
      return true;
    }else{ return false;
  }}

  checkWinner() {
    return (this.secretWord.split("").sort().join("") === this.guessedLetters.split("").sort().join(""));
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
  if (hangman.checkIfLetter(event.keyCode)){
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangmanCanvas.writeCorrectLetter(event.keyCode);
      } else {
        hangmanCanvas.writeWrongLetter(String.fromCharCode(event.keyCode),hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
    }
    hangman.letters.push(event.key);
  }
});