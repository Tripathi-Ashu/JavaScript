// forEach 

const arr1 = [10 , 20 , 30 , 40 , 50, 60 , 70];

// arr1.forEach ((number , index) => {
//     console.log(number , index);  
// });

// arr1.forEach((number) => {
//     sum += number;
// });

// console.log(sum);

// filter 

// const newArry2 = arr1.filter((Abhishek) => Abhishek > 20);
// console.log(newArry);

// arr.filtering = function(compare) {
//     const ans = [];
//     for(let num of this) {
//         if (compare (num)) {
//             ans.push(num);
//         }
//     }

//     return ans;
// };

// const newArry = arr.filtering((num) => num > 25)
// console.log(newArry);

// Array.prototype par custom function assign karein

Array.prototype.filtering = function (compare) {
    const ans = [];
    for (let num of this) {
        if (compare(num)) {
            ans.push(num);
        }
    }
    return ans; // Block ke andar return karein
};

const newArry = arr1.filtering((num) => num > 25);
console.log(newArry);

const a = [10 , 20 , 30 , 40 , 50, 60 , 70];
const answer = a.filtering((num) => num > 25);
console.log(answer);

// map 

// const arr = [20 , 40 , 60 , 80 , 120 ];
// const newArry4 = arr.map((map) => num*3);
// console.log(newArry4);

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

const newproduct = products.filter((prompt) => prompt.price > 50).sort((a ,b) => b.price -a.price);
console.log(newproduct);


const ans = products.map((product , index , arr) => ({name:product.name , price:product.price}));
console.log(ans);

// reduce 

const totalPrice = products.reduce((accumulator , currenVal) => {
    if(currenVal.inStock)
    return accumulator + currenVal.price;
    else 
    return accumulator;
}, 0)

console.log(totalPrice);

//Data structure : set 

const arr4 = [10 , 20 , 30 , 30 , 40 , 50, 30 ,40 ]
const s1 = new Set(arr4);
s1.add(11);
console.log(s1.has(23));
s1.delete(10);
s1.clear();

const email = ['r@gm', 'ra@gm', 're@gm' , 'ra@gm'];
const unique = [...new Set(email)];

console.log(unique);

const s1 = new Set(email);

for(let num of s1) {
    console.log(num);
};


// map Data Structure 

const m1 = new  map( [
    ['Rohit' , 40],
    [2, 'Rohit'],
    [true , 11],
    [[10 , 20 , 30 , 11] , 'Mohit']
]);

console.log(m1);
m1.set(name:"Manish" , age:20} , false);

for(let [key, value] of m1) {
    console.log(key , value);
};
