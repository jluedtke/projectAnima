//-----------------------------------------UI
$(function() {
  $("#new-game").click(function() {
    $("div.puzzle").show();

    // var newGame = new Game(gameState);

    $("span.option").click(function() {
      console.log($(this)[0].classList[0]);

      var result = solvePuzzle($(this)[0].classList[0]);

      if (result == true) {
        $("#end-game").show();
      } else {
        alert("Try again.");
      }
    });


  });
});
//-----------------------------------------LOGIC

function solvePuzzle(option) {
  if (option == 2) {
    return true;
  } else {
    return false;
  }
}
