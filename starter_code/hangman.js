let hangman;

class Hangman {
  constructor() {
    this.words = ["perro", "gato", "ahorcado", "castillo", "ponzoña"];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

   getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];;
  }

  checkIfLetter(keyCode) {
    return (keyCode > 64 && keyCode < 91);
  }

  checkClickedLetters(key) {
    return this.letters.indexOf(key) == -1;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.checkGameOver();
  }

  checkGameOver() {
    return this.errorsLeft == 0;
  }

  checkWinner() {
    return this.secretWord.length == this.guessedLetter.length;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  let hCanvas = new HangmanCanvas(hangman.getWord());
  hCanvas.createBoard();
};

document.onkeydown = (e) => {
  if(hangman != undefined) {
    console.log("Code", e.keyCode)
    if(hangman.checkIfLetter(e.keyCode)) {
      console.log("letter");
    }
  }

};
