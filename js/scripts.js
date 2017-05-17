//-----------------------------------------UI
$(function() {
  $("#startForm").submit(function(event) {
    event.preventDefault();
    if ("think" == $("#start-page-text").val().toLowerCase()) {
      $(".start-page").fadeOut();
      $(".intro").fadeIn().delay(1700).fadeOut();
      $("#corePuzzle").delay(1750).fadeIn();
    } else {
      return;
    };
    var newGame = new Game(0, 1, false, false, false, false, false);


		document.getElementById('motor-div').style.pointerEvents = 'none'; // Make un-clickable
		document.getElementById('memory-div').style.pointerEvents = 'none';
		document.getElementById('core-div').style.pointerEvents = 'none';
    document.getElementById('power-div').style.pointerEvents = 'none';


    $("div.hub-option").click(function() {
      if ($(this)[0].classList[0] == "visual") {
        $(".game-hub").fadeOut();
        $("#visualPuzzle").fadeIn();
      } else if ($(this)[0].classList[0] == "motor") {
				$(".game-hub").fadeOut();
        $("#motorPuzzle").fadeIn();
      } else if ($(this)[0].classList[0] == "security") {
        $(".secKeyInput").fadeToggle();
      } else if($(this)[0].classList[0] == "security-key") {
        $(".secKeyHints").text("");
        for (var i = 0; i < newGame.secKeyHints.length; i++) {
          $(".secKeyHints").append("<li>" + newGame.secKeyHints[i] + "</li>")
        }
        $(".secKeyDisplay").fadeToggle();
      }else if ($(this)[0].classList[0] == "power") {

      }
    });

    $("#secKey").click(function() {
      var userSecKey = $("input#secKeyInput").val().toLowerCase();
      if(userSecKey == "iamtherobot") {
        alert("you win")
        document.getElementById('power-div').style.pointerEvents = 'auto';
        $(".secKeyInput").fadeOut();
        $(".game-hub").fadeIn();
        $("#power-status").removeClass();
        $("#power-status").text("ACCESS GRANTED - OFFLINE");
      };
    })

		var nextPuzzle = 2;  // multiple puzzle selector (start at 2 in order to keep even with puzzleSelector prototype)
		$(".next-button").click(function() {
			nextPuzzle += 1;
			if (nextPuzzle == 3) { // visual node puzzle 2
				$("#partition-one").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("21 - 18 - 16 - 15 - 15 - 16 - ??")
				$("#visual-one").text("15")
				$("#visual-two").text("16")
				$("#visual-three").text("22")
				$("#visual-four").text("18")
			} else if (nextPuzzle == 4) { // visual node puzzle 3
				$("#partition-two").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("1 - 2 - 4 - 8 - 16 - 32 - ??")
				$("#visual-one").text("64")
				$("#visual-two").text("128")
				$("#visual-three").text("48")
				$("#visual-four").text("46")
			} else if (nextPuzzle == 5) { // visual node puzzle 4
				$("#partition-three").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("128 - 64 - 32 - 16 - 8 - 4 - ??")
				$("#visual-one").text("8")
				$("#visual-two").text("2")
				$("#visual-three").text("0.5")
				$("#visual-four").text("4")
				nextPuzzle += 1; // to keep in line with motor function puzzle 2

			} else if (nextPuzzle == 7) { // motor function puzzle 2
				$("#sensor-matrix").text("GREEN").removeClass();
				$("#motor-puzzle-text").text("Data missing from Prime Values: 1*2*5*11*13*17*19 Recalibrate system with manual placement of prime value.")
				$("#motor-one").text("7")
				$("#motor-two").text("9")
				$("#motor-three").text("15")
				$("#motor-four").text("21")
			} else if (nextPuzzle == 8) { // motor function puzzle 3
				$("#right-arm").text("GREEN").removeClass();
				$("#motor-puzzle-text").text("Data missing from [RIGHT-LEG] memory node: [4] [14] [11-14] [31-14] [21-13-14] [3?-13-??-??]")
				$("#motor-one").text("[32-13-31-14]")
				$("#motor-two").text("[32-13-24-14]")
				$("#motor-three").text("[31-13-12-14]")
				$("#motor-four").text("[31-13-28-14]")
			}

			$(".output").fadeOut();

		});

		$(".exit-button").click(function () {
			$(".puzzle").fadeOut();
			$(".game-hub").fadeIn();
      $(".next-button").show();
      $(".output").hide();
      $(".exit-button").hide();
		})

    $("span.option").click(function() {
      if (newGame.solvePuzzle($(this)[0].classList[0]) == true) {
				if (newGame.motorState == true) {
					$(".output").show();
					$(".exit-button").show();
					$(".next-button").hide();
					$("#partition-five").text("GREEN").removeClass();


					$("#motor-status").removeClass();
					$("#motor-status").text("ACCESS DENIED - ONLINE");
					$("#memory-status").text("ACCESS GRANTED - OFFLINE");
					document.getElementById('motor-div').style.pointerEvents = 'none';
					document.getElementById('memory-div').style.pointerEvents = 'auto';
				} else if (newGame.visualState == true && newGame.puzzleState == 6) { // puzzleState when visualState was defined true
					$(".output").show();
					$(".exit-button").show();
					$(".next-button").hide();
					$("#partition-five").text("GREEN").removeClass();


          $("#visual-status").removeClass();
          $("#visual-status").text("ACCESS DENIED - ONLINE");
					$("#motor-status").text("ACCESS GRANTED - OFFLINE");
          document.getElementById('visual-div').style.pointerEvents = 'none';
					document.getElementById('motor-div').style.pointerEvents = 'auto'; // make clickable again
        } else if (newGame.coreState == true && newGame.puzzleState == 2) {
          $("#corePuzzle").fadeOut();
          $(".game-hub").fadeIn();
        } else {
					$(".output").fadeIn();
				}
      } else {
				if (newGame.malfunctionCount < 5) {
					newGame.malfunctionCount++
					$("span#malfunction-count").text(newGame.malfunctionCount + " ");
					$(".alert").slideDown().delay(3000).slideUp()
				} else {
					alert("MALFUNCTION COUNT EXCEEDED LIMIT...SYSTEM CRASH IMMENENT");
          for (var i = 1; i > 0; i++) {
            newGame.crash.push(i);
          }
				}
      }
    });
  });
});
//-----------------------------------------LOGIC
function Game(malfunctionCount, puzzleState, visualState, motorState, securityState, coreState, powerState) {
	this.malfunctionCount = malfunctionCount;
  this.puzzleState = puzzleState;
  this.visualState = visualState;
  this.motorState = motorState;
  this.securityState = securityState;
  this.coreState = coreState;
  this.powerState = powerState;
  this.crash = [];
  this.secKeyHints = [];
}

Game.prototype.solvePuzzle = function(option) {
  if (this.puzzleState == 1) { // core Node puzzle
    this.secKeyHints.push("There are only 4 words....");
    if (option == 2) {
      this.puzzleState++;
      this.coreState = true;
      this.secKeyHints.push("The first letter is 'I'...");
      return true;
    } else {
      return false;  // Can we put this at the end of IF/ELSE to dry code?
    }
  } else if (this.puzzleState == 2) {
    if (option == 3) { // visual node puzzle 1
      this.puzzleState++;
      this.secKeyHints.push("Each word is 1 character longer than the previous...except the last word.");
      return true;
    } else {
      return false;
    }
  } else if (this.puzzleState == 3) {
		if (option == 4) { // visual node puzzle 2
			this.puzzleState++;
      this.secKeyHints.push("Each word does not use vowels from other words...");
			return true;
		} else {
			return false;
		}
	} else if (this.puzzleState == 4) {
		if (option == 1) { // visual node puzzle 3
			this.puzzleState++;
      this.secKeyHints.push("'O' comes before and after 'B'...");
			return true;
		} else {
			return false;
		}
	} else if (this.puzzleState == 5) {  // Adrian, this is where your .giveSecKey puzzleState should be at
		if (option == 2) { // visual node puzzle 4
			this.puzzleState++;
			this.visualState = true;
      this.secKeyHints.push("The middle letter is 'E'...");
			return true;
		} else {
			return false;
		}
	} else if (this.puzzleState == 6) {
		if (option == 2) { // motor function puzzle 1
			this.puzzleState++;
      this.secKeyHints.push("'T' comes after 'O'...");
			return true;
		} else {
			return false;
		}
	} else if (this.puzzleState == 7) {
		if (option == 1) { // motor function puzzle 2
			this.puzzleState++
      this.secKeyHints.push("'H' is the middle letter in the last word...");
			return true;
		} else {
			return false;
		}
	} else if (this.puzzleState == 8) { // giveSecKey for Motor Function
		if (option == 3) { // motor function puzzle 3
			this.puzzleState++;
			this.motorState = true;
			return true;
		} else {
			return false;
		}
	}
}

//
// Game.prototype.giveSecKey = function(solvePuzzle, puzzleState) {
//   var keyArr = [];
//   if(this.puzzleState == 1) {
//     if(newGame.solvePuzzle() == true) {
//       keyArr.push("puzzle 1 key");
//     }
//     return keyArr;
//   }
//   if(this.puzzleState == 2) {
//     if(newGame.solvePuzzle() == true) {
//       keyArr.push("puzzle 2 key");
//     }
//     return keyArr;
//   }
//   if(this.puzzleState == 3) {
//     if(newGame.solvePuzzle() == true) {
//       keyArr.push("puzzle 3 key");
//     }
//     return keyArr;
//   }
//   if(this.puzzleState == 4) {
//     if(newGame.solvePuzzle() == true) {
//       keyArr.push("puzzle 4 key");
//     }
//     return keyArr;
//   }
// }
