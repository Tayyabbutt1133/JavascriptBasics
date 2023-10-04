//Variables in javascript
//Variables are the storage area where you can store data and that variable can be used later in the program.
//Variables are declared using var keyword.
//Variables are case sensitive.
//Variables can be declared in camelCase or snake_case.


//Let is a closed scope variable. It is used to declare a variable which is limited to a block scope.
//Var is a global scope variable. It is used to declare a variable which is limited to a function scope.
function example() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // Outputs 10
  console.log(y); // It will throw an error because let only works in block scope.
}
//Javascript reserved keywords cannot be used as variable names.
//Javascript variable names should not start with a number.
//Tayyeb and TAYYEB are two different variables because javascript is case sensitive.
//Javascript variable names should not contain any special characters except $ and _.



function add(a,b,c){
  return a+b+c;
}
let sum = add(1,2,3);
console.log(sum);