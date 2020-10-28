class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord=secretWord;
    this.createBoard();
  }

  createBoard() {
    // ... your code goes here
    //this.context.fillRect(0,0, 100,100);
    //console.log(this.secretWord);
    this.context.clearRect(0,0,1200,800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for(let i=1;i<=this.secretWord.length;i++){ //líneas correspondientes a las letras
      this.context.beginPath();
      this.context.lineWidth =6;
      this.context.moveTo((300+(70*i)),350);
      this.context.lineTo((350+(70*i)),350);

      this.context.closePath();
      this.context.stroke();
    }
 
  }

  writeCorrectLetter(index) {
    // ... your code goes here
   // console.log(index);
    let x = 305+(70*(index+1));
    this.context.font = '60px serif';
    this.context.fillText(this.secretWord[index], x, 340);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let x=400;
    for(let i =10;i>errorsLeft;i--)x+=60;

    this.context.font = '60px serif';
    this.context.fillText(letter, x, 100);

  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    this.context.beginPath();
    this.context.lineWidth =6;
    switch(errorsLeft){
      case 10 :
        this.context.moveTo(100,350);
        this.context.lineTo(250,350);
        break;
      case 9 :
        this.context.moveTo(100,350);
        this.context.lineTo(175,300);
        break;  
      case 8 :
        this.context.moveTo(175,300);
        this.context.lineTo(250,350);
        break;  
      case 7 :
        this.context.moveTo(175,300);
        this.context.lineTo(175,50);
        break;   
      case 6 :
        this.context.moveTo(175,50);
        this.context.lineTo(350,50);
        break;   
      case 5 :
        this.context.moveTo(350,50);
        this.context.lineTo(350,75); 
        break; 
      case 4 :
        this.context.arc(350,100,25,0,Math.PI*2);
        break;
      case 3 :
        this.context.moveTo(350,125);
        this.context.lineTo(350,200);
        break;
      case 2 :
        this.context.moveTo(350,200);
        this.context.lineTo(300,250);
        break;
      default :
        this.context.moveTo(350,200);
        this.context.lineTo(400,250);           

    }

    this.context.closePath();
    this.context.stroke();
  }

  gameOver(img) {
    // ... your code goes here
    console.log("perdiste");
    this.context.clearRect(0,0,1200,800);
    this.context.drawImage(img, 100,50);

  }

  winner(img) {
    // ... your code goes here
    console.log("ganaste");
    this.context.clearRect(0,0,1200,800);
    this.context.drawImage(img, 100,50);
  }
  
}
