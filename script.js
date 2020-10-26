const symNumbers = (...nums) =>{
    console.log(nums);
    return nums
    .filter(num => typeof num == 'number')
    .reduce((sum, num) => sum+num,0);
}

console.log(symNumbers("test",1,2,3,4));