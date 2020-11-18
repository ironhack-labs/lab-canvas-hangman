class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.guessedLetters = '';
    this.letters=[];

  }

  pickWord() {
    return this.words[Math.floor(Math.random()*this.words.length)];
  }

  checkIfLetter(keyCode) {
    if (keyCode<65 || keyCode>90){
      return false;
    } else{
      return true;
    }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)){
      return false;
    } else{
      return true;
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters+=letter;
    this.letters.push(letter);
    this.checkWinner();
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    this.letters.push(letter);
  }

  checkGameOver() {
    if(this.errorsLeft<=0){
      return true;
    } else{
      return false;
    }
  }

  checkWinner() {
    if (this.secretWord.length==this.guessedLetters.length){
      return true;
    } else{
      return false;
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

    // ... your code goes here
    hangmanCanvas.createBoard();
    hangmanCanvas.drawLines();

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  let letterPressed = event.key;
  let letterPressedCode = event.keyCode;
  
  if (hangman.letters.includes(letterPressed)==false){
    if (hangman.secretWord.includes(letterPressed)){
      var splitted2 = hangman.secretWord.split('');
      for (let i=0; i<splitted2.length;i++){
        if (splitted2[i]==letterPressed){
          hangman.addCorrectLetter(letterPressed);
        }
      }
      
      hangmanCanvas.writeCorrectLetter(letterPressed);
      if(hangman.checkWinner()){
        console.log('YOU WON!');
        hangmanCanvas.winner();
      }


    } else{
      hangman.addWrongLetter(letterPressed);
      hangmanCanvas.writeWrongLetter(letterPressed,hangman.errorsLeft);
      hangmanCanvas.drawHangman(hangman.errorsLeft);

      if(hangman.checkGameOver()){
        console.log('GAME OVER!');
        hangmanCanvas.gameOver();
      }

    }
  
  } else if(hangman.letters.includes(letterPressed)){
    alert('YOU ALREADY PRESSED THAT LETTER')

  } else{
    alert('THATS NOT A VALID LETTER');
  }

});