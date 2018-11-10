var hangman, hangmanCanvas, canvas, ctx;
var guessesLeft = document.getElementById('guesses');
let winner = document.getElementById('winner');
let over = document.getElementById('over');

base = () => {
  console.log('base!');
  ctx.moveTo(650, 200);
  ctx.lineTo(550, 200);
  ctx.stroke();
}

pole = () => {
  ctx.moveTo(600, 200);
  ctx.lineTo(600, 50);
  ctx.stroke();
}

vertical = () => {
  ctx.lineTo(500, 50);
  ctx.stroke();
}

tiny = () => {
  ctx.lineTo(500, 80);
  ctx.stroke();
  ctx.stroke();
}

head = () => {
  ctx.arc(500, 95, 15, -0.5 * Math.PI, 2 * Math.PI);
  ctx.stroke();
}

body = () => {
  ctx.moveTo(500, 110);
  ctx.lineTo(500, 150);
  ctx.stroke();
}

rightA = () => {
  ctx.moveTo(500, 120); //right arm
  ctx.lineTo(490, 140);
  ctx.stroke();
}

leftA = () => {
  ctx.moveTo(500, 120); //left arm
  ctx.lineTo(510, 140);
  ctx.stroke();
}

rightL = () => {
  ctx.moveTo(500, 150); //right arm
  ctx.lineTo(490, 170);
  ctx.stroke();
}
leftL = () => {
  ctx.moveTo(500, 150); //left arm
  ctx.lineTo(510, 170);
  ctx.stroke();
}

let parts = [base, pole, vertical, tiny, head, body, rightA, leftA, rightL, leftL];
let partIndex;

function Hangman() {
  this.words = ['cronometro','awesome','peter', 'beauty', 'life', 'nice', 'dog', 'food','cool','brain','javascript','cat', 'love'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
  this.errorSpace = 0;
}

Hangman.prototype.getWord = function () {
  console.log('getWord called!');
  let ranIndx = Math.floor(Math.random() * Math.floor(this.words.length));
  console.log(this.words[ranIndx]);
  return this.secretWord = this.words[ranIndx];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90 || keyCode >= 97 && keyCode <= 122) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    console.log('you already clicked that letter');
    return false;
  } else {
    console.log('a new letter was clicked');
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (index) {
  this.guessedLetter += (this.secretWord[index]);

  for (let i = 0; i < this.guessedLetter.length; i++) {
    var repeat = this.secretWord.split(this.secretWord[index]).length - 1;
      if(repeat){
      var currentIndex = index;
      for (let m = 0; m <= repeat; m++) {
        var currentIndex = this.secretWord.indexOf(this.secretWord[index], currentIndex);
        
        if(currentIndex >= 0){
          console.log('drawing!');
          function draw(space, letter) {
            ctx.font = '16px monospace';
            ctx.fillText(letter, 53 + space, 140);
          }
          draw(currentIndex * 40, this.secretWord[currentIndex]);
          currentIndex++;
        }
      }
    }
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  function draw(space) {
    ctx.font = '16px monospace';
    ctx.fillText(letter, 200 + space, 200);

    parts[partIndex]();
    partIndex++;
  };
  draw(this.errorSpace);
  this.errorSpace += 10;
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft <= 0) {
    return true;
  } else {
    console.log('You still have turns left, keep playing!');
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  var secretWordArr = this.secretWord.split('');
  var guessedArr = this.guessedLetter.split('');

  function letterFound(letter) {
    if (guessedArr.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  return secretWordArr.every(letterFound);
};

Hangman.prototype.drawCanvas = function () {
  hangmanCanvas = document.getElementById('mycanvas');
  hangmanCanvas.innerHTML = '<canvas id="hangman" height="250px" width="700px"></canvas>';
  canvas = document.getElementById('hangman');
  ctx = canvas.getContext('2d');

  for (let i = 0, j = 0; i < this.secretWord.length; j += 40, i++) {
    function draw(space) {
      //letter lines
      ctx.moveTo(50 + space, 150);
      ctx.lineTo(70 + space, 150);
      ctx.stroke();

      //wrong letters
      ctx.font = '16px monospace';
      ctx.fillText('wrong letters:', 50, 200);
    }
    draw(j);
  }

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  hangman.drawCanvas();
  partIndex = 0;

  if (!winner.classList.contains('hide')) {
    winner.classList.add('hide');
    hangmanCanvas.classList.remove('hide');
  }
  if (!over.classList.contains('hide')) {
    over.classList.add('hide');
    hangmanCanvas.classList.remove('hide');
  }

  document.getElementById('guess').classList.remove('hide');
  guessesLeft.innerHTML = hangman.errorsLeft;
};

document.addEventListener('keydown', (e => {
        if (hangman instanceof Hangman) {
          if (e.key.length === 1) {
            if (hangman.checkIfLetter(e.key.charCodeAt())) {
              if (hangman.checkClickedLetters(e.key)) {
                console.log('now lets run addCorrectLetter');
                let guessed = hangman.secretWord.indexOf(e.key);
                console.log('index of guessed letter: ' + guessed);
                if (guessed < 0) {
                  console.log('that letter is wrong');
                  hangman.addWrongLetter(e.key);
                } else {
                  console.log('that letter is correct!');
                  hangman.addCorrectLetter(guessed);
                }
              }

              hangman.letters.push(e.key);
              console.log('letters clicked: ' + hangman.letters);
              if(hangman.checkGameOver()){
                setTimeout(()=>{
                  over.classList.remove('hide');
                  hangmanCanvas.classList.add('hide');
                },700);
              };
              if (hangman.checkWinner()) {
                setTimeout(() => {
                  winner.classList.remove('hide');
                  hangmanCanvas.classList.add('hide');
                }, 700);
              };
              guessesLeft.innerHTML = hangman.errorsLeft;
            }
          }
        }
}))