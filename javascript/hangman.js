




class Hangman {


  constructor(words) {


    this.words = words;
    // an array to store all the words that 
    // could be given to a player to guess. 
    // When the class is instantiated, 
    // all the words passed to the constructor as 
    // an argument will be saved in this property.


    this.secretWord = this.pickWord()
    // here we will store the word that has been 
    // picked as a secret word for the current game. 
    // Every time a new game starts, a random word 
    // from the this.words array 
    // needs to be picked as the secret word 
    // to be guessed by the player. 
    // That is, when the class is instantiated, 
    // call the method pickWord() and save the result to 
    // the property secretWord.


    this.errorsLeft = 10
    // the initial/start value should be 10, 
    //and it should decrease every 
    // time a user picks a letter that doesn't 
    //appear in the word they need to guess.


    this.guessedLetters = ""
    // a string to store the letters user chose and guessed. 
    // We will use this to know when the user has won.


    this.letters = []
    // an array in which we will store the 
    // letters that the user has already picked while 
    // trying to guess the secret word. 
    // It is important to keep the track of these letters so we can, 
    // later on, apply some logic to prevent users from repeating them.

  }

  pickWord() {
    //  a method that returns a random word from the array of words.
    let randomPos = Math.floor(Math.random() * this.words.length)
    return this.words[randomPos]
  }


  checkIfLetter(keyCode) {
    // checking if the pressed keys are letters
    if (keyCode <= 90 && keyCode >= 65) {
      return true
    } else {
      return false
    }

  }

  checkClickedLetters(correctLetter) {
    // a method that should check if the letter 
    //passed as an argument has already been pressed. 
    //It should return true if it was not or false in the opposite case.
    if (this.letters.includes(correctLetter)) {

      return false
    } else {
      return true
    }

  }

  addCorrectLetter(letter) {
    // a method that should add the passed 
    // letter to the guessedLetters property. 
    // This could be a good place to check if the user won

    //if (this.letters.includes(correctLetter)){
    this.guessedLetters += letter
    //}
  }

  addWrongLetter(wrongLetter) {
    // a method that should subtract one from the 
    // variable errorsLeft. 

    //if (this.letters.includes(wrongLetter)) {

    this.errorsLeft -= 1
    //this.errorsLeft = this.errorsLeft - 1
    //}



    // } else if (this.errorsLeft = 0 ) {
    //   console.log("GAME O V E R")
    // }

    //It also should push this letter in 
    // the array of letters if the letter is not there already.
    // Only push it

    //if (this.letters.includes(userLetter)){
    this.letters.push(wrongLetter)
    //}
  }


  checkGameOver() {
    // a method that checks if the user has any errors left. 
    //If the number of errors is greater than 0, 
    //the method should return false (the game continues). 
    //In opposite case, if there is no more errors left, the method should return true.
    if (this.errorsLeft > 0) {
      return false
    } else if (this.errorsLeft === 0) {
      return true
    }
  }
  checkWinner() {
    // a method that should check if the user won 
    //and return the corresponding boolean value.
    if (this.secretWord.length === this.guessedLetters.length) {
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
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard()
    // hangmanCanvas.drawLines()

    
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(hangman.secretWord)
  if (hangman.secretWord.includes(event.key)) {
    // add it to correct letters
    let idx = hangman.secretWord.indexOf(event.key)
    hangmanCanvas.writeCorrectLetter(idx)

  } else {
    // add it to wrong letters
     hangmanCanvas.wrongLetter(event.key)
  }
});

