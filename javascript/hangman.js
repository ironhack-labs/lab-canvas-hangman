class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 6;
  }

  pickWord() {
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    return keyCode > 64 && keyCode < 91
  }

  checkClickedLetters(letter) {
    return !this.letters.includes(letter)
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    this.letters.push(letter)
  }

  addWrongLetter(letter) {
    this.errorsLeft --
    this.letters.push(letter)
  }

  checkGameOver() {
    return this.errorsLeft < 1
  }

  checkWinner() {
    for (let i in this.guessedLetters){
      if(!this.secretWord.includes(this.guessedLetters.charAt(i))){
        return false
      }
    }
    return this.secretWord.length === this.guessedLetters.length
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
  if(hangman.checkIfLetter(event.keyCode)){
    if(hangman.checkClickedLetters(event.key)){
      if (hangman.secretWord.includes(event.key)) {
        hangman.addCorrectLetter(event.key)
        for (let i = 0; i < hangman.secretWord.length; i ++) {
          if (event.key.toUpperCase() === hangman.secretWord[i].toUpperCase()) {
            hangmanCanvas.writeCorrectLetter(i)
          }
        }
        if(hangman.checkWinner){
          //colocar imagem de ganhou
        }
      } else {
        if(hangman.checkGameOver()){
          
          // colocar imagem de gameover
        }
        console.log(hangman.errorsLeft)
        hangman.addWrongLetter(event.key)
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
      }
    } else {
        console.log('letter already typed')
    }
  } else {
    console.log('please type a letter')
  }
});
