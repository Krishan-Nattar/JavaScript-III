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


// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding