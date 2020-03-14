class Hangman {
  constructor(words) {
    this.words = words; 
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let word = this.words[Math.floor(Math.random() * this.words.length)];
    return word;
  }

  checkIfLetter(keyCode) {
    let guess = false;
    let key = keyCode;

    if(key >= 65 && key <= 90)
    {
      guess = true;
    }
    else{
      guess = false;
    }
    return guess;
  }

  checkClickedLetters(letter) {

    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {

    this.letters.push(letter);
    this.secretWord.split('').forEach((element, i) => {
      if(element === letter)
      {
        this.guessedLetters += letter;
        hangmanCanvas.writeCorrectLetter(i);
      }
    });
    
    if(this.checkWinner())
    {
      hangmanCanvas.winner();
    }
    
  }

  addWrongLetter(letter) {
    
    this.errorsLeft -= 1;
    this.letters.push(letter);
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft);
  
    if(this.checkGameOver())
    {
      hangmanCanvas.gameOver();
    }
  }

  checkGameOver() {

    return this.errorsLeft < 1;
  }

  checkWinner() {
    return this.secretWord.length === this.guessedLetters.length;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', () => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    
    document.addEventListener('keydown', ({which, key})=> {
      if(!hangman.checkGameOver() && !hangman.checkWinner())
      {
        if(hangman.checkIfLetter(which)){

          if(hangman.checkClickedLetters(key)){
            
            if(hangman.secretWord.split("").includes(key))
            {
              hangman.addCorrectLetter(key);
            }
            else{
              hangman.addWrongLetter(key);
            }
          }
        }
      }
    });
  });
}
