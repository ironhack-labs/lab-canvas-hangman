class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ''
    this.errorsLeft = 10
  }

  pickWord() {
    const pickedWord = this.words[Math.floor(Math.random() * this.words.length)]
    return pickedWord
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    if(keyCode >= 65 && keyCode <= 90) {
      
      this.letters.push(String.fromCharCode(keyCode).toLowerCase())
     
      return true
    } else {
      return false
    }
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)) {
      return false
    } else {
      return true
    }
  }

  addCorrectLetter(letter) {
    this.letters.pop()
    return this.guessedLetters += letter
    // this.checkWinner()
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1
    if(!this.letters.includes(letter)){
      this.letters.push(letter)
    }
  }

  checkGameOver() {
    if(this.errorsLeft > 0) {
      return false
    } else {
      return true
    }
  }

  checkWinner() {
    function alphabet_order(str) {
      return str.split('').sort().join('');
    }

    const secretWordAlpha = alphabet_order(this.secretWord)
    const guessedLettersAlpha = alphabet_order(this.guessedLetters)

    // console.log(test)
    // console.log(test2)

    // const gameOver = this.checkGameOver()

    if(secretWordAlpha === guessedLettersAlpha) {
      return true
    } else {
      return false
    }
  
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'lalal','miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    console.log(hangman.secretWord)
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // console.log(hangmanCanvas)
    hangmanCanvas.createBoard()

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  if(hangman.checkIfLetter(event.keyCode) === true && hangman.checkWinner() === false) {
    if(hangman.checkClickedLetters(event.key) === false) {
      if(hangman.secretWord.includes(event.key)){

        hangman.addCorrectLetter(event.key)

        let letterIndexes = []
        for (let i = 0; i < hangman.secretWord.length; i++) {
          if(hangman.secretWord[i] === event.key) {
            letterIndexes.push(i)
          }
        }
        
        hangmanCanvas.writeCorrectLetter(letterIndexes)

      }  else {
        hangman.addWrongLetter(event.key)
        
        hangmanCanvas.writeWrongLetter(hangman.letters, hangman.errorsLeft)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        if(hangman.errorsLeft === 0){
          hangmanCanvas.gameOver()
        }
      }
    }
  }
  
});
