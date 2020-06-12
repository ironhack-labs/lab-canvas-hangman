class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.x = 800;
  }


  createBoard() {
    // ... your code goes here
    console.log("yo!");
    this.context.clearRect(0, 0, 800, 1200);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    let y = 400;
    let x = 100;
    let xLine = 150;

    for(let i=0; i<this.secretWord.length; i+=1){
      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.lineTo(xLine, y);
      this.context.stroke();
      this.context.closePath();
      x += 100;
      xLine += 100;
    }
  } 

  writeCorrectLetter(index) {
    let y = 400;
    let x = 100;
    let letra = this.secretWord[index];

    [...this.secretWord].forEach((letter, idx) => {
      if(letter === letra){
        x += 100 * idx;
        this.context.font = '48px serif';
        this.context.fillText(letra, x, y);
        x = 100;
      }
    })

  }


  writeWrongLetter(letter, errorsLeft) {
    
    this.context.font = '48px serif';
    this.context.fillText(letter, this.x, 40);

    this.context.clearRect(0, 0, 200, 200)
    this.context.font = '48px serif';
    this.context.fillText(errorsLeft, 100, 40);
    
    this.x += 50;
  }

  drawHangman(errorsLeft) {
    const drawArray = ['rightLeg', 'leftLeg', 'rightArm', 'leftArm',  'torso',  
    'head', 'frame4', 'frame3', 'frame2', 'frame1']; 

      
    this.context.beginPath();
    this.context.strokeStyle = "#fff";
    this.context.lineWidth = 2;
      
    const draw = function(pathFromx, pathFromy, pathTox, pathToy) {
      this.context.moveTo(pathFromx, pathFromy);
      this.context.lineTo(pathTox, pathToy);
      this.context.stroke(); 
  } 
  
  console.log("ta entrando aqui");
  
  switch (drawArray[errorsLeft]){
     case 'frame1':
       draw (0, 150, 150, 150);
       break;
     
     case 'frame2': 
       draw (10, 0, 10, 600);
       break;
    
     case 'frame3':
       draw (0, 5, 70, 5);
       break;
    
     case 'frame4': 
       draw (60, 5, 60, 15);
       break;

     case 'head': 
      this.context.beginPath();
      this.context.arc(60, 25, 10, 0, Math.PI*2, true);
      this.context.stroke();
      break;
    
      case 'torso':
       draw (60, 36, 60, 70);
       break;
    
       case 'rightArm': 
       draw (60, 46, 100, 50);
       break;
    
      case 'leftArm': 
       draw (60, 46, 20, 50);
       break;
    
      case 'rightLeg': 
       draw (60, 70, 100, 100);
    
    
      default: 
        draw (60, 70, 20, 100);
        break;
     
    }
     
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}