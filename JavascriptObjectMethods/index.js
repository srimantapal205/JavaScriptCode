let car = {
   brand:"BMW",
   model:1980,
}

car.carFun = () => { console.log('Hello Car') };
car.carFun();

let car2 ={
   brand:"BMW",
   model: 1920,
   combo: function () { return `${this.brand} is ${this.model}` } 
}

console.log(car2);
console.log(car2.combo());

