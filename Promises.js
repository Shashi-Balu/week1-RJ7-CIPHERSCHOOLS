//Promise is class in JS

// let myPromise = new Promise((fulfiled, rejected) => {
//     let num1 = 10;
//     let num2 = 20;
//     let sum = num1 + num2;

//     if (sum > 24) {
//         fulfiled(sum);
//     } else {
//         rejected(new Error("Promise rejected"));
//     }
// });

function addTwoNumbers(num1, num2) {
    let myPromise = new Promise((fulfiled, rejected) => {
        setTimeout(() => {
            console.log("Inside setTimeOut");
            fulfiled(num1 + num2);
        }, 5000);
        rejected(new Error("An error occured"));
    });
    return myPromise;
}
addTwoNumbers(10, 5)
    .then(() => {
        console.log("Promise fulfiled");
    })
    .catch(() => {
        console.log("Promise rejected");
    });

// function addTwoNumbers(num1, num2) {
//     let sum = 0;
//     setTimeout(() => {
//         console.log(num1 + num2);
//         sum = num1 + num2;
//     }, 5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }

// console.log(addTwoNumbers(2, 3));
