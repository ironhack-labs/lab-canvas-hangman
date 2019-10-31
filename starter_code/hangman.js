let hangman;

class Hangman {
  constructor() {
    this.words=['dog','cat','eggs','plateau'];           // An array where we will store all the words that the player need to guess. We will take one of them randomly.
    this.secretWord = '';    //Here we will store the word chosen for each game.
    this.letters = [];       //An array to store the letters the user already clicked, so we do not repeat them.
    this.guessedLetter = ''; //A string to store the letters the user clicked and guessed. We will use this to know when the user wins.
    this.errorsLeft = 10;    //It should start at 10, and decrease every time a user clicks on a letter that is not in the word.
  }

  getWord() {
    //Returns a random word from our array words.
    return this.words[Math.floor(Math.random()*this.words.length)]
  }
  
  checkIfLetter(keyCode) {
    //This function should check if the key the user has typed is a letter.
    if(typeof(keyCode)==='number'){
      return (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)
    }
    return false
  }

  checkClickedLetters(key) {
    //Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
    return !this.letters.includes(key)
  }

  addCorrectLetter(i) {
    //Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
    let secretWordSplit = this.secretWord.split('');
    this.guessedLetter += secretWordSplit[i].toUpperCase();
  }

  addWrongLetter(letter) {
    //Should subtract one from the variable errorsLeft and check if the game is over.
    let ch = String.fromCharCode(letter)
    if(!this.secretWord.includes(ch) && !this.letters.includes(ch) ){
      this.errorsLeft--;
      this.letters.push(ch)
    }
  }

  checkGameOver() {
    //Returns a boolean value, true if the users lose, and false in any other case
    return this.errorsLeft === 0;
  }

  checkWinner() {
    //Check if the users win and return a boolean value
    return this.secretWord.length === this.guessedLetter.length 
  }

}

document.getElementById('start-game-button').onclick = (e) => {
  let secretWord = 'Ironhack'
  let hangman = new Hangman();
  let hangmanCanvas = new HangmanCanvas(secretWord);

  hangmanCanvas.createBoard()
  hangmanCanvas.drawHangman()
  hangmanCanvas.drawLines()
  hangmanCanvas.drawLines()
};

document.onkeydown = (e) => {
  let key = e.keyCode;
  if(hangman.checkIfLetter(key) && !hangman.checkClickedLetters(key)){
    
  }
};
