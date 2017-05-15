//-----------------------------------------UI
$(function() {
  $("#startForm").submit(function(event) {
    event.preventDefault();
    if ("think" == $("#start-page-text").val()) {
      $("div.puzzle").show();
      $(".start-page").hide();
    }

    var newGame = new Game(1, false, false, false, false);

    $("span.option").click(function() {
      console.log($(this)[0].classList[0]);



      if (newGame.solvePuzzle($(this)[0].classList[0]) == true) {
        $("#end-game").show();
      } else {
        alert("Try again.");
      }
    });


  });
});
//-----------------------------------------LOGIC
function Game(puzzleState, visualState, motorState, securityState, coreState) {
  this.puzzleState = puzzleState
  this.visualState = visualState
  this.motorState = motorState
  this.securityState = securityState
  this.coreState = coreState
}

Game.prototype.solvePuzzle = function(option) {
  if (puzzleState == undefined) {
    if (option == 2) {
      this.puzzleState++
      this.coreState = true;
      return true;
    } else {
      return false;
    }
  } else if (puzzleState == 1) {
    if (option == 3) {
      this.puzzleState++
      this.visualState = true;
      return true;
    } else {
      return false;
    }
  }
}
