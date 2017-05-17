$(function() {
  $(".option").click(function() {
    console.log($(this)[0].classList[0]);

    if ($(this)[0].classList[0] == "runaway") {
      $(".intro-form").fadeOut();
      $(".sit-form").fadeOut();
      $(".office-runaway-form").fadeIn();
    } else if ($(this)[0].classList[0] == "follow") {
      $(".intro-form").fadeOut();
      $(".office-fight-form").fadeOut();
      $(".sit-form").fadeOut();
      $(".resist-form").fadeOut();
      $(".follow-form").fadeIn();
    } else if ($(this)[0].classList[0] == "sit") {
      $(".intro-form").fadeOut();
      $(".sit-form").fadeIn();
    } else if ($(this)[0].classList[0] == "right-door-office") {
      $("#locked-door").text("The Door is Locked").delay(1500).fadeOut();
    } else if ($(this)[0].classList[0] == "left-door-office") {
      $(".office-runaway-form").fadeOut();
      $(".follow-form").fadeOut();
      $(".office-fight-form").fadeIn();
    } else if ($(this)[0].classList[0] == "resist") {
      $(".office-fight-form").fadeOut();
      $(".resist-form").fadeIn();
    } else if ($(this)[0].classList[0] == "resist-two") {
      $(".resist-form").fadeOut();
      $(".resist-two-form").fadeIn().delay(2000);
      $(".resist-two-form").fadeOut();
      $(".operating-room-form").fadeIn();
    } else if ($(this)[0].classList[0] == "go-in") {
      $(".follow-form").fadeOut();
      $(".operating-room-form").fadeIn();
    }

    if ($(this)[0].classList[0] == "escape") {
      $(".operating-room-form").fadeOut();
      $(".try-escape").fadeIn();
      $(".hide-attempt").fadeIn();
      $(".ending-scene").fadeIn();
    }
    else if ($(this)[0].classList[0] == "scan-room") {
      $(".operating-room-form").fadeOut();
      $(".hide-attempt").fadeIn();
      
      $(".ending-scene").fadeIn();
    }

  });
});
