// Make sure you open up the console in your browser!
console.log("Hello");

/*
This is a multiline
comment!
*/

// Variable that holds my name
var myName = "Ben Joshua Abbott";

// How many characters are in my name?
console.log(myName.length);

// Variable that holds my age
var myAge = 20;

// If the user is older than 21
if( myAge >= 21 ) {
	console.log("You are an adult");
} else if( myAge >= 13 ) {
	console.log("You are a teenager");
} else {
	console.log("You are a child");
}

// Check the length of the visitors name
if( myName.length == 0 ) {
	console.log("Your name is required");
} else if( myName.length > 10 ) {
	console.log("Your name must be at most 10 characters. You have written " + myName.length);
}
















