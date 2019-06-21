class Hangman {
  constructor() {
    this.words = ['banana', 'abacate', 'torresmo', 'amora', 'bacon', 'uva'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.guessedSingleLetter = '';
    this.errorsLeft = 10;
  }

  getWord() {
    let randomNum = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[randomNum];
    return this.secretWord;
  }

  checkIfLetter(char) {
    console.log(`key code: ${char.keyCode}`);
    if (typeof (char.key) === 'string' && char.keyCode <= 90 && char.keyCode >= 65) {
      // this.addCorrectLetter(char);
      // this.addWrongLetter(char);
      // this.letters.push(char.key.toUpperCase());
      return true;
    }


    return false;
  }

  checkClickedLetters(char) {
    return this.letters.includes(char.key.toUpperCase());
  }

  checkGameOver() {
    console.log(`Letters array: ${this.letters.length}`);
    console.log(`Guessed Single Letters: ${this.guessedSingleLetter.length}`);
    let wrongLetters = this.letters.length - this.guessedSingleLetter.length;
    console.log(wrongLetters);
    // this.errorsLeft -= wrongLetters;
    // console.log(this.errorsLeft);
    return wrongLetters < 10 ? false : true;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetter.length;
  }

  addCorrectLetter(x) {
    console.log('terra');
    // let char = this.secretWord[x];
    let secretWordArr = this.secretWord.toUpperCase().split('');
    for (let i = 0; i < secretWordArr.length; i += 1) {
      if (secretWordArr[i] === x.key.toUpperCase()) {
        this.guessedLetter += secretWordArr.splice(i, 1);
      }
    }
    if (this.secretWord.split('').includes(x.key)) {
      this.guessedSingleLetter += x.key;
    }
    return this.guessedLetter;
  }

  addWrongLetter(char) {
    if (!this.secretWord.split('').includes(char.key)) {
      this.errorsLeft -= 1;
    }

    if (this.checkIfLetter(char) && !this.letters.includes(char.key.toUpperCase())) {
      this.letters.push(char.key.toUpperCase());
    }
    // if (typeof (char) === 'string') {
    //   this.errorsLeft -= 1
    // }
    // return false;
  }
}


let canvas;
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord());
  canvas.createBoard();
  canvas.drawLines();
};


document.onkeydown = function (e) {
  console.log(`é letra: ${hangman.checkIfLetter(e)}`);
  console.log(`já clicou: ${hangman.checkClickedLetters(e)}`);
  hangman.checkIfLetter(e);
  console.log(`gameOver? ${hangman.checkGameOver()}`);
  console.log(hangman.letters);

  if (hangman.checkIfLetter(e) === true && hangman.checkClickedLetters(e) === false) {
    canvas.writeWrongLetter(e);
    hangman.addCorrectLetter(e);
    canvas.drawHangman();
  }
  if (hangman.checkIfLetter(e)) {
    hangman.addWrongLetter(e);
  }
  console.log(hangman.letters);
  canvas.writeCorrectLetter(e);
  if (hangman.checkGameOver()) {
    canvas.gameOver();
    document.onkeydown = function (e) {
      location.reload();
    }
  }
  if (hangman.checkWinner()) {
    canvas.winner();
    document.onkeydown = function (e) {
      location.reload();
    }
  }
};