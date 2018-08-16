function bubble(a){
    let len = a.length;
    for(let i=len-1; i>=0; i--){
        for(let j=i-1; j>=0; j--){
            if(a[j] > a[i]){
                let temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }
}
bubble([1,4,5,2,3,3,7,9]);