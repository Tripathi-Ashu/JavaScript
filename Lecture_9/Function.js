// function 

function greeting() {
    console.log("Hello Ashutosh Tripathi ");
    return 10;
}

//greeting();

function addNumber(num1, num2, num3 =0 , num4=0) {
    const sum = num1 +  num2 + num3 + num4;
    //console.log(sum);
};

// Rest operator 
function addNumber(...num) {
    let sum = 0;
    for(let n of num) {
        sum += num;
    }
    //console.log(sum)
};

//addNumber(3 , 4);
//addNumber(6 ,7, 8);
// addNumber(6 , 8, 9, 10);

//console.log(greeting());

// rest opeator
const arr = [10 , 20 , 30  , 40];
const  [first , second , ... num] = arr;
//console.log(first , second , num);


// sperat operator  
const arr1 = [12 , 23 , 34, 45 , 56];
const arr2 = [20 , 30, 40  , 50, 60];

const ans = [...arr1 , ...arr2];

// function : expretion 

const add = function (num1 , num2){ 
    return num1 + num2;
}

//console.log(add(3 , 4)); // dont call the function before declaration ;

// arrow function 
const addNumbes = () =>  {
    console.log("Hello jii");
};

addNumbes();

const vallue = (num1 , num2) => num1 + num2;
vallue(3 , 4); 

const nums = (num1 , num2) => num1+ num2;
 
const squreNumber = (num1 , num2) => num1 * num2;
console.log(squreNumber(6 , 7)); 

// Object 

// 1...
const greeting = ()=> {
    let user = {
        name: "Rohit",
        age:20
    }

    return user;
}

//2..
const greeting = ()=> {
     return{
        name: "Rohit",
        age:20
    }
}

const gereeting = () => ({name:"Rohit" , age: 20});

console.log(greeting());

// IIFE 

(function greeting() {
    console.log("Hello ji")
})();

// Call back function ...........

function  meet(callback) {
    console.log("I am going to meet someone");
    callback();
    // code hot a ju call krna hota 
    console.log("I have finish meting")
};

function dance ( callback) {
    console.log("I am dancing");
    // hardcode nhi karna 
    callback();
    console.log("I have finish meeting")
}

function greet() {
    console.log("Hello ji , kese ho ");
};

// meet();
// greet();// this is problem call back is solution 

meet(greet);// phele meet function call hoga fir greet hoga 
meet(dance);

// blinked  example ......

function blinkedOrder() {
    console.log("We have started packing");
};

function zomatoOrderPlaced() {
    console.log("We have started preparing your food");

};

function payment(ammount, callback){
    console.log(`${ammount} payment has initalized `);
    console.log("Payment is recived");
    callback();

    // GST
    // Rider  
    // company  ko kitna 
};

payment(500, zomatoOrderPlaced);
payment(300 , blinkedOrder)