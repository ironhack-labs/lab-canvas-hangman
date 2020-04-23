class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = words[Math.floor(Math.random() * words.length)];
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.secretWord.toString()
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode >= 65 && keyCode <= 90 ? true : false
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    // ... your code goes here

    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft ? false : true
  }

  checkWinner() {
    // ... your code goes here
    function filtraPalabra(palabra) {
      return palabra
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .filter((item, pos, self) => self.indexOf(item) == pos)
        .join('');
    }
    if (filtraPalabra(this.guessedLetters) === filtraPalabra(this.secretWord)) {
      return true;
    } else return false;
    
  }
}


let keyLetter
let keyCode
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
     hangmanCanvas.createBoard()
     hangmanCanvas.drawLines()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  keyCode = event.keyCode
  keyLetter = event.key

  if (hangman.checkIfLetter(keyCode)) {
    if (hangman.checkClickedLetters(keyLetter)) {
      hangman.letters.push(keyLetter)
      if (hangman.secretWord.includes(keyLetter)) {
        ;[...hangman.secretWord].forEach((e, i) => {
          if (e === keyLetter) hangmanCanvas.writeCorrectLetter(i)
        })
        hangman.addCorrectLetter(keyLetter)
        if (hangman.checkWinner()) hangmanCanvas.winner()
      } else {
        hangman.addWrongLetter()
        hangmanCanvas.writeWrongLetter(keyLetter, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        if (hangman.checkGameOver()) hangmanCanvas.gameOver()
      }
    }
  }
  console.log(hangman.secretWord)
  console.log(hangman.guessedLetters)

});
