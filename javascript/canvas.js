const imgWinner = new Image();
imgWinner.src = "./images/awesome.png";


class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.word = secretWord
    
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800)
    this.drawLines()
  }

  drawLines() {
    let ctx = this.context;
    for (let i = 0; i < this.word.length ; i += 1) {
    ctx.fillRect(400 + i * 35, 600, 25, 5);
   }
   ctx.beginPath();
   ctx.moveTo(200,602.5);
   ctx.lineTo(300,602.5) ;
   ctx.lineTo(250,550);
   ctx.fill();
   ctx.closePath();
   ctx.fillRect(248,200,4,400);
   ctx.fillRect(248,200,200,4);
   ctx.fillRect(446,200,4,75);
  }

  writeCorrectLetter(index) {
    let letter = this.word[index]
    this.context.font='30px Arial' 
    this.context.fillText(`${letter}`,405+index*35,590,200)  

  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '30px Arial'
    if(errorsLeft < 6){
      this.context.fillText(`${letter}`,1000-(errorsLeft+5)*40,250,500)
    }else{
      this.context.fillText(`${letter}`,1000-errorsLeft*40,210,500)
    }
}
  drawHangman(errorsLeft) {
    let ctx=this.context
    console.log(errorsLeft)
    if(errorsLeft===10){
      ctx.beginPath()
      ctx.arc(446,295,20,0,Math.PI*2,true)
      ctx.fill()
      ctx.closePath()
    }
    if(errorsLeft===9){
      ctx.fillRect(444,305,6,70)
    }
    if(errorsLeft===8){
      ctx.beginPath()
      ctx.moveTo(444,370)
      ctx.lineTo(444,375)
      ctx.lineTo(424,395)
      ctx.lineTo(424-5/1.4,395-5/1.4)
      ctx.lineTo(444,370)
      ctx.fill()
      ctx.closePath()
    }
    if(errorsLeft===7){
      ctx.beginPath()
      ctx.moveTo(450,370)
      ctx.lineTo(450,375)
      ctx.lineTo(470,395)
      ctx.lineTo(470+5/1.4,395-5/1.4)
      ctx.lineTo(450,370)
      ctx.fill()
      ctx.closePath()
    }
    if(errorsLeft===6){
      ctx.fillRect(444,335,30,5)
    }
    if(errorsLeft===5){
      ctx.fillRect(420,335,36,5)
    }
    if(errorsLeft===4){
      ctx.beginPath()
      ctx.fillStyle ="red"
      ctx.arc(438,290,3,0,Math.PI*2)
      ctx.fill()
      ctx.fillStyle="black"
      ctx.closePath()
    }
    if(errorsLeft===3){
      ctx.beginPath()
      ctx.fillStyle ="red"
      ctx.arc(454,290,3,0,Math.PI*2)
      ctx.fill()
      ctx.fillStyle="black"
      ctx.closePath()
    }
    if(errorsLeft===2){
      ctx.fillStyle="gray" 
      ctx.fillRect(470,250,4,120)
      ctx.fillStyle="black"
    }
    if(errorsLeft==1){
      ctx.fillStyle="gray"
      ctx.fillRect(470,250,100,40)
      ctx.clearRect(480,260,80,20)
      ctx.fillStyle="tomato"
      ctx.beginPath()
      ctx.arc(520,270,5,0,Math.PI*2)
      ctx.fill()
      ctx.closePath()
      ctx.fillStyle="black"

    }
  }

  gameOver() {
    const img = new Image();
    img.src = './images/gameover.png';
    this.context.drawImage(img, 100, 50, 800, 500);


  }

  winner() {
    let ctx = this.context;
    ctx.clearRect(0,0,1200,800)
    ctx.drawImage(imgWinner,100,100,1000,700)
  }
}
