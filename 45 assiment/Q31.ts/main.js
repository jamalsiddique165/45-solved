// No Users: Add an if test to Exercise 30 to make sure the list of users is 
//not  empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct
//  message is printed.
// We need to find some users!
var user_Name = ["admin", "jamal", "anas", "arman", "jannat"];
// if(user_Name.length > 0)
//   for(let user of user_Name ) {
//     console.log("User :" + user);
//   }
//   else {
//     console.log("We need to find some users");
//   }
// Remove all of the usernames
var null_Name = [];
if (null_Name.length > 0)
    for (var _i = 0, null_Name_1 = null_Name; _i < null_Name_1.length; _i++) {
        var user = null_Name_1[_i];
        console.log("User :" + user);
    }
else {
    console.log("We need to find some users");
}
