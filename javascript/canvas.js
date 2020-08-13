class HangmanCanvas {
    constructor(secretWord) {
        this.context = document.getElementById('hangman').getContext('2d');
        // ... your code goes here
        this.secretWord = secretWord;
        this.desfase = 0;
    }

    createBoard() {
        // ... your code goes here
        this.context.clearRect(0, 0, 1200, 800);
        this.drawLines(this.secretWord);
    }

    drawLines(secretWord) {
        // ... your code goes here
        let ctx = this.context;
        ctx.strokeStyle = "black";
        let x = 400;
        let y = 420;

        secretWord.split('').forEach(element => {
            ctx.beginPath();
            ctx.moveTo(x, 500);
            ctx.lineTo(y, 500);
            ctx.stroke();
            ctx.closePath();
            y += 30;
            x += 30;
        });
    }

    // writeCorrectLetter(index) {
    //     // ... your code goes here
    //     alert(`Letra correcta con index en ${index}`);

    // }

    // writeWrongLetter(letter, errorsLeft) {
    //     // ... your code goes here
    //     alert(`La letra ${letter} NO VA, te quedan ${errorsLeft} errores posibles. `)
    // }
    writeCorrectLetter(index) {
        // ... your code goes here
        let secretLetter = this.secretWord[index];
        this.context.font = '20px Arial';
        this.context.fillStyle = "black";
        // this.context.fillText(secretLetter, 60 + (index + 1) * 40, 700)
        let posX = ((index + 1) * 30) + 372;
        let posY = 490;
        this.context.fillText(secretLetter, posX, posY);
    }

    writeWrongLetter(letter, errorsLeft) {
        // ... your code goes here
        this.context.font = '20px Arial'
        this.context.fillStyle = "red";
        // this.context.context.fillStyle = 'red';

        // this.context.fillText(letter, 2000 , 300)
        // this.indexFalso += 40
        // errorsLeft
        let posX = ((this.desfase + 1) * 30) + 372;
        let posY = 450;
        this.context.fillText(letter, posX, posY);
        this.desfase++;
    }



    drawHangman(errorsLeft) {
        // ... your code goes here

        let ctx = this.context;
        ctx.beginPath();
        ctx.moveTo(100, 600);
        ctx.lineTo(100, 100);
        ctx.lineTo(300, 100);
        ctx.lineTo(300, 150);
        ctx.moveTo(50, 700);
        ctx.lineTo(100, 600);
        ctx.lineTo(150, 700);
        ctx.lineTo(50, 700);
        ctx.stroke();

        //cabeza
        function drawHead() {
            ctx.beginPath();
            ctx.arc(300, 200, 50, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();


            ctx.beginPath();
            ctx.arc(300, 230, 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(280, 200, 6, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(320, 200, 6, 0, Math.PI * 2);
            ctx.stroke();
            ctx.closePath();
        }

        //torso
        function drawTorso() {
            ctx.beginPath();
            ctx.moveTo(300, 250);
            ctx.lineTo(300, 450);
            ctx.stroke();
            ctx.closePath();
        }

        //brazo izq
        function drawLeftArm() {
            ctx.beginPath();
            ctx.moveTo(200, 300);
            ctx.lineTo(300, 300);
            ctx.stroke();
            ctx.closePath();
        }

        //brazo der
        function drawRightArm() {
            ctx.beginPath();
            ctx.moveTo(300, 300);
            ctx.lineTo(400, 300);
            ctx.stroke();
            ctx.closePath();
        }

        //pie izq
        function drawLeftLeg() {
            ctx.beginPath();
            ctx.moveTo(300, 450);
            ctx.lineTo(250, 600);
            ctx.stroke();
            ctx.closePath();
        }

        //pie der
        function drawRightLeg() {
            ctx.beginPath();
            ctx.moveTo(300, 450);
            ctx.lineTo(350, 600);
            ctx.stroke();
            ctx.closePath();
        }

        switch (errorsLeft) {
            case 10:
                drawHead()
                break
            case 9:
                drawTorso()
                break
            case 8:
                drawRightArm()
                break
            case 7:
                drawLeftArm()
                break
            case 6:
                drawLeftLeg()
                break
            case 5:
                drawRightLeg()
                break
            case 4:
                alert("ya no tengo nada más que dibujar, pero todavía tienes intentos");
                break
            case 3:
                alert("sigue vivo, aún se retuerce de dolor, tu dale");
                break
            case 2:
                alert("le queda pokis vida, aprovecha");
                break
            case 1:
                alert("ta moradito, se murío...");
                break
            default:
                alert("debería de estar dibujando al ahorcado, pero imaginatelo, es más bonis asi");
                //aaaaaaa no se
        }

    }

    gameOver() {
        // ... your code goes here
        alert("you suck, kill yourselff pofavo");
    }

    winner() {
        // ... your code goes here
        alert("ganaste, bravo por ti, me das penita");
    }
}
/*


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


   //poste + base
  ctx.beginPath();
  ctx.moveTo(100, 600);
  ctx.lineTo(100, 100);
  ctx.lineTo(300, 100);
  ctx.lineTo(300, 150);
  ctx.moveTo(50, 700);
  ctx.lineTo(100, 600);
  ctx.lineTo(150, 700);
  ctx.lineTo(50, 700);
  ctx.stroke();

  
//cabeza
function drawHead() {
ctx.beginPath();
ctx.arc(300, 200, 50, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(300, 230, 10, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(280, 200, 6, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 200, 6, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();
}

//torso
function drawTorso() {
ctx.beginPath();
ctx.moveTo(300, 250);
ctx.lineTo(300, 450);
ctx.stroke();
ctx.closePath();
}

//brazo izq
function drawLeftArm() {
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(300, 300);
ctx.stroke();
ctx.closePath();
}

//brazo der
function drawRightArm() {
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(400, 300);
ctx.stroke();
ctx.closePath();
}

//pie izq
function drawLeftLeg() {
ctx.beginPath();
ctx.moveTo(300, 450);
ctx.lineTo(250, 600);
ctx.stroke();
ctx.closePath();
}

//pie der
function drawRightLeg() {
ctx.beginPath();
ctx.moveTo(300, 450);
ctx.lineTo(350, 600);
ctx.stroke();
ctx.closePath();
}

  switch (errorsLeft){
     case 5:
      drawHead()
      break
    case 4:
      drawTorso()
      break
    case 3:
      drawRightArm()
      break
    case 2:
      drawLeftArm()
      break
    case 1:
      drawLeftLeg()
      break
    case 0:
      drawRightLeg()
      gameOver()
      break
    default: 
    //aaaaaaa no se
    }

    */