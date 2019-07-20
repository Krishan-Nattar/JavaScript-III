/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - if within the scope of where the 'this' keyword is called, if it is not bound to anything in particular, it will default to being bound to 'window'

* 2. Implicit Binding - Looking to the left of the . (dot) when a property/method is called. This object is implicitly binded to the this keyword.

* 3. New Binding - When you invoke a new object with the 'new' keyword, the 'this' keyword is bound to the name of the object constructed.

* 4. Explicit Binding - Explicitly telling the function what the 'this' keyword will be. This is done using the bind, call, and apply methods. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding


console.log(this.screen.height, window.screen.height, "See? They are the same thing: this=window");
function windowHeight(){
    console.log(this.screen.height, window.screen.height, "Another example showing window binding")
}
windowHeight();


// Principle 2

// code example for Implicit Binding

let implicitObject = {
    name: "Krishan",
    age: 33,
    speak: function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}. This is an example of Implicit binding`);
    }
}
implicitObject.speak();



// Principle 3

// code example for New Binding

function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function(){
        console.log(`My name is ${this.name} and this is an example of New Binding`);
    }
}

let krishan = new Person({name: "Krishan", age: 33});
krishan.speak();

// Principle 4

// code example for Explicit Binding

function explicitExample(x){
    console.log(`This is an explicit binding example using ${x}... The password is: ${this.password}`);
}

let secret = {
    password: "Open Sesame"
}
let applyArray = ['apply()'];
explicitExample.call(secret, "call()");
explicitExample.apply(secret, applyArray);
let bound = explicitExample.bind(secret, "bind()");
bound();



