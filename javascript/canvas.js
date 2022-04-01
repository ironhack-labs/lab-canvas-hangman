class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById('hangman');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    // clearCanvas()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    // step = 0    
    this.context.fillStyle = 'black';
    this.context.font = '48px Monospace';    
    this.context.strokeStyle = 'green';
    this.context.lineWidth = 10; 
    this.context.beginPath();
    this.context.moveTo(175+350, 225);
    this.context.lineTo(5+350, 225);
    this.context.moveTo(40+350, 225);
    this.context.lineTo(25+350, 5);
    this.context.lineTo(100+350, 5);
    this.context.lineTo(100+350, 25);
    this.context.stroke();    
    this.drawLines();
    this.writeStaticLetters()
  }

  drawLines() {
    // ... your code goes here
    // let addLines = "_ ".repeat(hangman.secretWord.length);
    this.context.font = '48px Monospace';        
    let addLines = (hangman.secretWord.split('')).map( x=> `_`).join(' ');
    this.context.fillText(addLines,350,300);
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    // hangman.
    let addLines = '';
    let letter = hangman.secretWord[index];
    // console.log(hangman.secretWord);
    // console.log(letter);
    // let drawString = (hangman.secretWord.split('')).map( x => (x === letter ? letter : ``));
    // console.log(`[${drawString}] ${drawString.length}`);
    // addLines = drawString.join('  ');
    // // addLines = drawString.join(' ');
    // console.log(`Drawing: [${addLines}] ${addLines.length}`);
    addLines = (hangman.secretWord.split('')).map( x=> ( x === letter ? letter : `_`)).join(' ');
    this.context.font = '48px Monospace';       
    this.context.fillStyle = 'black';
    // console.log(`Drawing: [${addLines}] ${addLines.length}`);
    // console.log(`Splitting it: ${addLines.split('')}`);
    this.context.fillText(addLines,350,300); 
  }

  writeStaticLetters(){
    let letterRow = [];
    this.context.font = '32px Monospace';    
    this.context.fillText("Letters Guessed: ",30,30);    
    this.context.fillStyle = 'rgba(211, 211, 211, 0.5)'; 
    letterRow[0] = 'a b c d e f g h ';
    letterRow[1] = 'i j k l m n o p q ';
    letterRow[2] = 'r s t u v w x y z';
    this.context.fillText(letterRow[0],30,65);
    this.context.fillText(letterRow[1],30,115);   
    this.context.fillText(letterRow[2],30,165);      
  }

  writeWrongLetter(letter, errorsLeft) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  this.context.font = '32px Monospace';    

  // !!!!!
  // 8 characters to new-line
  // !!!!!

  

  let redLetter = alphabet.map( x=> ( x === letter ? letter : ` `)); //.join('')
  // let letterGuess = '              h';
  this.context.fillStyle = 'rgba(255, 0, 0, 1)'; 
  let printString;
  // console.log(redLetter.indexOf(letter));
  if(redLetter.indexOf(letter) <= 8 && redLetter.indexOf(letter) >= 0){
    
    printString = redLetter.slice(0,-10).join(' ');
    // redLetter.slice(8).join('');
    // console.log(redLetter);
    // console.log(`[${printString}]`);
    this.context.fillText(`${printString}`,30,65);
  }else if(redLetter.indexOf(letter) <= 16 && redLetter.indexOf(letter) >= 9){
    // redLetter.slice(8).join('');
    printString = redLetter.slice(8,17).join(' ');
    // console.log(redLetter);
    // console.log(`[${printString}]`);
    this.context.fillText(`${printString}`,30,115);   
  }else{
    // redLetter.slice(8).join('');
    printString = redLetter.slice(-9).join(' ');
    // console.log(redLetter);
    // console.log(`[${printString}]`);
    this.context.fillText(`${printString}`,30,165);  
  }
  // this.context.fillText(redLetter,30,65);

  this.context.strokeStyle = 'black';
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    let part = (10-errorsLeft);
    // console.log(part);
    // console.log(errorsLeft);
    this.context.fillStyle = 'green';
    this.context.strokeStyle = 'green';
    
    switch(part) {
    case 1: //head
       this.context.lineWidth = 5;
       this.context.beginPath();
       this.context.arc(100+350, 50, 25, 0, Math.PI*2, true);
       this.context.closePath();
       this.context.stroke();
      break;
    
    case 2: //body
       this.context.beginPath();
       this.context.moveTo(100+350, 75);
       this.context.lineTo(100+350, 140);
       this.context.stroke();
      break;

    case 3: //right arm
       this.context.beginPath();
       this.context.moveTo(100+350, 85);
       this.context.lineTo(60+350, 100);
       this.context.stroke();
      break;

    case 4: //left arm
       this.context.beginPath();
       this.context.moveTo(100+350, 85);
       this.context.lineTo(140+350, 100);
       this.context.stroke();
      break;

    case 5: //right leg
       this.context.beginPath();
       this.context.moveTo(100+350, 140);
       this.context.lineTo(80+350, 190);
       this.context.stroke();
      break;

    case 6: //right foot
        this.context.beginPath();
        this.context.moveTo(82+350, 190);
        this.context.lineTo(70+350, 185);
        this.context.stroke();
    break;

    case 7: //left leg
       this.context.beginPath();
       this.context.moveTo(100+350, 140);
       this.context.lineTo(125+350, 190);
       this.context.stroke();
    break;

    case 8: //left foot
        this.context.beginPath();
        this.context.moveTo(122+350, 190);
        this.context.lineTo(135+350, 185);
        this.context.stroke();
    break; 

    case 9: //frowny-face
        this.context.lineWidth = 3;
        this.context.strokeStyle = "blue";
        this.context.fillStyle = "blue";
        this.context.beginPath();
        this.context.moveTo(95+350, 35);
        this.context.lineTo(95+350, 45);
        this.context.moveTo(105+350, 35);
        this.context.lineTo(105+350, 45);   
        this.context.closePath();
        this.context.stroke();    
        this.context.beginPath();
        this.context.arc(450, 60, 8, 0, Math.PI, true);         
        this.context.stroke();    
        this.context.strokeStyle = "black";
        this.context.fillStyle = "black";
    break;     
    }
    this.context.fillStyle = 'black';    
    this.context.strokeStyle = "black";
  }

  drawFrown(x){
    this.context.lineWidth = 3;
    this.context.strokeStyle = "blue";
    this.context.fillStyle = "blue";
    this.context.beginPath();
    this.context.moveTo(95+350, 35);
    this.context.lineTo(95+350, 45);
    this.context.moveTo(105+350, 35);
    this.context.lineTo(105+350, 45);   
    this.context.closePath();
    this.context.stroke();    
    this.context.beginPath();
    this.context.arc(450, 60, 8, 0, Math.PI, true);         
    this.context.stroke();    
    this.context.strokeStyle = "black";
    this.context.fillStyle = "black";
  }

  gameOver() {
    // ... your code goes here
    const img = new Image();        
    img.src = './images/gameover.png';
    img.onload = function() {
      hangmanCanvas.context.drawImage(img,100,25,500,350);
      // .drawImage(img, 0, 0,150*imgScale,150);
    };
  }

  winner() {
    // ... your code goes here
    const img = new Image();        
    img.src = './images/awesome.png';
    img.onload = function() {
      hangmanCanvas.context.drawImage(img,250,5,300,300);
      //.drawImage(img, 0, 0,150*imgScale,150);
    };
  }
}
