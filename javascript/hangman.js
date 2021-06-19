class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [] ;
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let indexRandom = Math.floor(Math.random() * this.words.length);
    let randomWord = this.words[indexRandom];
    return randomWord;
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if (keyCode >= 65 && keyCode <= 90 ){
      return true;
    }else{
      return false;
    };
  };

  checkClickedLetters(letter) {
    // ... your code goes here
    if(this.letters.includes(letter))return false
    else return true    
  }

  addCorrectLetter(letter) {
    // ... your code goes here
      this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1
    this.letters.push(letter)
  }

  checkGameOver() {
    // ... your code goes here
    if(this.errorsLeft === 0){
      return true
    }else{
      return false
    }
  }

  checkWinner() {
    // ... your code goes here
    if(this.guessedLetters.length === this.secretWord.length){
      return true
    }else{
      return false
    }
  }
}

let hangman;
let hangmanCanvas;
const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord)
     hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  let tecla = event.key
  //console.log(tecla)
  if (hangman.checkIfLetter(event.keyCode)){
    if(hangman.checkClickedLetters(tecla)){
      if(hangman.secretWord.includes(tecla)){
        hangman.addCorrectLetter(tecla)
        hangmanCanvas.writeCorrectLetter(tecla)
      }else{
       hangman.addWrongLetter(tecla)  
       hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
       hangmanCanvas.drawHangman(hangman.errorsLeft)
      }
    }else{
      return window.alert(`you have clicked to "${tecla}"" before, please chose other!`)
    }
  }else {
    return window.alert(`You didn't choose a letter, you chose "${tecla}", please chose a letter`)
  }
  if (hangman.checkGameOver()){
    window.alert('You lose, please play again. Click in "START GAME" ')
     hangmanCanvas.gameOver()
  };
  if (hangman.checkWinner()){
    window.alert('You won, congratulations')
    hangmanCanvas.winner()
  }
});