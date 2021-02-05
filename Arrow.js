// function dobleIt (num){
//     return num * 2;
// }

// const dobleIt = function myFun(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(34, 22);
const result2 = give5();
console.log(result);
const result3 = doMath(20, 10);
console.log(result3);

