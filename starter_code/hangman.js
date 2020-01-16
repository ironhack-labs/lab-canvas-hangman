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
this.errorsLeft-=1
this.checkGameOver()
}
//si los puntos de viida son 0 regresa gameover
checkGameOver() {
return (this.errorsLeft === 0)
}

//que los puntos sean mayores a cero
checkWinner() {
let vid = 0;
 for (let i = 0; i < this.secretWord.length; i += 1) {
  if (this.guessedLetter.includes(this.secretWord[i])) {
  vid += 1;
}

}
return (vid === this.secretWord.length);
}

}7


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
