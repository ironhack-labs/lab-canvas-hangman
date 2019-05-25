var hangman;
var canvas;
var counter;

class Hangman {
  constructor() {
    //HangmanCanvas.call(this,this.words);
    this.words = ['hello', 'ironhack', 'example'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
    this.wrongLetters = [];
  }
  //Returns a random word from our array words.
  getWord() {
    this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
    return this.secretWord;
  }
  //This function should check if the key the user has typed is a letter.
  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 122);
  }
  //Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  checkClickedLetters(key) {
    if (!this.letters.includes(key)) {
      this.letters.push(key);
      return true;
    }
    else {
      return false;
    }
  }
  //Adds to the guessedLetter variable the letter 
  //that was pressed. Also, it should check if the user wins.
  addCorrectLetter(i) {
    if(this.guessedLetter.includes(i)){
      return;
    }
    for (let j = 0; j < this.secretWord.length; j++) {
      if (this.secretWord.charAt(j)===i) {
        this.guessedLetter += i;
        this.checkWinner();
      }
    }
  }
  //Should subtract one from the variable errorsLeft and check if the game is over.
  addWrongLetter(letter) {
    if (!this.secretWord.includes(letter)) {
      this.wrongLetters.push(letter);
      this.errorsLeft -= 1;
      this.checkGameOver();
    }
  }
  //Returns a boolean value, true if the users lose, and false in any other case.
  checkGameOver() {
    return (this.errorsLeft === 0);
  }
  //Check if the users win and return a boolean value.
  checkWinner() {
    return (this.guessedLetter.length === this.secretWord.length);
  }
}









document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();  
  hangman.getWord();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
  canvas.drawLines();
  console.log(hangman.secretWord);
  
};

document.addEventListener('keydown',(event)=>{
  counter = hangman.wrongLetters.length;
  if(hangman.checkIfLetter(event.keyCode) && hangman.secretWord.includes(event.key) && !hangman.checkWinner() && !hangman.checkGameOver()){
    
    canvas.writeCorrectLetter(event.key);
    hangman.addCorrectLetter(event.key);
    if(hangman.checkWinner()){
      canvas.winner();      
      return;
    }
  }else if(!hangman.secretWord.includes(event.key) && hangman.errorsLeft >0 && !hangman.checkWinner()){
    
    hangman.addWrongLetter(event.key);
    canvas.writeWrongLetter(event.key,counter );
    canvas.drawHangman(counter);
    if(hangman.checkGameOver()){
      canvas.gameOver();
      return;
    }
  }
  
})

