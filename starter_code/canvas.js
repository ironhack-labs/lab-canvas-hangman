function HangmanCanvas() {
  this.ctx = document.getElementById('hangman').getContext('2d');

  this.ctx.clearRect(0, 0, 1200, 800);
  
  //Support
  this.ctx.beginPath();
  this.ctx.moveTo(50, 500);
  this.ctx.lineTo(150, 500);
  this.ctx.lineTo(100, 450);
  this.ctx.lineTo(50, 500);  
  this.ctx.moveTo(100, 450);
  this.ctx.lineTo(100, 100);
  this.ctx.lineTo(300, 50);
  this.ctx.lineTo(300, 100);
  this.ctx.stroke();

  //Box
  this.ctx.beginPath();
  this.ctx.moveTo(50, 500);
  this.ctx.lineTo(350, 500);
  this.ctx.lineTo(350, 550);
  this.ctx.lineTo(50, 550);
  this.ctx.lineTo(50, 500);
  this.ctx.stroke();
}

HangmanCanvas.prototype.drawNextBodyPart = function(counter) {
  switch(counter){
    case 9: this.drawHead(); break; 
    case 8: this.drawBody(); break; 
    case 7: this.drawLegLeft(); break; 
    case 6: this.drawLegRight(); break; 
    case 5: this.drawArmLeft(); break; 
    case 4: this.drawArmRight(); break; 
    case 3: this.drawEyeLeft(); break; 
    case 2: this.drawEyeRight(); break; 
    case 1: this.drawMouth(); break; 
    case 0: this.drawTears();
  }
}

HangmanCanvas.prototype.drawHead = function() {
  this.ctx.beginPath();
  this.ctx.arc(300, 150, 50, 0, Math.PI * 2, true); 
  this.ctx.moveTo(335, 180);
  this.ctx.stroke(); 
}
HangmanCanvas.prototype.drawBody = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(300,200);
  this.ctx.lineTo(300, 350);  
  this.ctx.stroke();
}
HangmanCanvas.prototype.drawLegLeft = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(300,350);
  this.ctx.lineTo(225, 450);
  this.ctx.stroke();
}
HangmanCanvas.prototype.drawLegRight = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(300,350);
  this.ctx.lineTo(350, 450);
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawArmLeft = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(300, 225);
  this.ctx.lineTo(225, 300);
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawArmRight = function() {
  this.ctx.beginPath();
  this.ctx.moveTo(300, 225);
  this.ctx.lineTo(360, 300);
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawEyeLeft = function() {
  this.ctx.beginPath();  
  this.ctx.arc(285, 125, 5, 0, Math.PI * 2, true); 
  this.ctx.moveTo(320, 125);
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawEyeRight = function() {
  this.ctx.beginPath();  
  this.ctx.arc(315, 125, 5, 0, Math.PI * 2, true); 
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawMouth = function() {
  this.ctx.beginPath();
  this.ctx.arc(300, 180, 35, 0, Math.PI, true);  
  this.ctx.moveTo(290, 125);
  this.ctx.stroke();  
}
HangmanCanvas.prototype.drawTears = function() {
  //Left tear
  this.ctx.beginPath();
  this.ctx.moveTo(290, 140);
  this.ctx.lineTo(290, 125);
  this.ctx.stroke();
  
  //Right tear
  this.ctx.beginPath();
  this.ctx.moveTo(320, 140);
  this.ctx.lineTo(320, 125);
  this.ctx.stroke();
}