 function calculateSqure(number, callback){
    setTimeout(() => {
        if (typeof number !== 'number' ) {
             callback(new Error('Argument of type number is expected'));
             return
        }
        const result = number*number;
        callback(null, result);
    },1000);
 }

//  try {
//     calculateSqure('bad argume', function (result) {
//         console.log(result)
//     })
//  } catch (error) {
//     console.log('Caught error: '+ String(error))
//  }
calculateSqure('bad argument', function(error, result){
     if (error !== null) {
        console.log('Caught error:' + String(error));
        return;
     }
     console.log(result);
});

calculateSqure(8, function (error, result) {
    if (error !== null) {
        console.log('Caught error:' + String(error));
        return;
    }
    console.log(result);
})
 

