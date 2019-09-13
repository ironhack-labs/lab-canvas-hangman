let hangman;

 class Hangman {
  constructor(words, secretWord, letters, guessedLetter, errorsLeft){
this.words= ["vasco","gremio","flamengo"];
this.secretWord="";
this.letters=[];
this.guessedLetter="";
this.errorsLeft=10;
  }


getWord(){
 let selected = `this.words[Math.floor(Math.random() * this.words.lenght)]`
return selected;

 }
checkIfLetter(keyCode) {

if(keyCode>=65 && keyCode<=90 ){
  return true;
}else{
  return false;
}
}
 

checkClickedLetters(key) {
if(this.letters.includes(key)){
  return false;
}else{
  return true;
}
 };

 addCorrectLetter(i) {
 this.guessedLetter += this.secretWord[i].toUpperCase()
 this.checkWinner()

}

 addWrongLetter(letter) {
  this.errorsLeft -= 1
  this.letters.push(letter);
  this.checkGameOver()
}

checkGameOver() {
  if(this.errorsLeft === 0) {
    return true
  } else {
    return false
  }
}

checkWinner() {
  if (this.secretWord.length === this.guessedLetter.length) {
    return true
  } else {
    return false
  }
};
}


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.getWord();
  const hangmanBoard = new HangmanCanvas(hangman.secretWord)
  hangmanBoard.createBoard()
  hangmanBoard.drawLines()
};


document.onkeydown = (e) => {
  // if(checkGameOver()  && fjj) {
  //   hangmanBoard.
  // }
};
