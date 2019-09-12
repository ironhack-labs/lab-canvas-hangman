let hMan;
let hCanvas;

class Hangman {
  constructor() {
    this.words = ['batman', 'asimov', 'hulk'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    let sWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.secretWord = sWord;
    return this.secretWord;
  }

  checkIfLetter(letter) {
    return ((letter >= 65 && letter <= 90) || (letter >= 97 && letter <= 122));
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    const orderGuessedLetter = this.guessedLetter.split('').sort((a, b) => a.localeCompare(b)).join('');
    const orderSecretWord = this.secretWord.split('').sort((a, b) => a.localeCompare(b)).join('');
    return orderGuessedLetter.toUpperCase() === orderSecretWord.toUpperCase();
  }

  addCorrectLetter(number) {
    // this.secretWord.split('').forEach((item, counter) => {
    //   if (item === number) {
    //     this.guessedLetter += this.secretWord[counter].toUpperCase();
    //   }
    // });
    // this.checkWinner();

    this.guessedLetter += this.secretWord[number].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    this.checkGameOver();
  }

}

document.getElementById('start-game-button').onclick = function () {
  hMan = new Hangman();
  hCanvas = new HangmanCanvas(hMan.getWord());
  hCanvas.createBoard();
  hCanvas.drawLines();
};

document.onkeydown = function (e) {
  let char = String.fromCharCode(e.keyCode);
  if (hMan.checkIfLetter(e.keyCode) && !hMan.checkClickedLetters()) {
    if (hMan.secretWord.indexOf(char) !== -1) {
      for (let counter = 0; counter < hMan.secretWord.length; counter += 1) {
        if (hMan.secretWord[counter] === char) {
          hMan.addCorrectLetter(counter);
          hCanvas.writeCorrectLetter(counter);
        }
      }
    } else {
      hMan.addWrongLetter(char);
      hCanvas.writeWrongLetter(char, hMan.errorsLeft);
    }
    hMan.letters.push(char);
  }
};