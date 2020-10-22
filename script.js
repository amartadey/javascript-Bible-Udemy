const myCities = ["London", "New York", "Singapore"];

function arrayInfo(cities){
    cities.forEach((element,index) =>{
        console.log(element+' is located at the index '+index)
    })
}
function arrayInfo2(cities){
    for(let i=0; i<cities.length;i++){
        console.log(cities[i]+' is located at the index '+ i);
    }
}
arrayInfo(myCities);
arrayInfo2(myCities);
