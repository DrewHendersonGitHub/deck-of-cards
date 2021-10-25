$(document).ready(function() {
  $(".btn-dark").click(function(event) {
    event.preventDefault();

    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        $("#results").append("<li>" + number + ' of '+ suit + "</li>");
      });
    });
    $("#results").show();
  });
});