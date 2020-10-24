const transport = ["Bus","Car","Bicycle","Airplane"];

const elementFound = (inputArray, searchElement) =>{
    return(inputArray.some(arre => arre==searchElement?true:false))
}

console.log(elementFound(transport,"Car"))