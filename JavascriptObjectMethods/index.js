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
   firstName: 'Mac',
   lastName:'Doe',
   age:25
};

for (const key in person11) {
   if (person11.hasOwnProperty(key)) {
      const value =  person11[key];
      console.log(value);
   }
}

// ES 2017

const es201Obj = Object.values(person11);
console.log(es201Obj);

const ssn = Symbol('ssn')
const person50 = {
   fname: "Abcd",
   lname: "Mnp",
   age:50,
   [ssn]:'123-456-789'
}

const kv =  Object.entries(person50);
console.log(kv);

//JavaScript Object.assign()
const COB = [];
const colors = [{id:1, name:'Red'},{id:2, name:'Green'},{id:3, name:'Blue'}];
const newColorsSet = Object.assign(COB, colors);
console.log(newColorsSet);
console.log(COB);


let box = {
   height: 10,
    width: 20,
    color: 'Red'

}
let style = {
   color: 'Blue',
   borderStyle: 'solid'
};

let boxStyle = Object.assign({},box,style);
console.log(boxStyle);


