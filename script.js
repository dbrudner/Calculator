var displayArray = [];
var evalArray = [];
operatorGate = true;

function displayNumber() {
	document.getElementById('display').innerHTML = displayArray.join('');
}

function evaluate() {
	document.getElementById('display').innerHTML = eval(evalArray.join(''));
}

function clear() {
	displayArray = [];
	evalArray = [];
	operatorGate = true;
	document.getElementById('display').innerHTML = "0";
}

var operationStatus = function() {
	document.getElementById('plus-button').style = "background-color:red;"
	document.getElementById('minus-button').style = "background-color:red;"
	document.getElementById('divide-button').style = "background-color:red;"
	document.getElementById('multiply-button').style = "background-color:red;"
}

operationStatus();

var opBackgroundWhite = function() {
	document.getElementById('plus-button').style = "background-color:white;"
	document.getElementById('minus-button').style = "background-color:white;"
	document.getElementById('divide-button').style = "background-color:white;"
	document.getElementById('multiply-button').style = "background-color:white;"
}

function operation(operator) {
	if (operatorGate === false) {
		displayArray = [];
		evalArray.push(operator);
		operatorGate = true;
		operationStatus();
		
	}
}

function decimalDupe() {
	if 	(displayArray.indexOf(".") === -1) {
		displayArray.push(".");
		evalArray.push(".");
	};
};

//number buttons
var numberFunction = function(number) {
	displayArray.push(number);
	evalArray.push(number);
	displayNumber();
	opBackgroundWhite();
	operatorGate = false;
}

document.getElementById('zero-button').addEventListener("click", function() {
	numberFunction(0)
});

document.getElementById('one-button').addEventListener("click", function() {
	numberFunction(1)
});

document.getElementById('two-button').addEventListener("click", function() {
	numberFunction(2)
});
document.getElementById('three-button').addEventListener("click", function() {
	numberFunction(3)
});
document.getElementById('four-button').addEventListener("click", function() {
	numberFunction(4)
});
document.getElementById('five-button').addEventListener("click", function() {
	numberFunction(5)
});
document.getElementById('six-button').addEventListener("click", function() {
	numberFunction(6)
});
document.getElementById('seven-button').addEventListener("click", function() {
	numberFunction(7)
});
document.getElementById('eight-button').addEventListener("click", function() {
	numberFunction(8)
});
document.getElementById('nine-button').addEventListener("click", function() {
	numberFunction(9)
});

//operation buttons


document.getElementById('plus-button').addEventListener("click", function() {
	operation("+");
});
document.getElementById('minus-button').addEventListener("click", function() {
	operation("-");
});
document.getElementById('divide-button').addEventListener("click", function() {
	operation("/");
});
document.getElementById('multiply-button').addEventListener("click", function() {
	operation("*");
});

//other buttons

document.getElementById('equals-button').addEventListener("click", function() {
	if (evalArray.length > 0) {
		evaluate();
		evalArray = [];
		displayArray = [];
	}
});

document.getElementById('decimal-button').addEventListener("click", function() {
	decimalDupe();
	displayNumber();

});

document.getElementById('clear-button').addEventListener("click", function() {
	clear();

});

//test

document.getElementById('test').addEventListener("click", function() {
	alert(evalArray.join(''));
});