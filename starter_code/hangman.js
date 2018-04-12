var hangman;

function Hangman() {
	this.words=["pedro","loco",6,5];
	this.secretWord="";
	this.letters=[];
	this.guessedLetter="";
	this.errorsLeft=10;
}



Hangman.prototype.getWord = function () {
	var position=Math.floor(Math.random()*this.words.length);
	return this.words[position].toString();
};

var one=new Hangman();




Hangman.prototype.checkIfLetter = function (keyCode) {

	if((keyCode>64&&keyCode<91)||(keyCode>96&&keyCode<123)){
		return true;
	}else{
		return false;
	}
};

Hangman.prototype.checkClickedLetters = function (key) {
	
	/*for (var i = 0; i < this.letters.length; i++) 
        {
            for (var j = 0; j < this.letters.length; j++) 
            {
                if (i != j) 
                {
                    if (this.letters[i] == this.letters[j]) 
                    { 
                    	this.letters.pop();
                        return false;
                         // means there are duplicate values
                    }
                }
            }
        }
        
        return true; */

        if(this.letters.indexOf(key)==-1){
        	return false;
        }else{
        	return true;
        }


};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter+=this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
	if(this.errorsLeft===0){return true;}
	else return false;
};

Hangman.prototype.checkWinner = function () {
	if(this.guessedLetter.length===this.secretWord.length)return true;
	else return false;
};
/*
document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};*/
