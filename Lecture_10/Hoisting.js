var a =10;
var b = 20;

function addNumber(num1 , num2) {
    var sum = num1 + num2;
    return sum;
};

var sumResult1 = addNumber(a ,b);
var sumResult2 = addNumber(4 , 5);

console.log(sumResult1 ,sumResult2);

// Execution Contex  
// Memory allocation 
// a = undefine 
// b = undefine 
// addNumber = fnCode 
// sumResult1 = undefine 
// sumResult2 = undefine 

// Execution phase 

// let const  
// Memory allocstion 
// a = <Uninitialided> (Temporal ded zone);