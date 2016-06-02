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
    var addNumber1 = parseInt($("#add1").val());
    var addNumber2 = parseInt($("#add2").val());
    var addResult = add(addNumber1, addNumber2);
    $("#addOutput").text(addResult);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var subNumber1 = parseInt($("#subtract1").val());
    var subNumber2 = parseInt($("#subtract2").val());
    var subResult = subtract(subNumber1, subNumber2);
    $("#subOutput").text(subResult);
  });
});
