const myArray = [1,true, "abc"];

myArray.forEach(element => {
    console.log(element)
});

var btns = document.querySelectorAll('button');
btns.forEach(element =>{
    element.addEventListener('click', function (){
        btns.forEach(element =>{
            element.classList.remove('active');
        })
        this.classList.add('active')
    })
})