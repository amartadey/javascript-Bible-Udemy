const bt = document.querySelector('button');
var count = 0
// bt.onclick = function(){
//     count++;
//     let msg = "Button is Clicked "+count+" times";
//     this.innerHTML = msg;
//     console.log("Button was Clicked");
// }

bt.onclick = () =>{
    count++;
    let msg = "Button is Clicked "+count+" times";
    bt.innerHTML = msg;
    console.log("Button was Clicked");
}