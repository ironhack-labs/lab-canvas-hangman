  
  class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.canvas=document.querySelector('canvas')
    
  }
  
  createBoard() {
  //Clear de board, esto no va :v
  //document.querySelector('.game-logo').remove('active') 
  //document.querySelector('#start-game-button').remove('active') 
  //Draw canva limits
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
  this.ctx.strokeStyle = "green";
  this.ctx.lineWidth = 5;
  this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height)
  
  
}

  drawLines() {
    this.ctx.fillStyle = "black";
   // console.log(hangman.secretWord.length)
   for(let i=0;i<hangman.secretWord.length;i++){
    this.ctx.fillRect(365+(i*89),680,85,5); 
   }
  }

  writeCorrectLetter(key) {
    this.ctx.font = '48px Arial';
    let validate=true;//si pasa el for y no hay ningua coincidencia, entonces ejecutaremos writeWrongLetter con ayuda de esta variable
    
    for(let i=0;i<hangman.secretWord.length;i++){
      //console.log(`key=${key} secW=${hangman.secretWord[i]}`)
       if(hangman.secretWord[i]===key){
        validate=false;
       this.ctx.fillText(`${key}`, 390+(i*89), 675);
       }
         
       
      
    }
    if(validate){
      this.writeWrongLetter(key);
    }

  }

  writeWrongLetter(key, errorsLeft) {

    this.ctx.fillText(`${key}`,indexWrongLetter, 250);
    indexWrongLetter+=50;
    anyWrong=true;
    //hangman.addWrongLatter();
  }

  drawHangman(iteration) {
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = 3;

  switch(iteration){
    case 10:
  //draw base
  this.ctx.beginPath();
  this.ctx.moveTo(225, 570);
  this.ctx.lineTo(125,685);
  this.ctx.lineTo(325,685);
  this.ctx.lineTo(225,570);
  this.ctx.stroke();
  this.ctx.closePath();
  break;
  case 9:
  //Draw Line 1
  this.ctx.moveTo(225, 570);
  this.ctx.lineTo(225,150);
  this.ctx.stroke();
  break;
  case 8:
  //Draw Line 2
  this.ctx.moveTo(225, 150);
  this.ctx.lineTo(470,150);
  this.ctx.stroke();
  break;
  case 7:
  //Draw Head
  this.ctx.beginPath();
  this.ctx.arc(470, 285, 40, 0, Math.PI * 2);
  this.ctx.stroke();
  this.ctx.closePath();
  break;
  case 6:
  //Draw Body
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(470,470);
  this.ctx.stroke();
  break;
  case 5:
  //Draw Left Hand
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(406,404);
  this.ctx.stroke();
  break;
  case 4:
  //Draw Right Hand
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(534,404);
  this.ctx.stroke();
  break;
  case 3:
  //Draw Left Leg
  this.ctx.moveTo(470, 470);
  this.ctx.lineTo(430,545);
  this.ctx.stroke();
  break;
  case 2:
  //Draw Right Leg
  this.ctx.moveTo(470, 470);
  this.ctx.lineTo(510,545);
  this.ctx.stroke();
  break;
  case 1:
  //Draw Line 3
  this.ctx.moveTo(470, 150);
  this.ctx.lineTo(470,245);
  this.ctx.stroke();
  break;
  case 0:
  this.gameOver();
  break;
  }
  }

  gameOver() {
  console.log("You are the looser!!!");
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
  this.ctx.strokeStyle = "red";
  this.ctx.lineWidth = 5;
  this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height)
  //const img = new Image(); 
 // img.src = 'http://pngimg.com/uploads/game_over/game_over_PNG15.png';
//  this.ctx.drawImage(img,450,450,50,50);

var image = document.getElementById('game-over');
this.ctx.drawImage(image,0,0,this.canvas.width,this.canvas.height)
//this.ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);

//console.log("game over")
  }

  winner() {
  setTimeout(() => {console.log("You are the winner!!!");
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(0, 0,this.canvas.width,this.canvas.height);
  this.ctx.strokeStyle = "yellow";
  this.ctx.lineWidth = 5;
  this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height)
  var image = document.getElementById('awesome');
  this.ctx.drawImage(image,0,0,this.canvas.width,this.canvas.height)
  youWin=true;
},500);//se le agrega un retardo para que permita ver la palabra completa antes de ser borrada


  }



}