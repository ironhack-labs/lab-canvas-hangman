class HangmanCanvas {
    constructor(secretWord) {
      this.ctx = document.getElementById('hangman').getContext('2d');
      this.secretWordArr = secretWord.split()
    }
  
    createBoard() {
      this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height)
      this.drawLines()
    }
  
    drawLines() {
      this.x = 300
      this.ctx.beginPath()
      this.secretWordArr.forEach(letra => {
        this.ctx.moveTo(this.xx, 700)
        this.ctx.lineTo(this.xx+50, 700)
        this.x+=30
      });
    }
  
    writeCorrectLetter(index) {
      this.x = 300 +(50 * index)
      this.ctx.font = "40px Baloo Tamma 2"
      this.ctx.fillText(this.secretWordArr[index], this.x, 700)
  
    }
  
    writeWrongLetter(letter) {
      this.x = 550
      this.ctx.font = "30px Baloo Tamma 2"
      this.ctx.fillText(letter, this.x, 200)
      this.x += 30
    }
  
    drawHangman(errorsLeft) {
      this.ctx.lineWidth = 3
      switch(errorsLeft){
          case 9:
            this.ctx.beginPath()
            this.ctx.moveTo(100, 700)
            this.ctx.lineTo(300, 700)
            this.ctx.stroke()
              break;
          case 8:
            this.ctx.beginPath()
            this.ctx.moveTo(100, 700)
            this.ctx.lineTo(200, 600)
            this.ctx.stroke()
              break;
          case 7:
            this.ctx.beginPath()
            this.ctx.moveTo(300, 700)
            this.ctx.lineTo(200, 600)
            this.ctx.stroke()
              break;
          case 6:
            this.ctx.beginPath()
            this.ctx.moveTo(200, 600)
            this.ctx.lineTo(200, 100)
            this.ctx.stroke()
            break;
          case 5:
            this.ctx.beginPath()
            this.ctx.moveTo(200, 100)
            this.ctx.lineTo(500, 100)
            this.ctx.stroke()
              break;
          case 4:
            this.ctx.beginPath()
            this.ctx.moveTo(500, 100)
            this.ctx.lineTo(500, 150)
            this.ctx.stroke()
              break;
          case 3:
            this.ctx.beginPath()
            this.ctx.arc(500, 210, 60, 0, Math.PI * 2)
            this.ctx.stroke()
              break;
          case 2: 
            this.ctx.beginPath()
            this.ctx.moveTo(500, 270)
            this.ctx.lineTo(500, 450)
            this.ctx.stroke()
              break;
          case 1:
            this.ctx.beginPath()
            this.ctx.moveTo(500, 450)
            this.ctx.lineTo(400, 600)
            this.ctx.stroke()
              break;
          case 0:
            this.ctx.beginPath()
            this.ctx.moveTo(500, 450)
            this.ctx.lineTo(600, 600)
            this.ctx.stroke()
              break;
      }
    }
  
    gameOver() {
        this.gameOverImg = new Image()
        this.gameOverImg.src = "./images/gameover.png"
        this.ctx.clearRect(0, 0, ctx.width, ctx.height)
        this.ctx.drawImage(this.gameOverImg, 100, 100, 700, 1100)
    }
  
    winner() {
      this.winnerImg = new Image()
      this.winnerImg.src = "./images/awesome.png"
      this.ctx.clearRect(0, 0, ctx.width, ctx.height)
      this.ctx.drawImage(this.winnerImg, 100, 100, 700, 1100)
    }
  }
  