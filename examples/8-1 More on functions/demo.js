function print(msg) {
	let finalMsg = 'Message: ' + msg;
    console.log(finalMsg);
}

//printMsg('Test!');
//printMsg('Another Test!');

function userMsg(name, msg) {
	let finalMsg = name + ' sys: ' + msg;
	console.log(finalMsg);
}

//userMsg('Victor', 'Surprise!');
//userMsg('Mary', 'I love Victor!');

function complexCalc(x, y) {
	let result = 0;
	result = x + y;
	result = result / (x - y);
	result = result * y - x;
	return result;  //Code behind 'Return' won't operate.
}

var calcResult = complexCalc(4, 6);
console.log(calcResult);