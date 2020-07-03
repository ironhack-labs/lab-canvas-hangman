class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.secretWord;
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <=90 ? true: false;
  }

  checkClickedLetters(letter) {
    return this.letters.indexOf(letter)===-1? true : false;
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    this.letters.push(letter);
  }

  checkGameOver() {
    return this.errorsLeft >0 ? false :true ;
  }

  checkWinner() {
    let correctLetters = ''
    for (let i=0 ; i <this.secretWord.length ;i++){
      correctLetters.indexOf(this.secretWord[i]) === -1 ? correctLetters += this.secretWord[i] : '';
    }
    return this.guessedLetters.length === correctLetters.length ? true : false;
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
    hangman.errorsLeft = 10;
    hangman.letters = [];
    hangman.guessedLetters = '';
    console.log(hangman.secretWord);
  });
}
document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode) === true && hangman.checkClickedLetters(event.key.toUpperCase()) === true && hangman.errorsLeft > -1 && hangman.checkWinner() === false){
    if(hangman.secretWord.indexOf(event.key) === -1){
      hangman.addWrongLetter(event.key.toUpperCase());
      hangmanCanvas.writeWrongLetter(hangman.letters,hangman.errorsLeft);
      console.log(hangman.errorsLeft)
      hangmanCanvas.drawHangman(hangman.errorsLeft)
    }else{
      hangman.addCorrectLetter(event.key.toUpperCase());  
      letter = event.key.toUpperCase();
      let firstLetter = hangman.secretWord.indexOf(event.key);
      let secondLetter = hangman.secretWord.indexOf(event.key,firstLetter+1) === -1? 'not' : hangman.secretWord.indexOf(event.key,firstLetter+1);
      let thirdLetter = hangman.secretWord.indexOf(event.key,secondLetter+1) === -1? 'not' : hangman.secretWord.indexOf(event.key,secondLetter+1);
      let x = 215;
      let y = 480;  
      
      hangmanCanvas.writeCorrectLetter(letter, x + 42 * (firstLetter + 1));
      if(secondLetter != 'not'){
        hangmanCanvas.writeCorrectLetter(letter, x + 42 * (secondLetter + 1));
      } 
      if(thirdLetter != 'not'){
        hangmanCanvas.writeCorrectLetter(letter, x + 42 * (secondLetter + 1))
      }
      console.log(hangman.checkWinner())
      hangman.checkWinner() === true? hangmanCanvas.winner() : '';
    }
  }
});