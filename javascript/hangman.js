class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here

   return this.words[Math.floor(Math.random() * this.words.length)]
   .toUpperCase();
   
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    return keyCode >= 65 && keyCode <= 90;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return !this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    /*  
      updates 'guessedLetters' string and 
      pushes the typed letter into the letters array
    */
    this.letters.push(letter);

    /*
      splits 'secretWord' and loops on every letter to write them
      on the board if equal to the correct letter 
    */
    this.secretWord
    .split('')
    .forEach( 
      (arrLetter, i) => {
        if(arrLetter == letter) {
          this.guessedLetters += letter;
          hangmanCanvas.writeCorrectLetter(i)
        }
      });//forEach

      //checks if the game is finished
      if(this.checkWinner()) {
        hangmanCanvas.winner();
        hangman.updateBtnText("PLAY AGAIN");
      }
  }//addCorrectLetter
  
  addWrongLetter(letter) {
    
    //updates 'errorsLeft' variable and pushes the typed letter into the array
    this.errorsLeft -= 1
    this.letters.push(letter);

    /*
    writes incorrect letter on the board and a hangman part
    depending the amount of erros left
    */
    hangmanCanvas.writeWrongLetter(letter, this.errorsLeft)

    //checks if the game is finished
   if(this.checkGameOver()) {
     hangmanCanvas.gameOver();
     hangman.updateBtnText("TRY AGAIN");
   }
  }
  

  checkGameOver() {
    return this.errorsLeft < 1;
  }

  checkWinner() {
    return this.secretWord.length == this.guessedLetters.length;
  }

  updateBtnText(str) {
    document.querySelector("#start-game-button").innerHTML = str;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', () => {

    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    //gets random secret word 
    hangman.secretWord = hangman.pickWord();

    //instantiates new object from HangmanCanvas class
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    //draws the dashed lines on the screen
    hangmanCanvas.createBoard()

    //listens to keydown events
    document.addEventListener('keydown', ({which, key}) => {
      // React to user pressing a key
      // ... your code goes here
      console.log(hangman.secretWord, " ", which);
      if(!hangman.checkGameOver() && !hangman.checkWinner()){
        if(hangman.checkIfLetter(which)){
          if(hangman.checkClickedLetters(key.toUpperCase())) {
            hangman.secretWord.split("").includes(key.toUpperCase()) ?
            hangman.addCorrectLetter(key.toUpperCase()) :
            hangman.addWrongLetter(key.toUpperCase())
          }
        } 
      } //first "if"
    });//event listener 'keydown'
  });
}


