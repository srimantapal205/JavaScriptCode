 function calculateSqure(number, callback){
    setTimeout(() => {
        if (typeof number !== 'number' ) {
            throw new Error('Argument of type number is expected')
        }
        const result = number*number;
        callback(result);
    },1000);
 }

 try {
    calculateSqure('bad argume', function (result) {
        console.log(result)
    })
 } catch (error) {
    console.log('Caught error: '+ String(error))
 }
 