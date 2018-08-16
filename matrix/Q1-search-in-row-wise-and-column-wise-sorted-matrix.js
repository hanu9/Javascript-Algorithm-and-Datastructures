//https://www.geeksforgeeks.org/search-in-row-wise-and-column-wise-sorted-matrix/
function search(a, item){
    for(let row=0; row < a.length; row++){
        for(let column = a[0].length-1; column >=0; column--){
            if(a[row][column] < item){
                break;
            }
            if(a[row][column] === item){
                return "Found at ("+row+","+column+").";
            }
            if(column === 0){
                return "Not Found";
            }
        }
    }
    return "Not Found";
}
console.log(search([[10,11,12,13],[14,15,16,17]], 20));