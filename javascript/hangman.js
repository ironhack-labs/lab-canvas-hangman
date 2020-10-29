class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[randomIndex];
    return randomWord.toString();
  }

  checkIfLetter(keyCode) {
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    }
    return false;
  } 

  checkClickedLetters(letter) {
      if (this.letters.includes(letter)) {
        return false
      } 
        return true
  }
  
  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }
 
  addWrongLetter(letter) {
    this.errorsLeft--;
  }

  checkGameOver() {
    if (this.errorsLeft === 0) {
      return true
    } else {
      return false
    }
  }

  checkWinner() {
    let charCodeGuessedLetter = 0;
    let charCodeSecretWord = 0;
    for (let i = 0; i < this.secretWord.length; i++){
      charCodeGuessedLetter += this.secretWord.charCodeAt([i])
      charCodeSecretWord += this.guessedLetters.charCodeAt([i])
    }
    if (charCodeSecretWord === charCodeGuessedLetter) {
      return true
    }
    return false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  hangman.checkClickedLetters(event.key)
  hangman.checkClickedLetters(event.key)
  hangman.addCorrectLetter(event.key)
  hangman.addWrongLetter(event.key)
  hangman.checkGameOver()
  hangman.checkWinner()
});
