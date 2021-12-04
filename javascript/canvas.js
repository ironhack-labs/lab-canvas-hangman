class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0,canvas.width, canvas.height)
  }

  drawLines() {
 
    let numberOfLetters = this.secretWord.split("").length
    let widthOfWord = numberOfLetters*15

    
    this.context.moveTo(50, 50);
    this.context.lineTo(50 + widthOfWord, 50);
    this.context.setLineDash([10, 5]);
    this.context.stroke();

  }

  writeCorrectLetter(index) {
    let wordsOfSecretWord = this.secretWord.split("")

    let positionX = 

    this.context.beginPath()
    this.context.fillText(wordsOfSecretWord[index], positionX, 47);
    //this.context.strokeText(wordsOfSecretWord[index], 10, 100);
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
