class HangmanCanvas {
  constructor(secretWord, guessedLetters) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
    this.guessedLetters = guessedLetters;
    this.gameOverImg = new Image();
    this.gameOverImg.src = "../images/gameover.png";
    this.winnerImg = new Image();
    this.winnerImg.src = "../images/awesome.png";
    this.createBoard();
    // ... your code goes here
  }
  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }
  drawLines() {
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(300 + i * 70, 600);
      this.context.lineTo(350 + i * 70, 600);
      this.context.stroke();
      this.context.closePath();
      // console.log("Esta corriendo?");
    }
  }
  writeCorrectLetter(index) {
    // ... your code goes here
    let letter = index
    this.context.font = "50px Arial"
    for(let i=0; i< this.secretWord.length;i++){
      if (letter === this.secretWord[i]){
        this.context.fillText(letter,265+i*70,600)
      }
    }
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