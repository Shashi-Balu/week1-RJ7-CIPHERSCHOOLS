var myName = "Shashi";
myName = "Shashi Balu";
console.log(myName);

const value = [];
console.log(value);
// value.append("John"); -------- not possible for a const
// console.log(value);

const array = [];
array.push("John");
console.log(array);

let values = "Maria";
console.log({ values });
values = "Paul";
console.log({ values });

{
    var num = 5;
}
console.log(num);

//String Interpolation

const firstName = "Shashi";
const lastName = "Balu";
console.log(`My full name is ${firstName} ${lastName}`);
