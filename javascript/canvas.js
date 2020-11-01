class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let x= 250;
    const y= 650;
    this.context.beginPath();
    this.secretWord.split("").forEach(e => {
      this.context.moveTo(x,y);
      this.context.lineTo(x+50,y);
      x += 80;
    });
    this.context.stroke();  
    this.context.closePath(); 
  }

  writeCorrectLetter(index) {
    let x= 250;
    const y= 650;
    this.context.font = "60px Arial"
    this.secretWord.split("").forEach(e => {
      if (e.toUpperCase() == String.fromCharCode(index)){
        this.context.fillText(String.fromCharCode(index),x,y);
      }
      x+= 80;
    });
    hangman.addCorrectLetter(String.fromCharCode(index).toLowerCase());
  }

  writeWrongLetter(letter, errorsLeft) {
    const x = 500 + 65*(10-errorsLeft);
    const y = 250;
    this.context.font= "60px Arial";
    this.context.fillText(letter,x,y);
    hangman.addWrongLetter();
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    switch (errorsLeft) {
      case 10:
        break;
      case 9:
        this.context.moveTo(130,650);
        this.context.lineTo(160,600);
        this.context.lineTo(190,650);
        this.context.lineTo(130,650);
        break;
      case 8:
        this.context.moveTo(160,600);
        this.context.lineTo(160,150);
        break;
      case 7:
        this.context.moveTo(160,150);
        this.context.lineTo(400,150);
        break;
      case 6:
        this.context.moveTo(400,150);
        this.context.lineTo(400,200);
        break;
      case 5:
        this.context.moveTo(440,240);
        this.context.arc(400,240,40,0,Math.PI*2);
        break;
      case 4:
        this.context.moveTo(400,280);
        this.context.lineTo(400,450);
        break;
      case 3:
        this.context.moveTo(400,450);
        this.context.lineTo(450,510);
        break;
      case 2:
        this.context.moveTo(400,450);
        this.context.lineTo(350,510);
        break;
      case 1:
        this.context.moveTo(400,350);
        this.context.lineTo(450,400);
        break;
      case 0:
        this.context.moveTo(400,350);
        this.context.lineTo(350,400);
        break;

    }
    this.context.stroke();
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
