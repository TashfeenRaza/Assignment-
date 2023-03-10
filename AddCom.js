// Q10-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/* Using template literals to print the string that is printing my Name and Age  */

/* Declaring variables and assigning values to them. */
let myName = "Faizan Tayyab Hussain";
let myAge = 26;

/* Printing the string that is printing my Name and Age. */
console.log(`My Name is ${myName} and my Age is ${myAge}`);

/* Creating a new h4 element and appending it to the body of the document. */
let text = document.createElement("h4");

text.innerText = `My Name is ${myName} and my Age is ${myAge}`;
document.body.appendChild(text);