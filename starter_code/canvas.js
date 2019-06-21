class HangmanCanvas{
   constructor(){
     this.ctx = document.getElementById('hangman').getContext('2d');
   }
   drawHead(){
    this.ctx.beginPath();
    this.ctx.arc(400, 300, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
   }
   drawBody(){
     this.ctx.beginPath();
     this.ctx.moveTo(400,350);
     this.ctx.lineTo(400,500);
     this.ctx.stroke();
   }
   drawLeftArm(){
     this.ctx.beginPath();
     this.ctx.moveTo(400,400);
     this.ctx.lineTo(320,420);
     this.ctx.stroke();
   }
   drawRightArm(){
    this.ctx.beginPath();
    this.ctx.moveTo(400,400);
    this.ctx.lineTo(480,420);
    this.ctx.stroke();
   }
   drawLeftLeg(){
     this.ctx.beginPath();
     this.ctx.moveTo(400,500);
     this.ctx.lineTo(320,580);
     this.ctx.stroke();
   }
   drawRightLeg(){
    this.ctx.beginPath();
    this.ctx.moveTo(400,500);
    this.ctx.lineTo(480,580);
    this.ctx.stroke();
   }
   drawBaseTriangle(){ 
    //line
    this.ctx.moveTo(400,250);
    this.ctx.lineTo(400,200);
    this.ctx.stroke();
    //line
    this.ctx.moveTo(400,200);
    this.ctx.lineTo(280,200);
    this.ctx.stroke();
    //line
    this.ctx.beginPath();
    this.ctx.moveTo(280,200);
    this.ctx.lineTo(280,600);
    this.ctx.stroke();
    //triangle
    moveTo(280,600);
    this.ctx.lineTo(260,700);
    this.ctx.lineTo(290,700);
    this.ctx.lineTo(280,600);
    this.ctx.stroke();
   }
  
   drawLines(word){
     let x = 490;
     let y =400;
     this.ctx.beginPath();
     this.ctx.moveTo(490,400);
     for(let a=0;a<word.length;a++){
       x+=50;
       this.ctx.lineTo(x,y);
       this.ctx.stroke();
       x+=20;
       this.ctx.beginPath();
       this.ctx.moveTo(x,y); 
       this.ctx.beginPath();
       this.ctx.moveTo(x,y);
     }
   }
}







