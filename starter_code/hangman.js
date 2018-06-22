var hangman;

function Hangman() {
this.words = ['washington', 'nevada', 'oregon', 'texas', 'kentucky', 'alabama', 'virginia', 'colorado', 'illinois', 'maryland', 'florida', 'georgia'];
this.secretWord = "";
this.letters = [];
this.guessedLetters = "";
this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (/^[a-z]+$/.test(keyCode));
};

Hangman.prototype.checkClickedLetters = function (ltr) {
  if(this.letters.indexOf(ltr) === -1){
    this.letters.push(ltr);
    return true;
  }
  return false;
};

Hangman.prototype.checkIfRight = function(ltr) {
  return this.secretWord.indexOf(ltr) !== -1;
}

Hangman.prototype.addCorrectLetter = function (ltr) {
  this.guessedLetters += ltr;
  $(".secret-word li:contains('" + ltr + "')").toggleClass("show-letter");


  return this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (ltr) {
  if(this.secretWord.indexOf(ltr) === -1){
    this.errorsLeft--;
    canvas.drawNextBodyPart(this.errorsLeft);
    this.checkGameOver();
  }
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft <= 0) {
    $('#image-lose').toggleClass('image-shown').toggleClass('image-hidden');
    $('.end-of-game').toggleClass('image-shown').toggleClass('image-hidden');
    document.onkeydown = function (e) {}
  }
};

Hangman.prototype.checkWinner = function () {
  for(var i = 0; i < this.secretWord.length; i++ ) {
    if(this.secretWord.includes(this.guessedLetters[i])){
      console.log(this.guessedLetters[i]);
    } else {
      return false;
    }
  }
  $('#image-win').toggleClass('image-shown').toggleClass('image-hidden');
  $('.end-of-game').toggleClass('image-shown').toggleClass('image-hidden');
  document.onkeydown = function (e) {}
  return true;
};

Hangman.prototype.setSecretWord = function(secretWord) {
  var ltrsArray = secretWord.split("");
  var secretWordHTML = "";
  ltrsArray.forEach(function(ltr) {
    secretWordHTML += "<li>" + ltr +"</li>"
  });
  $(".secret-word").html(secretWordHTML);
};

Hangman.prototype.removeDuplicateLetters = function(word) {
  temp = [];
  word.split('').forEach(function(ltr){
    if(temp.indexOf(ltr) === -1) {
      temp.push(ltr);
    }
  });
  return temp;
}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord();
  hangman.setSecretWord(hangman.secretWord);
  canvas = new HangmanCanvas();
  //disable start-game button to prevent multiple clicks
  $(this).prop('disabled', true);
  //remove duplicate letters for checking purposes
  hangman.secretWord = hangman.removeDuplicateLetters(hangman.secretWord);
  console.log(hangman.secretWord);
};

document.onkeydown = function (e) {
  var ltr = e.key;
  if(hangman.checkIfLetter(ltr)){
    if(hangman.checkClickedLetters(ltr)) {
      if(hangman.checkIfRight(ltr)){
        hangman.addCorrectLetter(ltr);
      } else {
        hangman.addWrongLetter(ltr);
      }
    }
  }
};