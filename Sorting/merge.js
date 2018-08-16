function sort(a){
    let len = a.length,
        mid = Math.floor(len/2);
    if(len <= 1){
        return a;
    }
    return merge(sort(a.slice(0,mid)), sort(a.slice(mid)));
}

function merge(a, b){
    let arr = [], lenA = a.length, lenB = b.length, i=0, j=0;
    while(lenA > 0 || lenB > 0){
        if(lenB > 0 && a[i] > b[j]){
            arr.push(b[j]);
            j++;
            lenB--;
        }else if(lenA > 0){
            arr.push(a[i]);
            i++;
            lenA--;
        }else{
            arr.push(b[j]);
            j++;
            lenB--;
        }
    }
    return arr;
}

console.log(sort([1,4,3,4,5,2]));