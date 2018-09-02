

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.word = secretWord;
  this.winPic = document.createElement('img')
  this.winPic.src = "./images/awesome.png"
  this.loser = document.createElement('img')
  this.loser.src = "./images/gameover.png"


  // Testing
  this.createBoard();
  this.drawLines();
  // this.writeCorrectLetter(2);
  // for (i = 0; i < 26; i++)
  //  this.writeWrongLetter("R", i);
  //this.winner();
  
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800)
  this.ctx.lineWidth= 3
  this.ctx.lineCap = "round"


};

HangmanCanvas.prototype.drawLines = function () {

  for (i=0; i < this.word.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(300 + i*70,400)
    this.ctx.lineTo(350 + i*70,400)
    this.ctx.stroke()
  }
 

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  this.ctx.font="80px serif"
  this.ctx.fillStyle="black"
  this.ctx.fillText(this.word[index],300 + index*70,395);


};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  this.ctx.font="50px serif"
  this.ctx.fillStyle="red"
  this.ctx.fillText(letter,300 + (errorsLeft % 13)*30,100 + 40 * Math.floor(errorsLeft / 13));

};

HangmanCanvas.prototype.drawHangman = function (errors) { //function(shape)
  this.ctx.fillStyle="black"

  if(errors == 9) 
    { 
      //Draw hanging rig
      this.ctx.beginPath()
      this.ctx.moveTo(60,440)
      this.ctx.lineTo(80,415)
      this.ctx.lineTo(100,440)
      this.ctx.lineTo(60,440)
      this.ctx.fill()
     }
    if(errors == 8) 
    { 
      this.ctx.beginPath()
      this.ctx.moveTo(80,420)
      this.ctx.lineTo(80,50)
      this.ctx.stroke()
    }
    if(errors == 7) 
    {
      this.ctx.beginPath()
      this.ctx.moveTo(80,50)
      this.ctx.lineTo(225,50)
      this.ctx.stroke()
    }

    if(errors == 6) 
    {
      this.ctx.beginPath()
      this.ctx.moveTo(225,50)
      this.ctx.lineTo(225,125)
      this.ctx.stroke()
    }
    if(errors == 5)
    {//draw head
      this.ctx.beginPath()
      this.ctx.arc(225,150,25,0,Math.PI*2,true)
      this.ctx.stroke()
    }
    if(errors == 4)
    {//draw 
      this.ctx.beginPath()
      this.ctx.moveTo(225,175)
      this.ctx.lineTo(225,275)
      this.ctx.stroke()
    }
      
    if(errors == 3) 
    {
      this.ctx.beginPath()
      this.ctx.moveTo(225,200)
      this.ctx.lineTo(175,225)
      this.ctx.stroke()
    }
      
    if(errors == 2) 
    {
      this.ctx.beginPath()
      this.ctx.moveTo(225,200)
      this.ctx.lineTo(175,250)
      this.ctx.stroke()
    }
      
    if(errors == 1) 
    {
      this.ctx.beginPath()
      this.ctx.moveTo(225,275)
      this.ctx.lineTo(175,350)
      this.ctx.stroke()
    }
    
    if(errors == 0) {
      this.ctx.beginPath()
      this.ctx.moveTo(225,275)
      this.ctx.lineTo(230,380)
      this.ctx.stroke()
    }
 
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.clearRect(300,0,400,300)
  this.ctx.drawImage(this.loser,300,0,400,300)      
};

HangmanCanvas.prototype.winner = function () {

  console.log("winner!")
  this.ctx.clearRect(300,0,400,300)
  this.ctx.drawImage(this.winPic,300,0,400,300)   
};  
