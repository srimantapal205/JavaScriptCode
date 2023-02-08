document.writeln(`<h1>JavaScript: Display a message when a number is between a range.</h1>`)

document.writeln(` <br><br> <hr> <br><br>`);

const num = Math.ceil(Math.random()*10);
document.writeln(` <h3>Generate Number: ${num}</h3>`);
let gnum = prompt("Guess the number between 1 and 10 inclusive");
if (gnum==num) {
    document.writeln(` <h2>Number Matched</h2>`);
} else {
    document.writeln(` <h2>Not matched, the number was : ${gnum}</h2>`);
}