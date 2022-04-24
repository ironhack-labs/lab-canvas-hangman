class Hangman {
  constructor(words) {
    this.words = words;

    this.secretword = secretword;
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;

  }

  pickWord() {
    return this.words[Math.floors(Math.random() * this.words.length)]
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90) {
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);

  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    }
    return true;
  }
  // return !this.errorsLeft >0;

  checkWinner() {

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

  if (hangman.checkIfLetter(event.keyCode));

  //letter is a-z

  if (hangman.checkClickedLetters(event.key);

  // letter 1-z has not been guessed before 
  let secretWordSplitArray = hangman.secretword.split(' ');
  let secretOfSecretWord = new Set(secretWordSplitArray);

  if (secretOfSecretWord.has(event.key)) {

    //if letter is correct we call addCorrectLetter in here

    hangman.addCorrectLetter(event.key);

  } else {
    // if letter is not correct we call addWrongLetter in here
    hangman.addWrongLetter(event.key)
    if (hangman.checkGameOver()) {
      alert('Youve lost the game!')
    }
  }
});
hangman.checkWinner(){
  alert('Youve won!');
}