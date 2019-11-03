
class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
  }

  createBoard() {
    ctx.clearRect(0, 0, hangman.width, hangman.height);

  }

  drawLines(secretWord) {
      this.ctx.lineWidth = '5';
      this.ctx.fillStyle = 'black';
      let i = 0;
      secretWord.forEach(element => {
        this.ctx.beginPath();
        this.ctx.moveTo(400+80*i, 700);
        this.ctx.lineTo(460+80*i, 700);
        this.ctx.stroke();
        this.ctx.closePath();
        i++;
      });
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }
  
  drawHangman() {
    //this.ctx.lineWidth = '5';
    //this.ctx.fillStyle = 'black';
    return[
      function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(100, 700);
      ctx.lineTo(200, 600);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(200, 600);
      ctx.lineTo(300, 700);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(300, 700);
      ctx.lineTo(100, 700);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(200, 600);
      ctx.lineTo(200, 200);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(200, 200);
      ctx.lineTo(500, 200);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(500, 200);
      ctx.lineTo(500, 250);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(500, 300, 50, 0, 2 * Math.PI, true);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(500, 350);
      ctx.lineTo(500, 500);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(500, 500);
      ctx.lineTo(600, 600);
      ctx.stroke();
      ctx.closePath();
    },
    function(){
      ctx.lineWidth = '5';
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(500, 500);
      ctx.lineTo(400, 600);
      ctx.stroke();
      ctx.closePath();
    }
    ];
  }

  gameOver() {

  }

  winner() {

  }

}

