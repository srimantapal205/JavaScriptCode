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
