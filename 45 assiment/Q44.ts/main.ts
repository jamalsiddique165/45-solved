// Sandwiches: Write a function that accepts a array of items a person wants on
//  a sandwich. The function should have one parameter that collects as many 
//  items as the function call provides, and it should print a summary of the 
//  sandwich that is being ordered. Call the function three times, using a 
//  different number of arguments each time.

function orderSandwiches(...item: string[]):void {
    console.log("you ordered a sandwiches with the folling items");
    item.forEach(item => console.log("- " + item));
    console.log("Enjoy your Sandwiches ");
    
    
}
orderSandwiches("tomato","Bread", "mayo")
orderSandwiches("tomato","Bread", "mayo","Garlic","Mayonnaise","onion")
orderSandwiches("Peanut","Buter","Jally")
orderSandwiches("Bread")