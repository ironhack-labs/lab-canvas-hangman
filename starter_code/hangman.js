let hangman;

class Hangman {
  constructor() {
    this.words = ["Tamasz", "Kairin", "Maraco"];
    this.secretWord = "";
    this.letters = [];
    this.guessedLetter = "";
    this.errorsLeft = 10;

  }

  getWord() {
    let secret = this.words[Math.floor(Math.random()*this.words.length)];
    this.secretWord = secret.toUpperCase(); 
    console.log("Secret " + secret);
    return secret;

  }

  checkIfLetter(keyCode) {
    if((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
    return true;
    else return false;
  }

  checkClickedLetters(key) {
    if(this.letters.indexOf(key) === -1) return true;
    else return false
  }

  addCorrectLetter(i) {
    console.log("Hello " + i + " " + this.secretWord + " " + this.secretWord[i]);
    this.guessedLetter += this.secretWord[i].toUpperCase();
    hangmanCanvas.writeCorrectLetter(i);
      if (this.checkWinner())
        console.log('You won!')
    
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
    hangmanCanvas.writeWrongLetter(letter);
    if (this.checkGameOver())
      console.log('Game Over!')
  }

  checkGameOver() {
    if(this.errorsLeft === 0) return true;
    else return false;
  }

  checkWinner() {
    let secretLength = this.secretWord.length;

    for(let i = 0; i<secretLength; i++){
      if(this.guessedLetter.indexOf(this.secretWord[i]) === -1) return false
    } 
    return true;
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  
  hangmanCanvas = new HangmanCanvas(hangman.getWord());
  hangmanCanvas.createBoard()
  hangmanCanvas.drawLines()
  
};

document.onkeydown = (e) => {
  //hangman.addCorrectLetter(3);
  console.log("Key pressed " + e.key);
  
  let keyPressed = e.key.toUpperCase();
  hangman.letter.push(keyPressed);
  for(let i = 0; i< hangman.secretWord.length; i++)
    if (hangman.secretWord[i] === keyPressed)
      hangman.addCorrectLetter(i);

  if(hangman.secretWord.indexOf(keyPressed) === -1)
      hangman.addWrongLetter(keyPressed);
};
