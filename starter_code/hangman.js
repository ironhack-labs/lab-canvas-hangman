var hangman;

// Hangman
class Hangman {
  constructor() {
    this.guessedLetter = '';
    this.errorsLeft = 10;
    this.words = ['perro', 'gato', 'elefante','ballena'];
    this.secretWord = '';
    this.letters = [];
  }
  getWord() {
    // Returns a random word from our array words
     this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
     return this.secretWord;
  }
 
  checkGameOver(){
    // checkGameOver. Returns a boolean value, true if the users lose, and false in any other case.
    if(this.errorsLeft === 0){
      return true;
    } else {
      return false;
    }

  }
  checkIfLetter(input, checktype){
    let universe = ''
    // Checks if entered value is a letter form A to Z and returns a boolean
    if(checktype = 'abc'){
      universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } 
    if (checktype = 'pressed'){
      universe = this.guessedLetter;
    }
    if (checktype = 'word'){
      universe = this.secretWord;
    }
    let arr = universe.split('');
    arr.indexOf(input) > -1 ? false : true;
  }
  checkWinner(){
    // checkWinner. Check if the users win and return a boolean value.
    // First let's turn our secretWord into an array for comparisson purposes
    let secretArray = this.secretWord.split('');
    if(secretArray.every( e => this.letters.includes(e) )){
      // Compare letters with secretWord. If they're the same, the player wins the game
      return true;
    } else{
      // Player has not won yet
      return false;
    }
  }

  addCorrectLetter(input){
    // addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
    this.guessedLetter+=input;
    this.drawPositions();
    
  }
  addWrongLetter(){
    // addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.
    this.errorsLeft --;
    this.checkGameOver();
  }
  checkClickedLetters(input){
    // checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
    input = input.toUppercase();
    // First check if entered value is even a valid letter
    if (this.checkIfLetter(input, 'abc')){
      // Check if letter input has already been pressed
      if (this.checkIfLetter(input, 'pressed')){
        // Input letter has not been pressed before, so let's check if our input letter exists inside the secretWord
        if (this.checkIfLetter(input, 'secret')){
          // Input letter does exist; return true and call addCorrectLetter
          // Place letter in an array, so that it can be drawn on screen
        } else {
          // Input letter does not exist in the secretWord; return false and call addWrongLetter
         return false; 
        }

      } else {
        //Return false if input letter has already been pressed
        return false;
      }
    }
    // Check the guessedLetter variable; if found, letter is invalid
  }

}


  hangman = new Hangman();
  hangman.getWord();
  hangman.checkClickedLetters();





document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
