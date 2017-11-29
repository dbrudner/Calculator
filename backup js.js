
var displayArray = [];

function displayNumber() {
	document.getElementById('display').innerHTML = array.join('');
}

function evaluate() {
	document.getElementById('display').innerHTML = eval(array.join(''));
}

function clear() {
	array = [];
	document.getElementById('display').innerHTML = "0";
}


//number buttons

document.getElementById('zero-button').addEventListener("click", function() {
	array.push(0)
	displayNumber();
});

document.getElementById('one-button').addEventListener("click", function() {
	array.push(1)
	displayNumber();
});

document.getElementById('two-button').addEventListener("click", function() {
	array.push(2)
	displayNumber();
});
document.getElementById('three-button').addEventListener("click", function() {
	array.push(3);
	displayNumber();
});
document.getElementById('four-button').addEventListener("click", function() {
	array.push(4)
	displayNumber();
});
document.getElementById('five-button').addEventListener("click", function() {
	array.push(5)
	displayNumber();
});
document.getElementById('six-button').addEventListener("click", function() {
	array.push(6)
	displayNumber();
});
document.getElementById('seven-button').addEventListener("click", function() {
	array.push(7)
	displayNumber();
});
document.getElementById('eight-button').addEventListener("click", function() {
	array.push(8)
	displayNumber();
});
document.getElementById('nine-button').addEventListener("click", function() {
	array.push(9)
	displayNumber();
});

//operation buttons


document.getElementById('plus-button').addEventListener("click", function() {
	array.push("+");
	displayNumber();
});
document.getElementById('minus-button').addEventListener("click", function() {
	array.push("-");
	displayNumber();
});
document.getElementById('divide-button').addEventListener("click", function() {
	array.push("/");
	displayNumber();
});
document.getElementById('multiply-button').addEventListener("click", function() {
	array.push("*");
	displayNumber();
});

//other buttons

document.getElementById('equals-button').addEventListener("click", function() {
	evaluate();
});

document.getElementById('decimal-button').addEventListener("click", function() {
	array.push(".");
	displayNumber();
});

document.getElementById('clear-button').addEventListener("click", function() {
	clear();

});