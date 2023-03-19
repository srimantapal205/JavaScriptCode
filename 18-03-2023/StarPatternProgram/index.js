document.writeln(`<h2>Square Star Pattern in Javascrip</h2>`);
let n = 5;
let space = "";
let str = "*";

for(let i = 0; i < n; i++){
    for( let j = 0; j<n; j++){
        space += "*";
    }
    space += `</br>`;
}

document.writeln(space);
//console.log(space)

document.writeln(`<h2>Hollow Square Pattern</h2>`);
