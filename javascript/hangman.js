

class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)]
  }
  checkIfLetter(keyCode) {
    if (65 <= keyCode && keyCode <= 90) {
      return true;
    }
    console.log('voce não digitou uma letra');
    return false;
  }
  checkClickedLetters(letter) {
    console.log('entrei checkClikedLetters');
    if (this.letters.includes(letter)) {

      /* let li = document.createElement('li');
       li.innerHTML = 'Você já digitou a letra' + ' '+ letter;
       let parent = document.getElementsByTagName('ul')[0];
       parent.appendChild(li);*/

      console.log('Você já digitou essa letra');
      return false;
    }
    this.letters.push(letter);
    if (this.secretWord.includes(letter)) {
      this.addCorrectLetter(letter);
    } else {
      this.addWrongLetter(letter);
    }

    return true;
  }
  addCorrectLetter(letter) {
    console.log('entrei no addCorrectLtter');
    this.guessedLetters += letter;
    console.log(this.guessedLetters);
    this.checkWinner();
    hangmanCanvas.writeCorrectLetter(letter);
  }
  addWrongLetter(letter) {
    console.log('entrei no addWrongLetter');
    this.errorsLeft -= 1
    this.checkGameOver();
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  }

  checkGameOver() {
    console.log('entrei no game over')

    if (this.errorsLeft > 0) return false;
    hangmanCanvas.gameOver();
    return true;
  }
  checkWinner() {
    let check = [];
    for (let i = 0; i < this.secretWord.length; i += 1) {
      check.push(this.guessedLetters.includes(this.secretWord[i]));
    }
    console.log(check);

    if (check.includes(false)) return false;
    hangmanCanvas.winner();
    return true;
  }
}
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    let clearGame = document.getElementById('game');
    clearGame.innerHTML = '';
    hangman.secretWord = hangman.pickWord();
    console.log(hangman.secretWord);
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();

  });
}
document.addEventListener('keydown', event => {
  // React to user pressing a key
  let keyCode = event.which;
  let keyName = event.key;
  hangman.checkIfLetter(keyCode);
  hangman.checkClickedLetters(keyName);

});
