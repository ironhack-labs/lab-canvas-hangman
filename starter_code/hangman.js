let hangmanPlay;
let kowns;
let arrayIndex;

class Hangman {
  constructor(){
    this.words = ['abacaxi', 'teste', 'quadrado', 'picles', 'louco'];
    this.secretWord = '';
    this.letters = '';
    this.guessedLetter = '';
    this.errosLeft = 10;
  }

  getWord(){
    let secret = Math.floor(Math.random() * this.words.length)
    return this.words[secret];
  }

  checkIfLetter(numberCode){
    return ((numberCode >= 65 && numberCode <= 90) || (numberCode >= 97 && numberCode <= 122)) ? true : false
  }

  checkClickedLetters(letterClicked){
    if(this.letters.includes(letterClicked)){
      return false
    } else {
      this.letters += letterClicked;
      return true
    }
  }

  addCorrectLetter(i){
    if(this.guessedLetter.includes(i)){
      this.guessedLetter += i;
    }
    return this.checkWinner()
  }

  addWrongLetter(letter){
    this.errosLeft -= 1;
    this.checkGameOver();
  }

  checkGameOver(){
    return this.errorsLeft <= 0 ? true : false
  }

  checkWinner(){
    return this.secretWord.split('').sort().join('') === this.guessedLetter.split('').sort().join('') ? true : false
  }
}

function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
  }
  return indexes;
}
  document.getElementById('start-game-button').onclick = function () {
    hangmanPlay = new Hangman();
    let finalWord = hangmanPlay.getWord();
    hangmanPlay.secretWord = finalWord
    kowns = new HangmanCanvas(finalWord);
    kowns.createBoard();
    kowns.drawLines()
  };


  document.onkeydown = function (e) {
    if(hangmanPlay.checkIfLetter(e.keyCode)) {
      if(hangmanPlay.checkClickedLetters(e.key.toLowerCase())) {
        console.log(hangmanPlay.secretWord.includes(e.key.toLowerCase()))
        if(hangmanPlay.secretWord.includes(e.key.toLowerCase())) {
          arrayIndex = getAllIndexes(hangmanPlay.secretWord, e.key.toLowerCase());
          if(getAllIndexes(hangmanPlay.secretWord, e.key.toLowerCase()).length > 1){
            for (let l = 0; l < arrayIndex.length; l++) {
              hangmanPlay.addCorrectLetter(arrayIndex[l])
              kowns.writeCorrectLetter(arrayIndex[l])
            }
          }
          hangmanPlay.addCorrectLetter(arrayIndex[0])
          kowns.writeCorrectLetter(arrayIndex[0])
          if(hangmanPlay.checkWinner()){
            kowns.winner();
          }
        }
        else{

          hangmanPlay.addWrongLetter()
          kowns.writeWrongLetter(e.key.toUpperCase(), hangmanPlay.errorsLeft)
          kowns.drawHangman(hangmanPlay.errorsLeft)
          if(hangmanPlay.checkGameOver()) 
          {
            kowns.gameOver();
          }
        }
      }
    }
  }
