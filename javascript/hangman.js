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
    let correctLetters = 0
    for (let i=0 ; i <this.secretWord.length ;i++){
      this.guessedLetters.indexOf(this.secretWord[i])===-1 ? '' : correctLetters++;
    } return this.secretWord.length === correctLetters ? true : false;
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
    console.log(hangman.secretWord);
  });
}
document.addEventListener('keydown', event => {
  if(hangman.checkIfLetter(event.keyCode) === true && hangman.checkClickedLetters(event.key.toUpperCase()) === true){
    if(hangman.secretWord.indexOf(event.key) === -1){
      hangman.addWrongLetter(event.key.toUpperCase());
      hangmanCanvas.writeWrongLetter(hangman.letters,hangman.errorsLeft);
    }else{
      hangman.addCorrectLetter(event.key.toUpperCase());
      for(let i=0 ; i < hangman.correctLetters.length ; i++){
        
      }


    }
    console.log(`guessed letters: ${hangman.guessedLetters}, letters: ${hangman.letters} , errors left: ${hangman.errorsLeft}`)
  }else{
    '';
  };
});