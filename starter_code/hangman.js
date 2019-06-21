class Hangman {
  constructor() {
    this.words = ['BANANA', 'FRED', 'joao'];
    this.secretWord = this.getWord();
    this.guessedLetter = '';
    this.letters = [];
    this.errorsLeft = 10;
  }


  getWord() {

    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;

  };

  checkIfLetter(keycode) {
    console.log(keycode);
    if (keycode >= 65 && keycode <= 90) {
      console.log('verificou')
      return true;
    } else {
      console.log('fdp')
      return false
    }

  };

  checkClickedLetters(key) {

    let check = !this.letters.includes(key);
    console.log(key);
    let letra = String.fromCharCode(key);
    if (this.secretWord.includes(letra.toUpperCase())) {
      addCorrectLetter();
    } else {
      this.letters.push(letra.toUpperCase());
    }

    return check;

  };

  addCorrectLetter(i) {

    this.guessedLetter += this.secretWord[i].toUpperCase()

  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter.toUpperCase())) {
      this.errorsLeft -= 1;
    }

  };

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else { return false }
  };

  checkWinner() {

    let secret = this.secretWord.split('').sort().join('');
    let guessed = this.guessedLetter.split('').sort().join('')
    if (secret === guessed) {
      return true;
    } else { return false }
  };

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.drawLines();
};


document.onkeydown = function (e) {
  if (hangman.checkIfLetter(e.keyCode)) {
    if (hangman.checkClickedLetters(e.key)) {
      let errors = hangman.addWrongLetter(e.key)
      console.log('esta rolando ate aqui')
      return hangmanCanvas.writeWrongLetter(e.key, errors);

    }
  }
};
//