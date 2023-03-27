function askFirstDealear() {
   return new Promise((resolve, reject) => { setTimeout(() => resolve(80000), 3000 ) } )
}

function askSecondDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {resolve(12000),5000 } ) } )
}

function askThirdDealer() {
   return new Promise((resolve, reject) => { setTimeout(() => {resolve(123456789), 8000 } ) } )
}

Promise.all([askFirstDealear(), askSecondDealer(), askThirdDealer()])
         .then(prices => {
            console.log(prices)
         });
      
      