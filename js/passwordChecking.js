//data types

//numbers
//strings
//(sort of) objects
//booleans

// console.log(true)
// console.log(false)

//boolean operators
console.log(5 > 4);
console.log(2 >= 4);
console.log(10 === 10);
console.log(10 !== 10);
console.log(3 < 3);
console.log(3 <= 3);
console.log("password123" === "Password123");

var userPassword = prompt("what's the password?");
var correctPassword = "swordfish";
var adminPassword = "admin";

//if statement i.e. conditional statement
if(userPassword === correctPassword){
alert("that is correct!")
} else if(userPassword === adminPassword){
alert("welcome admin!");
} else {
alert("that is wrong!");
}
