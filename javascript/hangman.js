class Hangman {

  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(); 
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    this.orderedGuessedLetters = '_'.repeat(this.secretWord.length).split("");
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()*this.words.length);
    let randomWord = this.words[randomIndex];
    this.secretWord = randomWord;
    return randomWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <= 90){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
    const verifiedLetter = !this.letters.includes(letter);
    if (verifiedLetter){
      this.letters.push(letter);
    }
    return verifiedLetter;
  }

  addCorrectLetter(letter) {
    for (let i = 0; i < this.secretWord.length; i++){
      if (letter === this.secretWord[i]){
        this.orderedGuessedLetters[i] = letter;
      }
    }
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)){
      this.errorsLeft -= 1;
      this.letters.push(letter);
    }
  }

  verifyLetterContainedInSecretWord (letter){
    return this.secretWord.includes(letter);
  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false;
    } else {
      return true;
    }  
  }

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i++){
      if (!this.guessedLetters.includes(this.secretWord[i])){
        return false;
      }
    }
    return true;
  }
}

let hangman;
let hangmanCanvas;

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
  if (!hangman) return; // if there is no hangman, return
  // Key pressed --> produces a character key
  const typedLetter = event.key.toLocaleLowerCase();
  const keyCode = event.keyCode;

  
  if (!hangman.checkIfLetter(keyCode)){
    alert('Please type a letter from a to z');
    return;
  } else if (!hangman.checkClickedLetters(typedLetter)){
    alert('You have already used this letter. Try again');
    return;
  }
  
  if (hangman.verifyLetterContainedInSecretWord(typedLetter)){
    hangman.addCorrectLetter(typedLetter);
    hangman.orderedGuessedLetters.forEach((element, i) => {
      if (element != '_'){
        hangmanCanvas.writeCorrectLetter(i);
      }
    })
    if (hangman.checkWinner()){
      alert('Congrats! You won!');
      hangmanCanvas.winner();
      hangman = undefined;
      return;
    }
  } else {
    hangman.addWrongLetter(typedLetter);
    hangmanCanvas.writeWrongLetter(typedLetter, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
    if (hangman.checkGameOver()){
      alert('Game Over. Try again!');
      hangmanCanvas.gameOver();
      hangman = undefined;
      return;
    }
  }
});
