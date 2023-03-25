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
        throw new Error('Error')
    } )
        .then(value2 => {console.log(value2)} )
    