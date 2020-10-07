const myObject = {
    a:10,
    b:null
};

function myFunction(a,b){
    console.log(a+b);
    console.log(this);
}
const customFunc = myFunction.bind(myObject);
const customFunc2 = myFunction.bind(myObject, myObject.a);

customFunc(1,48);
customFunc2(3);