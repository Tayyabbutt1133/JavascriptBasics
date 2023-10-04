//Primitive data types are those that are not an object and have no methods.
//Objects are collections of properties and methods.

const { userName } = require("./Practice1");


// To remember Primitive data types:-
// nn=null,number bb=byte,boolean  ss=string, symbol   u=undefined
//Bigint is a new data type in javascript which is used to store large numbers
let a= null;
let b=10;
let c= true;
let d= BigInt(12);
let e= "Hello";
let f= Symbol("Hello I am symbol");
let g=undefined;

console.log(typeof(c));
console.log(a,b,c,d,e,f,g);


// To remember Objects(non Primitive data type):-   

const items={
    "harry": true,
    "rohan": false,
    "skillf": "javascript",
}

console.log(items["skillf"]);
// console.log(typeof(userName));
userName = Number.parseInt(userName); //convert string to number
