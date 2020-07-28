class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.content.clearRect(0, 0, 800, 1200);
    drawLines();
  }

  drawLines() {
    // ... your code goes here
    //start game
/*     const wordLines = this.secretWord.forEach((item) => {
      let li = document.createElement('li')
      li.innerHTML = '__';
      let ul = document.getElementById('word');
      ul.appendChild(li);
    }) */

    for (let i = 0; i < this.secretWord.length; i++) {
      let li = document.createElement('li')
      li.innerHTML = '__';
      let ul = document.getElementById('word');
      ul.appendChild(li);
    }


//draw guy
function drawTheGuy(){
  //draw the stand
//step 1 - triangle
this.context.beginPath();
this.context.moveTo(200, 650);
this.context.lineTo(300, 650);
this.context.lineTo(250, 590);
this.context.lineTo(200, 650);
this.context.stroke()
//step 2 - pole
this.context.beginPath();
this.context.moveTo(250, 590);
this.context.lineTo(250, 150);
this.context.stroke()
//step 3 ___
this.context.beginPath();
this.context.moveTo(250, 150);
this.context.lineTo(350, 150);
this.context.stroke()
//step 4 - |
this.context.beginPath();
this.context.moveTo(350, 150);
this.context.lineTo(350, 200);
this.context.stroke()
//step 5 - head
this.context.beginPath();
this.context.arc(350, 220, 20, (Math.PI / 180), (Math.PI / 180) * 360)
this.context.stroke()
//step 6 - body
this.context.beginPath();
this.context.moveTo(350, 240);
this.context.lineTo(350, 400);
this.context.stroke()
//step 7 - left leg
this.context.beginPath();
this.context.moveTo(350, 400);
this.context.lineTo(330, 450);
this.context.stroke()
//step 8 - last - right leg
this.context.beginPath();
this.context.moveTo(350, 400);
this.context.lineTo(370, 450);
this.context.stroke() 

}
console.log(drawTheGuy())
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }


  //bonus
  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
