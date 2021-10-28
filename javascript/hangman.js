class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = [];
    this.guessedLetters = "";
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    //if keycode a-z return true, sino false

    //let codigo = keyCode >= 65 && keyCode <= 90 ? true : false;
    //return codigo

    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else false
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (!this.letters.includes(letter)) {
      return true
    } else {
      return false
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    this.letters.push(letter);
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft < 1
  }

  checkWinner() {
    // ... your code goes here

    const guessed = this.guessedLetters.split('').sort().join("");
    const finalWord = this.secretWord.split('').sort().join("")
    return guessed === finalWord ? true : false
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

    // ... your code goes here
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here

  if (hangman.checkIfLetter(event.keyCode)) {
    if (hangman.secretWord.includes(event.key)) {
      let index = hangman.secretWord.indexOf(event.key)
      //siempre que sea un metodo va a lleva parentesis
      hangmanCanvas.writeCorrectLetter(index)
      //todo if hangman.checkWinner is true : hangmancanvas.winner
      if (hangman.checkWinner()) {
        hangmanCanvas.checkWinner()
      }

    } else {
      hangman.addWrongLetter(event.key)
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft,hangman.letters)
      hangmanCanvas.drawHangman(hangman.errorsLeft)


      console.log(hangman.guessedLetters)
      if (hangman.checkGameOver()) hangmanCanvas.gameOver();



      //todo hangman.addWrongLetter(event.key)
      //todo hangman.canvas.writeWrongLetter()
      //todo if hangman.checkGameOver is true : hangman.canvas.gameOver


    }
  }


  //*finitoooo

});