// function doubleIt(num){
//     return num * 2;
// }
// oprere function ta k ES6 e simple vabe kora jay niche sheta
const doubleIt = num => num * 3;
const result = doubleIt(10);
console.log(result);

const add = (x, y)=> x + y;

const total = add(20 ,30);
console.log(total);

// another program
const doMath = (x, y) => {
    const sum = x + y;
    const minus = x - y;
    const result = sum * minus;
    return result;
}
const result2 = doMath(20,10);
console.log(result2);