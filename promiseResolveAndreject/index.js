function logToConsole(somePromise) {
   somePromise.then(value => console.log(value))
}

const somePromise = new Promise((resolve, reject) => { resolve('Hello World') } );

logToConsole(somePromise);

const value = "string"
const promisefiedValue = Promise.resolve(value)

logToConsole(promisefiedValue)

const rejectcePromise =  Promise.reject(value);
