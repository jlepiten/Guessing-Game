// Original work, by Justin Lepiten.
//
// A guessing game built on Javascript.
// The program picks a random number between 1-100, and the user must guess it.
// The user is informed if their guess is too high or low.
// Maximum number of guesses is 10.
//
// Utilizes event-driven programming using Javascript and Jquery.

// adds jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

//random number between 1 and 100
var secret = Math.floor(Math.random() * 101);

//max number of guesses
var guesses = 10;
$(document).ready(function() {
  $("span").text(guesses);
  $("#guess").click(guess);
  // guess when enter key is pressed (ease of use)
  // so the player doesn't have to use mouse to click each time
  $(document).keypress(function(e) {
    if (e.which == 13) {
      guess();
    }
  });
});

function guess() {
  var num = document.getElementById("num").value;

  // provides feedback messages for the player
  if (num == secret) {
    $("#msg").text("congratulations! the secret number is " + secret + ". you guessed " + num + ".");
    refresh();
  } else if (num < secret) {
    $("#msg").text("you're number " + num + " is too low.");
  } else {
    $("#msg").text("you're number " + num + " is too high.");
  }

  // updates guesses remaining
  guesses--;
  $("span").text(guesses);

  // player loses
  if (guesses <= 0) {
    $("#msg").text("you lost. the secret number is " + secret + ". you guessed " + num + ".");
    refresh();
  }
}

// refresh page after 5 seconds
// "starts a new game"
function refresh() {
  $("p").text("starting new game in 5 seconds... " + "or you can refresh the page.");
  setTimeout(function() {
    location.reload();
  }, 5000);
}
