//Memoization
const memoizAddition = () =>{
   let cache ={};
   return (value) =>{
      if (value in cache) {
         console.log("Fetching From Cache")
         return cache[value]
      }else {
          console.log("Calculating Result");
          let result = value + 20;
          cache[value] = result;
          return result
      }
   }
}

const  addiition = memoizAddition();
console.log(addiition(20));
console.log(addiition(20));


function CarFun(model, color){
   this.model = model,
   this.color = color
}

CarFun.prototype.getCarDetails = function(){
   return this.model+ " car has "+this.color+ " color ";
}
const c1 = new CarFun("Bmw", "Blue")
console.log(c1.getCarDetails())

//es6 class 

class Bike{
   constructor(model, color){
      this.model = model,
      this.color = color
   }
   getDetails(){
      return `${this.model} bike has ${this.color} color`;
   }
}

console.log(new Bike("XYZ", "red"))
console.log(new Bike("XYZ", "red").getDetails())


// rest parameter

const restPara = (...args) => { 
   let  total = 0;
   for (const a of args) {
      total += a;
   }
   return total
 } 

 console.log(restPara(1,2,3,4));

//pass arguments with various kinds of data types such as number, string, and boolean, and you want to calculate the total of numbers only

const numberSum = (...args) =>{
   return args
         .filter((e)=>{
            return typeof e === "number";
         })
         .reduce((prev,curr) => {
            return prev + curr
         })
}

console.log(numberSum(10,'Hi',null,undefined,20));


// rest parameter string concat

const stringCombine = (...args) =>{
   return args.reduce((prev, cur)=>{
      return prev +" "+cur
   })
};

console.log(stringCombine("I","Love","My", "Motherland"));

function squaed(b) {
	return b*b;
}
console.log(squaed(5));