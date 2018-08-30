
class HangmanCanvas{

    constructor(){
      this.ctx = document.getElementById('hangman').getContext('2d');
      this.imageWin = new Image()
      this.imageOver = new Image()
    }
    
    createBoard() {
      this.ctx.clearRect(0, 0,1200,800);
    };

    drawLinesfunction () {
      this.ctx.beginPath()
      this.ctx.arc(100,50,30,0,100,false)
      this.ctx.stroke()
    };

    writeCorrectLetter(index) {

    };

    writeWrongLetter(letter, errorsLeft) {

    };

    drawHangman(shape) {

    };

    gameOver() {
      var self = this

      self.imageOver.src = './images/gameover.png';
      self.imageOver.onload = function(){
        self.ctx.drawImage(self.imageOver,0,0,400,400)
      }

    };

    winner() {
      
      var self = this

      self.imageWin.src = './images/awesome.png';
      self.imageWin.onload = function(){
        self.ctx.drawImage(self.imageWin,0,0,400,400)
      }


    };


}