class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    let canvasElement = document.querySelector("#hangman");
    this.context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  }

  drawLines() {
    // ... your code goes here
    let startPosition = { x: 400, y: 700 };

    this.context.beginPath();
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.moveTo(startPosition.x, startPosition.y);

      this.context.lineTo(startPosition.x + 20, startPosition.y);
      this.context.stroke();
      startPosition.x += 40;
    }

    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes here

    let currentLetter = this.secretWord[index];

    let indices = [];

    for (let i = 0; i < this.secretWord.length; i++) {
      if (this.secretWord[i] === currentLetter) {
        indices.push(i);
      }
    }

    indices.forEach((indice) => {
      this.context.font = "40px serif";
      this.context.strokeText(currentLetter, 400 + indice * 40, 690);
    });
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let indexOfLetter = hangman.letters.indexOf(letter);
    this.context.font = "40px serif";
    this.context.strokeText(letter, 700 + indexOfLetter * 40, 300);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
    alert("sorry bruv, you lost!");
  }

  winner() {
    // ... your code goes here
    alert("you win!!!!");
  }
}
