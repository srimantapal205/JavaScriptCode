document.writeln(`<h1>JavaScript Code Practice</h1>`)
document.writeln(`<h2>Array</h2>`)
document.writeln(`<h4></h4>`)
document.writeln(`<p></p>`)


document.writeln(`<h4>Array Splice</h4>`)
let arr = ["I", "go", "home"];
document.writeln(`<p>${arr}</p>`);

delete arr[1];

document.writeln(`<p>${arr}</p>`);

document.writeln(arr.length)

let arr2 = ["a","b","c","d","e"];

arr2.splice(3,1);


document.writeln(`<p>Splice:${arr2}</p>`);
document.writeln(`<p>${arr2.length}</p>`);


let xArr = ["z","y","x","w","v","u"]

document.writeln(`<p>Slice value: ${xArr.slice(1,4)}</p>`)
document.writeln(xArr.length)


let arr3 = [1,2,3,4,5]
let arr5 = ["a","b","c","d","e"];

let concatArr = arr2.concat(arr3);
document.writeln(`<p>New Set: ${concatArr}</p>`),

arr5.forEach((item, index, array) => {
    document.writeln(`<p>${item.toUpperCase()} is at index of ${index} in array of [${array}]</p>`)
});

document.writeln(`<p>javascript find()</p>`);
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  document.writeln(`<p>${user.name}</p>`);

document.writeln(`<p>javascript findIndex() & findLastIndex()</p>`);
 
document.writeln(`<p>Index Value:  ${ users.findIndex(user => user.id == 1)}</p>`);
document.writeln(`<p>Last Index value:  ${users.lastIndexOf(user => user.name == "Mary" )}</p>`)

document.writeln(`<h4>Transform an array</h4>`);

const cars = [
  "Saab",
  "Volvo",
  "BMW",
  "AUDI",
  "SUV"
];

let getLength =  cars.map(item => item.length);
document.writeln(getLength);

let numArray = [1,6,9,7,-2,0,-3,5,6,-8];

numArray.sort();

document.writeln(`<p>Sort Array: ${numArray}</p>`)

numArray.reverse();

document.writeln(`<p>Reverse Array: ${numArray}</p>`)

// Create a array of object and extract value as a single array

const data = [
  { id: 1, product: "Abc_product-0", price: 123 },
  { id: 2, product: "Abc_product-1", price: 456 },
  { id: 3, product: "Abc_product-2", price: 789 }
];


const product = data.map(item => item.product)
const price = data.map(item => item.price)
document.writeln(`<p>${product}</p>`)
document.writeln(`<p>${price}</p>`)

