document.writeln(`<h1>Javascript Interview Code Practice</h1>`);
let undx;
let nulX = null;
document.writeln(`<h3>Primitive DataType</h3>`);
document.writeln(typeof "Johon");
document.writeln(typeof 3.500);
document.writeln(typeof true);
document.writeln(typeof 1234567899874563214569874123512369874521n)
document.writeln(typeof undx);
// Returns "object" (kind of a bug in JavaScript)
document.writeln(typeof nulX)
document.writeln(typeof Symbol('symbol'));
document.writeln(`<h3>Non Primitive DataType</h3>`);


let xarray = ['a','b','c'];
document.writeln('Array:'+ typeof xarray);
let objX = {}
document.writeln(typeof objX);

document.writeln(`<h4>Difference between “ == “ and “ === “ operators.</h4>`)
let x = 2;
let y = "2";
document.writeln('x='+x)
document.writeln('y='+'"'+y+'"');
if (x == y) {
     true
    document.writeln('x==y :'+true)
}else{
    document.writeln('x==y :'+false)
}

if (x===y) {
    document.writeln(', x===y :'+true)
} else {
    document.writeln(', x===y :'+false)
}


document.writeln(`<h4>Implicit Type Coercion in javascript</h4>`)

let n1 = 2;
let s1 = "2";

document.writeln(`2 + "2":: ${n1+s1}<br>`)
document.writeln(`'2' + 2:: ${s1+n1}<br>`)
document.writeln(`+'2' + 2:: ${+s1+n1}<br>`)
document.writeln(`2 - '2':: ${n1-s1}<br> Return 0, Because using '-' operator is that strign converted to number then return the subtract value <br>`)

document.writeln(`<h4>call(), apply() and, bind() methods.</h4>`);
document.writeln(`<h5>call()</h5>`);
document.writeln(`<h6>example 1: call() </h6>`);

function sayHi() {
    return `Hi ${this.name} !,`
}
let obj1 = {name:'Madhu'};
let p = sayHi.call(obj1);
document.writeln(`<p>${p}</p>`);
document.writeln(`<h6>example 2: an object to use the method of another object</h6>`);

let cars = {
    price: 650000,
    getPrice: function () {
        return this.price;
    }
}

let car2 = {price : 789000};
let p1 = cars.getPrice.call(car2);
document.writeln(`<p>Nwe Car Price : ${p1}</p>`);
document.writeln(`<h6>example 3: Pass an arguments</h6>`);

function howAreyou(text) {
    return this.name + text
}
let people = {name : "John"};
let p3 = howAreyou.call(people, ', How are you?')
document.writeln(`<p>${p3}</p>`);



document.writeln(`<h5>apply()</h5>`);

function talk(text){
    return this.name + text;
}

let ppl = {name:"Mona"};
let t = talk.apply(ppl, [' How are you'])

document.writeln(t);

document.writeln(`<h5>bind()</h5>`);

let carDetails = {
    details: function (rNo, brandName) {
        return this.name + ',' + ' Car details ' + rNo + ' , '+brandName;
    }
}
let ppl5 = {name : "Mack"}

let car5 = carDetails.details.bind(ppl5, 'w123456', 'BMW');

document.writeln(car5());

function solve(){
    
}

