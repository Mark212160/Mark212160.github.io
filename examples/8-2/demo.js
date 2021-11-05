var numArray = [1, 5, 2, 11, 7];

//console.log(numArray[0]); // First position
//console.log(numArray[1]); // Second position

//console.log(numArray[4]); // Last position
numArray[4] = 18;
//console.log(numArray[4]); // Last position with a different value

//console.log(numArray); // Entire array

var students = ['Tom', 'Mary', 'Victor', 'John'];

// Mixed types of data in an array; not recommended
//var profile = ['TY Chen', 'NTHU', 40, 180, 72]; 

//console.log(profile[0]);

//var name = 'TY Chen', affiliation = 'NTHU', age = 40;

var emptyObj = {}; // An empty object

var profile = {
	name: 'TY Chen',
	height: 180,
	weight: 72,
	age: 39,
	affiliation: 'NTHU'
};

//console.log(profile.name); // Get the value of the 'name' key
//console.log(profile['name']); // Same

var key = 'name';
//console.log(profile[key]);
key = 'age';
//console.log(profile[key]);

profile.name = 'Tsung-Ying Chen'; // Change the 'name' key
//console.log(profile.name);

profile.gender = 'Male'; // Add a new 'gender' key
//console.log(profile.gender);

delete profile.gender; // Delete a key
//console.log(profile.gender);

// A more complex profile object
profile = {
     name: 39,
     affiliation: 'NTHU',
     height: 180,
     weught: 72,
     age: 39,
     contact: {
     	home: 227682149,
     	mobile: [937149506, 2222222222, 333333333],
     	email: 'chen.ty@gmail.com'
     }
};

// Get a key from an object that is stored in a key of another object
//console.log(profle.contact.home); 
//console.log(profile.contact.mobile[1]);

function printMsg(msg){
	console.log(msg);
}

function simpleCalc(x, y){
	console.log(x, y);
	console.log(x + y);
	}

var demoFuncs = {
	print: printMsg,
	calc: simpleCalc
};	

demoFuncs.print('Message printed!');
demoFuncs.calc(5, 7);

// Object-oriented programming