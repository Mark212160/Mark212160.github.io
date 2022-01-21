//alert('This is an alert');

function printMsg() {
	console.log('This is a message in the console');
}

printMsg();

var varfunction = function() {
	console.log('This is a function stored in a variable.');
};

varFunction();

//----------------------------------------------

alwaysDoFirst();

function alwaysDoFirst(){
	consloe.log('You can call this function anywhere in the scropt!');
}
/*It stiil works*/

callThisLater();

var callThisLater = function(){
	console.log('You can only call this function after it is built.')
};
/*ERROR*/