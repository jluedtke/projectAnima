//-----------------------------------------UI
$(function() {
  $("#startForm").submit(function(event) {
    event.preventDefault();
    if ("think" == $("#start-page-text").val().toLowerCase()) {
      $(".start-page").fadeOut();
      $(".intro").fadeIn().delay(13000).fadeOut();
      $("#corePuzzle").delay(13500).fadeIn();
    } else {
      return;
    };
    var newGame = new Game(0, 1, false, false, false, false, false);


		document.getElementById('motor-div').style.pointerEvents = 'none'; // Make un-clickable
		document.getElementById('core-div').style.pointerEvents = 'none';
    document.getElementById('power-div').style.pointerEvents = 'none';


    $("div.hub-option").click(function() {
      play();
      if ($(this)[0].classList[0] == "visual") {
        $(".game-hub").fadeOut();
        $("#visualPuzzle").fadeIn();
        $(".secKeyDisplay").hide(); // hides secKey to force update
      } else if ($(this)[0].classList[0] == "motor") {
				$(".game-hub").fadeOut();
        $("#motorPuzzle").fadeIn();
        $(".secKeyDisplay").hide(); // hides secKey to force update
      } else if ($(this)[0].classList[0] == "security") {
        $(".secKeyInput").fadeToggle();
      } else if($(this)[0].classList[0] == "security-key") {
        $(".secKeyHints").text("");
        for (var i = 0; i < newGame.secKeyHints.length; i++) {
          $(".secKeyHints").append("<li>" + newGame.secKeyHints[i] + "</li>")
        }
        $(".secKeyDisplay").fadeToggle();
      } else if ($(this)[0].classList[0] == "memory") {
        window.open("textrpg.html");
      } else if ($(this)[0].classList[0] == "power") {
				document.getElementById('power-div').style.pointerEvents = 'none';
        $(".panel").addClass( "power-shadow-green" );
        $(".panel-body").addClass( "power-shadow-white" );
        $(".game-hub").show().delay(500).fadeOut(1000);
        $("#robo-baby").hide().delay(1800).fadeIn(750);
      }
    });

    $("#secKey").click(function() {
      var userSecKey = $("input#secKeyInput").val().toLowerCase();
      if(userSecKey == "i am the robot" || userSecKey == "iamtherobot") {
        document.getElementById('power-div').style.pointerEvents = 'auto';
        $(".secKeyInput").fadeOut();
        $(".game-hub").fadeIn();
        $("#power-status").removeClass();
        $("#power-status").text("ACCESS GRANTED - OFFLINE");
      } else {

      }
    });

		var nextPuzzle = 2;  // multiple puzzle selector (start at 2 in order to keep even with puzzleSelector prototype)
		$(".next-button").click(function() {
			nextPuzzle += 1;
			if (nextPuzzle == 3) { // visual node puzzle 2
				$("#partition-one").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("21 - 18 - 16 - 15 - 15 - 16 - ??");
				$("#visual-one").text("- 15 -");
				$("#visual-two").text("- 16 -");
				$("#visual-three").text("- 22 -");
				$("#visual-four").text("- 18 -");
			} else if (nextPuzzle == 4) { // visual node puzzle 3
				$("#partition-two").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("1 - 2 - 4 - 8 - 16 - 32 - ??");
				$("#visual-one").text("- 64 -");
				$("#visual-two").text("- 128 -");
				$("#visual-three").text("- 48 -");
				$("#visual-four").text("- 46 -");
			} else if (nextPuzzle == 5) { // visual node puzzle 4
				$("#partition-three").text("GREEN").removeClass();
				$("#visual-puzzle-text").text("128 - 64 - 32 - 16 - 8 - 4 - ??");
				$("#visual-one").text("- 8 -");
				$("#visual-two").text("- 2 -");
				$("#visual-three").text("- 0.5 -");
				$("#visual-four").text("- 4 -");
				nextPuzzle += 1; // to keep in line with motor function puzzle 2

			} else if (nextPuzzle == 7) { // motor function puzzle 2
				$("#sensor-matrix").text("GREEN").removeClass();
				$("#motor-puzzle-text").text("Data missing from Prime Values: 1*2*5*11*13*17*19 Recalibrate system with manual placement of prime value.");
				$("#motor-one").text("- 7 -");
				$("#motor-two").text("- 9 -");
				$("#motor-three").text("- 15 -");
				$("#motor-four").text("- 21 -");
			} else if (nextPuzzle == 8) { // motor function puzzle 3
				$("#right-arm").text("GREEN").removeClass();
				$("#motor-puzzle-text").text("Data missing from [RIGHT-LEG] memory node: [4] [14] [11-14] [31-14] [21-13-14] [3?-13-??-??]");
				$("#motor-one").text("[32-13-31-14]");
				$("#motor-two").text("[32-13-24-14]");
				$("#motor-three").text("[31-13-12-14]");
				$("#motor-four").text("[31-13-28-14]");
        nextPuzzle += 1;
			} else if (nextPuzzle == 9) {
        $("#right-leg").text("GREEN").removeClass();
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
					$(".next-button").hide();
          $(".exit-button").show();
					$("#partition-five").text("GREEN").removeClass();


					$("#motor-status").removeClass();
					$("#motor-status").text("ACCESS DENIED - ONLINE");
					document.getElementById('motor-div').style.pointerEvents = 'none';
				} else if (newGame.visualState == true && newGame.puzzleState == 6) { // puzzleState when visualState was defined true
					$(".output").show();
					$(".next-button").hide();
          $(".exit-button").show();
					$("#partition-five").text("GREEN").removeClass();


          $("#visual-status").removeClass();
          $("#visual-status").text("ACCESS DENIED - ONLINE");
					$("#motor-status").text("OFFLINE");
          document.getElementById('visual-div').style.pointerEvents = 'none';
					document.getElementById('motor-div').style.pointerEvents = 'auto'; // make clickable again
        } else if (newGame.coreState == true && newGame.puzzleState == 2) {
          $("#corePuzzle").fadeOut();
          $(".game-hub").fadeIn();
          $("#memory-status").removeClass();
        } else {
					$(".output").fadeIn();
				}
      } else {
				if (newGame.malfunctionCount < 3) {
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
    if (option == 2) {
      this.secKeyHints.push("There are only 4 words");
      this.puzzleState++;
      this.coreState = true;
      return true;
    }
  } else if (this.puzzleState == 2) {
    if (option == 3) { // visual node puzzle 1
      this.puzzleState++;
      this.secKeyHints.push("Each word is 1 character longer than the previous, except the last word which is 2 letters longer");
      return true;
    }
  } else if (this.puzzleState == 3) {
		if (option == 4) { // visual node puzzle 2
			this.puzzleState++;
      this.secKeyHints.push("Each word does not use vowels from other words");
			return true;
		}
	} else if (this.puzzleState == 4) {
		if (option == 1) { // visual node puzzle 3
			this.puzzleState++;
      this.secKeyHints.push("'O' comes before and after 'B'");
			return true;
		}
	} else if (this.puzzleState == 5) {  // Adrian, this is where your .giveSecKey puzzleState should be at
		if (option == 2) { // visual node puzzle 4
			this.puzzleState++;
			this.visualState = true;
      this.secKeyHints.push("The middle letter is 'E'");
			return true;
		}
	} else if (this.puzzleState == 6) {
		if (option == 2) { // motor function puzzle 1
			this.puzzleState++;
      this.secKeyHints.push("'T' comes after 'O'");
			return true;
		}
	} else if (this.puzzleState == 7) {
		if (option == 1) { // motor function puzzle 2
			this.puzzleState++
      this.secKeyHints.push("'H' is the middle letter in the last word");
			return true;
		}
	} else if (this.puzzleState == 8) { // giveSecKey for Motor Function
		if (option == 3) { // motor function puzzle 3
			this.puzzleState++;
			this.motorState = true;
      this.secKeyHints.push("The first letter is 'I'");
			return true;
		}
	}
}

function play() {
  var audio = document.getElementById("clicksound");
  audio.play();
}
