// Make sure you open up the console in your browser!
console.log("That's confusing");

/*
This is a multiline
comment!
*/

// Variable that holds my name
var myName = "Ben Joshua Abbott";

// How many characters are in my name?
console.log(myName.length);

// Variable that holds my age
var myAge = 24;

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

// An array (list, collection etc) of people
var people = ["Ben", "Andrew", "Mel", "Max"];

console.log( people );

console.log( people[2] );

// Loop over all the people in the people array
// and display their name in the console
// i = iterations (counter)
for( var i = 0; i < people.length; i++ ) {
	console.log( people[i] );
}

// Tell JavaScript to find the button with ID = hello
var helloButton = document.querySelector("#hello");

// Listen for clicks on the hello button
helloButton.onclick = function(){
	alert('Hello!');
}

// A function that calculates the grand total
function calculateGrandTotal( prices ) {

	// Create a variable to hold the grand total
	var grandTotal = 0;

	// Loop over all the prices
	for(var i = 0; i < prices.length; i++) {
		grandTotal = grandTotal + prices[i];
	}

	// Display the grand total
	console.log( grandTotal );

}

// Some shopping carts
var cart1 = [20, 15, 12, 45, 90, 198];
var cart2 = [5, 10];

calculateGrandTotal( cart1 );
calculateGrandTotal( cart2 );














