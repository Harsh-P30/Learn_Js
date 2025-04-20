const user = {
    id:'name',
    name:"harsh",
    rollno:"23",
    toString(){
        return `User :${this.name}, Roll no: ${this.rollno}`  
;    }   // we are override the toString() function{prototype} to return the value into string. 
}

// console.log(user)
// console.log(user.toString()); // first toSring() prototye ask whose because we are into a objcect so we have to show(override) using "this.id-name".


/*
user.prototype.string = function(){
    console.log(`${user.name}`);
}

const namee = new user;
console.log(namee)  */  // this gives you error You're mixing object literal syntax with constructor function or class syntax, which causes errors.

function User(name,rollno){
    this.name=name;
    this.roll=rollno;
    
}

User.prototype.toString=function(){
    console.log(`${this.name}`);
    console.log(`${this.roll}`);
    console.log(typeof(this.roll));
}

const namee = new User('harsh',23);  // add "new" keyword in start because use create a new method or prototype after the function decleration.and the created  if use dont add "new "is return error" -> Cannot read properties of undefined
namee.toString();
// typeof(namee.st());