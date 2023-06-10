//1: 
var car = new Vehicle("Honda", "White", "2010","UK")
console.log(car);
function Vehicle(model, color, year, country){
   this.model = model;
   this.color = color;
   this.year = year;
   this.country = country; 
}

//2:
function foo(){
   let x = (y = 0);
   x++
   y++
   return x
}

console.log(foo(), typeof x, typeof y)

//3: 
function main(){
   console.log("A");
   setTimeout(function print(){
      console.log("B")
   }, 0);
   console.log("C")
}
main()

//4:
console.log(0.1+0.2 === 0.3)

//5:
var y = 10;
if (function f(){}) {
   y += typeof f
}

console.log(y)

//6:

function foo1(){
   return ;
   {
      message:"Hello World"
   }
}
console.log(foo1())

//7:
var myChars = ["a","b","c","d","e"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length)

//8:
var arr1 = new Array(3);
console.log(arr1);

var arr2 = []
arr2[2] = 100;
console.log(arr2)

var arr3 = [, , ,]
console.log(arr3);

//9:

const obj ={
   prop1: function(){
      return 0
   },

   prop2(){
      return 1;
   },
   ["prop" + 3](){
      return 2
   }
}

console.log("x:"+ obj.prop1())
console.log("y:"+ obj.prop2())
console.log("z:"+ obj.prop3())

//10:
console.log("R1:"+ 1<2<3);
console.log("R2:"+ 3>2>1);

/////Object decelear
const t1 = { ["testFun"](){
   return 0;
}
}
console.log(typeof t1);
console.log(t1.testFun())

//11:
function printNmber(first, second, first) {
   console.log(first, second, first)
}

printNmber(1,2,3)

//12
// const printNmberArrow = (first, second, first) => { 
//    console.log(first, second, first)
//  } 
//  printNmberArrow(1,2,3)

//13:
// const arrowFun = () => arguments.length
// console.log(arrowFun(1,2,3))

//14:
document.writeln( String.prototype.trimLeft.name === "trimLeft");
document.writeln( String.prototype.trimLeft.name === "trimStart");

//15:
console.log(Math.max());

//16:
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]])

//17:
console.log(10+"10")
console.log(10-"10")

//18:
console.log([0] == false)
if ([0]) {
   console.log("I am true")
}else {
    console.log("I am false")
}

//19:
console.log([1,2]+[3,4]);

//20:
const numbers =new Set([1,2,3,4,5]);
console.log(numbers)

const browser = new Set("Firefox")
console.log(browser);

//21:
console.log(NaN === NaN)

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
   for (let j = 0;  i< n ; j++) {
      string += " ";
   }
   for (let k = 0; k < 2 *(n-i) ; k++) {
      string += "*"
   }
   string += "\n"
   
}
console.log(string);