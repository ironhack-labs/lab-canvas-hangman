
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

//1200px X 800px
HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0,0, 1200, 800)
    this.ctx.lineWidth= 4.0;
    
    var y = 500;
    var x = 200; 
    //Draw Triangle
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    //Left Side
    this.ctx.lineTo((x-50), (y+50));
    //Bottom
    this.ctx.lineTo((x+100), (y+50));
    this.ctx.lineTo(x, y);
    this.ctx.stroke();

    //Draw Draw Lines
    this.ctx.beginPath();
          this.ctx.moveTo(x,y)
          this.ctx.lineTo(x, y-500);
          this.ctx.lineTo(x+300, y-500);
          this.ctx.lineTo(x+300, y-450);
          this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function () {
     
  this.ctx.beginPath();
  //Set Line Dash to 15px and Whitespace to 5 px for Each Segment
  this.ctx.setLineDash([25, 5]);
  //Start Point of Word
  this.ctx.moveTo(350, 550);
  //Length of Word in Pixels
  var x = this.secretWord.length * 30;
  this.ctx.lineTo((350 +x), 550);
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {  
        var y = 350 + (30 * index);
        this.ctx.font= '24px Arial';
        this.ctx.fillText((this.secretWord[index]), y, 550)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  // var space=0
  // var x = 700;
  // for(var i; i<letter.length; i++){
  //   this.ctx.fillText(letter[i], x+space, 50)
  //   space+=5;

  this.ctx.font= '24px Arial';
  var x = 675 + (25 * (10 - errorsLeft));
  this.ctx.fillText(letter, x, 50)

  //add switch statement for each shape corresponding to case errorsLeft
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  var y = 500;
  var x = 200; 
  this.ctx.setLineDash([]);

        // switch(shape){
        //   case 'triangle': 
        //   this.ctx.beginPath();
        //   this.ctx.moveTo(x, y);
        //   //Left Side
        //   this.ctx.lineTo((x-50), (y+50));
        //   //Bottom
        //   this.ctx.lineTo((x+100), (y+50));
        //   this.ctx.lineTo(x, y);
        //   this.ctx.stroke();
        //   break;
          
        //   case 'lines':
        //   this.ctx.beginPath();
        //   this.ctx.moveTo(x,y)
        //   this.ctx.lineTo(x, y-500);
        //   this.ctx.lineTo(x+300, y-500);
        //   this.ctx.lineTo(x+300, y-450);
        //   this.ctx.stroke();
        //   break;

        //   case 'circle':
        //   this.ctx.beginPath();
        //   this.ctx.arc(x+300, y-400, 50, 0, Math.PI*2)
        //   this.ctx.stroke();
        //   break;


        //   case 'body':
        //   this.ctx.beginPath();
        //   this.ctx.moveTo(x+300, y-350);
        //   this.ctx.lineTo(x+300, y-150);
        //   this.ctx.lineTo(x+250, y-50);
        //   this.ctx.moveTo(x+300, y-150);
        //   this.ctx.lineTo(x+350, y-50);
        //   this.ctx.stroke();
        //   break;
          
        //   default: 
        //   break;
        //   }

        switch(shape){

        case 9:
          this.ctx.beginPath();
          this.ctx.arc(x+300, y-400, 50, 0, Math.PI*2)
          this.ctx.stroke();
          break;


          case 8:
          this.ctx.beginPath();
          this.ctx.moveTo(x+300, y-350);
          this.ctx.lineTo(x+300, y-300);
          this.ctx.stroke();
          break;

          case 7: 
          this.ctx.beginPath();
          this.ctx.moveTo(x+300, y-300);
          this.ctx.lineTo(x+300, y-250);
          this.ctx.stroke();
          break;

          case 6: 
          this.ctx.beginPath();
          this.ctx.moveTo(x+300, y-250);
          this.ctx.lineTo(x+300, y-200);
          this.ctx.stroke();
          break; 

          case 5: 
          this.ctx.beginPath();
          this.ctx.moveTo(x+300, y-200);
          this.ctx.lineTo(x+300, y-150);
          this.ctx.stroke();
          break;

          case 4:
          this.ctx.moveTo(x+300, y-150);
          this.ctx.lineTo(x+275, y-75);
          this.ctx.stroke();
          break;

          case 3:
          this.ctx.moveTo(x+275, y-75);
          this.ctx.lineTo(x+265, y-50);
          this.ctx.stroke();
          break;

          case 2:
          this.ctx.moveTo(x+300, y-150);
          this.ctx.lineTo(x+325, y-75);
          this.ctx.stroke();
          break;


          case 1:
          this.ctx.moveTo(x+325, y-75);
          this.ctx.lineTo(x+335, y-50);
          this.ctx.stroke();
          break;



        }
        
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.fillText("You Lose!", 0, 50);
};

HangmanCanvas.prototype.winner = function () {
  this.ctx.fillText("You Win!", 0, 50);
};
