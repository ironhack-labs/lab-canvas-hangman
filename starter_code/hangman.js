
let theGame;
let theCanvas;

class Hangman {
  constructor() {
    this.words = ["sphygmomanometer", "notebook", "traveler", "subterfuge", "submarine", "house", "cellphone", "socks", "hand", "dog", "board", "punch", "bag", "chair", "tree", "stop", "sweater", "computer", "javascript", "ironhack"];
    this.chosenWord = "";
    this.typedLetters = [];
    this.correctLetters = [];
    this.errors = 10;
    this.getWord();
    this.correctLettersCreator();
    this.xIndex =[];
  }

  getWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    this.chosenWord = this.words[randomIndex];
  };

  correctLettersCreator() {
    this.correctLetters = this.chosenWord.split("");
  }

  checkClickedLetters(keyPressed) {
  if (this.typedLetters.indexOf(keyPressed.toLowerCase()) === -1) {
      this.typedLetters.push(keyPressed.toLowerCase());
      this.checkIfCorrect(keyPressed);
      theCanvas.writeCorrectLetter(keyPressed);
      this.xIndex = [];
      return true
    } return false
  };


  checkIfCorrect(keyPressed) {
    if (this.correctLetters.indexOf(keyPressed.toLowerCase()) === -1) {
      this.errors--
      theCanvas.writeWrongLetter(keyPressed);
      return
    } 
    for (let i = keyPressed.toLowerCase(); (this.correctLetters.indexOf(i) !== -1);) {
      this.xIndex.push(this.correctLetters.indexOf(i));
      this.correctLetters.splice(this.correctLetters.indexOf(i), 1)
    }
    } 

  checkGameOver() {
    if (this.errors === 0) {
      let img = new Image();
      img.onload = function() {
      theCanvas.context.drawImage(img, 400, 200, 250*1.4, 250)};
      img.src = "./images/gameover.png";
    }
  };

  checkWinner() {
    if(this.correctLetters.length === 0) {
      let img = new Image();
      img.onload = function() {
      theCanvas.context.drawImage(img, 400, 200, 250*1.4, 250)};
      img.src = "./images/awesome.png";

    }
  };

};

document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
  theCanvas = new HangmanCanvas(theGame);
};


document.onkeypress = function (e) {
  if(theGame) {
  if (theGame.correctLetters.length === 0 || theGame.errors === 0) {
    if(e.keyCode === 32) {
      theCanvas.context.clearRect(0, 0, 1200, 800)
      theGame = new Hangman();
      theCanvas = new HangmanCanvas(theGame);
    }
    return
  }
  if ((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 65 && e.keyCode <= 90)) {
    theGame.checkClickedLetters(e.key);
    theGame.checkWinner();
    theGame.checkGameOver();
  }
}
};
