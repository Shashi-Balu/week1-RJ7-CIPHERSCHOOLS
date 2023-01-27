let details = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New York",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};

console.log(details.address.passportDetails.passportNumber);

let myName = details.name;
let age = details.age;
console.log(myName, age);

let { name: myName1, age: age1 } = details;

console.log(myName1, age1);
