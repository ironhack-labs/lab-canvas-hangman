class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.querySelector("#hangman");
    // ... your code goes here
    this.secretWord = secretWord;
    this.width = this.canvas.style.width;
    this.height = this.canvas.style.height;
    this.gameoverSound = new Audio();
    this.gameoverSound.src = '../songs/NFF-zomboid.wav';
    this.laserSound = new Audio();
    this.laserSound.src = "../songs/NFF-laser-zapping.wav";
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
      this.context.font = "50px Arial";
      this.context.fillText(hangman.secretWord[index], 365 + (index * 70), 500);
  }

  writeWrongLetter(letter, errorsLeft) {

      this.context.font = "60px Arial";
      this.context.fillText(letter, 500 + 70 * errorsLeft, 50);

      this.drawHangman(errorsLeft);

  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    console.log(errorsLeft);
    this.context.setLineDash([]);
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
    setTimeout(
      function(){
        let image = document.querySelector(".loser");
        hangmanCanvas.context.clearRect(0, 0, 1200, 800 )
         hangmanCanvas.context.drawImage(image, 200, 200, 800,400);
         hangmanCanvas.gameoverSound.play();
      }, 1000
    )
     
    }
    
    winner() {
      setTimeout(
        function(){
          let image = document.querySelector(".winner");
          image.src = '../images/awesome.png';
          hangmanCanvas.context.clearRect(0, 0, 1200, 800 )
          hangmanCanvas.context.drawImage(image, 200, 100, 800,600);
          hangmanCanvas.laserSound.play();
        }, 1000
      )

  }
}
