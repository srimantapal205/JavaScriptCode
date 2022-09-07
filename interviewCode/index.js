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

