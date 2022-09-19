document.writeln(`<h1>JavaScript Code Practice</h1>`)
document.writeln(`<h2></h2>`)
document.writeln(`<h4></h4>`)
document.writeln(`<p></p>`)


document.writeln(`<h2>What are closures ?</h2>`)
document.writeln(`<p>
    A closure  is combination of a function and lexical enviroment which that function was deleard. it is an inner function that has access to the outer or enclosed  function varible.<br> 
    The closure has three scop chain...<br>
    <ol>
        <li>Own scope where varible defined between it's curly brackets.</li>
        <li>Outer funnction's varible</li>
        <li>Global varible</li>
    </ol>
    <br><br>
    function globalFun() {<br>
      let total=0 ; // Global Varible<br>
        function localFun() {<br>
            let num1 = 100, num2 = 200; //Local varible<br>
            total = num1 + num2;<br>
            console.log(total)<br>
        }  <br>
        return localFun()<br>
    }<br>
    globalFun();<br>
</p>`)

function globalFun() {
    let total=0 ; // Global Varible
    function localFun() {
        let num1 = 100, num2 = 200; //Local varible
        total = num1 + num2;
        console.log(total)
    }  
    return localFun()
}
globalFun();



























































