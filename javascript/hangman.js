class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    // ... your code goes here
  }

  pickWord() {
  return this.words[Math.floor(Math.random() * this.words.length)];
    // ... your code goes here
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
    //ALT SYNTAX return keyCode >= 65 && keyode <= 90;
    // ... your code goes here
  }

  checkClickedLetters(letter) {
   let uniqueArray = [...this.letters];

    for(let i= 0; i < uniqueArray.length; i++) {
      let index = uniqueArray.indexOf(uniqueArray[i]);
      if(index < 0) {
        uniqueArray.push(uniqueArray[i])
      }
    }
    if(uniqueArray.includes(letter)) {
      return false;
    } else{
      return true;
    }

    //return !this.letters.includes(letter);
    // ... your code goes here
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter;
    this.checkWinner();
    // ... your code goes here
  }

  addWrongLetter(letter) {
    this.letters.push(letter);
    this.errorsLeft -= 1;
    console.log(letter, this.errorsLeft);
  //this.errorsLeft--;  
    // ... your code goes here
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
    //return !(this.errorsLeft > 0);
    //return !this.errorsLeft;
    // ... your code goes here
  }

  checkWinner() {

    let guessedLettersSplitArray = this.guessedLetters.split('');
    let guessedLettersSet = new Set(guessedLettersSplitArray);

    let secretWordSplitArray = this.secretWord.split('');
    let secretWordSet = new Set(secretWordSplitArray); 

    if(guessedLettersSet.size !== secretWordSet.size) return false;
    for(let guessedLetter of guessedLettersSet) {
      if(!setOfSecretWord.has(guessedLetter)) {
        return false;
      }
    }
    return true;
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    
    //HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {

  if(hangman.checkIfLetter(event.keyCode)) {

  if(hangman.checkClickedLetters(event.key)) {

      let secretWordSplitArray = hangman.secretWord.split('');
      let setOfSecretWord = new Set(secretWordSplitArray);

    if(setOfSecretWord.has(event.key)) {

      hangman.addCorrectLetter(event.key);

      hangman.secretWord.split('').forEach((charElement, index) => {
        if(element == event.key);{
          hangmanCanvas.writeCorrectLetter(index);
        }
      })
   
      //if letter is correct we call addCorrectLetter somewhere in here
    } else {
      //if letter is not correct we call addWrongLetter somewhere in here
      hangman.addWrongLetter(event.key, hangman.errorsLeft);

      if(hangman.checkGameOver()) {
        alert(`You\'ve lost - the secret word was ${hangman.secretWord}`);
        startGameButton.click();
      }
    }

  }

  if(hangman.checkWinner()) {
    alert(`You\'ve won - the secret word was ${hangman.secretWord}`);
    startGameButton.click();
  } 
}
  // React to user pressing a key
  // ... your code goes here
});
