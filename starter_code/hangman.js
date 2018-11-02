var hangman;




class Hangman {
  constructor(){
    this.listOfWords = ["ahri", "akali", "alistar", "amumu", "anivia", "annie", "ashe", "blitzcrank", "brand", "caitlyn", "cassiopeia", "corki", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gragas", "graves", "hecarim", "heimerdinger", "irelia", "janna", "jax", "karma", "karthus", "kassadin", "katarina", "kayle", "kennen", "leBlanc", "leona", "lulu", "lux", "malphite", "malzahar", "maokai", "mordekaiser", "morgana", "nasus", "nautilus", "nidalee", "nocturne", "nunu", "olaf", "orianna", "pantheon", "poppy", "rammus", "renekton", "riven", "rumble", "ryze", "sejuani", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "talon", "taric", "teemo", "tristana", "trundle", "trydamere", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "viktor", "vladimir", "volibear", "warwick", "wukong", "xerath", "yorick", "ziggs", "zilean"];

    this.secretWord = '';
    this.lettersUsed = new Array();
    this.lettersFailed = new Array();
    this.lettersGuessed = new Array();
    this.comparativeArray = new Array();
    this.errorsLeft = 10;
  }

  takeRandomName() {

    let randomNumber = Math.floor(Math.random()*this.listOfWords.length);

    this.secretWord = this.listOfWords[randomNumber];
  }
  
  checkIfLetterIsRepeated(event){

    let pressedKey = String.fromCharCode(event.which);
    
    if (pressedKey.match(/[a-zA-Z\.]/)){

      let stringOfThePressedKey = pressedKey;
      console.log(stringOfThePressedKey);

      if(hangman.lettersUsed.indexOf(stringOfThePressedKey) !== -1 && hangman.secretWord.indexOf(stringOfThePressedKey) == -1) {
        alert('this letter has alrady been used');
        this.errorsLeft += 1;

      }else if(hangman.lettersUsed.indexOf(stringOfThePressedKey) !== -1){  //Si la letra pulsada esta en la lista de letras ya usadas
        alert('this letter has alrady been used');

      } else if(hangman.secretWord.indexOf(stringOfThePressedKey) !== -1){
        hangman.lettersUsed.push(stringOfThePressedKey);
        hangman.lettersGuessed.push(stringOfThePressedKey);

      } else {
        hangman.lettersUsed.push(stringOfThePressedKey);
      };
    } else {
      alert('Please input alphabet characters only');
      this.errorsLeft += 1;
      return false;
    };
  };

  checkNumberOfMistakesLeft(event) {

    console.log(event.key)

    if(this.secretWord.indexOf(event.key) == -1){
      this.errorsLeft -= 1;
    };

    if(this.errorsLeft == 0) {
      alert('You looser, the game is over. Press OK to begin another game');
      hangman = new Hangman();
      hangman.takeRandomName();
      console.log(hangman.secretWord);
    }

  };

  checkIfPlayerHasOneTheGame() {

    for(let i = 0; i < this.secretWord.length; i++){
      if(this.comparativeArray.indexOf(this.secretWord[i]) == -1){
        this.comparativeArray.push(this.secretWord[i]);
      };
    };

    if(hangman.lettersGuessed.length === this.comparativeArray.length){
      alert('You have won the game. You are a true League of Legends fan! FOR DEMACIA!!');
    };
  };
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.takeRandomName();
  console.log(hangman.secretWord);
  
};

$(document).keypress(function(e){
  hangman.checkIfLetterIsRepeated(e);
  hangman.checkIfPlayerHasOneTheGame();
  hangman.checkNumberOfMistakesLeft(e);
  console.log(hangman.errorsLeft);
});







// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };




document.onkeydown = function (e) {

};


//acabo de conseguir que se eliminen los erroes de la lista de errores. he comprobado tambien que si presionas teclas repetidas te salta un error diciendote que esa letra ya la has utilizad. 