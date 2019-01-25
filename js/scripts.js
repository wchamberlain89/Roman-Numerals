// business logic

function getRomanQuantities(num) {
  var remainingValue = num;
  var values = [];
  var romanValues = [1000, 500, 100, 50, 10, 5, 1];

  romanValues.forEach(function(value){
    var amountOfTimes = Math.floor(remainingValue / value);
    if (amountOfTimes > 0) {
      remainingValue -= (amountOfTimes * value);
    }
    values.push(amountOfTimes);
  });

  return values;
};

// function romanConverter(number) {
//   var romanLetters = ["M", "D", "C", "L", "X", "V", "I"];
//   var romanValues = [1000, 500, 100, 50, 10, 5, 1];
//   var index = romanValues.indexOf(number);
//   return romanLetters[index];
// }

function romanDisplay(values) {
  var romanLetters = ["M", "D", "C", "L", "X", "V", "I"];
  var romanVals = getRomanQuantities(values);
  var result = "";
  romanVals.forEach(function(val, index){
    for (var i = 0; i < val; i++) {
      result += romanLetters[index];
    }
  });
  return result;
};


// user interface
$(function(){
  $("button").click(function(){
    var result = romanDisplay(parseInt($("#userNumber").val()));
    $("#result").text(result);
  });
});
