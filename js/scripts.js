//front end

$(document).ready(function(){
	$("form#add").submit(function(event){
		event.preventDefault();
		var number1=parseInt($("#add1").val());
		var number2=parseInt($("#add2").val());
		var result = add(number1,number2);
		$("#output").text(result);
	});

	$("form#subtract").submit(function(event){
		event.preventDefault();
		var tract1=parseInt($("#sub1").val());
		var tract2=parseInt($("#sub2").val());
		var resultSub = subtract(tract1,tract2);
		$("#output-sub").text(resultSub);
	});

	$("form#multiply").submit(function(event){
		event.preventDefault();
		var mult1=parseInt($("#mult1").val());
		var mult2=parseInt($("#mult2").val());
		var resultMult = multiply(mult1,mult2);
		$("#output-mult").text(resultMult);
	});

	$("form#divide").submit(function(event){
		event.preventDefault();
		var divide1=parseInt($("#divide1").val());
		var divide2=parseInt($("#divide2").val());
		var resultDivide = divide(divide1,divide2);
		$("#output-divide").text(resultDivide);
	});
});




// back end

function remainder(x,y){
	var result = x%y;
  return resultRem;
}

function add(x,y){
	var result = x+y;
	return result;
}

function subtract(x,y){
	var resultSub = x-y;
	return resultSub;
}

function multiply(x,y){
	var resultMult = x*y;
  return resultMult;
}

function divide(x,y){
	var resultDivide = x/y;
	return resultDivide;
}
