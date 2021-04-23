class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.imageAwesome = document.getElementById('awesome');
    this.imageOver = document.getElementById('over');
    this.secretWord = secretWord;
    // ... your code goes here
  }

  createBoard() {
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    this.drawLines()
    // ... your code goes here
  }

  drawLines() {
    // ... your code goes here
    for(let i = 0; i < this.secretWord.length; i++){

      this.context.beginPath()
        this.context.moveTo(200+80*i,600)
        this.context.lineTo(200+80*i,600)
        this.context.stroke

      this.context.closePath()

    }
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "60px Arial"
    this.context.textAlign = "center";
    this.context.fillText(this.secretWord[index],230 + 80 * index, 690)
  }

  writeWrongLetter(letters, errorsLeft) {
    // ... your code goes here
    this.context.clearRect(0,0,1200,100)
    this.context.font= "60px Arial"
    this.context.textAlign = "end"
    this.context.fillText(letters, 1150 , 80)
    this.drawHangman(errorsLeft)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    this.context.lineWidth = 3;
    //dibujar una línea con cada error
    switch(errorsLeft){
      case 9:
        this.context.beginPath()
          this.context.moveTo(50,700)
          this.context.lineTo(150, 700)
          this.context.lineTo(100,650)
          this.context.lineTo(50,700)
          this.context.stroke()
        this.context.closePath()
        break;
      case 8:
        this.context.beginPath()
          this.context.moveTo(100,650)
          this.context.lineTo(100, 250)
          this.context.stroke()
        this.context.closePath()
        break;
      case 7:
        this.context.beginPath()
          this.context.moveTo(100,250)
          this.context.lineTo(300, 250)
          this.context.stroke()
        this.context.closePath()
        break
      case 6:
        this.context.beginPath()
          this.context.moveTo(300,250)
          this.context.lineTo(300, 250)
          this.context.stroke()
        this.context.closePath()
        break
      case 5:
        this.context.beginPath()
          this.context.arc(300,330,30,0, Math.PI * 2)
          this.stroke()
        this.context.closePath()
        break
      case 4:
        this.context.beginPath()
          this.context.moveTo(300, 360)
          this.context.lineTo(300, 500)
          this.context.stroke()
        this.context.closePath()
        break
      case 3:
        this.context.beginPath
          this.context.moveTo(350, 500);
          this.context.lineTo(300, 600);
          this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
          this.context.moveTo(350, 500);
          this.context.lineTo(400, 600);
          this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
          this.context.moveTo(350, 390);
          this.context.lineTo(300, 480);
          this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        this.context.beginPath();
          this.context.moveTo(350, 390);
          this.context.lineTo(400, 480);
          this.context.stroke();
        this.context.closePath();
        break;
     }



  }

  gameOver() {
    // ... your code goes here
    this.context.drawImage(this.imageOver, 1200/2 - 570/2, 800/2 - 240/2, 570, 240 )

  }

  winner() {
    // ... your code goes here
    this.context.drawImage(this.imageAwesome, 1200/2 - 872/2, 800/2 - 618/2, 872, 618)
  }
}
