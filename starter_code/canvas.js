
class HangmanCanvas {
  constructor(secret) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.canvasSecretWord = theHangman.secretWord
    this.canvasSecret = secret;
    this.x = 700;
  }


  createBoard() {
    this.ctx.clearRect(0, 0, this.width, this.height)
};



drawLines() {
  console.log('drawing lines')
  var x = 400;
  var y = 500;

  
  for (var i = 0; i < this.canvasSecret.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x+40,y);
    this.ctx.closePath();
    this.ctx.stroke();
    x += 50;
     
    
  }
  


}

writeCorrectLetter(letter) {
   var x = 410;
   var y = 480;
   console.log('sss')
   var letterSpace = 40;
   this.ctx.font = "40px serif";
   this.ctx.beginPath()
   let currentLetter = this.canvasSecret.indexOf(letter)
   this.ctx.fillText(letter, x + currentLetter *(letterSpace + 10),y)

   
}

writeWrongLetter(letterOfWrong) {
  // var x  = 400;
  var y = 100;

  var letterSpacing = 500;
  this.ctx.font = '30px serif';
  this.ctx.beginPath()
  let currentLetterOfWrong = this.canvasSecret.indexOf(letterOfWrong);
  this.ctx.fillText(letterOfWrong, this.x ,y) 
  this.x += 50;
}



drawHangMan() {

     if(hangman.errorsLeft === 9) {
       
      this.ctx.beginPath()
      this.ctx.moveTo(50,480)
      this.ctx.lineTo(200,480)
      this.ctx.lineTo(120,430)
      this.ctx.closePath()
      this.ctx.stroke()

     }
      if(hangman.errorsLeft === 8) {
        this.ctx.beginPath()
        this.ctx.moveTo(120, 430)
        this.ctx.lineTo(120, 50)
        this.ctx.closePath()
        this.ctx.stroke()
      }
     if(hangman.errorsLeft === 7) {
       this.ctx.beginPath()
       this.ctx.moveTo(120, 50)
       this.ctx.lineTo(370, 50)
       this.ctx.closePath()
       this.ctx.stroke()
     }
     if(hangman.errorsLeft === 6) {
       this.ctx.beginPath()
       this.ctx.moveTo(370, 50)
       this.ctx.lineTo(370, 110)
       this.ctx.stroke()
     }
     if(hangman.errorsLeft === 5) {
       this.ctx.beginPath()
       this.ctx.arc(370, 150, 40, 2 * Math.PI, 0, false)
       this.ctx.closePath()
       this.ctx.stroke()
     }
     if(hangman.errorsLeft === 4) {
       this.ctx.beginPath()
       this.ctx.moveTo(370, 190)
       this.ctx.lineTo(370, 420)
       this.ctx.closePath()
       this.ctx.stroke()
     }
     if(hangman.errorsLeft === 3) {
       this.ctx.beginPath()
       this.ctx.moveTo(370, 420)
       this.ctx.lineTo(400, 400)
       this.ctx.closePath()
       this.ctx.stroke()
     }
     if(hangman.errorsLeft === 2) {
       this.ctx.beginPath()
       this.ctx.moveTo(370, 420)
       this.ctx.lineTo(340, 400)
       this.ctx.closePath()
       this.ctx.stroke()
     }
    if(hangman.errorsLeft === 1) {
      this.ctx.beginPath()
      this.ctx.moveTo(370, 220)
      this.ctx.lineTo(320, 200)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    if(hangman.errorsLeft === 0) {
      this.ctx.beginPath()
      this.ctx.moveTo(370, 220)
      this.ctx.lineTo(420, 200)
      this.ctx.closePath()
      this.ctx.stroke()
    }
  }


  make_base() {
    const base_image = new Image();
    base_image.onload = () => {
      this.ctx.drawImage(base_image, 200, 200, 400, 400);
    }

    base_image.src = './images/awesome.png';
  }
    




}
