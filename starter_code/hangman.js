var hangman;
var canvas;

function Hangman() {

  this.words = ["mundo", "auto", "alien", "viento", "tienda"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  // this.millisecondsToWait = 1;

}

Hangman.prototype.getWord = function () {
  var randomNumber = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[randomNumber];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();

  return this.guessedLetter;
};

Hangman.prototype.addWrongLetter = function (letter) {

  this.errorsLeft--;

};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }
};

Hangman.prototype.verify = function (letter) {
  return this.secretWord.includes(letter);
};

Hangman.prototype.checkWinner = function () {

  if (this.guessedLetter.length === this.secretWord.length) {
    return true;
  }


};

document.getElementById('start-game-button').onclick = function () {

  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.getWord());
  canvas.drawLines();
  // canvas.createBoard();


};

document.onkeydown = function (e) {


  //Si la tecla que se presionó no es una letra, da una alerta
  if (!hangman.checkIfLetter(e.keyCode)) {
    alert("Escribe una letra");
    return 0;
  }

  //Si es una letra verifica que no haya sido presionada con anterioridad
  if (!hangman.checkClickedLetters(e.keyCode)) {
    alert("ya presionaste esa tecla!!!");
  } else {
    //Ingresamos la letra presionada al array letters
    hangman.letters.push(e.keyCode);

    //Si la tecla que presionamos corresponde a Secret Word la pintamos en el Lugar que le corresponde
    if (hangman.verify(e.key)) {
      for (var i = 0; i <= hangman.secretWord.length; i++) {
        if (hangman.secretWord[i] === e.key) {

          canvas.writeCorrectLetter(i);
          hangman.addCorrectLetter(i);
          if (hangman.checkWinner()) {
            //Winner
            canvas.winner();
          }
        }
      }
    } else {

      //Llamamos errors left
      hangman.addWrongLetter();

      // Agregamos letras erroneas
      canvas.writeWrongLetter(e.key, hangman.errorsLeft);

      // //Comenzamos a dibujar Hangman
      switch (hangman.errorsLeft) {
        case 9:
          canvas.drawHangman("base");
          break;

        case 8:
          canvas.drawHangman("pole");
          break;

        case 7:
          canvas.drawHangman("horizontal");
          break;

        case 6:
          canvas.drawHangman("down");
          break;

        case 5:
          canvas.drawHangman("head");
          break;

        case 4:
          canvas.drawHangman("body");
          break;

        case 3:
          canvas.drawHangman("leftHand");
          break;

        case 2:
          canvas.drawHangman("rightHand");
          break;

        case 1:
          canvas.drawHangman("leftFoot");
          break;

        case 0:
          canvas.drawHangman("rightFoot");
          break;

        default:
          break;
      }


      //Timeout para que se alcanze a ver el ultimo pie antes de que el juego termine si es que perdiste

      //Vemos si todavia se pude seguir jugando
      if (hangman.checkGameOver()) {

        //Game over si ya no tiene intentos
        canvas.gameOver();
      }

    }
  }
};