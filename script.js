

const myObject = {
    carBrand:"BMW", 
    price:2000,
    key1:true,
    key3:"abc",
    key10:NaN,
    test: "Haa"
};

for (let i in myObject){
    if(i=="key1"||i=="key3"){
        console.log(myObject[i]);
    }
};
console.log(i);