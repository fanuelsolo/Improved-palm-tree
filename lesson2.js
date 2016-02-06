//Let's break down exactly how a computer thinks when it sees the code for a function.
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of " +
        theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");

var functionName = function( ) {
    // code code code
    // code code code
    // (more lines of code)
};
functionName();
//The var keyword declares a variable named functionName.
//The keyword function tells the computer that functionName is a function and not something else.
//Parameters go in the parentheses. The computer will look out for it in the code block.
//The code block is the reusable code that is between the curly brackets { }. Each line of code inside { } must end with a semi-colon.
//The entire function ends with a semi-colon.
//To use the function, we call the function by just typing the function's name, and putting a parameter value inside parentheses after it. The computer will run the reusable code with the specific parameter value substituted into the code.

//functions
var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

divideByThree(12);

var sayHello = function(name){
	console.log("hi, my name is" + name);
}
sayHello(Fanuel);
var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};
greeting("Fanuel");

//D.R.Y method
//You are a creature of habit. Every week you buy 5 oranges. But orange prices keep changing!

//You want to declare a function that calculates the cost of buying 5 oranges.
//You then want to calculate the cost of the 5 all together.
//Write a function that does this called orangeCost().

var orangeCost = function (price) {
	var quantity = price * 5
	console.log(quantity);	
};
orangeCost(5);

//Return keyword
//Now, when we call a function, we don't always want to just print stuff. Sometimes, we just want it to return a value. We can then use that value (ie. the output from the function) in other code. Let's learn about the return keyword, 
//then we'll see how to use functions with an if / else statement in the next exercise!

//The return keyword simply gives the programmer back the value that comes out of the function. 
//So the function runs, and when the return keyword is used, the function will immediately stop running and 
//return the value.
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(8);
console.log(newNumber);

//function, if/else/ return
// Define quarter fucntion here.
var quarter = function(number) {
    return number / 4;
};

if (quarter(24) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//fucntion with two parameter
var areaBox = function(length, width) {
    return length * width;
};
areaBox(4,4);
var perimeterBox = function(length,width){
    return length + length + width + width;
};
perimeterBox(3,9);
//Global vs Local Variables
//Let's talk about an important concept: scope. Scope can be global or local.

//Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global.
For example:
var globalVar = "hello";
var foo = function() {
    console.log(globalVar);  // prints "hello"
}
//The variable globalVar can be accessed anywhere, even inside the function foo.

//Variables defined inside a function are local variables. They cannot be accessed outside of that function.

//For example:

var bar = function() {
    var localVar = "howdy";
}

console.log(localVar);  // error
//The variable localVar only exists inside the function bar. Trying to print localVar outside the function gives a error.

//Check out the code in the editor. Until now you've been using the var keyword without really understanding why. The var keyword creates a new variable in the current scope. That means if var is used outside a function, that variable has a global scope. If var is used inside a function, that variable has a local scope.

//we have not used the var keyword, so when we log my_number to the console outside of the function, it will be 14.
