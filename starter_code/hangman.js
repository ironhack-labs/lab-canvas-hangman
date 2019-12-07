let hangman;

class Hangman {
   constructor() {
    this.words = ["HOLA", "TECLA", "TECLADO", "PORTATIL"],
    this.secretWord = this.getWord(),
    this.letters = [],
    this.guessedLetter = "",
    this.errorsLeft = 10
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90 || keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) return false;
    return true; 
  }

  addCorrectLetter(i) {
	  this.guessedLetter += this.secretWord[i].toUpperCase();
		this.letters.push(this.secretWord[i]);
  }

  addWrongLetter(letter) {
    this.letters.push(letter.toUpperCase());
    this.errorsLeft--;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) return true;
    return false;
  }

  checkWinner() {
    if (this.guessedLetter.length === this.secretWord.length) return true;
    return false;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas();
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
};

document.onkeydown = (e) => { 
  if (hangman.checkIfLetter(e.keyCode)) {
    let letra = String.fromCharCode(e.keyCode).toUpperCase();
    if (hangman.checkClickedLetters(letra)) {
      let intheWord = false;
      for (let i = 0; i < hangman.secretWord.length; i++) {
        if (letra === hangman.secretWord[i]) {
          hangman.addCorrectLetter(i);
          hangmanCanvas.writeCorrectLetter(i, letra);
          intheWord = true;
          if (hangman.checkWinner()) {
            hangmanCanvas.winner();
          };
        }
      }
      if (!intheWord) {
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        hangman.addWrongLetter(letra);
        hangmanCanvas.writeWrongLetter(letra, hangman.errorsLeft);
        if (hangman.checkGameOver()) {
          hangmanCanvas.gameOver();
        };
      }
    }
  }
};
