let array = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
}
console.log(newArray);

let arrMap = array.map((value) => value + value);
console.log(arrMap);

array.forEach((element) => {
    console.log(element + 1); // void type of function
});

let arrayFilter = array.filter((element) => element >= 4);
console.log(arrayFilter);

let findArray = array.find((element) => element > 4);
console.log(findArray);

let array2 = [10, 20, 30, 40, 111];
let sortedArray = array2.sort();
console.log(sortedArray); // string lexographical order

let sortedArray1 = array2.sort((e1, e2) => {
    e1 = Number(e1);
    e2 = Number(e2);
    return e1 - e2;
});
console.log(sortedArray1);
