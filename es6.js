//ES6

/* let string = "Im just a string";
let number = 10000.00;
let isImInHome = true;
let _null = null;
let _undefined = undefined;*/

 // var vs  let vs const

//exp 1

/*console.log(a); // hoisting, global variable nature
var a = 10;
console.log('1st ',a); // reassign values will leads to a problem (un controlled way)
var a = 30;
console.log('2nd ',a);*/

// solution

//let --> local and block scoped variable;

/*let a = 10;
console.log('let 1st', a);

 a = 20;
console.log('let 2nd decl ', a);*/

// constant only for pass by value;

/*const a =  10;

console.log('constant', a);

a = 20; // error

console.log('constant after change to 20', a);*/

// constant pass by reference;

/*const obj1 = { a: 10, b: 20, c: 30 };

console.log('obj1', obj1);

obj1.b = 50;
console.log('obj1 after update', obj1);*/

// copy object

/*const obj2 = obj1;

console.log('obj2 = obj1 ', obj2);

obj2.a = 1000;
obj2["invalid 1"] = "yes, i'm invalid";
console.log('obj2 = obj1, and updated "a" value ', obj2);
console.log('obj2 = obj1, impacted obj1 ', obj1);
console.log('access invalid variables ', obj1["invalid 1"]);
*/

//solution to object or array copy;

//1st possible solution
/*const obj1 = { a: 10, b: 20, c: 30 };
const obj2 = {};
 obj2.a = obj1.a;
 console.log('obj1.a', obj1);
 obj2.a = 30;
 console.log('obj2.a after update', obj1);*/

 // effective solution with spread operator;

const obj1 = { a: 10, b: 20, c: 30 };
const obj2 = { a: 30, b: 20,...obj1, c: 50, };

//console.log('obj1', obj1);
console.log('obj2', obj2);

const array1 = [1,2,3,4,5,6];












