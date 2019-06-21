
class HangmanCanvas{
  constructor () {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }
  
  createBoard(secret) {
    let start = 200;
    console.log(secret);
    for(let i=0; i < secret.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(start,800);
    this.ctx.lineTo(start + 50, 800);
    this.ctx.stroke();
    start += 75;
    }
    //  long horizontal line
  this.ctx.beginPath();
  this.ctx.lineWidth = 5;
  this.ctx.moveTo(100, 100);
  this.ctx.lineTo(500, 100);
  this.ctx.stroke();
  // small vertical line
  this.ctx.beginPath();
  // ctx.lineWidth = 3;
  this.ctx.moveTo(500, 100);
  this.ctx.lineTo(500, 170);
  this.ctx.stroke();
  // long vertical line
  this.ctx.beginPath();
  // ctx.lineWidth = 3;
  this.ctx.moveTo(100, 100);
  this.ctx.lineTo(100, 750);
  this.ctx.stroke();
  // triangle base
  this.ctx.beginPath();
  // ctx.lineWidth = 3;
  this.ctx.moveTo(100, 750);
  this.ctx.lineTo(40, 800);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.moveTo(40, 800)
  this.ctx.lineTo(160, 800);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.moveTo(160, 800);
  this.ctx.lineTo(100, 750);
  this.ctx.stroke();

  }
checkingErrors(error){

  switch (error){
  case 4: 
  //Mans Head
  this.ctx.beginPath();
  // ctx.lineWidth = 3;
  this.ctx.arc(500, 220, 50, 0, 2 * Math.PI);
  this.ctx.stroke();

  break;

  case 3:
 // body
 this.ctx.beginPath();
 // ctx.lineWidth = 3;
 this.ctx.moveTo(500, 270);
 this.ctx.lineTo(500, 500);
 this.ctx.stroke();

 break;

 case 2: 

 // left legs
 this.ctx.beginPath();
 // ctx.lineWidth = 3;
 this.ctx.moveTo(500, 500);
 this.ctx.lineTo(400, 600);
 this.ctx.stroke();

 break;

 case 1:

  // right leg
  this.ctx.beginPath();
  // ctx.lineWidth = 3;
  this.ctx.moveTo(500, 500);
  this.ctx.lineTo(600, 600);
  this.ctx.stroke();

  break;

  case 0:

   // one letter line
   this.ctx.beginPath();
   // ctx.lineWidth = 3;
   this.ctx.moveTo(200, 800);
   this.ctx.lineTo(250, 800);
   this.ctx.stroke();

   break;

}
}
}//end of class
