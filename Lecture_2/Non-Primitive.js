// Object --->

let person = 
{
    firstname: "johan",
    lastName: 'Doe',
    age:30
};


// Arrys --> A special type of object used for ordered collection . code javascript ;
let number = [12 , 23 , "ashutosh"];

// function --> is also is a special type of object 
function greet() 
{
    console.log("Hello")
};


//  VAlue vs reference 

let a = 10;
let b = a; // The value 10 is copied into b

b = 20; // This only changes b

console.log(a); // Outputs: 10 (a is unaffected)
console.log(b); // Outputs: 20

// Objects are Passed/Assigned by Reference
let obj1 = { value : 10};
let obj2 = obj1;// The reference to the object is copied into obj2

// Both obj1  and obj2 now points to the exact same object in memory 
obj2.value = 20; // We are modifying the object through obj2

console.log(obj1.value); // output : 20

console.log(obj2.value) ; // output: 20;


typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof 10n          // "bigint"
typeof Symbol('id') // "symbol"

typeof { a: 1 }     // "object"
typeof [1, 2, 3]    // "object"
typeof function(){} // "function" (a special case for functions)
typeof null         // "object" (this is a long-standing, well-known bug in JavaScript)