const myObject = {
    a:10,
    b:null
}
function myFunction(){
    console.log(this);
}

myFunction();

myFunction.call(myObject);