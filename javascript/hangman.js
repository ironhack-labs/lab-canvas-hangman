class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    return this.words[Math.floor(Math.random()* this.words.length)];
  }

  checkIfLetter(keyCode) {
   return keyCode > 64 && keyCode < 91;
  }

  checkClickedLetters(letter) {
   return !this.letters.includes(letter); 
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
  
    if (this.checkWinner()){
      hangmanCanvas.winner();
    }
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
   
    if (!(this.letters.includes(letter))){
       this.letters.push(letter);
    } 
  }

  checkGameOver() {
   return this.errorsLeft === 0; 
  }
  

  checkWinner() {
    if(this.guessedLetters.length === this.secretWord.length){
      return true;
    }return false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  const letter = String.fromCharCode(event.keyCode).toLowerCase();
  const secretArr = hangman.secretWord.split('');
  
  if (hangman.checkIfLetter(event.keyCode)){
    if(secretArr.includes(letter)){

      for (let i =0 ; i< secretArr.length; i++){
        if (letter === secretArr[i]){
          hangmanCanvas.writeCorrectLetter(i, letter);
          hangman.addCorrectLetter(letter);
        }
      } 

    }else{
      hangman.addWrongLetter(letter);
      hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);
      if (hangman.checkGameOver()){
        return hangmanCanvas.gameOver();
      }
    }
}
});

