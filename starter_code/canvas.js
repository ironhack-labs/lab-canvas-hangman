
class HangmanCanvas{
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.ctx.clearRect(0,0, 1200, 800)
    this.secretWord = secretWord;
  }
  
  
  
}

HangmanCanvas.prototype.createBoard = function () {
    console.log('oi');
    const fieldWidth = 1200;
    const fieldHeight = fieldWidth / 4;

    const x = fieldWidth / 2; // x coordinate
    const y = fieldHeight / 2; // y coordinate
    const radius = fieldHeight / 6; // Arc radius
    const startAngle = 0; // Starting point on circle
    const secondaryColor = '#de944d';
    const primaryColor = '#b49860';
    const strokeColor = 'black';
    const twopi = 2 * Math.PI; // End point on circle
    const noventaG = Math.PI / 2; // End point on circle
    const fieldMiddleLeft = x / 2.2;



    // base hangman
    this.ctx.beginPath();
    this.ctx.moveTo(150, 650);
    this.ctx.lineTo(50, 750);
    this.ctx.lineTo(250, 750);
    this.ctx.lineTo(150, 650);
    this.ctx.lineTo(150, 150);
    this.ctx.lineTo(450, 150);
    this.ctx.lineTo(450, 250);
    this.ctx.lineWidth = 3;

    this.ctx.strokeStyle = "black";
    this.ctx.stroke();



    
    

  
};

HangmanCanvas.prototype.drawLines = function () {
    let x = 344;
    for (let i = 1; i <= this.secretWord.length; i++) {
      //lacunas
      this.ctx.beginPath();
      this.ctx.moveTo(x, 750);
      this.ctx.lineTo(x+52, 750);
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      x += 60;
    }
    

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
    // letras
    console.log(hangman.secretWord);
    var indices = [];
    var array = hangman.secretWord.toUpperCase().split('');
    var idx = array.indexOf(index);
    console.log(array);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(index, idx + 1)
    }

    indices.forEach(element => {

      let x = 344;
      for (let i = 0; i < element; i++) {
        x += 60;
      }
      this.ctx.beginPath();
      this.ctx.font = '66px Courier';
      this.ctx.fillText(index, x, 740)
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "black";
      this.ctx.stroke();
    });
    


    
        
        
      
  
    

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
    // erros
    console.log(letter);
    
    let x = 600;
    for (let i = 10; i >= errorsLeft; i--) {
      x += 60;
    }
    const fieldWidth = 1200;
    const fieldHeight = fieldWidth / 4;
    const radius = fieldHeight / 6; // Arc radius
    this.ctx.beginPath();
    this.ctx.font = '66px Courier';
    this.ctx.fillText(letter, x, 250 + radius)
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
};

HangmanCanvas.prototype.drawHangman = function (errorsLeft) {
  const fieldWidth = 1200;
  const fieldHeight = fieldWidth / 4;

  const x = fieldWidth / 2; // x coordinate
  const y = fieldHeight / 2; // y coordinate
  const radius = fieldHeight / 6; // Arc radius
  const startAngle = 0; // Starting point on circle
  
  switch (errorsLeft) {
    case 9:
      // cabeça
    this.ctx.beginPath();
    this.ctx.arc(450, 250+radius, radius, startAngle, Math.PI*2, true);
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
      break;
    case 8:
    
    //corpo
    this.ctx.beginPath();
    this.ctx.moveTo(450, (250 + radius*2));
    this.ctx.lineTo(450, (450 + radius*2));
    this.ctx.lineWidth = 3;
    this.ctx.stroke();

      break;
      case 7:
        //perninhas
    this.ctx.beginPath();
    this.ctx.moveTo(350, (550 + radius*2));
    this.ctx.lineTo(450, (450 + radius*2));
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
        break;
        case 6:
        //perninhas
    this.ctx.beginPath();
    this.ctx.moveTo(450, (450 + radius*2));
    this.ctx.lineTo(550, (550 + radius*2));
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
        break;
        case 5: 
        //bracinhos
      this.ctx.beginPath();
      this.ctx.moveTo(350, (250 + radius*2));
      this.ctx.lineTo(450, (350 + radius*2));
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
        break;
        case 4: 
        //bracinhos
      this.ctx.beginPath();
      this.ctx.moveTo(450, (350 + radius*2));
      this.ctx.lineTo(550, (250 + radius*2));
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
        break;
    default:
      break;
  }
    

    

    

};

HangmanCanvas.prototype.gameOver = function () {
  const fieldWidth = 1200;
    const fieldHeight = fieldWidth / 4;
    const radius = fieldHeight / 6; // Arc radius
    this.ctx.beginPath();
    this.ctx.font = '66px Courier';
    this.ctx.fillText('GAME OVER', 600, 350 + radius)
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
};

HangmanCanvas.prototype.winner = function () {
  const fieldWidth = 1200;
  const fieldHeight = fieldWidth / 4;
  const radius = fieldHeight / 6; // Arc radius
  this.ctx.beginPath();
  this.ctx.font = '66px Courier';
  this.ctx.fillText('SUCESSO', 600, 350 + radius)
  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "black";
  this.ctx.stroke();
};
