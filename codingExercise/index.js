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


