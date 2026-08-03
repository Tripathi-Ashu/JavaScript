// cope and closure , HOF 

let a= 90;
const b = 40 ;

function greet() {
    let c =30;
    console.log(a);
};


greet();

// Globel 
// functiion
// Block level scope
// functional 

let global = 30 ;

function greet() {

    // let global = 40;
    console.log(global);
};

greet();

function greet() {

     let global = 40;

     function meet () {
        let global =  10;
        console.log(global);
     };
     meet();

    console.log(global);
};

// Intersting  

function  createCounter () {
     let count = 0;

    function increment() {
        count ++;
        console.log("I am increment function ");
    }
    
    return increment;
}

console.log(count);

const counter = createCounter(); // closer ki waja se hai 
console.log(counter());
console.log(counter);
console.log(counter());
console.log(counter());
  

console.log(count);

// Use Case 

let user = {
    balance: 500,
    deposit: function (amount) {
        if(typeof amount == "number" && amount >0){
            this.balance += amount;
            return this.balance;
        }
    },
    withdraw : function (amount) {
        if(typeof amount == "number" && amount >0){
            this.balance -= amount;
            return this.balance;
        }
    },
    getBalance : function () {
        return this.balance;
    }
}

user.deposit(200);

// Method ko accex kar pay  ,
// Direct variable ko acces na kar paye 


function  createBankAccount () {
    
    let balance = 500; // direct acces nhi kar sakta  

    let user = {
        
        deposit: function (amount) {
            if(typeof amount == "number" && amount >0){
                balance += amount;
                return this.balance;
            }
        },
        withdraw : function (amount) {
            if(typeof amount == "number" && amount >0){
                balance -= amount;
                return this.balance;
            }
        },
        getBalance : function () {
            return balance;
        }
}
 return user;

}

const customer = createBankAccount();
console.log(customer);

customer.deposit();
customer.getBalance();

// same 

function  createBankAccount () {
    
    let balance = 500; // direct acces nhi kar sakta  

    return{
        
        deposit: function (amount) {
            if(typeof amount == "number" && amount >0){
                balance += amount;
                return this.balance;
            }
        },
        withdraw : function (amount) {
            if(typeof amount == "number" && amount >0){
                balance -= amount;
                return this.balance;
            }
        },
        getBalance : function () {
            return balance;
        }
}
};

// hiher order function --> call back  , ek function s dusre function ko return karana  

function double(value) {

    return function execute (num ) {
        return num * value
        console.log("Hello");
    };

     
}

const n =  double(20);
console.log(n(5));

// or 

const n = double(20)(5);
console.log(n);


