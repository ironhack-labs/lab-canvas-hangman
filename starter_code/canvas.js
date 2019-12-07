class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.ctx.strokeRect(0, 0, 1200, 800);
  }

  drawLines() {

    //THE HANG
    this.ctx.beginPath()
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(240,200)
    this.ctx.lineTo(540,200)
    this.ctx.lineTo(540,270)
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(170,690)
    this.ctx.moveTo(240,600)
    this.ctx.lineTo(310,690)
    this.ctx.lineTo(170,690)
    this.ctx.stroke();
    this.ctx.closePath();


    //PARA VISUALIZAR CASO PRECISE
    // this.ctx.moveTo(360, 690)
    // this.ctx.lineTo(410, 690)
    // this.ctx.moveTo(460, 690)
    // this.ctx.lineTo(520, 690)
    // this.ctx.moveTo(570, 690)
    // this.ctx.lineTo(630, 690)
    // this.ctx.moveTo(680, 690)
    // this.ctx.lineTo(740, 690)
    // this.ctx.moveTo(790, 690)
    // this.ctx.lineTo(850, 690)
    // this.ctx.moveTo(900, 690)
    // this.ctx.lineTo(960, 690)
    // this.ctx.moveTo(1010, 690)
    // this.ctx.lineTo(1070, 690)
    // this.ctx.moveTo(1120, 690)
    // this.ctx.lineTo(1170, 690)
    // this.ctx.stroke()
    // this.ctx.closePath()

     //SECRET WORD SPACES
    //  let x = 360;
    //  let y = 690;
    //  for(let i = 0; i < this.secretWord; i += 0){
    //    this.ctx.beginPath();
    //    this.ctx.moveTo(x, y)
    //    this.ctx.lineTo(x + 50, y)
    //    this.ctx.stroke()
    //    this.ctx.closePath();
    //    x += 60
    //  }

  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman() {
    //HANGMAN HEAD
    this.ctx.beginPath();
    // this.ctx.moveTo(540,270) //ponto inicial forca
    this.ctx.arc(540, 330, 60, 0, Math.PI * 2);
    this.ctx.fillStyle = "black";
    this.ctx.fill()
    this.ctx.closePath();

    //RIGTH EYE
    this.ctx.beginPath();
    this.ctx.arc(520, 300, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "yellow";
    this.ctx.fill()
    this.ctx.closePath();
    //COLOR
    this.ctx.beginPath();
    this.ctx.arc(520, 295, 5, 0, Math.PI * 2);
    this.ctx.fillStyle = "blue";
    this.ctx.fill()
    this.ctx.closePath();

    //LEFT EYE
    this.ctx.beginPath();
    this.ctx.arc(560, 300, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "yellow";
    this.ctx.fill()
    this.ctx.closePath();
    //COLOR 
    this.ctx.beginPath();
    this.ctx.arc(560, 295, 5, 0, Math.PI * 2);
    this.ctx.fillStyle = "blue";
    this.ctx.fill()
    this.ctx.closePath();

    //NOSE
    this.ctx.beginPath();
    this.ctx.arc(540, 333, 10, Math.PI * 1, 0);
    this.ctx.fillStyle = "orange";
    this.ctx.fill()
    this.ctx.closePath();

    //MOUTH
    this.ctx.beginPath();
    this.ctx.arc(540, 368, 22, Math.PI * 1, 0);
    this.ctx.fillStyle = "tomato";
    this.ctx.fill()
    this.ctx.closePath();
    
    
    //HANGMAN BODY
    this.ctx.beginPath()
    this.ctx.moveTo(540, 390)
    this.ctx.lineTo(540, 490)

    //HANGMAN RIGTH ARM
    this.ctx.moveTo(540, 440)
    this.ctx.lineTo(480, 410)
    

    //HANGMAN LEFT ARM
    this.ctx.moveTo(540, 440)
    this.ctx.lineTo(600, 410)

    //HANGMAN RIGTH LEG
    this.ctx.moveTo(540, 490)
    this.ctx.lineTo(480, 550)

    //HANGMAN LEFT LEG
    this.ctx.moveTo(540, 490)
    this.ctx.lineTo(600, 550)


    this.ctx.stroke()
    this.ctx.closePath()

    //LETTERS (PENSAR EM ALGO PARA PASSARMOS UMA VARIÁVEL NO "fillText" quando a letra for errada)

    this.ctx.font = "60px Comic Sans MS";
    this.ctx.fillStyle = "yellowgreen";
    this.ctx.textAlign = "center";
    this.ctx.fillText("A", 800, 250);

    this.ctx.font = "60px Comic Sans MS";
    this.ctx.fillStyle = "yellowgreen";
    this.ctx.textAlign = "center";
    this.ctx.fillText("B", 850, 250);
  }

  gameOver() {

  }

  winner() {

  }

  
}

