//Example 1

const myNumbers = [3,5,-1,10,-7];

const isPositiveNumber = element => typeof element ==='number' && element>0;

const positiveCheck = myNumbers.some(isPositiveNumber);

console.log(positiveCheck)