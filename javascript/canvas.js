class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.values = document.getElementById('hangman');
    this.secretWord = secretWord;
  }
  
  createBoard() {
    // ... your code goes here
    const varWidth = this.values.width;  
    const varHeight = this.values.height;  
    this.context.clearRect(0, 0, varWidth, varHeight)
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let xLetterIni = 230;
    let xLetterFin = 275;

    this.context.beginPath()
      this.context.moveTo(0 , 800)
      this.context.lineTo(110 , 740)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
      this.context.moveTo(110 , 740)
      this.context.lineTo(210 , 800)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
      this.context.moveTo(0 , 800)
      this.context.lineTo(210 , 800)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
      this.context.moveTo(110 , 740)
      this.context.lineTo(110 , 0)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
      this.context.moveTo(110 , 0)
      this.context.lineTo(410 , 0)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
      this.context.moveTo(410 , 0)
      this.context.lineTo(410 , 80)
      this.context.lineWidth = 5
      this.context.stroke()
    this.context.closePath()

    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath()
      this.context.moveTo(xLetterIni , 770)
      this.context.lineTo(xLetterFin , 770)
      this.context.lineWidth = 5
      this.context.stroke()
      this.context.closePath()

      xLetterIni += 65; 
      xLetterFin += 65; 
    }
  }
  
  writeCorrectLetter(index) {
    // ... your code goes here
    let posicion = this.secretWord.indexOf(index)
    let count = 0;
    while (posicion != -1) {
    count++;
    this.context.font = "48px arial"
    this.context.fillStyle = "black"
    this.context.fillText(`${index}`, 230 + 65 * posicion, 760)
    posicion = this.secretWord.indexOf(index, posicion + 1)
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    for (let i = 0; i < letter.length; i++) {
      this.context.font = "48px arial"
      this.context.fillStyle = "black"
      this.context.fillText(`${letter[i]}`, 700 + 40 * i, 100)
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    console.log(errorsLeft);
    switch (errorsLeft) {
      case 9:
        this.context.beginPath()
        this.context.arc(410, 160, 80, 0, 2 * Math.PI,)
        this.context.lineWidth = 5
        this.context.strokeStyle = "black"
        this.context.stroke()
        this.context.closePath()
      break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(410 , 240)
        this.context.lineTo(410 , 390)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 7:
        this.context.beginPath()
        this.context.moveTo(410 , 390)
        this.context.lineTo(410 , 540)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 6:
        this.context.beginPath()
        this.context.moveTo(410 , 540)
        this.context.lineTo(330 , 620)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 5: 
        this.context.beginPath()
        this.context.moveTo(410 , 540)
        this.context.lineTo(490 , 620)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(410 , 340)
        this.context.lineTo(330 , 420)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 3:
        this.context.beginPath()
        this.context.moveTo(410 , 340)
        this.context.lineTo(490 , 420)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 2:
        this.context.beginPath()
        this.context.moveTo(370 , 110)
        this.context.lineTo(400 , 140)
        this.context.lineWidth = 5
        this.context.stroke()

        this.context.moveTo(400 , 110)
        this.context.lineTo(370 , 140)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 1:
        this.context.beginPath()
        this.context.moveTo(420 , 110)
        this.context.lineTo(450 , 140)
        this.context.lineWidth = 5
        this.context.stroke()

        this.context.moveTo(450 , 110)
        this.context.lineTo(420 , 140)
        this.context.lineWidth = 5
        this.context.stroke()
        this.context.closePath()
      break;
      case 0:
        this.context.beginPath()
        this.context.arc(410, 200, 30, Math.PI, 2 * Math.PI,)
        this.context.lineWidth = 5
        this.context.strokeStyle = "black"
        this.context.stroke()
        this.context.closePath()
      break;
    }
  }

  gameOver() {
    // ... your code goes here
    let img = new Image();
    img.src = "/1_Week_2/2_Day_3/lab-canvas-hangman/images/gameover.png";
    this.context.drawImage(img, 650, 250, 500, 500);
  }

  winner() {
    // ... your code goes here
    let img = new Image();
    img.src = "/1_Week_2/2_Day_3/lab-canvas-hangman/images/awesome.png";
    this.context.drawImage(img, 650, 250, 500, 500);
  }
}
