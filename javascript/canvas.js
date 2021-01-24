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
    /*let w1=140
    let w2=160*/
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
    let wordArr = this.secretWord[index]
    this.context.font = "18px Arial"
    this.context.fillText(wordArr,245 + (index + 1 ) * 70,645) 
  }
