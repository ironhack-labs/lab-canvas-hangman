var hangman;
let canvas;

class Hangman {
  constructor () {
      this.words = ['APPLE', 'BANANA', 'RIDICULO'];
      this.secretWord = this.getWord();
      this.letters = [];
      this.guessedLetter = '';
      this.errorsLeft = 10;
  }
  getWord () {
    let idx = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[idx];
    return this.secretWord;
  }
  checkIfLetter (key) {
    console.log(`Voce digitou a ${key}`);
    if (key >= 65 && key <= 90) {
      let letra = String.fromCharCode(key).toLocaleUpperCase();
      this.checkClickedLetters(letra);
      return true;
    }
    return false;
  }
  checkClickedLetters (letra) {
    if (this.letters.includes(letra)) {
      return false;
    }
    if (this.secretWord.includes(letra)) {
      let posicao = this.secretWord.indexOf(letra);
      this.addCorrectLetter(posicao);
      return true;
    } else {
      let posicao = this.secretWord.indexOf(letra);
      this.addWrongLetter(posicao);
      return true;
    }
  }
  checkWinner(){
    let wordArr = this.secretWord.split('');
    let rightArr = this.guessedLetter.split('');
    for (let i = 0; i < wordArr.length; i += 1) {
      if (!rightArr.includes(wordArr[i]))
        return false;
    }
    return true;
  }
  checkGameOver() {
    if (!this.errorsLeft > 0) {
      canvas.gameOver();
      return true;
    }
    return false;
  }
  addCorrectLetter(key) {
    let letraConvertida = this.secretWord[key].toUpperCase();
    this.letters.push(letraConvertida);
    this.guessedLetter += letraConvertida;
    this.checkWinner();
  }
  addWrongLetter(key) {
    let letraConvertida = String.fromCharCode(key);
    this.letters.push(letraConvertida);
    if (!this.checkGameOver())
      this.errorsLeft -= 1;
  }
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
};

document.onkeydown = function (e) {
  hangman.checkIfLetter(e.keyCode);
};
