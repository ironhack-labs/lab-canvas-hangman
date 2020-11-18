class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.startLines = 150;
    this.lineLength =40;
    this.totalLetterLine=60;
    this.startWrongLettersX = 625;
  }

  createBoard() {
    this.context.clearRect(0,0,1200,800);
    this.context.fill();
    this.context.closePath();
    this.context.lineWidth=3;
    this.context.strokeStyle='black';
    this.context.beginPath();
    this.context.moveTo(75,700);
    this.context.lineTo(75,300);
    this.context.stroke();
    this.context.moveTo(75,300);
    this.context.lineTo(200,300);
    this.context.stroke();
    this.context.moveTo(200,300);
    this.context.lineTo(200,325);
    this.context.stroke();
    this.context.closePath();
  }

  drawLines() {
    this.context.strokeStyle='black';
    this.context.lineWidth=4;
    console.log(hangman.secretWord)
    for (let i=0;i<hangman.secretWord.length;i++){
      this.context.beginPath();
      this.context.moveTo(this.startLines,700);
      this.context.lineTo(this.startLines+this.lineLength, 700);
      this.context.stroke();
      this.startLines+=this.totalLetterLine;
      this.context.closePath();
    }
    this.startLines=150;
  }

  writeCorrectLetter(letter) {
     this.context.fillStyle='black';
     this.context.font='40px Arial';
     var splitted = hangman.secretWord.split('');
     var arr2 = [];

     for (let i=0; i<splitted.length;i++){
       if (splitted[i]==letter){
          this.context.fillText(letter, 11+this.startLines+(i*this.totalLetterLine), 695)
       }
     }
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.fillStyle='black';
    this.context.font='40px Arial';
    this.context.fillText(letter,this.startWrongLettersX,350);
    this.startWrongLettersX+=this.totalLetterLine-20;
  }

  drawHangman(errorsLeft) {
    this.context.strokStyle='black';
    this.context.lineWidth=4;
    switch(errorsLeft){
      case 9:
        this.context.beginPath();
        this.context.arc(200,365,40,Math.PI/2, 3*Math.PI/2);
        this.context.stroke();
        break;
      case 8:
        this.context.beginPath();
        this.context.arc(200,365,40,Math.PI/2, 3*Math.PI/2,true);
        this.context.stroke();
        break;
      case 7:
        this.context.beginPath();
        this.context.moveTo(200,405);
        this.context.lineTo(200,500);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(200,500);
        this.context.lineTo(250,575);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(200,500);
        this.context.lineTo(150,575);
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        this.context.beginPath();
        this.context.moveTo(200,450);
        this.context.lineTo(250,475);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(200,450);
        this.context.lineTo(150,475);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        this.context.beginPath();
        this.context.fillStyle='black';
        this.context.fillRect(185,350,10,10);
        this.context.fillRect(210,350,10,10);
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(185,375);
        this.context.lineTo(220,375);
        this.context.stroke();
        break;
      case 0:
        this.context.beginPath();
        this.context.strokeStyle='rgb(255,0,0)';
        this.context.moveTo(130,405);
        this.context.lineTo(260,405);
        this.context.stroke();
        this.gameOver();
        break;
  }};

  gameOver() {
    // ... your code goes here
    var baseImg = new Image(400,500);
    baseImg.src ='/images/gameover.png';
    baseImg.addEventListener('load', ()=>{
      this.context.drawImage(baseImg,250,350);
    })    
  }

  winner() {
    // ... your code goes here
    var baseImg = new Image(400,500)
    baseImg.src = '/images/awesome.png';
    baseImg.addEventListener('load', ()=> {
      this.context.drawImage(baseImg,200,200);
    })
  }
  }