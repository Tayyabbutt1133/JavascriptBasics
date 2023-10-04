// // Create a variable of type string and try to add a number to it ?

// let a="This is a variable of type string which has a number 10 added to it";
// console.log(a);

// // use typeof operator to check data type of a variable ?

// a=true;
// let b=BigInt(12);

// console.log(typeof(a));

// // This is a object in javascript which is non primitive data type
// const a1={
//     name:"Rahul",
//     age:20,
//     city:"Delhi"
// };


// a1.name="Rahul Singh";  /// This is allowed in const variable oop in javascript concept

// console.log(a1);

// Create a dictionary of five words
// it works like a dictionary in which you can search for a word and get its meaning

// const prompt=require("prompt-sync")();
// let userName = prompt("Enter your word: ");
// const dict = {
//     Intelligent: "Having or showing intelligence, especially of a high level.",
//     Abandon: "Cease to support or look after (someone); desert.",
//     Abate: "Become less intense or widespread.",
//     Abnormal: "Deviating from what is normal or usual, typically in a way that is undesirable or worrying.",
//     Abolish: "Formally put an end to (a system, practice, or institution)."
// };

// // Check if the user's input exists as a key in the dictionary
// if (dict[userName] !== undefined) {
//     console.log(dict[userName]);
// } else {
//     console.log("Word not found");
// }


const prompt=require("prompt-sync")();
let userName = prompt("Enter your word: ");
exports.userName = userName;
console.log(typeof(userName));

