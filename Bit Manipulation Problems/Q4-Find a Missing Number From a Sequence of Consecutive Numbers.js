function findMissingNumber(arr, range){
    let reducedArr = arr.reduce(function(acc, val){
        return acc ^ val;
    });
    for(var i=1; i <= range; i++){
        reducedArr ^= i;
    }
    console.log(reducedArr);
}
findMissingNumber([1,7,5,6,4,3],7)
