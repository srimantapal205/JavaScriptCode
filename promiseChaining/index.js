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
    }).then(value2 => {console.log(value2)}, reason => console.log('error happend'+reason) );
    

    calculateSqure(1)
    .then(value  => {console.log(value);
       return calculateSqure('string')
    }).then(value2 => {console.log(value2)}, reason => console.log('error happend'+reason) );