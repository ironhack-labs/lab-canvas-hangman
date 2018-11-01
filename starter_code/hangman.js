let characters = ["Snow White and the Seven Dwarfs", "Pinocchio", "Dumbo", "Bambi", "The Lion King", "Aladdin", "Cinderella", "Sleeping Beauty", "Mulan", "Beauty and the Beast"];
let newGame;
  
document.getElementById('start-game-button').onclick = function () {
      newGame = new HangmanCanvas();
      newGame.getWord(characters);
  };


  document.onkeydown = function(e) {

  };