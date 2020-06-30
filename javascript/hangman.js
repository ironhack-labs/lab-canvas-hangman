class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];;
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode <= 90 && keyCode >= 65;
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }

  checkGameOver() {
    return this.errorsLeft === 0;
  }

  checkWinner() {
    let secrectWord = this.secretWord.split('').sort();
    let guessedWord = this.guessedLetters.split('').sort();
    return secrectWord.join('') === guessedWord.join('');
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  let theWord = hangman.secrectWord;
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)) {
    
    if(theWord.includes(event.key)){
      console.log(event.key, event.keyCode);
    //   hangman.addCorrectLetter(event.key);
      // hangmanCanvas.writeCorrectLetter(hangman.secrectWord.indexOf(eventKey));
    }//else{
    //   hangman.addWrongLetter(event.key);
    // }
  }
    
});