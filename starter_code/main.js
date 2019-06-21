let game = new Hangman();
let canvas = new HangmanCanvas();
let count =0;
game.setWord();


document.getElementById('start-game-button').onclick = function () {
  //hide title and start button
  let img=document.getElementsByClassName('game-logo');
  img[0].style.display = "none";
  let startButton = document.getElementById('start-game-button');
  startButton.style.display = "none";

  canvas.drawLines(game.secretWord,game.guessedLetters);
}

function drawFigure(){
  if(game.errorsLeft == 7){
    return;
  }else if(game.errorsLeft ==6){
    canvas.drawBaseTriangle();
  }else if(game.errorsLeft ==5){
    canvas.drawHead();
  }else if(game.errorsLeft==4){
    canvas.drawBody();
  }else if(game.errorsLeft ==3){
    canvas.drawLeftArm();
  }else if(game.errorsLeft ==2){
    canvas.drawRightArm();
  }else if(game.errorsLeft ==1){
    canvas.drawRightLeg();
  }else if(game.errorsLeft ==0){
    canvas.drawLeftLeg();
  }else return;
}

function losePointsDrawFigure(e){
  game.addWrongLetter();
  drawFigure();
  game.letters += e.key;
  setTimeout(function(){ 
  if (game.checkGameOver()) {
  alert("You lost");
  document.location.reload();
  }
},1000);
 
}
function drawLinesAndLetters(word,guessedLetter){
  let x = 490;
  let y =400;
  canvas.ctx.beginPath();
  canvas.ctx.moveTo(490,400);
  for(let a=0;a<word.length;a++){
    x+=50;
    if(guessedLetter.includes(word[a])){
      console.log(guessedLetter);
      console.log('here');
      canvas.ctx.font = "30px Arial";
      canvas.ctx.fillText(word[a], x-20, y-10);
      canvas.ctx.stroke();
    }
    canvas.ctx.lineTo(x,y);
    //this.ctx.stroke();
    x+=20;
    canvas.ctx.beginPath();
    canvas.ctx.moveTo(x,y);
    canvas.ctx.beginPath();
    canvas.ctx.moveTo(x,y); 
    console.log(guessedLetter); 
  }
}
$(document).keydown(function(e) {  
  
  if (game.checkIfLetter(e)) {
    if ( game.secretWord.includes(e.key)) {
        game.letters += e.key;
       if(game.checkClickedLetter(e.key)){
        game.addCorrectLetter(e.key);
        drawLinesAndLetters(game.secretWord,game.guessedLetters);
       }
       setTimeout(function(){if (game.checkWinner()) {
          alert("You won");
          document.location.reload();
       }},1000);
    } else {
      losePointsDrawFigure(e);
    }
  }

});

