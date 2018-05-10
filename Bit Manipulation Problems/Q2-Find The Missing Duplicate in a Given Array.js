function missingDuplicate(arr){
    return arr.reduce(function(a, b){
        return a^b;
    })
}
console.log(missingDuplicate([1,1,3,2,3,4,4]));
