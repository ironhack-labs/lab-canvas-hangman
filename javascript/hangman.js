class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters ="";
    this.errorsLeft=10;
  }

  pickWord() {
    const randomIndex = Math.floor(Math.random()* this.words.length);
    let wordPicked = this.words[randomIndex];
    return wordPicked
  }

  checkIfLetter(keyCode) {
    if (keyCode > 64 && keyCode < 91){
      return true;
    }return false;
  }

  checkClickedLetters(letter) {
    if (this.letters.indexOf(letter) === -1){
      return true;
      }else{
      return false;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
    
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true
    }else{
      return false
  }
}

  checkWinner() {
    for (let i = 0; i < this.secretWord.length; i += 1) {
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1){
        return false;
      } else {return true;
      }
  }
}
}

let hangman;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node','jaavascript','react','miami','paris','amsterdam','lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    hangman.pickWord()
    
    

    
  });
}



document.addEventListener('keydown', event => {
let ih = hangmanCanvas.secretWord.indexOf(event.key)
hangmanCanvas.createBoard()
hangmanCanvas.drawLines()

hangmanCanvas.writeCorrectLetter(ih)


if (hangman.checkIfLetter(event.keyCode) === true){

  
  if (hangman.checkClickedLetters(event.key) === true){
      
      hangman.addCorrectLetter(event.key);
      
      hangman.addWrongLetter(event.key);
    
    }
  else{alert `Already pressed this key`}

}else {alert `Press a valid key`}

hangman.checkClickedLetters(event.key)



console.log(hangman.letters)
console.log(hangman.guessedLetters)





hangmanCanvas.drawHangman(hangman.errorsLeft)
if(hangman.checkGameOver() === true){
  alert `Game over`
}

  
});
  


  

