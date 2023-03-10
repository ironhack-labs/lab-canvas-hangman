class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(
      0,
      0,
      document.getElementById("hangman").width,
      document.getElementById("hangman").height
    );
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    let i = 0;
    while (i < this.secretWord.length * 2) {
      this.context.moveTo(300 + i * 30, 700);
      i++;
      this.context.lineTo(300 + i * 30, 700);
      i++;
    }
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    const letter = this.secretWord[index].toUpperCase();
    if (!this.correctLetters.includes(letter)) {
      this.correctLetters.push(letter);
      const x = 300 + index * 30;
      const y = 685;
      this.context.font = "30px Arial";
      this.context.fillText(letter, x, y);
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    const upperLetter = letter.toUpperCase();
    if (!this.wrongLetters.includes(upperLetter)) {
      this.wrongLetters.push(upperLetter);
      const x = 600 - (10 - errorsLeft) * 50;
      const y = 200;
      this.context.font = "30px Arial";
      this.context.fillText(upperLetter, x, y);
    }
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
