function addation() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]     
   }
   return sum;
}

let sum = addation(1,2,3,)
document.write(sum)

for (let i = 0; i < 5; i++) {
  setTimeout(() =>  console.log(i), 0  ) 
}


//JavaScript Functions are First-Class Citizens


//Storing Function in varible:
function add (a,b){
   return a + b;
}
let sum2 = add;
let result = sum2(10, 11)

document.writeln(`<p>${result}</p>`);


//Passing a function to another function

function avarage(a,b,fn){
   return fn(a,b)/2;
}
let result2 = avarage(10,30,sum2);
 document.writeln(`<p>${result2}</p>`);



 // Returning function from function

 function compareBy(propertyName){
   return function(a,b){
      let x = a[propertyName],
      y = b[propertyName];
      if(x>y){
         return 1
      } else if (x<y) {
          return -1
      }else{
         return 0
      }
   }
 }
 let product = [
   {neme: 'iPhone', price:900},
   {neme: 'Samsung Galaxy', price:850},
   {neme: 'Sony Xperia', price:700}
 ];

 console.log('Products sorted by name');
 product.sort(compareBy('name'))
console.table(product)

console.log('Products sorted by price');
product.sort(compareBy('price'))
console.table(product)


//  JavaScript Functions are First-Class Citizens example

function cmToIn(length){
   return length/2.54;
}
function inToCm(length){
   return length*2.54;
}
function convert(fn, length){
   return fn(length);
}
 
let inches = convert(cmToIn, 10);
document.writeln(`<p>${inches}inches</p>`)

let cm = convert(inToCm, 10);
document.writeln(`<p>${cm}cm</p>`)


//JavaScript Anonymous Functions

//setTimeout(() => { alert('Ececutue later after 5 second') }, 15000 );



let person = {
   firstName: 'John',
   lastName: 'Doe'
};
(function () {
   console.log(person.firstName+' '+person.lastName)
})(person);




//JavaScript recursive functions

function countDown(fromNumber){
   console.log(fromNumber);
   //document.writeln(fromNumber);
   document.getElementById('CountDown').innerHTML= fromNumber;
    let nextNumber =fromNumber - 1;
    if (nextNumber >=0) {
      setTimeout(() => {
       countDown(nextNumber)
      },2000)
      
    }
}
countDown(5)




