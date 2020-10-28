class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
    // ... your code goes here
  }

  pickWord() {
    let randomIndex = Math.floor(Math.random()* this.words.length)
    return this.words[randomIndex]
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    return keyCode >= 65 && keyCode <=90 ? true : false
  }

  checkClickedLetters(letter) {
    return this.letters.includes(letter) ? false : true
  }

  addCorrectLetter(letter) {
    this.guessedLetters +=letter
    this.checkWinner() ? hangmanCanvas.winner() : false;
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.errorsLeft--
    //if (this.checkClickedLetters()){
    this.letters.push(letter)
    //}
    this.checkGameOver() ? hangmanCanvas.gameOver() : false;
    // ... your code goes here
  }

  checkGameOver() {
    return this.errorsLeft === 0 ? true : false
    // ... your code goes here
  }

  checkWinner() {
    return this.guessedLetters.length === this.secretWord.length ? true : false
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
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  if (hangman.checkIfLetter(event.keyCode)){
    if (hangman.checkClickedLetters(event.key)){
      if (!hangman.checkGameOver()){
        if(!hangman.checkWinner()){
          if (hangman.secretWord.includes(event.key)){
            if (!hangman.guessedLetters.includes(event.key)){
              hangman.secretWord.split("").forEach((letra, indice) => {
                if (letra === event.key){
                  hangman.addCorrectLetter(event.key)
                  hangmanCanvas.writeCorrectLetter(indice)
                }
              });
            }
          } else {
            hangman.addWrongLetter(event.key)
            hangmanCanvas.drawHangman(hangman.errorsLeft)
            hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
            }
        } 
      } else {
        hangmanCanvas.gameOver()
      }
    }
  }
})
  // if (hangman.checkIfLetter(event.keyCode)){
  //   if (hangman.secretWord.includes(event.key)){
  //     if (!hangman.guessedLetters.includes(event.key)){
  //       hangman.secretWord.split("").forEach((letra, indice) => {
  //         if (letra === event.key){
  //           hangman.addCorrectLetter(event.key)
  //           hangmanCanvas.writeCorrectLetter(indice)
  //         }
  //       });
  //     }
  //   } else {
  //       if (hangman.checkClickedLetters(event.key)){
  //         if(hangman.checkGameOver()){
  //           hangmanCanvas.gameOver()
  //         } else {
  //           hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  //           hangman.addWrongLetter(event.key)
  //           hangmanCanvas.drawHangman(hangman.errorsLeft)
  //         }
  //       }
  //   }
  // }

    // if (hangman.checkIfLetter(event.keyCode)){
    //   if (hangman.checkClickedLetters(event.key)){
    //     if(hangman.secretWord.includes(event.key)){
    //       hangman.secretWord.split("").forEach((letra, indice) => {
    //         if (letra === event.key){
    //           hangman.addCorrectLetter(event.key)
    //           hangmanCanvas.writeCorrectLetter(indice)
    //         }
    //       });
    //     } else {
    //       if(!hangman.checkGameOver()){
    //         hangman.addWrongLetter(event.key)
    //         hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
    //         hangmanCanvas.drawHangman(hangman.errorsLeft)
    //       } else {
    //         hangmanCanvas.gameOver()
    //       }

          
    //     }
    //   }
    // }


