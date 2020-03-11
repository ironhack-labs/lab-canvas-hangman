class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    // this.goodAudio = new Audio (src)
    // ... your code goes here
  }

  createBoard() {
    console.log('hey');
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines(){
    let wordArr = this.secretWord.split('');
// imprime a secret word pra ver
    this.context.font = '50px arial'
    this.context.fillText(this.secretWord, 500, 500);

    wordArr.forEach((letter, index) => {
      this.context.strokeStyle = 'black';

      this.context.beginPath();
      this.context.moveTo(200 + index*60 , 500);
      this.context.lineTo(250 + index*60, 500);
      this.context.stroke();
      this.context.closePath();
    });
  }

  writeCorrectLetter(index) {
    // audio  here
    //  this.goodAudio.play();

    this.context.font = '50px arial'

    // let wordArr = this.secretWord.split('');

    // wordArr.forEach(letter) => 
    
    
    this.context.fillText(this.secretWord[index] , 200 + index *60, 500)
    
  }

  writeWrongLetter(letter, errorsLeft) {
    
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
