class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
    // ... your code goes here
  }


  pickWord() {
    let number = Math.floor(Math.random() * this.words.length)
    return this.words[number]
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    if (this.letters.includes(letter)) {

    } else {
      this.letters.push(letter)
      return this.errorsLeft -= 1
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    let goodLetters = this.guessedLetters.split('')
    let secretLetters = this.secretWord.split('')

    for (let i = 0; i < secretLetters.length; i++) {
      if (!goodLetters.includes(secretLetters[i])) {
        return false
      }
    }
    return true
  }

}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()


    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  var x = String.fromCharCode(event.keyCode);
  console.log(x)

  if (hangman.checkIfLetter(event.keyCode)) {

    if (hangman.secretWord.toLowerCase().includes(x.toLowerCase())) {
      hangmanCanvas.writeCorrectLetter(x)

    } else {
console.log("else")
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);

    }

  }else{
    window.alert('Invalid character! Remember that valid characters include a-z');
  }

});

