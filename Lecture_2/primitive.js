
// Primitive are fundamentel , immutable data type .  "Immutable" means that 
// Theri value Cannot be changes 

// String 

let name ='Ashutosh';
let greeting = " Hello Papa";
let template =`User : ${name}`; // Tempalate literals can embeded exp ressions 

// Number 


let initialValue =100;
let floatValue = 3.14;
let notANumber  =NaN ; //Result of an invalid math operation like 0/0

let infinity = Infinity;


// boolean 

let isActive = true;
let iscomplete = false;

// Undefined 
let user;
console.log(user); // Output : Undefined 

// null 
let  data = null ; 

// null vs undefiend : undefined is the default whene nothing is assigned.
// null is an explicit assignment od "Nothing" ;


// big int 

// symbol 
const id1 = Symbol('id');
const id2 = Symbol ('id');

console.log(id1=== id2); // Outputs: false (every symbol is unique)

