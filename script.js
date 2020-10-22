const myArray = [56,[],{},"abc",true,15]

const result = myArray.find(element =>{
    return typeof element ==='boolean'
});
console.log(result);
