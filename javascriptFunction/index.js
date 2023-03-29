function addation() {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]     
   }
   return sum;
}

let sum = addation(1,2,3,)
document.write(sum)

for (let i = 0; i < 5; i++) {
  setTimeout(() =>  console.log(i), 0  ) 
}


//JavaScript Functions are First-Class Citizens


//Storing Function in varible:
function add (a,b){
   return a + b;
}
let sum2 = add;
let result = sum2(10, 11)

document.writeln(`<p>${result}</p>`);

