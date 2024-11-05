"use strict";
// Checking Usernames: Do the following to create a program that simulates how
//  websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or 
// two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already
//  been used. If it has, print a message that the person will need to enter a 
//  new username. If a username has not been used, print a message saying that 
//  the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 
// 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["jannat", "anas", "arman", "jamal"];
let new_users = ["Jannat", "Afshan", "kirn", "fiza", "tuba"];
for (let new_username of new_users) {
    new_username.toLowerCase();
    let found = false;
    for (let existing_username of current_users) {
        if (existing_username.toLowerCase() === new_username) {
            found = true;
            break;
        }
    }
    ;
    if (found) {
        console.log(`Username ${new_username} has already been used`);
    }
    else {
        console.log(`Username ${new_username} is available `);
    }
}
