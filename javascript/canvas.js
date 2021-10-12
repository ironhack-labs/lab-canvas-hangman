class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.lineWidth = 10;
    this.context.strokeStyle = '#4a4a44'; // grey
    this.secretWord = secretWord;
    
  }

  createBoard() {
    // clear canvas
    this.context.clearRect(0, 0, 1200, 800); // (x,y, canvas.width, canvas.height)
    // call drawLines
    this.drawLines();
  }

  drawLines() {
    console.log(this.secretWord.length);
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(200 + i * 80, 700); // 200 - 250 --> 50px each line -> 200 + 1*80 --> x -> 280
      this.context.lineTo(250 + i * 80, 700);
      this.context.stroke();
      this.context.closePath();
    }
  }

  writeCorrectLetter(index) {
    // amsterdam 
    // index = [1,8]
    console.log(index);
    console.log(this.secretWord)
    this.context.fillStyle = '#9DA400'; 
    this.context.font = '46px Roboto';
    // context.fillText('string', x, y);
    index.forEach( item => this.context.fillText(this.secretWord[item].toUpperCase(), 210 + item * 80, 680))
  }

  writeWrongLetter(letter, errorsLeft) {
    debugger
    console.log(letter)
    console.log(hangman)
    console.log(errorsLeft);
    // if (!this.hangman.checkClickedLetters(letter)) { // false if the letter has been pressed before
    //   alert('Choose another letter! This has already passed!');
    // }
    // else {

    // }
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
