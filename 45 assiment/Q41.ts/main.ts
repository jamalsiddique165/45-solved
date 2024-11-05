// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.



let Magicians: string [] = ["jamal","Anas","Arman"]

function show_magicians( Magicians:string[]): void {
    Magicians.forEach( Magicians => {
        console.log( Magicians);
        
    });
}
show_magicians( Magicians)