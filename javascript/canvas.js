class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord
  }
  createBoard() {
    this.context.clearRect(0,0,1200,800)
    let ctx = this.context
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(100,650)
      ctx.lineTo(220,650)
      ctx.lineTo(160,600)
      ctx.lineTo(100,650)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(160,600)
      ctx.lineTo(160,180)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(160,180)
      ctx.lineTo(400,180)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(400,180)
      ctx.lineTo(400,250)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.arc(400,300,50,0,Math.PI*2,true)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(400,345)
      ctx.lineTo(400,500)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(400,500)
      ctx.lineTo(380,560)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(400,500)
      ctx.lineTo(420,560)
      ctx.stroke()
      ctx.closePath()
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = 'black'
      ctx.moveTo(360,430)
      ctx.lineTo(440,430)
      ctx.stroke()
      ctx.closePath()
  }
  drawLines() {  
    let x1=250
    let x2=290
    
    for(let i=0; i <this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.lineWidth = 5
      this.context.strokeStyle = 'black'
      this.context.moveTo(x1,650)
      this.context.lineTo(x2,650)
      this.context.stroke()
      this.context.closePath()
              x1+=70
              x2+=70
            
    }
  }
  writeCorrectLetter(index) {
    const guessedLetter = this.secretWord[index];
        for (let i = 0; i < this.secretWord.length; i++) {
            if (this.secretWord[i] === guessedLetter) {
                this.context.fillText(guessedLetter.toUpperCase(), 425 + i * 75, 645);
            }
        }
      }

   writeWrongLetter(letter, errorsLeft) {
      const letterOrder = 10 - errorsLeft;
      this.context.fillText(letter.toUpperCase(), 450 + letterOrder * 50, 250);
    }

    drawHangman(errorsLeft) {
        // ... your code goes here
    }
    gameOver() {
        // ... your code goes here
        const gameOverImg = new Image();
        gameOverImg.src = '../images/gameover.png';
        gameOverImg.onload = () => {
            setTimeout(() => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(gameOverImg, 315, 150);
            }, 1000);
        };
    }
    winner() {
        // ... your code goes here
        const winnerImg = new Image();
        winnerImg.src = './images/awesome.png';
        winnerImg.onload = () => {
            setTimeout(() => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.drawImage(winnerImg, 164, 50);
            }, 1000);
        };
    }
}