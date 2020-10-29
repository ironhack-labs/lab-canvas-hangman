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
  return false;
  }
  

  checkClickedLetters(letter) {
    return !this.letters.includes(letter) ? true : false;
  }

  addCorrectLetter(letter) {
  this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if(this.errorsLeft > 0) this.errorsLeft--;
    if(!this.letters.includes(letter)) this.letters.push(letter);
  }


  checkGameOver() {
    if(this.errorsLeft <= 0) return true;
      return false;
    }
  // return this.errorsLeft < 1;

  checkWinner() {
    return this.secretWord.split('').every(character => this.guessedLetters.includes(character));
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    //hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

const startGame = event => {
console.log('KeyCode corresponding to the key pressed:>> ', event.keyCode);

if(hangman.checkIfLetter(event.keyCode)) {
  let letterClicked = event.key;

if(hangman.secretWord.includes(letterClicked)) {
    console.log('correct!', letterClicked);
    hangman.addCorrectLetter(letterClicked);
    hangmanCanvas.writeCorrectLetter(hangman.secretWord.indexOf(letterClicked));
    if (hangman.checkWinner()) {
    hangmanCanvas.winner();
    }
    } 
    else {
    console.log('incorrect!', letterClicked);
if(hangman.checkClickedLetters(letterClicked)) {
      hangman.addWrongLetter(letterClicked);
      hangmanCanvas.writeWrongLetter(letterClicked, hangman.errorsLeft);
      if(hangman.checkGameOver()) {
      hangmanCanvas.gameOver();
      } 
      }
      }
      }
      }

document.addEventListener('keydown', startGame);
  