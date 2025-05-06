let person = {
    firstName: "John",
    lastName: "Doe",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(person.fullName);  // John Doe (calls getter)

person.fullName = "Jane Smith";  // calls setter
console.log(person.firstName);   // Jane
console.log(person.lastName);    // Smith

class User {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname
    }

    get fname() {
        return this._fname.toUpperCase()
    }
    set fname(value) {
        this._fname = value
    }

    // get password() {
    //     return `${this._password}hitesh`
    // }

    // set password(value) {
    //     this._password = value
    // }
}

const harsh = new User("h@sdfdh.ai", "abc")
console.log(harsh.fname);

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/