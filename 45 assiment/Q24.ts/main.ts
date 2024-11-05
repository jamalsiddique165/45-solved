// More Conditional Tests: You don’t have to limit the number of tests you create
//  to 10. If you want to try more comparisons, write more tests. Have at least
//   one True and one False result for each of the following:


// • Tests for equality and inequality with strings

//  Tests using the lower case function•

// • Numerical tests involving equality and inequality, greater than and 
// less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// equality and inequality
let myName = "Jamal";
console.log(myName == "Jamal" );      //True
console.log(myName == "jamal");      //false 

// lower case function

let fruit = "Apple";

console.log("Apple".toLowerCase()== "apple" ); // true

// //Numerical
let myNumber = 25;
console.log(myNumber == 25);    //true
console.log(myNumber !== 25);   //false
console.log(myNumber > 20);    //true
console.log(myNumber < 20);    //false

// //"and" and "or" operators
let num1 = 10;
let num2 = 5;
console.log(num1 > 9 && num2 < 5 );  //false
console.log(num1 > 9 || num2 < 5);   //true

// // whether an item is in a array

let fruits =["Apple","Banana","herry"] 

console.log(fruits.includes("Apple")); //true
// whether an item is not in a array
console.log(fruits.includes("Mango")); //false





