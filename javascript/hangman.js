class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.words=pickword();
    this.letters=[];
    this.guessedLetters="";
    this.errorsLeft=10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <=90){
    return true;
    }
   else {
    return false;
  }
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (!this.letters.includes(letter)){
      return true;
    }
    else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    if (!this.guessedLetters.includes(letter));
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if (!this.letters.includes(letter))
    return this.letter.push(letter),this.errorsLeft -=1;
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft > 0){
      return false;
    }
    else {
      return true;
    }
  }

  checkWinner() {
    let secretArray = Array.from(this.secretWord);
    let guessedArray = Array.from(this.guessedLetters);
      if (secretArray === guessedArray){
      return true;
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
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  if (hangman.checkIfLetter(event.keyCode)){
    if (hangman.checkClickedLetters(event.key)) {
      if (hangman.secretWord.includes(event.key)) {
        hangmanCanvas.writeCorrectLetter(event.keyCode)
      } else {
        hangmanCanvas.writeWrongLetter(String.fromCharCode(event.keyCode),hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
      };
    };
    hangman.letters.push(event.key)

});