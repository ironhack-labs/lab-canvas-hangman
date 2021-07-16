class HangmanCanvas {

  constructor(secretWord) {
    this.secretWord = secretWord;
    this.context = document.getElementById('hangman').getContext('2d');
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 5;
    
    this.createBoard(); 
  }

  createBoard() {
    this.context.strokeRect(1, 1, 700, 700);
    this.drawLines();
  }

  drawLines() {
    this.context.strokeStyle = 'black';

    for(var count=0; count <= this.secretWord.length; count++) {
      this.context.strokeRect(80 + (50*count), 100, 30, 2);
    }
  }

  writeCorrectLetter(index) {
    this.context.fillText("Hello World", 300, 30);
  }

  pickLetter() {
    var letter = getElementById('letter');
    console.log(letter);    
    this.letter = letter;
    if(!secretWord.include(letter)) {
      this.writeWrongLetter(letter, "")
    } else {
      this.pickedLetters += letter;
      document.getElementById('pickedLetters').innerText = pickedLetters;    
      this.writeCorrectLetter(letter);
    }
  }

  writeCorrectLetter(letter) {
    var secretWord = this.secretWord;
    var indices = [];
    for(var count=0; i < secretWord.length; count++) {
        if (secretWord[count] === letter) {
          indices.push(indices);
        }
    }
    console.log("Indices "+indices);
  }

  writeWrongLetter(letter, errorsLeft) {
    document.getElementById('wrongLetters').innerText += " " + letter;
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    this.context.beginPath();
    if(errorsLeft == 9) {
      this.context.moveTo(30, 640); 
      this.context.lineTo(130, 640);        
      this.context.stroke();
    }

    if(errorsLeft == 8) {
      this.context.moveTo(30, 640);
      this.context.lineTo(80, 540);      
      this.context.stroke();
    }

    if(errorsLeft == 7) {
        this.context.moveTo(80, 540);
        this.context.lineTo(130, 640);      
        this.context.stroke();
    }

    if(errorsLeft == 6) {
        this.context.moveTo(80, 540); 
        this.context.lineTo(80, 240);   
        this.context.stroke();
    }

    if(errorsLeft == 5) {
      this.context.moveTo(80, 240); 
      this.context.lineTo(330, 240);   
      this.context.stroke();
    }

    if(errorsLeft == 4) {
      this.context.moveTo(330, 240); 
      this.context.lineTo(330, 300);   
      this.context.stroke();
    }

    if(errorsLeft == 3) {
      this.context.moveTo(330, 300); 
      this.context.arc(330, 330, 75, 0, Math.PI * 2);
    }

    if(errorsLeft == 2) {
      this.context.moveTo(330, 380); 
      this.context.lineTo(330, 550);
      this.context.stroke();
    }

    if(errorsLeft == 1) {
      this.context.moveTo(330, 550);
      this.context.lineTo(270, 620);      
      this.context.stroke();
    }

    if(errorsLeft == 0) {
      this.context.moveTo(330, 550);
      this.context.lineTo(380, 620); 
      this.context.stroke();
    }
     
    // close the path
    this.context.closePath();
  }

  gameOver() {
  }

  winner() {
    // ... your code goes here
  }
}
