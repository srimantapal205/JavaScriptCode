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