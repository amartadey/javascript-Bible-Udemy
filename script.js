const myNumbers = [3,-5,1,10,-7];
const isPositivenumber = element =>typeof element ==="number" && element >0;

const positiveCheck = myNumbers.every(isPositivenumber);
console.log(positiveCheck)