class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    
  }

  createBoard() {
    let ctx=this.ctx
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.fillStyle="white"
    ctx.fillRect(0,0,1200,800)
    ctx.beginPath();
    ctx.moveTo(200,700)
    ctx.lineTo(400,700)
    ctx.lineTo(300,675)
    ctx.lineTo(200,700)
    ctx.stroke()
    ctx.closePath()
  }

  drawLines() {
    let ctx=this.ctx
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.beginPath()
    let ancho=700/hangman.secretWord.length
    for (let i=0;i<hangman.secretWord.length;i++){
      ctx.moveTo(500+(ancho*i),700)
      ctx.lineTo(550+(ancho*i),700)
    }
    ctx.stroke()
    ctx.closePath()
  }

  writeCorrectLetter(index) {
    let ctx=this.ctx
    ctx.font = '48px serif';
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    let ancho=700/hangman.secretWord.length
    ctx.fillText(hangman.secretWord[index],500+(ancho*index),700-ancho,"100px")
    ctx.stroke()
  }

  writeWrongLetter(letter, errorsLeft) {
    let ctx=this.ctx
    ctx.lineWidth=10
    ctx.font = '48px serif';
    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.fillText(letter,700+(40*(10-errorsLeft)),460,"100px")
    ctx.stroke()
  }

  drawHangman(puntaje) {
    let ctx=this.ctx
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    if(puntaje===9){
    //poste lateral
    ctx.moveTo(300,675)
    ctx.lineTo(300,100)
    }
    if(puntaje===8){//techo 
    ctx.moveTo(300,100)
    ctx.lineTo(700,100)
    }
    if(puntaje===7){//cuerda
    ctx.moveTo(700,100)
    ctx.lineTo(700,170)
    }
    if(puntaje===6){//para cara
    ctx.moveTo(760,230)
    ctx.arc(700,230,60,0,Math.PI*2)
    }
    if(puntaje===5){//para cuerpo
    ctx.moveTo(700,290)
    ctx.lineTo(700,500)
    }
    if(puntaje===4){//para pierna izquierda
    ctx.moveTo(700,500)
    ctx.lineTo(600,600)
    }
    if(puntaje===3){//para pierna derecha
    ctx.moveTo(700,500)
    ctx.lineTo(800,600)
    }
    if(puntaje===2){//para mano izquierda
    ctx.moveTo(700,380)
    ctx.lineTo(600,300)
    }
    if(puntaje===1){//para mano derecha
    ctx.moveTo(700,380)
    ctx.lineTo(800,300)
    }
    ctx.stroke()
    ctx.closePath()
  }

  gameOver() {
    let ctx=this.ctx
    ctx.font = '48px serif';
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.fillStyle="green"
    ctx.fillText("PERDISTE",700,600)

  }

  winner() {
    let ctx=this.ctx
    ctx.font = '48px serif';
    ctx.lineWidth=10
    ctx.lineCap="round"
    ctx.lineJoin="round"
    ctx.fillStyle="green"
    ctx.fillText("GANASTE",700,600)
  
  }

}