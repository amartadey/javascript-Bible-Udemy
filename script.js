//Example 1

// const myNumbers = [3,5,-1,10,-7];

// const isPositiveNumber = element => typeof element ==='number' && element>0;

// const positiveCheck = myNumbers.some(isPositiveNumber);

// console.log(positiveCheck)

// Example 2
const items = [
    {
        title: "Computer",
        quantity: 10
    },
    {
        title: "Phone",
        quantity: 3
    },
    {
        title: "HeadPhones",
        quantity: 15
    }
]

if(items.every(element => element.quantity>5)){
    console.log("All items are available");
} else if(items.every(element => element.quantity>0)&& items.some(element => element.quantity<=5)){
    console.log("Some Items may be sold Soon");
} else (console.log("Some Items are Sold Out"))