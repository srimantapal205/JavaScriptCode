
/*

First, the getFullName method uses arrow function syntax (() => {}). Arrow functions do not have their own this value, so when you use this.firstName and this.lastName within the arrow function, they will not refer to the properties of the person object. Instead, they will be undefined.

let person = {
   firstName : "John",
   lastName : "Doe",
   getFullName:() => {
      let fullName = `<p>${this.firstName} ${this.lastName} </p>`;
      return fullName;
      
   }
};
*/
document.writeln(`<h3>Object Method Shorthand</h3>`);
let person = {
   firstName : "John",
   lastName : "Doe",
   greet  () {
      document.writeln(`<p>Hello World</p>`);
   },
   getFullName() {
      let fullName = `<p>${this.firstName} ${this.lastName} </p>`;
      return fullName;
      
   }
};

person.greet();
document.writeln(person.getFullName())


document.writeln(`<br><h3>JavaScript Constructor Function</h3>`)



