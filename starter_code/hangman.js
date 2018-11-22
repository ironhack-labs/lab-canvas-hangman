var hangman;
var hangmanCanvas;
function Hangman(){
	this.words=['PATO','LEON','ORNITORRINCO','FILIPINAS','ALEMANIA',
	'BRASIL','MANZANA','TORONJA','AUTOMOVIL','MOTOCICLETA','CIRCO',
	'FERROCARRIL','MEDICO','ABOGADO','INGENIERO','AVION','DELEGADO',
	'FUTBOL','GOLF','TENIS','BASQUETBOL','BASURA','ESCRITORIO','MESA',
	'REFRIGERADOR','COCINA','ALCOBA','REGADERA','JARDIN','ARBOL','PLANTA',
	'TIERRA','MARTES','DOMINGO','CAMPO','CIUDAD','PECES','TIBURON',
	'TORTUGA','BALLENA','PULPO','CARACOL','PANTERA','JIRAFA','ELEFANTE'];
	this.secretWord='';
	this.letters=[];
	this.guessedLetter='';
	this.errorsLeft= 10;
}

Hangman.prototype.getWord= function (){
	var word=this.words[Math.floor(Math.random()*this.words.length)]
	return word;
}
Hangman.prototype.checkIfLetter= function (letter){
	return (letter>=65 && letter<=90 || letter>=97 && letter<=122);
}

Hangman.prototype.checkClickedLetters= function (letter){
	var existe= this.letters.find(function(element) {
  				return element == letter;
  			});
	return existe?false:true;
}

Hangman.prototype.addCorrectLetter= function (letter){
	for(let i=0; i<this.secretWord.length; i++)
    if(letter.toUpperCase() === this.secretWord[i].toUpperCase())
			this.guessedLetter+=this.secretWord.substring(i,i+1).toUpperCase();
}

Hangman.prototype.addWrongLetter= function (){
	this.errorsLeft--;
}


Hangman.prototype.checkGameOver= function (){
	return (this.errorsLeft>0?false:true);
}

Hangman.prototype.checkWinner= function (){
	var contadorWin=0;
	for(var i=0;i<this.secretWord.length;i++){
		for(var j=0;j<this.guessedLetter.length;j++){
			if(this.guessedLetter[j] == this.secretWord[i]){
				this.guessedLetter[j]=null;
				contadorWin++;
				break;
			}
		}
	}
	return contadorWin==this.secretWord.length;
}

Hangman.prototype.existeEnSecreta= function (letter){
	var existe= this.secretWord.indexOf(letter);
	if(existe!=-1)
		return true;
	return false;
}


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
	hangmanCanvas = new HangmanCanvas(hangman.getWord());
	hangman.secretWord=hangmanCanvas.secretWord;
	hangmanCanvas.createBoard();
	hangmanCanvas.drawLines(hangmanCanvas.secretWord.length);
	console.log(hangmanCanvas.secretWord);
	document.getElementById("boton").className='boton-false';
};


document.onkeydown = function (e) {
	if(document.getElementById("boton").className==="boton-false"){
		tecla=e.keyCode;
		letra=String.fromCharCode(e.keyCode);

		if(!hangman.checkIfLetter(tecla))
			alert("Solo se aceptan letras");
		else{
			if(!hangman.checkClickedLetters(letra))
				alert("La letra pulsada ya fue seleccionada anteriormente. Seleccione otra letra");
			else{
				hangman.letters.push(letra);
				if(hangman.existeEnSecreta(letra)){
					hangman.addCorrectLetter(letra);
					hangmanCanvas.writeCorrectLetter(letra);
					if(hangman.checkWinner()){
						document.getElementById("boton").className='boton-true';
						hangmanCanvas.winner();
					}
				}
				else{
					hangman.addWrongLetter();
					hangmanCanvas.writeWrongLetter(letra,10-hangman.errorsLeft);
					hangmanCanvas.drawHangman(10-hangman.errorsLeft);
					if(hangman.checkGameOver()){
						document.getElementById("boton").className='boton-true';
						hangmanCanvas.gameOver();
					}
				}
			}
		}
	}
};
