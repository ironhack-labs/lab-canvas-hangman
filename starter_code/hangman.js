var hangman;



class Hangman {
  constructor(){
    this.listOfWords = ["Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Blitzcrank", "Brand", "Caitlyn", "Cassiopeia", "Cho'gath", "Corki", "Dr. Mundo", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Irelia", "Janna", "Jarvan IV", "Jax", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Rammus", "Renekton", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Talon", "Taric", "Teemo", "Tristana", "Trundle", "Trydamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yorick", "Ziggs", "Zilean"];

    this.secretWord = '';
    this.lettersUsed = new Array();
    this.lettersFailed = new Array();
    this.lettersGuessed = '';
    this.errorsLeft = 11;
  }

  takeRandomName() {

    let randomNumber = Math.floor(Math.random()*this.listOfWords.length);

    this.secretWord = this.listOfWords[randomNumber];
  }

  checkIfALetterWasClicked(textInt) {
  
    let letters = /^[A-Za-z]+$/;

    if(textInt.match(letters)) {
      alert('Your name have accepted : you can try another');
      return true;
    } else {
      alert('Please input alphabet characters only');
      return false;
    }
  }

  checkIfLetterIsRepeated(event){

    let pressedKey = String.fromCharCode(event.which);

    if (pressedKey.match(/[a-zA-Z\.]/)){
      let stringOfThePressedKey = pressedKey;
      console.log(stringOfThePressedKey);

      if(hangman.lettersUsed.indexOf(stringOfThePressedKey) !== -1){
        alert('this letter has alrady been used');
      } else {
        hangman.lettersUsed.push(stringOfThePressedKey);
      };
    };
  };

  checkIfTheGameIsOver(event) {

    console.log(event.key)

    if(this.secretWord.indexOf(event.key) == -1){
      this.errorsLeft -= 1;
    };

    if(this.errorsLeft == 0) {
      alert('You looser, the game is over');
      hangman = new Hangman();
    }

  };
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.takeRandomName();
  console.log(hangman.secretWord);
  // hangman.checkIfTheGameIsOver();
};

$(document).keypress(function(e){
  hangman.checkIfLetterIsRepeated(e);
  hangman.checkIfTheGameIsOver(e);
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