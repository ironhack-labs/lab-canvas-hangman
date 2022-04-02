class Hangman {
  constructor(words) {
    this.words = words;

    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }

  pickWord() {

    const randomWord = this.words[Math.floor(Math.random()*this.words.length)];
    return randomWord;
  
  }

  checkIfLetter(keyCode) {

    if (keyCode >= 65 && keyCode <=90 ){
      return true
    } else{
      return false
    }

  }

  checkClickedLetters(letter) {

    if (this.letters.includes(letter)){
      return false
    } else{
      return true
    }

  }

  addCorrectLetter(letter) {

    return this.guessedLetters += letter

  }

  addWrongLetter(letter) {

    this.errorsLeft -= 1
    if (!this.letters.includes(letter)){
      this.letters.push(letter)
    }
    return

  }

  checkGameOver() {
    if (this.errorsLeft > 0){
      return false
    } else {
      return true
    }

  }

  checkWinner() {
    if(this.guessedLetters.length === this.secretWord.length){
      for (let i=0; i < this.guessedLetters.length; i++){
        if (!this.secretWord.includes(this.guessedLetters[i])){
          return false
        } 
      }
      return true
    } else{
      return false
    }

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
   
  });
}

document.addEventListener('keydown', event => {
  
  let letter = event.key

  if(hangman.checkIfLetter(letter.toUpperCase().charCodeAt(0))){
    if (hangman.secretWord.includes(letter)){
      if(!hangman.guessedLetters.includes(letter)){

        for (let i = 0; i <hangman.secretWord.length; i++){
          if (letter === hangman.secretWord[i]){
            hangman.addCorrectLetter(letter)
          }
        }
        hangmanCanvas.writeCorrectLetter(letter)
        console.log(hangman.guessedLetters)
      }
      if(hangman.checkWinner()) {
        hangmanCanvas.winner()
      }
    } else{
      if (hangman.checkClickedLetters(letter)){
        hangman.addWrongLetter(letter)
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)

      }
      if(hangman.checkGameOver()){
        hangmanCanvas.gameOver()
      }
    }
  }
});
