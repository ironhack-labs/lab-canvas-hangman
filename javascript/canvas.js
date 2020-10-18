class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.lineWidth = 5;
    this.context.font = '50px Arial';
    this.baselineY = document.getElementById('hangman').height - 80;
    this.canvasWidth = document.getElementById('hangman').width;
    this.canvasHeight = document.getElementById('hangman').height;
    this.startingPoint = this.canvasWidth/2 - 100;
    this.lineLength = 40;
    this.lineLengthPlusGap = 60;
    this.wrongLetters = '';
  }

  createBoard() {
    this.context.clearRect(0,0, this.canvasWidth, this.canvasHeight);
    this.drawLines();
  }

  drawLines() {
    

    //Draw word lines
    for (let i = 0; i < this.secretWord.length; i++) {
    this.context.beginPath();
    this.context.moveTo(this.startingPoint, this.baselineY);
    this.context.lineTo(this.startingPoint+this.lineLength, this.baselineY);
    this.context.stroke();
    this.startingPoint += this.lineLengthPlusGap;
    this.context.closePath();
    }    
  }

  //We need to know what is the letter that we are going to write.
  //I added "letter" to the arglist.
  writeCorrectLetter(index, letter) {
    this.startingPoint = this.canvasWidth/2 - 100;
    let insertPosition =  this.startingPoint + (index * this.lineLengthPlusGap - 20) + this.lineLength / 2;
    this.context.fillText(letter, insertPosition, this.baselineY-40, this.lineLength);
  }
  //I removed errorrLeft from the arglist.
  writeWrongLetter(letter) {
    this.wrongLetters += (letter + ' ');
    // x,y - 650, this.baselineY-400
    // x,y - 1000, this.baselineY-400
    this.context.fillText(this.wrongLetters, 350, this.baselineY-600);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft) {
      case 10:
        break;
      case 9:
        this.drawScaffold('base');
        break;
      case 8:
        this.drawScaffold('line1');
        break;
      case 7:
        this.drawScaffold('line2');
        break;
      case 6:
        this.drawScaffold('line3');
        break;
      case 5:
        this.drawHead();
        break;
      case 4:
        this.drawTorso();
        break;
      case 3:
        this.drawArm('left');
        break;
      case 2:
        this.drawArm('right');
        break;
      case 1:
        this.drawLeg('left');
        break;
      case 0:
        this.drawLeg('right');
        break;
    }
  }

  

  winner() {
    // ... your code goes here
    let img = new Image();
    img.src = '/images/awesome.png';
    img.onload = () => { //MUST BE AN ARROW FUNCTION TO BE LINKED TO GLOBAL ENV.
       this.context.drawImage(img, 100,0);
    }
  }

  gameOver() {
    setTimeout(() => {
      let img = new Image();
      img.src = '/images/gameover.png';
      img.onload = () => { //MUST BE AN ARROW FUNCTION TO BE LINKED TO GLOBAL ENV.
       this.context.drawImage(img, 150,250);
    }
    },2000);
  }

  
  //these functions are to be called by drawHangman()
  drawHead() {
    this.context.beginPath();
    this.context.arc(450, this.baselineY-423, 60, 0, Math.PI*2);
    this.context.stroke();
    this.context.closePath();
  }

  drawArm(arm) {
    if (arm === 'left') {
      this.context.beginPath();
      this.context.moveTo(450, this.baselineY-300);
      this.context.lineTo(530, this.baselineY-370);
      this.context.stroke();
      this.context.closePath();
    } else {
      this.context.beginPath();
      this.context.moveTo(450, this.baselineY-300);
      this.context.lineTo(370, this.baselineY-370);
      this.context.stroke();
      this.context.closePath();
  } 
}
  drawLeg(leg) {
      if (leg === 'left') {
        this.context.beginPath();
        this.context.moveTo(450, this.baselineY-250);
        this.context.lineTo(530, this.baselineY-190);
        this.context.stroke();
        this.context.closePath();
      } else {
        this.context.beginPath();
        this.context.moveTo(450, this.baselineY-250);
        this.context.lineTo(370, this.baselineY-190);
        this.context.stroke();
        this.context.closePath();
    }
  }

  drawTorso() {
    this.context.beginPath();
    this.context.moveTo(450, this.baselineY-367);
    this.context.lineTo(450, this.baselineY-250);
    this.context.stroke();
    this.context.closePath();
  }

  drawScaffold(part) {
   //draw scaffold
    if (part === 'base') {
      this.context.beginPath();
      this.context.moveTo(60, this.baselineY);
      this.context.lineTo(260, this.baselineY);
      this.context.lineTo(160, this.baselineY-50);
      this.context.lineTo(60, this.baselineY);
      this.context.stroke();
      this.context.closePath();

    } else if (part === 'line1') {
      this.context.beginPath();
      this.context.moveTo(160, this.baselineY-50);
      this.context.lineTo(160, this.baselineY-550);
      this.context.stroke();
      this.context.closePath();
      
    } else if (part === 'line2') {
      this.context.beginPath();
      this.context.moveTo(160, this.baselineY-550);
      this.context.lineTo(450, this.baselineY-550);
      this.context.stroke();
      this.context.closePath();

    } else {
      this.context.beginPath();
      this.context.moveTo(450, this.baselineY-550);
      this.context.lineTo(450, this.baselineY-480);
      this.context.stroke();
      this.context.closePath();
    }
  }

  //method that returns an array with the positions of the letter within a word
  getCharPositions(char, word) {
    let positions = [];

    for (let i=0; i<word.length; i++) {
      if (char === word[i]) {
        positions.push(i);
      }
    }
    return positions;
  }
}


