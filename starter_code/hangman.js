var hangman;
function Hangman() {
  this.words = ["ironhack", "diego", "pollollon", "tacos de joss", "wework", "elevador", "berlin", "lisboa", "amsterdam", "mayonesa"],
    this.secretWord = "",
    this.letters = [],
    this.guessedLetter = ""
  this.errorsLeft = 10
}
Hangman.prototype.getWord = function () {
  //Returns a random word from our array words
  return this.words[Math.floor(Math.random() * this.words.length)]
};
Hangman.prototype.checkIfLetter = function (keyCode) {
  //checkIfLetter. This function should check if the key the user has typed is a letter.
  if (keyCode >= 64 && keycode <= 91) {
    return true
  } else {
    return false
  }
}
Hangman.prototype.checkClickedLetters = function (key) {
  //checkClickedLetters. Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
  var auxBool = false
  for (var i = 0; i < this.letters.length; i++) {
    if (key === this.letters[i]) {
      console.log("this letter has already been pressed before m8")
      auxBool = false
    } else auxBool = true
  }
  return auxBool
};
Hangman.prototype.addCorrectLetter = function (i) {
  //addCorrectLetter. Adds to the guessedLetter variable the letter that was pressed. 
  //Also, it should check if the user wins.
  for (var x = 0; x > this.secretWord.length; x++) {
    if (i === this.secretWord[x]) {
      this.guessedLetter.push[i]
      if (this.guessedLetter.length === this.secretWord.length) {
        this.checkGameOver()
      }
    }
  }
};
Hangman.prototype.addWrongLetter = function (letter) {
  //addWrongLetter. Should subtract one from the variable errorsLeft and check if the game is over.
  for (var x = 0; x > this.secretWord.length; x++) {
    var auxBool = false
    if (letter === this.secretWord[x]) {
      auxBool = false
    } else {
      auxBool = true
    }
  }
  if (auxBool) {
    this.errorsLeft--
    this.checkGameOver();
  }
};
Hangman.prototype.checkGameOver = function () {
  //  checkGameOver. Returns a bolean value, true if the users lose, and false in any other case.
  if (this.errorsLeft <= 0) {
    return true
  } else {
    this.checkWinner()
    return false
  }
};
Hangman.prototype.checkWinner = function () {
  // checkWinner. Check if the users win and return a boolean value.
  for (var j = 0; j < this.secretWord.length; j++) {
    for (var w = 0; w < this.secretWord.length; w++) {
      if(this.secretWord[i]===this.guessedLetter[w]){
        auxCount++
      }
    }
  }
  if(this.secretWord.length===auxCount){return true}else{return false}
};
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};
document.onkeydown = function (e) {
};