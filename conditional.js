//This is a conditional expressions file for practice
const prompt=require("prompt-sync")();
let askbyuser = prompt("Enter your age: ");
const dictionary={
    20:"You are a teenager",
    40:"You are a middle aged person",
    50:"You are a old person"
};
if (dictionary[askbyuser] !== undefined) {
    console.log(dictionary[askbyuser]);
} else{
    console.log("Word not found");
}