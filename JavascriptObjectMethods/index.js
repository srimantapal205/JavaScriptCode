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


console.log(Object.prototype);

console.log(Object.prototype.constructor === Object);

function person(name) {
   this.name = name;
}
console.log(person);
console.log(person.prototype);

function PersonAll(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
}

PersonAll.prototype.getFullName = function () {
   return this.firstName+' '+this.lastName;
}

let p1 = new PersonAll("John", "Doe");
let p2 = new PersonAll("John", "Doe");

console.log(p1.getFullName());
console.log(p2.getFullName());


// Using ES6 class

class PersonAll2 {
   constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName
   }
   getFullName(){
      return this.firstName+' '+this.lastName;
   }
}

let x1 = new PersonAll("John", "Doe");
let x2 = new PersonAll("John", "Doe");

console.log(x1.getFullName());
console.log(x2.getFullName());
// 22013310


//JavaScript Prototypal Inheritance

let animal ={
   animalEats: true
}
let rabit = {
   rabitJump : true
}

rabit.__proto__ = animal;
console.log(rabit.rabitJump)
console.log(rabit.animalEats)


const person11 = {
   firstName: 'John',
   lastName:'Doe',
   age:25
}

for (const key in person11) {
   if (person.hasOwnProperty(key)) {
      const value =  person[key];
      console.log(value);
   }
}


