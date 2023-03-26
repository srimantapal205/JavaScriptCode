document.writeln(`<h1>Handling Promise Jejection</h1>`)



function calculateSqure(number) {
   const promise = new Promise((resolve, reject) => { 
       setTimeout(() => { 
           if (typeof number !== 'number') {
               return reject(new Error('Argument of number is expected'))
           }
           const result = number * number;
           resolve(result)
        } ,1000)
    } );
    return promise;
}

calculateSqure(1)
   .then(value  => {console.log(value);
      return calculateSqure(2)
   })
   .then(value => {
      return new Promise((resolve, reject) => { return reject(new Error('Somethimg went wrong')) })
      console.log(value)
   })
   .catch( reason => console.log('error happend'+reason))
   