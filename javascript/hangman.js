class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = words[0]
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10

    // ... your code goes here
  }

  pickWord() {
    let max = this.words.length
    let min = 0
    let randomNum = Math.floor((Math.random() * (max - min) + min))
    this.secretWord = this.words[randomNum]
    return this.secretWord
    
  }

  checkIfLetter(keyCode) {
    if(keyCode >=65 && keyCode <=90){
      return true
    } else{
      return false
    } 
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false
    }else{
      return true
    }
  }

  addCorrectLetter(letter) {
    return this.guessedLetters+= letter
  }

  addWrongLetter(letter) {
    return this.errorsLeft--
  }

  checkGameOver() {
    if(this.errorsLeft == 0){
      return true
    }else{
      return false
    }
  }

  checkWinner() {
    if (this.secretWord.length===this.guessedLetters.length){
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

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord)
    hangmanCanvas.createBoard()
  });
}

document.addEventListener('keydown', event => {
  console.log(event.key)
  //hangmanCanvas.writeCorrectLetter(event.key)
  
  if(hangman.checkIfLetter(event.keyCode)){
    if(hangman.secretWord.includes(event.key)){
      console.log(hangman.checkIfLetter(event.keyCode))
      hangmanCanvas.writeCorrectLetter(event.key)
      hangman.addCorrectLetter()
      hangman.letters.push(event.key)
    }else{
    hangman.addWrongLetter(event.key)
    hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
    hangmanCanvas.drawHangman(hangman.errorsLeft)
    } 
  }
});
  /*
  && (hangman.checkClickedLetters(event.key))){
    //hangman.letters.push(event.key)
    //if(hangman.secretWord.includes(event.key)){
      if()
      console.log(hangman.secretWord.includes(event.key))
      hangmanCanvas.writeCorrectLetter(event.key)
      hangman.addCorrectLetter()
      
    //}
  }else{
      hangman.addWrongLetter(event.key)
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  }*/

