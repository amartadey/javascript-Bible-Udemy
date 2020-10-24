const myNumbers = [5,10,3,15];

const sum = arrayOfNumbers => arrayOfNumbers.reduce((accumulator, number) => {console.log ("Accumulator is "+accumulator+". Number is "+ number); return (accumulator+number)}, 0);

console.log(sum(myNumbers))
// sum(myNumbers)
