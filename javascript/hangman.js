class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.words[Math.floor(Math.random() * words.length)];
    this.errorsLeft = 10;
    this.guessedLetters = '';
    this.letters = [];
  }

  pickWord() {
    // ... your code goes here
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    //let value_letter = letter.keyCode || letter.which;
    if((keyCode>64 && keyCode<91)) {
      return true;
    }else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    // let array_letters = this.letters;
    /* if(this.letters){
      return false;
    }else{
      return true;
    } */
    if(this.letters.includes(letter)){
      return false;
    }else{
      return true;
    }
    //array_letters.push(letter.uppperCase);    
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    return this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft <= 0){
      return true;
    }else{
      return false;
    }
  }

  checkWinner() {
    // ... your code goes here
    const order_secret_word = this.secretWord.split('').sort().join();
    const order_guessed_letters = this.guessedLetters.split('').sort().join();
    if(order_guessed_letters === order_secret_word){
      return true;
    }else{
      return false;
    }
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
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
