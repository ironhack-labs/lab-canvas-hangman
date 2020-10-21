class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord=this.pickWord();
    this.letters=[];
    this.guessedLetters='';
    this.errorsLeft=10;
  }

  pickWord() {
    let sWord= this.words[Math.floor(Math.random() * this.words.length)];
    return sWord;
  }

  checkIfLetter(keyCode) {
    if(keyCode>60 && keyCode<95){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    if(!this.letters.includes(letter)){
      return true;
    } else{
      return false;
    }
  }

  addCorrectLetter(letter) {
    if (this.secretWord.length===this.guessedLetters.length) {
    } else {
      return this.guessedLetters+=letter;
    }
  }

  addWrongLetter(letter) {
    if(!this.letters.includes(letter)){
      this.letters.push(letter);
    }
    return this.errorsLeft-=1;
  }

  checkGameOver() {
    if (this.errorsLeft>0) {
      return false;
    } else{
    return true;
    }
  }

  checkWinner() {
    if (this.secretWord.length===this.guessedLetters.length){
      return true
    } else{
      return false
    }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

     //HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
