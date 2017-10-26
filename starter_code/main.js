$(document).ready(function() {

  $("#start-game-button").on('click', function() {
    // $('#start-game-button').css('display', 'none');
    // $('.game-logo').css('visibility', 'hidden');
    var game = new HangmanCanvas('HOLA');
    game._drawHangman(errorsDraw[0]);
    game._drawHangman(errorsDraw[1]);
    game._drawHangman(errorsDraw[2]);
    game._drawHangman(errorsDraw[3]);
})


});
