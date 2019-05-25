var hangman;

// Hangman
class Hangman {
  constructor() {
    this.guessedLetter = '';
    this.errorsLeft = 10;
    // this.words = ['PERRO', 'GATO', 'ELEFANTE','BALLENA'];
    this.words = ['PERRO'];
    this.secretWord = '';
    this.secretArray = [];
    this.letters = [];
  }
  getWord() {
    // Returns a random word from our array words
     this.secretWord = this.words[Math.floor(Math.random()*this.words.length)];
     // Store our secret word in an array, so we can use it later in comparissons and such
     this.secretArray = this.secretWord.split('');
     // Set an empty array in letters, so we can render it on screen later
     this.secretArray.map(e=>this.letters.push('_'));
     console.log("secretArray", this.secretArray);
     console.log("letters", this.letters);
     return this.secretWord;
  }
 
  checkGameOver(){
    // checkGameOver. Returns a boolean value, true if the users lose, and false in any other case.
    if(this.errorsLeft === 0){
      console.log('Game Over');
      return true;
    } else {
      return false;
    }

  }
  checkIfLetter(input, checktype = 'abc'){
    let universe = ''
    // Checks if entered value is a letter form A to Z and returns a boolean
    if(checktype === 'abc'){
      universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (checktype === 'pressed'){
      universe = this.guessedLetter;
    }
    if (checktype ===  'secret'){
      universe = this.secretWord;
    }
    let arr = universe.split('');
    return arr.includes(input);
  }
  checkWinner(){
    // checkWinner. Check if the users win and return a boolean value.
    if(this.secretArray.every( e => this.letters.includes(e) )){
      // Compare letters with secretWord. If they're the same, the player wins the game
      return true;
    } else{
      // Player has not won yet
      return false;
    }
  }

  addCorrectLetter(input){
    // addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
    this.guessedLetter += input;
    // Add the letter in all places where it belongs to. Store it in the letters array the exact way it will be rendered on screen
    // Let's cicle through our secretArray, so we can insert our input letter in the space it belongs to in the letters array
    this.secretArray.map((e, index)=>e === input ? this.letters[index] = this.secretArray[index] : this.letters[index]);
    console.log('this.letters', this.letters)
    return this.checkWinner();
  }
  addWrongLetter(){
    // addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.
    this.errorsLeft --;
    return this.checkGameOver();
  }
  checkClickedLetters(input){
    // checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
    // input = input.toUppercase;
    // First check if entered value is even a valid letter
    if (this.checkIfLetter(input, 'abc')){
      // Check if letter input has already been pressed
      if (!this.checkIfLetter(input, 'pressed')){
        // Input letter has not been pressed before, so let's check if our input letter exists inside the secretWord
        if (this.checkIfLetter(input, 'secret')){
          // Input letter does exist; return true and call addCorrectLetter
          if(this.addCorrectLetter(input)){
            // addCorrectLetter checks if user won, in which case returns a true
            console.log('User has won');
            return true;
          }
        } else {
          // Input letter does not exist in the secretWord; call addWrongLetter
          console.log(`letter ${input} not in word ${this.secretWord}` )   
          return this.addWrongLetter();       
        }

      } else {
        //Return false if input letter has already been pressed
        console.log(`letter ${input} has already been entered ${this.secretWord}` )  
        return false;
      }
    }
    // Check the guessedLetter variable; if found, letter is invalid
  }

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
};

document.onkeydown = function (e) {
  let character = String.fromCharCode(e.keyCode);
  hangman.checkClickedLetters(character);
};
