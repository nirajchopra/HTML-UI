function isPrime(number) {
   
    if (number <= 1) return false;
    if (number <= 3) return true;


    if (number % 2 === 0 || number % 3 === 0) return false;

    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}


let value1 = 11;
let value2 = 15;

console.log(`${value1} is ${isPrime(value1) ? 'a prime' : 'not a prime'} number.`);  
console.log(`${value2} is ${isPrime(value2) ? 'a prime' : 'not a prime'} number.`); 
