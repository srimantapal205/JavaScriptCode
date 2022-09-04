document.writeln(`<h2>Object</h2>`)
let user = {
    name:"John",
    age:30,
    isAdmin:true
}
for (const key in user) {
   document.writeln(`<hr><p>Key : ${key}</p>`)
   document.writeln(`<p>${user[key]}</p><hr>`)
}
//delete user.age
document.writeln(`<p>${user.name}</p>`);
document.writeln(`<p>${user.age}</p>`);
user.isAdmin = true;
document.writeln(`<p>${user.isAdmin}</p>`);

//let fruit = prompt("Which fruit to buy", "apple");
// let bag = {
//     [fruit]:5,
// };

//document.writeln(bag.apple);

function makeUser(name, age){
    let userDetail = {
        name:name,
        age:age
    }
    return userDetail;
}

let user2 = makeUser("John", 30);
document.writeln(`<p>user2: ${user2.name}</p>`);

let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1": "USA"
}
for (const code in codes) {
    document.writeln(`<hr><p>Code-Key : ${code}</p>`)
    document.writeln(`<p>Country: ${codes[code]}</p><hr>`)
    
}

for (const prop in user) {
    document.writeln(`<hr><p>User-Key : ${prop}</p>`)
    
}

for (const codeKey in codes) {
    document.writeln(+codeKey)
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let  totasalarie = 0;
  for (const salarie in salaries) {
    document.writeln(`<hr><p>User-Key : ${salarie}</p>`)
    document.writeln(`<p>salarie: ${salaries[salarie]}</p><hr>`)
    totasalarie += salaries[salarie] 
  };
  document.writeln(`<hr><p>Total Salarie : ${totasalarie}</p>`)

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
 function multiplyNumeric(obj){
    for (const key in obj) {
        if (typeof obj[key] == "number") {
           obj[key] *=2;         
        }
    }
 } 

 document.writeln(multiplyNumeric(menu.width))

document.writeln(user);
document.writeln(user.valueOf() === user);

const cars = {
    carName:"BMW",
    price: 5000000,
    toString() {
        return `{name: "${this.carName}"}`;
      },
};
document.writeln(cars);
document.writeln(cars+50000);

let nUser = {name:"John"};
let admin = {name:"Admin"};
function sayHi() {
    document.writeln(`<p>${this.name}</p>`)
};

nUser.f = sayHi;
admin.f = sayHi;

nUser.f();
admin.f();
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let xuser = makeUser();
  
  alert( xuser.ref.name ); // Error: Cannot read property 'name' of undefined because there its call as a function  not as a method with "Dot" syntax.

function makeUser() {
    return {
        name :"John",
        ref(){ return this}
    };
}

let csUser = makeUser();
document.writeln(csUser.ref().name);
/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/ 

const calculator = {
    sum(){
        return this.a + this.b;
    },
    multi(){
        return this.a*this.b;
    },    
    read() {
        this.a = +prompt("a ? : ", 0 );
        this.b = +prompt("b ? : ", 0 ); 
    }
}
//calculator.read();
document.writeln(`<p>Sum:${calculator.sum()}</p>`)
document.writeln(`<p>Multi:${calculator.multi()}</p>`)

/*Chaining,
There’s a ladder object that allows to go up and down:
*/

let ladderStep = {
    step:0,
    stepUp(){
        this.step ++;
        return this;
    },
    stepDown(){
        this.step--;
        return this;
    },
    showCurrentStep(){
       document.writeln(`<p>Step:${this.step}</p>`);
       return this;
    }
}
ladderStep.stepUp().stepUp().stepDown().showCurrentStep().stepDown().stepUp().stepUp().stepUp().stepDown().showCurrentStep();

document.writeln(`<h2>Optional chaining '?.'</h2>`)
let userx= {
    address:{
        street:{
            sname:"BigWay",
        }
    }
}

document.writeln(userx.address && userx.address.street && userx.address.street.sname )
//document.writeln(user?.address);
//document.writeln(user?.address?.street);
//document.writeln(user?.address?.street?.sname);
document.writeln(user?.address.street.sname);
