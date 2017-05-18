$(function() {
  $(".option").click(function() {
    console.log($(this)[0].classList[0]);

    if ($(this)[0].classList[0] == "runaway") {
      $(".intro-form").hide();
      $(".sit-form").hide();
      $(".office-runaway-form").fadeIn();
    } else if ($(this)[0].classList[0] == "follow") {
      $(".intro-form").hide();
      $(".office-fight-form").hide();
      $(".sit-form").hide();
      $(".resist-form").hide();
      $(".follow-form").fadeIn();
    } else if ($(this)[0].classList[0] == "sit") {
      $(".intro-form").hide();
      $(".sit-form").fadeIn();
    } else if ($(this)[0].classList[0] == "right-door-office") {
      $("#locked-door").text("The Door is Locked").delay(1500).fadeOut();
    } else if ($(this)[0].classList[0] == "left-door-office") {
      $(".office-runaway-form").hide();
      $(".follow-form").hide();
      $(".office-fight-form").fadeIn();
    } else if ($(this)[0].classList[0] == "resist") {
      $(".office-fight-form").hide();
      $(".resist-form").fadeIn();
    } else if ($(this)[0].classList[0] == "resist-two") {
      $(".resist-form").hide();
      $(".resist-two-form").fadeIn().delay(2000);
      $(".resist-two-form").fadeOut();
      $(".operating-room-form").delay(2750).fadeIn();
    } else if ($(this)[0].classList[0] == "go-in") {
      $(".follow-form").hide();
      $(".operating-room-form").fadeIn();
    } else if ($(this)[0].classList[0] == "escape") {
      $(".operating-room-form").hide();
      $(".try-escape-form").fadeIn().delay(17000).fadeOut();
      $(".hide-attempt-form").fadeIn().delay(18000).fadeOut();
      $(".ending-scene").fadeIn().delay(19000).fadeOut();
      setTimeout(function(){ window.close("textrpg.html") }, 20000);
    } else if ($(this)[0].classList[0] == "scan-room") {
      $(".operating-room-form").hide();
      $(".hide-attempt-form").fadeIn().delay(18000).fadeOut();
      $(".ending-scene").fadeIn().delay(19000).fadeOut();
      setTimeout(function(){ window.close("textrpg.html") }, 20000);
    }

  });
});
