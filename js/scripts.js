// Business Logic
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var mod = function(number1, number2) {
  return number1 % number2;
};


// Front End Logic
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt(prompt("Enter the first number for calculation"));
    var number2 = parseInt(prompt("Enter the second number for calculation"));
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
