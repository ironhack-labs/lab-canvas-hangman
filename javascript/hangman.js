class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    return this.words[Math.floor(Math.random() * this.words.length)];
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
    // ... your code goes here
    this.guessedLetters += letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.letters.push(letter);
    this.errorsLeft -= 1;
    console.log(letter, this.errorsLeft);
  }

  checkGameOver() {
    // ... your code goes here
    return !this.errorsLeft;
  }
    
  /**if won return true else return false */
  checkWinner() {
    // ... your code goes here
    let guessedLettersSplitArray = this.guessedLetters.split('');
    let setOfGuessedLetters = new Set(guessedLettersSplitArray)

    let secretWordSplitArray = this.secretWord.split('');
    let setOfSecretWord = new Set(secretWordSplitArray);

    if (setOfGuessedLetters.size !== setOfSecretWord.size) return false;
    for (let guessedLetter of setOfGuessedLetters){
      if (!setOfSecretWord.has(guessedLetter)){
        return false;
      } 
    }
    return true;

  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    console.log('start game')
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

    // ... your code goes here

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here

  if(hangman.checkIfLetter(event.keyCode)){

    //at this point - the letter is a through z

    if(hangman.checkClickedLetters(event.key)){

      //at this point - the letter is a through z and has not been guessed before
      let secretWordSplitArray = hangman.secretWord.split('');
      let setOfSecretWord = new Set(secretWordSplitArray);

      if(setOfSecretWord.has(event.key)){

        //if letter is correct we call addCorrectLetter somewhere in here
        hangman.addCorrectLetter(event.key);
        
        hangman.secretWord.split('').forEach((charElement, index) => {
          if(charElement == event.key){
            hangmanCanvas.writeCorrectLetter(index);
          }
        })
        

      } else {

        //if letter is NOT correct we call addWrongLetter somewhere in here
        hangman.addWrongLetter(event.key)
        hangmanCanvas.drawHangman(hangman.errorsLeft)
        hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft);

        if(hangman.checkGameOver()){
          alert(`You lost, sucker! The secret word was ${hangman.secretWord}`);
          startGameButton.click();
        }

      }

    }

    if(hangman.checkWinner()){
      alert(`You\'ve won - the secret word was ${hangman.secretWord}`);
      startGameButton.click();
    }
    
  }

});