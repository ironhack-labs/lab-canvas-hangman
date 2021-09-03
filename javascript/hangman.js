class Hangman {
  constructor(words) {
    // ... your code goes here
    this.words = words;
    this.secretWord = this.pickWord(words);
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let random = Math.trunc(Math.random() * this.words.length)
    let random2 = this.words[random]
    return random2 
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90){
      return true
    }else{
      return false
    }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter)){
      return false;
    }else{
      return true;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    let agregarLetras=this.guessedLetters+=letter
    return agregarLetras
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft-=1
    if(this.letters.includes(letter)){

    }else{
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft>0){
      return false
    }else{
      return true
    }
  }

  checkWinner() {
    // ... your code goes here
    let orderSecret = this.secretWord.split("").sort().join("");
    let orderGuessed = this.guessedLetters.split("").sort().join("");
    if (orderSecret === orderGuessed) return true;
    else return false;
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
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
