// Const --> const declear a block -scope vsrisble eith s constsnt refrence.

if(true) 
{
    const PI = 3.24;
}

//console.log(PI); // RefrenceError 

const GREETING = "Hello";
GREETING = "Hii"; // TypeError 

const config = { port: 8080};

config.port = 3000;  //This is allowed . config still point to the same object

// Temporal Dead Zone 

// Let  -->  let declear a block -scope  vsrisble thst can be reassigned;

for(let i =0 ; i<3; i++)
{
    console.log(i); // this is Block Scope 
}

console.log(i) // RefrenceError is not allowed 

//Reassignment 
let counter = 0;
counter = 1; // This is allowed 


//Initalization 
let name;
name = "Ashutosh";

// Temporal Dead Zone --> Coant acces 'myLetVar '  before initalizarion 

// Var  -- > var declar function-scoped variable that can be  resigned and redecleared . its use is descouraged in modern java Script 
if(true) 
{
    var leak = "I am aahutosh";
};

console.log(leak); // Output :  same 

console.log(myVar);
var myVar = "Hello";
console.log(myVar);

// Redeclaration 
var x = 10;
var x = 20 ;// Allowed , x is  20 ;


