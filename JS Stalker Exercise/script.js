var fName = prompt("What is your first name?");
var lName = prompt("What is your last name?");
var age = prompt("How old are you?");

document.getElementById("fullName").innerHTML = "Your full name is " + fName + " " + lName + ".";
document.getElementById("ages").innerHTML = "You are " + age + " years old.";

console.log("Your full name is " + fName + " " + lName + ".");
console.log("You are " + age + " years old.");

