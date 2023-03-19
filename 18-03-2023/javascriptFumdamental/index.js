
document.writeln( `<h1>JavaScript Practial</h1>`)
console.log('Hello World');
// window.alert('Hi');
document.writeln(document);
console.log(document);
console.log('Hello World', 123);


function testCreate() {
    let a = 0;
    return (
        (a) ? (true): (false)
    )
}

document.writeln('\n'+ testCreate());

console.log(1+'2'+'2');

// Console Count

for (let i = 0; i < 5; i++) {
    console.count('Count Number');
    console.log(i)
}

 const  arr = [5,2,8,6,9];
 console.dir(arr);
console.dir(document.location);

//console.clear()

let num1 = 10, num2=0;
if (num1 !== 10) {
    console.log(num1/num2);
} else {
    console.error('Divided by 0')
}


console.time('TrackLoop');
for (let x = 0; x < 10; x++) {
   console.log(x);
}
console.timeEnd('TrackLoop');

console.log(console);
console.info(document);

let n1 = 10, n2 = 5;

let add =  n1 + n2;
console.log(add);
let sub = n1-n2;
console.log(sub);
let multi = n1*n2;
console.log(multi);
let divi = n1/n2;
console.log(divi);

let modules1 = n1 % n2;
console.log(modules1);

n1++
console.log(n1);

++n2
console.log(n2)

n1--
console.log(n1)

--n2
console.log(n2);


 console.log(2==2);
 console.log(2=='2')

 console.log(2===2);
 console.log(2==='2');


 //Ternary Operator ? :

 let s = 1;
 console.log(s ? 'Yes' : 'No');

 