// const myFunction = function(){
    
// };

// myFunction();

/**
 * Call Back Function
 */
// let s = 1;
// let m=0;
//  setInterval(function(){
//      console.log(m+":"+s);
//      s++
//      if(s==60){
//          m++
//          s=0
//      }
//  },1000)
c=1;
setTimeout(function(){
const fn = setInterval(function(){
    console.log("Here is the message number "+c);
    c++;
    if (c>5){
        clearInterval(fn);
    };
},2000)},1000)
