// Shrinking Guest List: You just found out that your new dinner table won’t
//  arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a 
// message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in 
// your list. Each time you pop a name from your list, print a message to that
//  person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them
//  know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of 
// your program.
var guestList = ["Sania", "Anas", "Tania", "Arman", "Afsahn", "jamal", "jannat"];
console.log("Unfornatuly! the new dinner table  won't so can invite only two guest");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("\n".concat(removedGuest, "\n \"sorry you are not invote to dinner.\""));
}
;
guestList.forEach(function (guest) {
    console.log("Dear\n ".concat(guest, "\n you are still invite to dinner \n thank you"));
});
