class Hangman {
  constructor(words) {
    this.words = words; 
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    return word;
  }

  checkIfLetter(keyCode) {
    let guess = false;
    let key = keyCode;
    let check = "";

    if(key >= 65 && key <= 90)
    {
      guess = true;
    }
    else{
      guess = false;
    }
    
    return guess;
  }

  checkClickedLetters(letter) {

    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {

    this.guessedLetters += letter;
    if(this.guessedLetter === this.secretWord)
    {
      console.log("YOU WIN");
    }
    this.checkWinner();
  }

  addWrongLetter(letter) {
    
    this.errorsLeft -= 1;
    let check = this.letters.includes(letter);
    
    if(check === false)
    {
      this.letters.push(letter);
    }

    this.checkGameOver();
  }

  checkGameOver() {
    if(this.errorsLeft > 0)
    { 
      return false;
    }
    else{
      return true;
    }
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length;
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
    hangmanCanvas.drawHangman();
  });
}

document.addEventListener('keydown', event => {
 if(hangman.secretWord.includes(event.key))
 {
   let word = hangman.secretWord.indexOf(event.key);
   hangmanCanvas.writeCorrectLetter(word);
 }
 else{
   hangman.addWrongLetter(event.key);
   hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);
 }
});
