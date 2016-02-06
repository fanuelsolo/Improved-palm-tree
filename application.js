
//find length of a string:
var name ="Fanuel"
name.length -->6

// comments that computer will ignore:

// interactive javascript:

confirm('This is an example of using JS 
to create some interaction on a website. Click OK to continue!');

//You can ask for input with a prompt:
prompt(what is your name?)

//Data Types : Numbers ,Strings,Boolean:

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)

"I m coding like a champ".length > 10; --> true
// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122); -->true
console.log("Goody Donaldson".length > 8);-->true
console.log(8*2 === 16);-->true
// comparisons:

if ("fannyman".length > 7 ) {
    console.log( "you are awesome");
}

//if statement:
if ("fanuel."length > 2) {
	console.log("me great!!");

} else{
	console.log("u not awesome!!");

}

if (12 / 4 == "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}
// Below is an example of printing the remainder  using modulo:

console.log(14%3);
console.log(99%8);
console.log(11%3);

//Substrings
// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
console.log("JavaScript".substring(0,4));
//java
console.log("January".substring(0,3));
//jan
console.log( "Melbourne is great".substring(0,13));
//Melbourne is
console.log("Hamburgers".substring(3,10));
//burgers

Variable:
//We store data values in variables. We can bring back the values of these variables by typing the variable name.

Manipulating numbers & strings:

//comparisons (e.g. >, <=)
//modulo (e.g. %)
//string length (e.g. "Emily".length;)
//substrings (e.g. "hi".substring(0, 1);)
//console.log( ) 
//Prints into the console whatever we put in the parentheses.

var myAge = 40;
var myName = "Leng";
var isOdd = true;
console.log(myAge);-->40
console.log(myName);-->leng
console.log(isOdd);-->true
// Declare a variable 
// myCountry and give it a string value.
var myCountry = "Eritrea";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);-->7

// Use console.log to print out the first three letters of myCountry.
console.log( "Eritrea".substring(0,3));-->eri

// declare a variable myName and give it your name.
var myName = "Fanuel";

console.log(myName);
// use console.log to print out the myName variable.

myName = "Fa";
// change the value of myName to be just the first 2 
console.log(myName); -->Fa


Code your own adventure

//1. it involves asking the user their age
confirm("I am ready to play!");
var age = prompt("what is your age?");
//the var age will hold the users response
//2. do if/else response
if (age < 13) {
	console.log("you are allowed to play,but i take no responsibility.");

} else{
	console.log("play onward, to glory and victory!");

}

Adding some story:
//add some strory at the end of the code
console.log("you are at the kanye west concert, and you hear this lyric
	'lace my shoes oof,start racing.'")

First move:
//next the user is about to talk to west
console.log("suddenly, west stops and says,'who wants to race me?'");
var yourAnswer= prompt("Do you want to race west on stage?")

creat different scenarios:
//Remember: = is for assignment, and === is to check if things are equal!
if (user==="yes") {
	console.log("you and West starting racing");

} else{
	console.log("oh no! West shakes his head and sings 'i set a pace,so i can race without pacing.'");


}

Asking for feedback:

var feedback =prompt("please rate my game of 10!");
if(feedback > 8){
	console.log("Thank you! we should race at the next concert!");	
}else{
	console.log("i will practice spriting more!");
}

//***Introduction to functions:
var divideByThree = function(number){
	var value = number /3;
	console.log(value);

};
divideByThree(6);
// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!




var age = 29
var age = 10
var ageIn5Years = age + 5
console log (ageIn5Years)

out put: 15

Variable III

Declare a variable called firstName and store your first name and lastName inside it.

var firstName = 'Fanuel'
var lastName = "Ghebremichael"
var fullName = firstName + lastName

console log (fullName)

Use one line of code to declare a variable called index14 and assign to it the character at index 14 in this string:

"What can we do? Keep going!"
Try to use the charAt method on the string with something like this: "example string".charAt(index). 
Or you can assign the correct character to the variable by counting manually.
var index14 = "What can we do? Keep going!".charAt(14)
var sentence = "This variable is already assigned. Find its length without manually counting the characters and spaces."
> var sentence.length
Line 2: Unexpected token .
> sentence.length
114

Let’s say we start with an empty train at Death Valley National Park station. When the trains open for the day, 3 people get on board.

Declare a variable called numPassengers and set its value to 0. 
Then, increment the variable by 3, but 
without using the variable’s name twice in the new statement.
var numPassengers = 0
numPassengers += 3

When these folks get on board, the new passenger count is 
reported to the conductor. Create a countMessage variable, 
and assign a String that uses numPassengers to say:

Attention: There are now 3 passengers on the train!
Remember, no hard-coding values!

var numPassengers = 0
numPassengers += 3
var countMessage = "Attention: There are now " + numPassengers + " passengers on the train!"
