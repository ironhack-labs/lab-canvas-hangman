

function Hangman() {
 this.words = ["Hearth", "Tree", "Ballon"];
 this.secretWord = "";
 this.letters = [];
 this.errorsLeft = 10;
 this.guessedLetter = "";
}


Hangman.prototype.getWord = function () {
 var index = Math.floor(Math.random()*this.words.length);
 this.secretWord = this.words[index].toLowerCase();
 return this.words[index];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
 return (keyCode >= 65 && keyCode <= 90);
}

Hangman.prototype.checkClickedLetters = function (key) {  
 return (!this.letters.includes(key));
};

Hangman.prototype.addCorrectLetter = function (i) {
    var rightLetter = this.secretWord[i];
    this.guessedLetter += rightLetter;
    hangmanCanvas.writeCorrectLetter(i);
};

Hangman.prototype.verify = function (letter) {
     return (this.secretWord.includes(letter));
}

Hangman.prototype.addWrongLetter = function (letter) {
    console.log("error")
    hangmanCanvas.writeWrongLetter(letter);
    this.errorsLeft--;
    hangmanCanvas.drawHangman();  
 };

 Hangman.prototype.checkGameOver = function () {
 return !this.errorsLeft >0
 };

 Hangman.prototype.checkWinner = function () { 
   var winner = true;
     for (var i = 0; i < this.secretWord.length; i++) {
        if (!this.guessedLetter.includes(this.secretWord[i]))
          winner = false;
      }
    return winner;
    }
 

 //also do a for loop in CheckWinner, to check wether every letter in the secret 
 // word is there in guessed Letters, so you do not need the double letters at the end

// document.getElementById('start-game-button').onclick = 

var hangmanCanvas;

function newGame() {
  hangman = new Hangman(); 
  hangman.getWord()
  hangmanCanvas = new HangmanCanvas(hangman.secretWord);
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines();
}


  // document.onkeydown = function(e) {
  //   var letter = e.key;
  //   var keycode = e.keyCode;
  //   if (hangman.checkIfLetter(keycode)) {
  //     if (hangman.checkClickedLetters(letter)) {
  //       hangman.letters.push(letter);
  //       for (let i = 0; i < hangman.secretWord.length; i++) {
  //         if (hangman.secretWord[i] === letter) {
   
  //           var index = i;
  //           hangman.addCorrectLetter(index);
  //         }
  //       }
  //     } else {
  //       hangman.addWrongLetter(letter);
  //     }
  //     if (hangman.checkWinner()) {
  //       alert("Winner!");
  //     }
  //     if (hangman.checkGameOver()) {
  //       alert("LOSER!!");
  //     }
  //   }
  //  }};


 document.onkeydown = function (e) {
     var letter = e.key;
     var keycode = e.keyCode;
     console.log(e.key);
     if (hangman.checkIfLetter(keycode)) {
         if (hangman.checkClickedLetters(letter)) {
             hangman.letters.push(letter);
             if (hangman.verify(letter))
                hangman.addCorrectLetter(hangman.secretWord.indexOf(letter));
             else {hangman.addWrongLetter(letter)}  
         }
        
       }
     if (hangman.checkWinner()) {
       console.log("Win")
       newGame();
     }
    if (hangman.checkGameOver()) {
     console.log("Lose, new Game")
    
     newGame();}
 };
