//Default Parameters
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(`Addition of 5 and 7 = ${addTwoNumbers(5, 7)}`);

//Arrow Functions
const product = (num1, num2 = 6) => {
    return num1 * num2;
};
console.log(`Product of 7 and 6 = ${product(7)}`);

//Array
let array = [5, 10, 15, 20, 25];

//Spread operators
let newArray = [...array, 30, 45, 50];
console.log(newArray);

//Rest Operators
let listofNumbers = (...numbers) => {
    console.log(numbers);
};

listofNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);

let maxOfNumbers = (...numbers) => {
    let max = Number.MIN_VALUE;
    for (let number of numbers) {
        max = Math.max(max, number);
    }
    return max;
};
console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

//object

let object = {
    name: "John",
    age: 24,
    address: {
        city: "New York",
        country: "USA",
    },
};

let object2 = { ...object, profession: "Doctor" }; // Shallow Cloning
let object3 = JSON.parse(JSON.stringify(object)); // Deep Cloning
console.log(object2);
object2.address.city = "New Jersy";
console.log("Shallow Cloning");
console.log(object2);
console.log("Deep Cloning");
console.log(object3);
