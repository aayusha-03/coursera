// Array of names
let names = ["Yaakov" , "john" , "Jen" , "Jason" , "Paul" , "Frank" , "Larry" , "Paula" , "Laura" , "Jim"];
// Loop over each name in the array
for (let i = 0; i < names.length; i++) {
  // Get the current name
  let name = names[i];

  // Check if the first letter is 'j' or 'J'
  if (name[0].toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
