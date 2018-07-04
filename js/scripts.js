var number1=parseInt(prompt("enter the first number"));
var number2=parseInt(prompt("enter the second number"));

function remainder(x,y){
	var result = x%y;
  return result;
}

function add(x,y){
	var result = x+y;
  return result;
}

function subtract(x,y){
	var result = x-y;
  return result;
}

function multiply(x,y){
	var result = x*y;
  return result;
}
alert(multiply(number1,number2));
