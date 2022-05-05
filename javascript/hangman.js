class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) return true;
    else return false;
  }

  // checkClickedLetters(letter) {
  //   this.letters.forEach(element => {
  //     if(letter === element) return false;
  //     else return true;
  //   });
  // }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)) return true;
      return false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters+=letter;
    // if(this.guessedLetters===this.secretWord) return true;
    // else return false;
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if(!this.letters.includes(letter)) this.letters.push(letter);
  }

  checkGameOver() {
    if(errorsLeft>0) return false;
    else return true;
  }

  checkWinner() {
    if(this.guessedLetters===this.secretWord) return true;
    else return false;
  }

}

// my tests of methods
  //hangman = new Hangman (["January", "February", "March", "April", "May", "June"]);
  //hangman = new Hangman (['cat']);

  // hangman.letters = ['l', 's', 'h', 'd'];
  // console.log(hangman.checkClickedLetters('s'))


  // hangman.secretWord = hangman.pickWord();
  // hangman.guessedLetters = 'ca';
  // console.log(hangman.addCorrectLetter('p'));

  // hangman.addWrongLetter('p');
  // console.log(hangman.errorsLeft)
  // console.log(hangman.letters)





let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

// document.addEventListener('keydown', event => {
//   // React to user pressing a key
//   // ... your code goes here
// });
