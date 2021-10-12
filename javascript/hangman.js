class Hangman {
  constructor(words) {
    this.words = words; // array
    this.secretWord = this.pickWord; // random secret word to guess by the user
    this.letters = []; // array to store the letters that the user has already picked
    this.guessedLetters = ''; // store letters user chose and guess
    this.errorsLeft = 10;
  }

  pickWord() {
    // random word from words
    return this.words[Math.floor(Math.random() * this.words.length)];
    // if(typeof secret === 'string') {
    //   return secret;
    // } return undefined;
  }

  checkIfLetter(keyCode) { //event.keyCode
    return keyCode >=65 && keyCode <= 90 
    ? true //true if the keyCode corresponds to a character from a-z
    : false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter) // it's not included
    ? true // a letter not passed yet --> true
    : false;
  }

  addCorrectLetter(letter) {
    // array with the letters that are contained in the secret word
    let checkLetter = this.secretWord.split('').filter(item => item === letter).join('');
    console.log(checkLetter);
    this.guessedLetters += checkLetter;
    if (this.guessedLetters.length === this.secretWord.length) {
      return;
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    if (!this.letters.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    return this.errorsLeft > 0
    ? false //If the number of errors is greater than 0, the game continues
    : true; // tha game is over, no errors left --> 0 left
  }

  checkWinner() {
    // 'node'.split('').sort() -->['d', 'e', 'n', 'o']
    //'node'.split('').sort().join('') --> 'deno'
    const secretSorted = this.secretWord.split('').sort().join('');
    const guessedSorted = this.guessedLetters.split('').sort().join('');
    return secretSorted === guessedSorted ? true : false;
  }
}

let hangman;
let hangmanCanvas;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    console.log(hangman);
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    console.log(`Random secret word: ${hangman.secretWord}`);
    // create an instance of hangmanCanvas --> canvas.js
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keydown', event => {
  if (!hangman) return; // if there is no hangman, return
  debugger
  // Key pressed --> produces a character key
  const key = event.key;
  const code = event.keyCode;
  //console.log(`letter: ${event.key}, ${event.code}`); // letter: e
  // check if the character is includes in secretWord
  if (!hangman.checkIfLetter(code)) { // keyCode corresponds to a character from a-z
    alert('Please enter a letter!');
  } else { 
    if (!hangman.checkClickedLetters(key)) { // false if the letter has been pressed before
      alert('Choose another letter! This has already passed!')
    } else {
      // check if it's included into the secretWord
      if (hangman.secretWord.includes(key)) { //hangman.secretWord.indexOf(key) >= 0 // true
        // check if letter has already been pressed
        hangman.addCorrectLetter(key); // add letter to the guessedLetters
        // draw the letters
        let index = [];
        for(let i = 0; i < hangman.secretWord.length; i++) {
        if (hangman.secretWord[i] === key) index.push(i)
        }
        hangmanCanvas.writeCorrectLetter(index);

        if (hangman.checkWinner()) {
          // add the winner image inside canvas
          hangmanCanvas.winner()
        }
      } else { // if the key pressed is not included in secretWord
        hangman.addWrongLetter(key);
        // letter not included in secretWord, write the letter on the top right corner
        hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft); 
        //hangmanCanvas.drawHangman(hangman.errorsLeft);
      }
  } if (hangman.checkGameOver()) {
    // add the gameOver image inside canvas
    hangmanCanvas.gameOver();
  }
}
});
