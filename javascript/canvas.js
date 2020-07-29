class HangmanCanvas {
  constructor(secretWord /* , errorsLeft */) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    // this.errorsLeft = errorsLeft;
  }

  createBoard(drawLines) {
    // ... your code goes here
    //clear canvas
    this.context.clearRect(0, 0, 1200, 2000);
    //clean the lines
    let parentUl = document.getElementById('word');
    let childLi = [...document.getElementsByTagName('li')]
    for (let i = 0; i < childLi.length; i++) {
      parentUl.removeChild(childLi[i])
    }
    //remove wrong letters
    let wrongLetters = document.getElementById('wrong-letters');
    wrongLetters.innerHTML = 'Wrong letters:'
    this.drawLines();
    
  }

  drawLines() {
    // ... your code goes here
    //start game
    
    for (let i = 0; i < this.secretWord.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = "__";
      let ul = document.getElementById("word");
      ul.appendChild(li);
    }
  }

  writeCorrectLetter(index,character) {
    //console.log(/* index */)
    
    let existedLi = document.getElementsByTagName('li');
    existedLi[index].innerHTML = character;
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let wrongLetters = document.getElementById('wrong-letters');
    wrongLetters.innerHTML = hangman.letters;
   
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    
    for (let i = hangman.errorsLeft; i >= 0; i--) {
      if (hangman.errorsLeft === 9) {
        //step 1 - triangle
        this.context.beginPath();
        this.context.moveTo(200, 650);
        this.context.lineTo(300, 650);
        this.context.stroke();
      } else if (errorsLeft === 8) {
        //step 1.1
        this.context.beginPath();
        this.context.moveTo(300, 650);
        this.context.lineTo(250, 590);
        this.context.stroke();
      } else if (errorsLeft === 7) {
        //step 1.2
        this.context.beginPath();
        this.context.moveTo(250, 590);
        this.context.lineTo(200, 650);
        this.context.stroke();
      } else if (errorsLeft === 6) {
        //step 2 - pole
        this.context.beginPath();
        this.context.moveTo(250, 590);
        this.context.lineTo(250, 150);
        this.context.stroke();
      } else if (errorsLeft === 5) {
        //step 3 ___
        this.context.beginPath();
        this.context.moveTo(250, 150);
        this.context.lineTo(350, 150);
        this.context.stroke();
      } else if (errorsLeft === 4) {
        //step 4 - |
        this.context.beginPath();
        this.context.moveTo(350, 150);
        this.context.lineTo(350, 200);
        this.context.stroke();
      } else if (errorsLeft === 3) {
        //step 5 - head
        this.context.beginPath();
        this.context.arc(350, 220, 20, Math.PI / 180, (Math.PI / 180) * 360);
        this.context.stroke();
      } else if (errorsLeft === 2) {
        //step 6 - body
        this.context.beginPath();
        this.context.moveTo(350, 240);
        this.context.lineTo(350, 400);
        this.context.stroke();
      } else if (errorsLeft === 1) {
        //step 7 - left leg
        this.context.beginPath();
        this.context.moveTo(350, 400);
        this.context.lineTo(330, 450);
        this.context.stroke();
      } else if (errorsLeft === 0) {
        //step 8 - last - right leg
        this.context.beginPath();
        this.context.moveTo(350, 400);
        this.context.lineTo(370, 450);
        this.context.stroke();
      }
    }
  }

  //bonus
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
