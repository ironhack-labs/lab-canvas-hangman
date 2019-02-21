var hangman;
var myCanvas;
var indexArray = [];


//constructor
function Hangman() {

  this.words = ["ball", "flower", "cooking", "love", "Ironhack", "javascript"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

Hangman.prototype.getWord = function () {

  this.secretWord = _.sample(this.words);

  return (this.secretWord);

};

Hangman.prototype.checkIfLetter = function (keyCode) {

  if (keyCode >= 65 && keyCode <= 90) {

    console.log("letter is", String.fromCharCode(keyCode));

    this.checkClickedLetters(String.fromCharCode(keyCode));

    return true;
  }
  return false;
};


Hangman.prototype.checkClickedLetters = function (key) {

  if (this.letters.some(element => element == key)) {

    return false;
  }

  // it will put letter to "letters" array if key is not letter from secretWord
  if (!this.secretWord.toUpperCase().includes(key)) {
    this.letters.push(key);
    this.addWrongLetter(key);
    myCanvas.writeWrongLetter(key, hangman.errorsLeft);

   } else {
     this.secretWord.toUpperCase().split("").forEach(function(element){ if (element == key){

      if (!indexArray.includes(key)){
        hangman.addCorrectLetter(hangman.secretWord.toUpperCase().split("").indexOf(key));
      }else{
        hangman.addCorrectLetter(hangman.secretWord.toUpperCase().split("").indexOf(key, indexArray.lastIndexOf(key)+1));
      }
                  
      indexArray.push(key);
       
     }})
   }
   
  return true;

}


Hangman.prototype.addCorrectLetter = function (i) {

  this.guessedLetter = this.guessedLetter + this.secretWord.toUpperCase().charAt(i);
  myCanvas.writeCorrectLetter(i, this.secretWord.toUpperCase().charAt(i));
  this.checkWinner();

};

Hangman.prototype.addWrongLetter = function (letter) {

  if (!this.secretWord.includes(letter)) {
    this.errorsLeft = this.errorsLeft - 1;
    switch (this.errorsLeft) {
      case 9:
        myCanvas.drawHangman("circleHead");
        break;
      case 8:
        myCanvas.drawHangman("line1");
        break;
      case 7:
        myCanvas.drawHangman("line2");
        break;
      case 6:
        myCanvas.drawHangman("line3");
        break;
      case 5:
        myCanvas.drawHangman("line4");
        break;
      case 4:
        myCanvas.drawHangman("line5");
        break;
      case 3:
        myCanvas.drawHangman("dot1");
        break;
      case 2:
        myCanvas.drawHangman("dot2");
        break;
      case 1:
        myCanvas.drawHangman("dot3");
        break;
      case 0:
        myCanvas.drawHangman("arc");
        break;

    }
  }
  this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft == 0) {

    myCanvas.gameOver();
    console.log("game is over :(")
    return true;

  }
  return false;

};

Hangman.prototype.checkWinner = function () {
  var arrSecretWord = this.secretWord.toUpperCase().split("");
  var arrGuessedWord = this.guessedLetter.toUpperCase().split("");
  var arr2 = arrSecretWord.concat().sort();
  var arr1 = arrGuessedWord.concat().sort();


  if (arrSecretWord.length != arrGuessedWord.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i])
      return false;
  }
  console.log("win");
  myCanvas.winner();
  return true;

};


window.onload = function () {
  document.getElementById('start-game-button').onclick = function () {

    console.log(hangman);
    myCanvas.cordinatesLines = [];
    myCanvas.drawLines();
    console.log(myCanvas.cordinatesLines);
    document.getElementById('start-game-button').classList.add("new-game");
    document.getElementById('start-game-button').removeAttribute("id");
    document.getElementsByClassName("new-game")[0].addEventListener("click", function () {
      location.reload();
    });
    document.getElementsByClassName("new-game")[0].innerHTML = "NEW GAME"
    document.addEventListener("keydown", event => {
      hangman.checkIfLetter(event.keyCode);

      console.log(event.keyCode);
    });
  };

  hangman = new Hangman();
  hangman.getWord();
  myCanvas = new HangmanCanvas(hangman.secretWord);
  myCanvas.createBoard();

}