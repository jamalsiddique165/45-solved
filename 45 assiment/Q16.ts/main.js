// More Guests: You just found a bigger dinner table, so now more space 
// is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the 
// end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one 
// new guest to the end of your list. • Print a new set of invitation messages, 
// one for each person in your list.
var guests = ["Anas", "Arman", "Afsahn", "Jamal"];
console.log("AbsentGuest is not coming to dinner");
console.log("Greet news! we found a  bigger dinner table 3 new more guest ");
guests.unshift("Sania");
guests.splice(2, 0, "Tania");
guests.push("jannat");
guests.forEach(function (guestList) {
    console.log("Dear\n ".concat(guestList, " \n it is plesure to invited to you dinner \n Thank you\""));
});
