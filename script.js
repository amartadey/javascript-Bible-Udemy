const myCities = ["London", "New Work","Singapore"];

function arrayInfo(ary){
    for(let i = 0; i<ary.length;i++){
        console.log(ary[i]+" is located at the index "+i);
    };
}

arrayInfo(myCities)

function arrayInfo2(ary){
    ary.forEach((element,index) => {
        console.log(element+" is located at the indes "+index);
    });
    
}

arrayInfo2(myCities)
