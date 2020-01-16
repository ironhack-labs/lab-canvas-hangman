let hangman;

class Hangman {
constructor() {
  this.words=['ahorcado', 'lavadora', 'invierno', 'plastico']
  this.secretWord=""
  this.letters=[]
  this.guessedLetter=""
  this.errorsLeft=10

 }

getWord(){
let aleat = Math.random()*this.words.length
aleat = Math.floor(aleat)

return this.words[aleat]
}

checkIfLetter(keyCode) {
if(typeof keyCode === 'number' && keyCode >= 65 && keyCode <=90){
  return true
}else{
  return false
}
}

checkClickedLetters(key) {
  for(let i=0;i<this.letters.length;i++){
    if(this.letters[i]===key){
      return false
    }
}
return true

}
addCorrectLetter(i) {
this.guessedLetter+=this.secretWord[i].toUpperCase()
this.checkWinner()

}

addWrongLetter(letter) {

}

//   checkGameOver() {

//   }

checkWinner() {

}

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
