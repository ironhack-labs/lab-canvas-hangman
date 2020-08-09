// ! errors threshold for losing is off by 1


class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = [];
    this.errors = +0;
    this.LIVES = 10;
  }

  pickWord() {
    let randomWord = Math.floor(Math.random() * this.words.length);
    return this.words[randomWord];
  }
  
  checkIfLetter(keyCode) {
    return ( 65 <= keyCode && keyCode <= 90 ) ? true : false
  }

  checkClickedLetters(letter) {
    
    if (this.letters.includes(letter)) {
      return false
    } else {
      this.letters.push(letter);
      return true
    }
    
  }
  
  addCorrectLetter(letter) {
    
    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === letter) { this.guessedLetters.push(letter) }
    }
    
    hangmanCanvas.writeCorrectLetter(letter);

    if (this.checkWinner()) {
      hangmanCanvas.winner();
    }

  }
  
  addWrongLetter(letter, errors) {

    hangmanCanvas.drawHangman(this.errors);

    this.letters.push(letter);
    
    hangmanCanvas.writeWrongLetter(letter, errors);

    this.errors++

    if (this.checkGameOver()) {
      console.log('post-check gameover (positive check)');
      hangmanCanvas.gameOver();
    }
    console.log('post-check gameover (negative check)');
  }
  
  checkGameOver() {

    if (hangman.errors < 10) {
      return false
    }

    return (this.errors >= this.LIVES) ? true : false;
  }
  
  checkWinner() {
    
    if (this.secretWord.length !== this.guessedLetters.length) {
      return false
    }
    
    const secret = this.secretWord.sort();
    const guessed = this.guessedLetters.sort();
    
    
    for (let i = 0; i < secret.length; i++) {
      if ( secret[i] !== guessed[i] ) { return false }
    }

    return true;
    
  }
}

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman([
      "node",
      "javascript",
      "react",
      "miami",
      "paris",
      "amsterdam",
      "lisboa",
    ]);
    hangman.secretWord = hangman.pickWord();
    hangman.secretWord = hangman.secretWord.split('');
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
  });
}

document.addEventListener('keyup', e => {

  let key = e.key.toLowerCase();

  // ? This code allows players to input the wrong letter twice, and get penalized twice. Bug or feature?

  if (!hangman.checkIfLetter(e.keyCode)) {
    return
  } else if (!hangman.secretWord.includes(key)) {
    hangman.addWrongLetter(key, hangman.errors);
  };

  if (hangman.checkIfLetter(e.keyCode)) {
    if (hangman.checkClickedLetters(key)) {
      hangman.addCorrectLetter(key);
    }
  }

});
