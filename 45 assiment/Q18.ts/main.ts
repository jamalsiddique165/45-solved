// Seeing the World: Think of at least five places in the world 
// you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical
//  order.
//  • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order 
// of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has 
// changed.
// • Reverse the order of your list again. Print the list to show it’s back to 
// its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to
//  show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed.

let placeTovisit : string [] = ["England","Japan","China","Turky","Usa"]


//  • Print your array in its original order.
console.log("original order", placeTovisit);
// • Print your array in alphabetical order without modifying

console.log("alphabetical order",[...placeTovisit].sort());
// array is still in its original order

console.log("still original order", placeTovisit);
// • Print your array in reverse alphabetical order

console.log("Reverse alphabetical order",[...placeTovisit].sort().reverse());
// • Show that your array is still in its original order by printing

console.log("original order", placeTovisit);
//•Reverse the order of your list.Print the array to show  order has changed.

console.log("Reverse order", placeTovisit.reverse());
// • Reverse the order of your list again.

console.log("original order", placeTovisit.reverse());
// • Sort your array so it’s stored in alphabetical order.

console.log("alphabetical order",placeTovisit.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order.

console.log("Reverse alphabetical order",placeTovisit.sort().reverse());