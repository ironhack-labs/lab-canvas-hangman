class Hangman {
  constructor(words, secretWord, letters, guessedLetters, errorsLeft) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
    // ... your code goes here
  }

  pickWord() {
    let randomPick = this.words[Math.floor(Math.random() * this.words.length)]
    
    return randomPick
  }

  checkIfLetter(keyCode) {
  
    if (keyCode >=65 && keyCode <=90) {
      return true
    } else if (keyCode === 186) {
      return true
    } else {
      return false
    }
  }

    // a = 65
    // b = 66
    // c = 67
    // d = 68
    // e = 69
    // f = 70
    // g = 71
    // h = 72
    // i = 73
    // j = 74
    // k = 75
    // l = 76 
    // m = 77
    // n = 78
    // ñ = 186
    // o = 79
    // p = 80
    // q = 81
    // r = 82
    // s = 83
    // t = 84
    // u = 85
    // v = 86
    // w = 87
    // x = 88
    // y = 89
    // z = 90



  checkClickedLetters(letter) {
    if (!this.letters.includes(letter)) {
      return true
    }
    return false
  }

  addCorrectLetter(letter) {
  if(this.secretWord.indexOf(letter) > -1) {
    this.guessedLetters += letter;
  }
  this.checkWinner()
  }

  addWrongLetter(letter) {
   this.letters.push(letter)
   this.errorsLeft -= 1
   if(this.letters.includes(!letter)) {
     letter.push(this.letters)
   }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    }
    return true
  }

  checkWinner() {
    if(this.guessedLetters == this.secretWord) {
      return true
    }
    if(this.guessedLetters != this.secretWord) {
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
