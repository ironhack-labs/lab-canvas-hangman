let hangman;

class Hangman {
constructor() {
  this.words=['ahorcado', 'lavadora', 'invierno', 'plastico']
  this.secretWord=""
  this.letters=[]
  this.guessedLetter=""//letras adi
  this.errorsLeft=10 //intentos res

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


}

addWrongLetter(letter) {
this.errorsLeft-=1

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

}


document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  hangman.getWord()
  hangmanCan=new HangmanCanvas();
  hangmanCan.createBoard()
  hangmanCan.drawLines(hangman.secretWord.length)
};

document.onkeydown = (e) => {
if (hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(e.key)) {
    if (hangman.secretWord.includes(e.key)){
       hangman.addCorrectLetter(hangman.secretWord.indexOf(e.key))
       hangman.checkWinner()
    }
    else  {
      hangman.addWrongLetter(e.key)
      hangmanCan.drawHangman(errorsLeft)
      hangmanCan.writeWrongLetter(e.key,hangman.errorsLeft) //errores
      hangman.checkGameOver()

    }
}
};
