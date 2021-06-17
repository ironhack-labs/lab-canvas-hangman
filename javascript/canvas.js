class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.drawLines();
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(200, 500);
    
    for(let i=0; i<this.secretWord.length; i++){
      this.context.fillRect(200 + i*50, 500, 40, 3);  
    }
  }

  writeCorrectLetter(index) {
    let guessedLetters = [];
    //let position = this.secretWord.indexOf(guessedLetters[index]);

    //Aqui estou tentando ordenar os elementos do array guessedLetters para deixar na ordem do string em this.secretWord.
    //depois inserir acima das linhas.
    guessedLetters.forEach(function(element){
      let indice = this.secretWord.indexOf(element);
      newc.push(element[indice]);
    });
    console.log(newc);

    //--------letras acertadas acima das linhas..........
    this.context.beginPath;
    this.context.moveTo(200,500);
    this.context.font = '50px Arial';
    for(let i=0; i<guessedLetters.length; i++){
      ctx.fillText(guessedLetters[i], 200+(i*50), 480);
    }
    ctx.closePath();
  }

  writeWrongLetter(letter, errorsLeft) {
    //if(errorsLeft)
    //this.context.fillText(letter, 500, 200);
  }

  drawHangman(errorsLeft) {
    if(errorsLeft === 9){
      this.context.beginPath();
      this.context.lineWidth = 2;
      this.context.moveTo(100,500);
      this.context.lineTo(140,450);
      this.context.lineTo(180,500);
      this.context.lineTo(100,500)
      this.context.stroke();
      this.context.closePath();
    }

    if(errorsLeft === 8){
      this.context.beginPath();
      this.context.lineWidth = 2;
      this.context.moveTo(140,450);
      this.context.lineTo(140,60);
      this.context.stroke();
      this.context.closePath();
    }

    if(errorsLeft === 7){
      this.context.beginPath();
      this.context.lineWidth = 2;
      this.context.moveTo(140,60);
      this.context.lineTo(350,60);
      this.context.stroke();
      this.context.closePath();
    }

    if(errorsLeft === 6){
      this.context.beginPath();
      this.context.lineWidth = 2;
      this.context.moveTo(350,60);
      this.context.lineTo(350, 100);
      this.context.stroke();
      this.context.closePath();
    }

  if(errorsLeft === 5){
    this.context.beginPath();
    this.context.lineWidth =2;
    this.context.arc(350,130,30,0,Math.PI*2);
    this.context.stroke();
    this.context.closePath();
  }

  if(errorsLeft === 4){
    this.context.beginPath();
    this.context.lineWidth = 2;
    this.context.moveTo(350,160);
    this.context.lineTo(350,300);
    this.context.stroke();
    this.context.closePath();
  }
  
  if(errorsLeft === 3){
    this.current.beginPath();
    this.current.lineWidth = 2;
    this.current.moveTo(350,300);
    this.current.lineTo(300,360);
    this.current.stroke();
    this.current.closePath();
  }
  
  if(errorsLeft === 2){
    this.current.beginPath();
    this.current.linewidth = 2;
    this.current.moveTo(350,300);
    this.current.lineTo(400,360);
    this.current.stroke();
    this.current.closePath();
  }
  
  if(errorsLeft === 1){
    this.current.beginPath();
    this.current.linewidth = 2;
    this.current.moveTo(350,200);
    this.current.lineTo(270,180);
    this.current.stroke();
    this.current.closePath();
  }
  
  if(errorsLeft === 0){
    this.current.beginPath();
    this.current.linewidth = 2;
    this.current.moveTo(350,200);
    this.current.lineTo(430,180);
    this.current.stroke();
    this.current.closePath();
  }  
}

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
