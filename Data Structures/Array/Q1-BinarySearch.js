function BinarySearch(arr, item){
    let firstIndex = 0, lastIndex = arr.length, arrLength = arr.length;
    for(let i=0; i < Math.floor(Math.sqrt(arr.length)); i++){
        let midIndex = Math.floor((lastIndex + firstIndex)/2);
        if(arr[midIndex] === item){
            return true;
        }else if(arr[midIndex] < item){
            firstIndex = midIndex;
        }else{
            lastIndex = midIndex;
        }
    }
    return false;
}

function BinarySearchRecursive(arr, item){

}

var a = [1,4,5,7,9,12];
console.log(BinarySearch(a,6));
