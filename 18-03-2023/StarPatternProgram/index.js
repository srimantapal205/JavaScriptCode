document.writeln(`<h2>Square Star Pattern in Javascrip</h2>`);
let n = 5;
let space = "";
let space2 = "";
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
for(let i = 0; i < n; i++ ){
    for(let j = 0; j < n; j++ ){
        if (i === 0 || i === n - 1) {
            space2 += "*";
        } else {
            if (j === 0 || j === n - 1) {
                space2 += "*"
            } else {
                space2 += "&nbsp; ";
                //space2 += " ";
            }
        }
    }
    space2 += `</br>`;
    //space2 += `\n`;
}

document.writeln(space2);
//console.log(space)
