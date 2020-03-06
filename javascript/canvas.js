class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.querySelector("#hangman");
    // ... your code goes here
    this.secretWord = secretWord;
    this.width = this.canvas.style.width;
    this.height = this.canvas.style.height;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    )
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let size = this.secretWord.length;

    this.context.beginPath();
    this.context.setLineDash([60, 10]);
    this.context.moveTo(350, 500);
    this.context.lineTo(350 + 70 * size, 500);
    this.context.stroke();

  }

  writeCorrectLetter(index) {
    // ... your code goes here
    console.log(index)
    for (let i = 0; i < index.length; i++) {
      this.context.font = "50px Arial";
      this.context.fillText(hangman.secretWord[index[i]], 350 + (index[i] * 70), 500);
    }
    
    

  }

  writeWrongLetter(letter, errorsLeft) {

      this.context.font = "60px Arial";
      this.context.fillText(letter,500 + 50 * errorsLeft, 50);

      this.drawHangman(errorsLeft);

  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    console.log(errorsLeft);
    switch(errorsLeft){
      case 9:
        this.context.beginPath(); 
        this.context.moveTo(200,450);
        this.context.lineTo(100,500);
        this.context.lineTo(300,500);
        this.context.lineTo(200,450);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath(); 
        this.context.moveTo(200,450);
        this.context.lineTo(200,150);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath(); 
        this.context.moveTo(200,150);
        this.context.lineTo(350,150);
        this.context.stroke();
        break;
      case 6:
        this.context.beginPath(); 
        this.context.moveTo(350,150);
        this.context.lineTo(350,200);
        this.context.stroke();
        break;
      case 5:
        this.context.beginPath(); 
        this.context.arc(350, 230, 30, 0, 2 * Math.PI )
        this.context.stroke();
        break;
      case 4:
        this.context.beginPath(); 
        this.context.moveTo(350,260);
        this.context.lineTo(350,360);
        this.context.stroke();
        break;
      case 3:
        this.context.beginPath(); 
        this.context.moveTo(350,360);
        this.context.lineTo(300,410);
        this.context.stroke();
        break;
      case 2:
        this.context.beginPath(); 
        this.context.moveTo(350,360);
        this.context.lineTo(400,410);
        this.context.stroke();
        break;
      case 1:
        this.context.beginPath(); 
        this.context.moveTo(350,300);
        this.context.lineTo(400,350);
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath(); 
        this.context.moveTo(350,300);
        this.context.lineTo(300,350);
        this.context.stroke();

    }
  }

  gameOver() {
    // ... your code goes here
    this.context.clearRect(0, 0, 1200, 800 )
    let image = new Image();
    image.src = '../images/gameover.png';
     this.context.drawImage(image, 400, 300, 500, 500);
  
  }
  
  winner() {
    // ... your code goes here
    let image = new Image();
    image.src = '../images/awesome.png';
    this.context.clearRect(0, 0, 1200, 800 )
    this.context.drawImage(image, 400, 300, 500, 500);

  }
}
