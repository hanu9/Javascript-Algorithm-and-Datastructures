function quick(a, left, right){
    let partitionIndex;
    if(left < right){
        partitionIndex = partition(a, left, right);
        quick(a, left, partitionIndex-1);
        quick(a, partitionIndex+1, right);
    }
    return a;
}
function swap(a, i, j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
function partition(a, left, right){
    let pivot = a[right], len = a.length, partitionIndex = left;
    for(let i=left; i<len-1; i++){
        if(a[i] < pivot){
            swap(a, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(a, partitionIndex, right);
    return partitionIndex;
}

console.log(quick([9,1,5,3,4,7], 0, 5));