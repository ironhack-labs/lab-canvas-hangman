var hangman;
var board;
var gameStatus = 'inactive';
var x = 200;
var y = 650;

function Hangman() {
  this.words = [
    'Vermont',
    'Gonzalo',
    'Development',
    'JavaScript',
    'Canvas',
    'Perro',
    'Ironhack',
    'Parangaricutirimicuaro',
    'Adarce',
    'Cencido',
    'Dingolondango',
    'Esplin',
    'Flebil',
    'Lampo',
    'Hialino',
    'Incola',
    'Jarifo',
    'Mador',
    'Nefelibata',
    'Giste',
    'Ojienjuto',
    'Plurimo',
    'Raquear',
    'Satis',
    'Brizar',
    'Tronga',
    'Uxoricidio',
    'Venusto',
    'Yactura',
    'Zullenco',
    'Quillotra'
  ];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
  this.secretWordArray = [];
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return keyCode<=90 && keyCode>=65 ? true : false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  return !this.secretWord.includes(key) ? false : true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  if (!this.guessedLetter.includes(i)){
    this.guessedLetter += i;
  }
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (!this.letters.includes(letter)){
    this.errorsLeft --;
    this.letters.push(letter);
  } 
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft === 0 ? true : false;
};

Hangman.prototype.checkWinner = function () {
  for(i=0; i<this.secretWord.length;i++){
    if(!this.guessedLetter.includes(this.secretWord[i])){
      return false;
    }    
  }
  return true;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  board = new HangmanCanvas(hangman.getWord());
  board.createBoard(x, y);
  board.drawLines(x, y);
  console.log(hangman.secretWord);
  gameStatus = 'active';
};

document.onkeydown = function (e) {
  if (gameStatus === 'active'){
    if (hangman.checkIfLetter(e.keyCode)){
      if(hangman.checkClickedLetters(e.key)){
        hangman.addCorrectLetter(e.key);
        board.writeCorrectLetter(e.key, x, y);
        if (hangman.checkWinner()){
          board.winner();
          gameStatus = 'inactive';
        }
      } else {
        hangman.addWrongLetter(e.key);
        board.writeWrongLetter(hangman.letters,hangman.errorsLeft, x, y);
        if (hangman.checkGameOver()){
          board.gameOver();
          gameStatus = 'inactive';
        }
      }
    } else {
      console.log('Not a letter');
    }
  }
};
