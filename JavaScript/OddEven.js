function checkOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


let num1 = 8;
let num2 = 4;

console.log(`${num1} is ${checkOddEven(num1)}.`);
console.log(`${num2} is ${checkOddEven(num2)}.`);  
