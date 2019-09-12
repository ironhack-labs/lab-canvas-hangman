const canvas = document.querySelector('#hangman');
let ctx = canvas.getContext('2d');

document.getElementById('start-game-button').onclick = function () {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  hangman = new Hangman();
  let initX = 500;
  ctx.lineWidth = 3;
  let storage = [];
  let clickedLettersWidth = 850;

  // Underline das letras
  for (let i = 0; i < hangman.secretWord.length; i++) {
    ctx.beginPath();
    storage.push(initX);
    ctx.moveTo(initX, 700);
    ctx.lineTo(initX + 50, 700);
    initX += 70;
    ctx.stroke();
  }

  drawTriangle = () => {
    ctx.beginPath();
    ctx.moveTo(200, 700);
    ctx.lineTo(350, 700);
    ctx.lineTo(275, 650);
    ctx.lineTo(200, 700);
    ctx.stroke();
  }


  drawPoste1 = () => {
    ctx.beginPath();
    ctx.moveTo(275, 650);
    ctx.lineTo(275, 20);
    ctx.stroke();
  }

  drawPoste2 = () => {
    ctx.beginPath();
    ctx.moveTo(275, 20);
    ctx.lineTo(600, 20);
    ctx.stroke();

  }

  drawPoste3 = () => {
    ctx.beginPath();
    ctx.moveTo(600, 20);
    ctx.lineTo(600, 60);
    ctx.stroke();
  }

  let drawHead = () => {
    ctx.beginPath();
    ctx.arc(600, 130, 70, 0, Math.PI * 2);
    ctx.stroke();
  }

  let drawBody = () => {
    ctx.beginPath();
    ctx.moveTo(600, 200);
    ctx.lineTo(600, 400);
    ctx.stroke();
  }

  let drawLeftLeg = () => {
    ctx.beginPath();
    ctx.moveTo(600, 400);
    ctx.lineTo(520, 560);
    ctx.stroke();
  }

  let drawRightLeg = () => {
    ctx.beginPath();
    ctx.moveTo(600, 400);
    ctx.lineTo(680, 560);
    ctx.stroke();
  }

  let drawLeftArm = () => {
    ctx.beginPath();
    ctx.moveTo(600, 220);
    ctx.lineTo(500, 320);
    ctx.stroke();
  }

  let drawRightArm = () => {
    ctx.beginPath();
    ctx.moveTo(600, 220);
    ctx.lineTo(700, 320);
    ctx.stroke();
  }

  let drawFunctions = [drawRightArm, drawLeftArm, drawRightLeg, drawLeftLeg, drawBody,
    drawHead, drawPoste3, drawPoste2, drawPoste1, drawTriangle];

  document.onkeydown = function (e) {
    if (!hangman.checkGameOver() && !hangman.checkWinner()) {
      if (hangman.secretWord.includes(e.key)) {
        hangman.guessedLetter += e.key;
        
        for (let i = 0; i < hangman.secretWord.length; i++) {
          if (e.key === hangman.secretWord.charAt(i)) {
            ctx.font = "60px Arial";
            ctx.fillText(e.key, storage[i] + 10, 680);
          }
        }

      } else {
        hangman.addWrongLetter(e);
        drawFunctions[hangman.errorsLeft]();

        if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
          ctx.font = "50px Arial";
          ctx.fillText(e.key.toUpperCase(), clickedLettersWidth, 140);
          clickedLettersWidth += 70;
        }

      }
    }
  };

};