let hangman;
let hangmanCanvas;

class Hangman {
constructor() {
  this.words = ["eliher", "alejandro", "giorgana"];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90);
  }

  checkClickedLetters(key) {
    return !this.letters.includes(key);
  }

  addCorrectLetter(i) {
    let equis = this.secretWord.split('')
    this.guessedLetter += equis[i].toUpperCase();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.checkGameOver();
  }

  checkGameOver() {
    if(this.errorsLeft <= 0) return true;
    return false;
  }

  checkWinner() {
    if(this.secretWord === this.guessedLetter) return true;
    return false;
  }

}
document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => {
  if(hangman.checkIfLetter(e.keyCode) && hangman.checkIfLetter(e.key.toUpperCase())){
    hangman.letters.push(e.key.toUpperCase());
    let firstPosition = hangman.secretWord.toUpperCase().indexOf(e.key.toUpperCase);
    if(firstPosition >= 0){
      hangman.addCorrectLetter(firstPosition);
      hangmanCanvas.writeCorrectLetter(e.key.toUpperCase());
    }else{
      hangman.addWrongLetter(e.key.toUpperCase());
      hangmanCanvas.writeWrongLetter();
      hangmanCanvas.drawHangman();
    }
  }
};
