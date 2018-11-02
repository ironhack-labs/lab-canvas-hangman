
class GameAnimator{
  constructor(){
    this.ctx = document.getElementById('game').getContext('2d');
  }

  drawLines(){
    let numberOfLines = this.secretWord.length;
    this.ctx.lineWidth = 8;
    this.ctx.beginPath();
    this.ctx.moveTo(500, 500);
    this.ctx.lieneTo(550, 500);
    this.ctx.stroke;
  }
}
// when trying to copy Nick's canva instructions my game broke :(  

