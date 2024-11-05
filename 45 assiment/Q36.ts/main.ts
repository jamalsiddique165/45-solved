// T-Shirt: Write a function called make_shirt() that accepts a size and the 
// text of a message that should be printed on the shirt. The function should 
// print a sentence summarizing the size of the shirt and the message printed 
// on it. Call the function.

function make_shirt(size : string =  "large",  message : string = " keep clam and code on" ) : void {
console.log(`you have ordered a ${size} sized Shirt with the message: ${message} `);

}
make_shirt()