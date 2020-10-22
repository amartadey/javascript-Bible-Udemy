const myNumbers = [1,3,8];
const squareNumbers = (element,index) => {
    Math.pow(element,2)
};

// let mySquareNumbers = myNumbers.map(element =>  Math.pow(element, 2))
let mySquareNumbers = myNumbers.map(Math.pow)

console.log(mySquareNumbers)


 