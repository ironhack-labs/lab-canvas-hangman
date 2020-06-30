class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = ''; // word to guess
    this.letters = []; //wrong guesses
    this.guessedLetters = ''; //correct guesses
    this.errorsLeft = 10; //chances to guess wrong
  }
  //pick the word to guess
  pickWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }
  //check if key event is a letter
  checkIfLetter(keyCode) {
    return keyCode <= 90 && keyCode >= 65;
  }
  //check if key event is a past wrong guess
  checkClickedLetters(letter) {
    return !this.letters.includes(letter);
  }
  //add the key event to a string of correct guesses
  addCorrectLetter(letter) {
    if(this.secretWord.includes(letter)) this.guessedLetters += letter;
  }
  //add key event to the array of wrong guesses and lower the attempts by one
  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft--;
  }
  //check if there are any more attempts left
  checkGameOver() {
    return this.errorsLeft === 0;
  }
  //check is the word was guessed correctly
  checkWinner() {
    let secrectWord = this.secretWord.split('').sort();
    let guessedWord = this.guessedLetters.split('').sort();
    return secrectWord.join('') === guessedWord.join('');
  }
}

let hangman;
let keyEvent;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord);
    if(hangman.secretWord.includes(keyEvent)) {
      hangman.addCorrectLetter(keyEvent);
      console.log('correct', keyEvent);
    } 
    if(!hangman.secretWord.includes(keyEvent)){
      hangman.addWrongLetter(keyEvent);
      console.log('wrong', keyEvent);
    }
    hangmanCanvas.createBoard();    
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  if (hangman.checkIfLetter(event.keyCode) && hangman.checkClickedLetters(event.key)){
    keyEvent = event.key;
    console.log('key', keyEvent);
  }    
});