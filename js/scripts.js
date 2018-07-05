//front end

$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var number1=parseInt($("#add1").val());
		var number2=parseInt($("#add2").val());
		var result = add(number1,number2);
		$("#output").text(result);
	});

});

// back end

function remainder(x,y){
	var result = x%y;
  return result;
}

function add(x,y){
	var result = x+y;
	return result;
  return result;
}

function subtract(x,y){
	var result = x-y;
}

function multiply(x,y){
	var result = x*y;
  return result;
}
