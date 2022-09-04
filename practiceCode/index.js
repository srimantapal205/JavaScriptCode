document.writeln("Javascript Syntax and code");
document.writeln("Multipale Conditional Ternary Operators <br>");
function findGreaterOrEqual(a,b) {
    return (a===b) ? "A and B are equal" : (a > b) ? "A is Greater" : "B is Greater";
}

document.writeln(findGreaterOrEqual(10, 15));
