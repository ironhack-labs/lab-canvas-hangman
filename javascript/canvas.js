class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    this.context.clearRect(0, 0, 1200, 800)
    console.log(hangman.secretWord)
    this.drawLines() 
  }

  drawLines() {
    let x = 250 ;
    for(let i=0 ; i< hangman.secretWord.length ; i++){
      this.context.beginPath() ;
      this.context.moveTo(x, 700) ;
      this.context.lineTo(x+50, 700) ;
      this.context.closePath ;
      this.context.stroke() ;
      x += 50 + 25;
    }
  }

  writeCorrectLetter(index) {
    let x2 = 260;
    let uppercased = index.toUpperCase();
    for(let i=0; i<hangman.secretWord.length; i++){
      if(hangman.secretWord[i] === index){
      this.context.font = "50px Calibri"
      this.context.fillText(`${uppercased}`, x2 + (i)*75 , 695)
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {
    let xWrong = 600
    let uppercased = letter.toUpperCase();
    this.context.font = "50px Calibri"
    if(errorsLeft >= 5){
      this.context.fillText(`${uppercased}`, xWrong + (10-errorsLeft)*75 , 200)
    }
    else{
      this.context.fillText(`${uppercased}`, xWrong + (5-errorsLeft)*75 , 260)
    }
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft){
      case 9 : 
        this.context.beginPath() ;
        this.context.moveTo(25, 700) ;
        this.context.lineTo(225, 700) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 8 : 
        this.context.beginPath() ;
        this.context.moveTo(25, 700) ;
        this.context.lineTo(125, 650) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 7 : 
        this.context.beginPath() ;
        this.context.moveTo(225, 700) ;
        this.context.lineTo(125, 650) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 6 : 
        this.context.beginPath() ;
        this.context.moveTo(125, 650) ;
        this.context.lineTo(125, 100) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 5 : 
        this.context.beginPath() ;
        this.context.moveTo(125, 100) ;
        this.context.lineTo(425, 100) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 4 : 
        this.context.beginPath() ;
        this.context.moveTo(425, 100) ;
        this.context.lineTo(425, 150) ;
        this.context.closePath ;
        this.context.stroke() ;
        break;
      case 3 : 
        this.context.beginPath() ;  
        this.context.arc(425, 200, 50, 0, Math.PI * 2) ;
        this.context.stroke() ;
        this.context.closePath ;
        break; 
      case 2 : 
        this.context.beginPath() ;
        this.context.moveTo(425, 250) ;
        this.context.lineTo(425, 400) ;
        this.context.closePath ;
        this.context.stroke() ;
        break; 
      case 1 : 
        this.context.beginPath() ;
        this.context.moveTo(425, 400) ;
        this.context.lineTo(375, 475) ;
        this.context.closePath ;
        this.context.stroke() ;
        break; 
      case 0 : 
        this.context.beginPath() ;
        this.context.moveTo(425, 400) ;
        this.context.lineTo(475, 475) ;
        this.context.closePath ;
        this.context.stroke() ;
        break; 
    }
  }

  gameOver() {
    const img = new Image();
    img.src = './images/gameover.png';
    this.context.drawImage(img, 100,100);
  }

  winner() {
    const imgWin = new Image();
    imgWin.src = './images/awesome.png';
    imgWin.onload = () => this.context.drawImage(imgWin, 100, 100);
    console.log("you are awesome")
  }
}
