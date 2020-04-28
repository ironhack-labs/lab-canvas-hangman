class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawLines();
  }

  drawLines() {

    let arraySecretWord = this.secretWord.split("");
    arraySecretWord.forEach(letter => {
      this.context.save();
      this.context.lineWidth = 5;
      this.context.strokeStyle = 'black';
      this.context.beginPath();
      this.context.moveTo(200, 550);
      this.context.lineTo(230, 550);
      this.context.translate(60, 0);
      this.context.closePath();
      this.context.stroke();
    });

  }

  writeCorrectLetter(index) {
    
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    this.context.lineWidth = 5;
    this.context.strokeStyle = 'black';

    let ctx = this.context;

    function base(){
      ctx.beginPath();
      ctx.moveTo(50, 550);
      ctx.lineTo(150, 550);
      ctx.lineTo(100, 500);
      ctx.lineTo(50, 550);
      ctx.closePath();
      ctx.stroke();
    }

    function firstLine(){
      ctx.beginPath();
      ctx.moveTo(100, 500);
      ctx.lineTo(100, 150);
      ctx.closePath();
      ctx.stroke(); 
    }

    function secondLine(){
      ctx.beginPath();
      ctx.moveTo(100, 150);
      ctx.lineTo(300, 150);
      ctx.closePath();
      ctx.stroke(); 
    }

    function thirdLine(){
      ctx.beginPath();
      ctx.moveTo(300, 150);
      ctx.lineTo(300, 200);
      ctx.closePath();
      ctx.stroke(); 
    }

    function head(){
      ctx.beginPath();
      ctx.arc(300, 250, 50, 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke(); 
    }

    switch(errorsLeft){
      case 9:
        base();
        break;
      case 8:
        base();
        firstLine();
        break;
      case 7:
        base();
        firstLine();
        secondLine();
        break;
      case 6:
        base();
        firstLine();
        secondLine();
        thirdLine();
        break;
      case 5: 
        base();
        firstLine();
        secondLine();
        thirdLine();
        head();
        break;
    }

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
