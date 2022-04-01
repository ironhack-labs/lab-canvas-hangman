class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let numberOfLines = this.secretWord.length;

    this.context.lineWidth = 5;

    for(let i = 0; i < numberOfLines; i++){
      this.context.beginPath();
      this.context.strokeStyle = `black`;
      
      this.context.moveTo((i * 75) + 50, 750);
      this.context.lineTo((i * 75) + 100, 750);
      this.context.stroke();
      
    }
    

  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = '72px sans-serif';
    this.context.fillText(this.secretWord[index], (index * 75) + 50, 740, 75)
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    this.context.font = '72px sans-serif';
    this.context.fillText(letter, ((9 - errorsLeft) * 75) + 50, 100, 75);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    // switch (errorsLeft){
    //   case 9: 
    //     //draw the head
    //     break;
    //   case 8:
    //     //draw the chest lineTo
    //     break;
    //   case 7:

    // }

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
