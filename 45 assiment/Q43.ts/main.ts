// Unchanged Magicians: Start with your work from Exercise 40. Call the 
// function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and 
// store it in a separate array. Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great 
// added to each magician’s name.

// 

      function show_magicians( magicians:string[]): void {
        magicians.forEach(magicians => 
            console.log(magicians));
      }
      function make_great(magicians:string[]):string[]  {
       return magicians.map(magicians => "the Gret " + magicians)
     }

        let magicians: string [] = ["jamal","Anas","Arman"]
        let great_magicians = make_great([...magicians]);

        console.log("original magicians ");
         show_magicians(magicians)

         console.log("\nGreat magicians");
         show_magicians(great_magicians)
         