/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. new binding
 * 2. global window
 * 3. implicit
 * 4. explicit
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayHiTo(person) {
  console.log(this);
  return `Hi ${person}`;
}

console.log(sayHiTo("Yusuf"));

// Principle 2

// code example for Implicit Binding

const student = {
  sayHi: "Hi",
  introduce: function(name) {
    return `${this.sayHi} ${name}`;
  }
};

console.log(student.introduce("Yusuf"));

// Principle 3

// code example for New Binding

function Person(name) {
  this.hi = "Hi ";
  this.name = name;
  this.talk = function() {
    return `${this.hi} ${this.name}`;
  };
}

const yusuf = new Person("Yusuf");
const joe = new Person("Joe");

console.log(yusuf.talk());

// Principle 4

// code example for Explicit Binding

console.log(yusuf.talk.call(joe));
console.log(yusuf.talk.apply(yusuf));
