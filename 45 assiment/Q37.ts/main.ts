// Large Shirts: Modify the make_shirt() function so that shirts are large by 
// default with a message that reads I love TypeScript. Make a large shirt and 
// a medium shirt with the default message, and a shirt of any size with a
//  different message.

function make_shirt2(size : string , message : string ) : void {
    console.log(`you have ordered a ${size} sized Shirt with the message: ${message} `);
    
    }
    make_shirt2("large","I love TypeScript")

    make_shirt2("medium","I love TypeScript")

    make_shirt2("small","keep clam and code on!")
    