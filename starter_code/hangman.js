var hangman;
  //this.words = ["juego","calzon","javascript","tamal"];

function Hangman() {
this.words = ["juego","calzon","javascript","tamal"];
this.secretWord = ""
this.letters = secretWord.split("");
this.guessedLetter=[];
this.errorsLeft = 10;
this.pusheados = [];
this.abecedario = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z'; 
this.abc    =    this.abecedario.split(',');
 }

 Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  
  if (!/^([0-9])*$/.test(keyCode)){
    alert("El valor " + keyCode + " es una letra");
    }

 };

 Hangman.prototype.checkClickedLetters = function (key,obj) {
  for(var i=0; i<key.length; i++) {
    if (key[i] == obj) {
      pusheados= this.abecedario.slice(i,1);
      return true;
      //addEventListener onKeyDown de todo el teclado, cuando presiones la letra
      //se tiene que guardar en el array vacio, donde se iran sumando las teclas a las que se le hagan click
      //usar un if para comparar su la letra que esta siendo pusehada ya está en el array
      // devolver true o false
    }else{
      return false;
    }

}
}
 };

 Hangman.prototype.addCorrectLetter = function (i) {
  if()
 };

 Hangman.prototype.addWrongLetter = function (letter) {

 };

 Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft===0){
    return true;
  }else{
    return false;
  }
 };

 Hangman.prototype.checkWinner = function () {
  if(this.guessedLetter.length===this.secretWord.length){
    return true;
  }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
