var a  = [[1,2,3,4],[5,6,7,8],[9,10,12,14]];
var b = [1,2,4,5,8,9];
(function findElement(arr){
    let aLength = arr.length;
    // for(let i=0)
})(a, 6);

function binarySearch(arr, item, startPointer, endPointer){
    startPointer = startPointer || 0;
    endPointer = endPointer || arr.length-1;
    let mid = Math.floor((startPointer+endPointer)/2);
    if(startPointer > endPointer){
        return false;
    }
    if(arr[mid] === item){
        return true;
    }else if(arr[mid] > item){
        return binarySearch(arr, item, startPointer, mid-1);
    }else{
        return binarySearch(arr, item, mid+1, endPointer);
    }
}
console.log(binarySearch(b, 6));
