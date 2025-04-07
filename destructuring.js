const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Cherry", "Blueberry"];

// access element and store into a new verible 

const [f1,f2,f3]=fruits
const[r1,,,,,r6]=fruits
const{3:f4}=fruits;  // access direct through index by using object


const person = {
    name: "John Doe",
    age: 30,
    contact: {
      email: "john.doe@example.com",
      phone: "+1234567890"
    },
    address: {
      city: "New York",
      country: "USA",
      zip: "10001"
    }
};

const {name:username}=person // create a new varible username and put name into it
const {name,age}=person

const {contact:{email:emaill}}=person  // accessing object from object and putt into new variable
const{contact :{phone}}=person
