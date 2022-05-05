class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here

    //post

    this.context.beginPath();
    this.context.moveTo(100,400);
    this.context.lineTo(100,200);
    this.context.stroke();

    //post2

    this.context.beginPath();
    this.context.moveTo(100,200);
    this.context.lineTo(200,200);
    this.context.stroke();

    //rope

    this.context.beginPath();
    this.context.moveTo(200,200);
    this.context.lineTo(200,226);
    this.context.stroke();

    //head

    this.context.beginPath();
    this.context.arc(200,235,10,0,Math.PI*2);
    this.context.stroke();

    //body

    this.context.beginPath();
    this.context.moveTo(200,246);
    this.context.lineTo(200,290);
    this.context.stroke();

    //legR

    this.context.beginPath();
    this.context.moveTo(200,290);
    this.context.lineTo(210,310);
    this.context.stroke();

    //legL

    this.context.beginPath();
    this.context.moveTo(200,290);
    this.context.lineTo(190,310);
    this.context.stroke();

    //footR

    this.context.beginPath();
    this.context.moveTo(210,310);
    this.context.lineTo(215,310);
    this.context.stroke();

    //footL

    this.context.beginPath();
    this.context.moveTo(190,310);
    this.context.lineTo(185,310);
    this.context.stroke();

    //armR

    this.context.beginPath();
    this.context.moveTo(200,246);
    this.context.lineTo(210,270);
    this.context.stroke();

    //armL

    this.context.beginPath();
    this.context.moveTo(200,246);
    this.context.lineTo(190,270);
    this.context.stroke();


    if(hangman.checkIfLetter(this.keyCode)){
      if(!hangman.checkClickedLetters(this.keyCode)){
        hangman.writeCorrectLetter();
      }
    }

    this.context.fillstyle = 'black'//color de relleno
    this.context.font = '20px Arial'
    this.context.fillText(this.secretWord,50,45,250);
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    hangman.addCorrectLetters();
    console.log('vamos el write correct letter')
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
