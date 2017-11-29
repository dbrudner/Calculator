function equation(number1,number2,operation) {
	if (operation === "+"){
		return number1 + number2
	}

	if (operation === "-"){
		return number1 - number2
	}

	if (operation === "/"){
		return number1 / number2
	}

	if (operation === "*"){
		return number1 * number2
	}


}

console.log(equation(1,2, "/"));

