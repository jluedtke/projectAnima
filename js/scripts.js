//-----------------------------------------UI
$(function() {
  $("#startForm").submit(function(event) {
    event.preventDefault();
    if ("think" == $("#start-page-text").val().toLowerCase()) {
      $("#corePuzzle").fadeIn();
      $(".start-page").fadeOut();
    } else {
      return;
    };
    var newGame = new Game(1, false, false, false, false, false);

    $("div.hub-option").click(function() {
      if ($(this)[0].classList[0] == "visual") {
        $(".game-hub").fadeOut();
        $("#visualPuzzle").fadeIn();
      }
    });


    $("span.option").click(function() {
      debugger;
      if (newGame.solvePuzzle($(this)[0].classList[0]) == true) {
        if (newGame.visualState == true) {
          $("#visualPuzzle").fadeOut();
          $(".game-hub").fadeIn();
          $("#visual-status").removeClass();
          $("#visual-status").text("ONLINE");
        } else if (newGame.coreState == true) {
          $("#corePuzzle").fadeOut();
          $(".game-hub").fadeIn();
        }
      } else {
        alert("Try again.");
      }
    });
  });
});
//-----------------------------------------LOGIC
function Game(puzzleState, visualState, motorState, securityState, coreState, powerState) {
  this.puzzleState = puzzleState;
  this.visualState = visualState;
  this.motorState = motorState;
  this.securityState = securityState;
  this.coreState = coreState;
  this.powerState = powerState;
}

Game.prototype.solvePuzzle = function(option) {
  debugger;
  if (this.puzzleState == 1) {
    if (option == 2) {
      this.puzzleState++
      this.coreState = true;
      return true;
    } else {
      return false;
    }
  } else if (this.puzzleState == 2) {
    if (option == 3) {
      this.puzzleState++
      this.visualState = true;
      return true;
    } else {
      return false;
    }
  }
}

Game.prototype.giveSecKey = function(solvePuzzle, puzzleState) {
  var keyArr = [];
  if(this.puzzleState == 1) {
    if(newGame.solvePuzzle() == true) {
      keyArr.push("puzzle 1 key");
    }
    return keyArr;
  }
  if(this.puzzleState == 2) {
    if(newGame.solvePuzzle() == true) {
      keyArr.push("puzzle 2 key");
    }
    return keyArr;
  }
  if(this.puzzleState == 3) {
    if(newGame.solvePuzzle() == true) {
      keyArr.push("puzzle 3 key");
    }
    return keyArr;
  }
  if(this.puzzleState == 4) {
    if(newGame.solvePuzzle() == true) {
      keyArr.push("puzzle 4 key");
    }
    return keyArr;
  }
}
