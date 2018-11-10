var hangman;

function Hangman() {
this.words = ['manzana', 'banana','kiwi'];
this.secretWord = '';
this.secretAux = [];
this.letters = [];
this.guessedLetter = '';
this.errorsLeft = 10;
 }


Hangman.prototype.getWord = function () {
  this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];
  return this.secretWord;
};

Hangman.prototype.init = function(){
    for(var i=0; i<this.secretWord; i++){
      this.secretAux.push(this.secretWord.charAt(i));
    }
    console.log(this.secretWord);
}

//This function should check if the key the user has typed is a letter.
Hangman.prototype.checkIfLetter = function (e) {
  if(typeof e.key !== 'string'){
    return false;
  }else if(typeof  e.key == 'string'){
      console.log('es letra');
      return this.checkClickedLetters(e);
  }
};

//Checks if the pressed letter has already been pressed and returns true if it was not or false in the opposite case.
Hangman.prototype.checkClickedLetters = function (key) {
  var length = this.letters.length;
  if(key.keyCode>64 || key.keyCode<61){
    console.log('es correcto clicked');
      do {
          if (key.key == this.letters[length]) {
              console.log('ya esta la letra');
              //this.addCorrectLetter(key.key);
          } else if(this.guessedLetter.indexOf(key) != -1){
              console.log('aun no esta esta letra y es correcta');
              //TODO: chechar si esta bien la letra o mal:
              this.addCorrectLetter(key);
          }else{
            console.log('erronea');
            this.addWrongLetter(key)
          }
          length--;
      }while (length<1);
  }else {
    console.log('no es letra'+key.keyCode);
  }
};

//Adds to the guessedLetter variable the letter that was pressed. Also, it should check if the user wins.
Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter+=i;
    this.secretAux.indexOf(i);
    console.log(`Correcto ${this.guessedLetter}`)
};

//Should subtract one from the variable errorsLeft and check if the game is over.
Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.letters.push(letter);
  if(this.errorsLeft<1){
      this.checkGameOver();
  }
  console.log(``)
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft<0){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype.checkWinner = function () {
  if(this.guessedLetter.length = this.secretWord.length){
    return true
  }else{
    return false;
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.getWord();
  hangman.init();
  console.log('hangman');
};


document.onkeydown = function (e) {
  console.log(e.keyCode);
  console.log(e.key);

  hangman.checkIfLetter(e);
};
