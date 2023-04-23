// js class base memoization

class FibonacciDP {  // Using es6 class concept
   constructor() {
      this.memo = {}  // create memoization
   }
   fib(n) {
      if (n in this.memo) {
         //console.log("Get from memo")
         return this.memo[n]
      }
      else {

         
         if (n <= 2) {
            return 1
         }
         const result = this.fib(n - 1) + this.fib(n - 2); // recursiv function
         console.log(result)
         this.memo[n] = result;
         //console.log("Get from new calculation")
         return result
      }
   }
}

const fibonacci = new FibonacciDP();
console.log("fibo of 5: " + fibonacci.fib(5))
console.log("fibo of 15: " + fibonacci.fib(15))

console.log("fibo of 20: " + fibonacci.fib(20))