// jshint esversion: 6

let hangman;

class Hangman {
  constructor() {
    this.words = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize", "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx", "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;
  }

  getWord() {
    const randomWord = Math.floor(Math.random() * this.words.length);
    return this.words[randomWord];
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91) {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    let hasLetterBeenPressed = false;
    this.letters.forEach(letter => {
      if(letter === key) {
        hasLetterBeenPressed = true;
      }
    });
    return !hasLetterBeenPressed;
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord.substring(i, i + 1).toUpperCase();
    hangmanCanvas.writeCorrectLetter(i);
    if (this.checkWinner()) {
      hangmanCanvas.winner();
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
    if (this.checkGameOver()) {
      hangmanCanvas.gameOver();
    }
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  _countUniqueChar(str) {
    str = str.toUpperCase();
    let chars = [str[0]];
    for (let i = 1; i < str.length; i++) {
      if (!chars.includes(str[i])) {
        chars.push(str[i]);
      }
    }
    return chars.length;
  }

  checkWinner() {
    if (this._countUniqueChar(this.secretWord) === this.guessedLetter.length) {
      return true;
    } else {
      return false;
    }
  }
}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();

  document.onkeydown = (e) => {
    let currentLetter = e.key.toUpperCase();
    if (!hangman.checkIfLetter(e.keyCode)) {
      console.log('Not a letter');
    } else if (hangman.checkClickedLetters(e.keyCode)) {
      hangman.letters.push(e.keyCode);
      if (hangman.secretWord.toUpperCase().includes(currentLetter)) {
        hangman.addCorrectLetter(hangman.secretWord.toUpperCase().indexOf(currentLetter));
      } else {
        hangman.addWrongLetter(currentLetter);
      }
    }
  };
};