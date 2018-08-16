function insertion(a){
    let len = a.length;
    for(let i=1;i<len;i++){
        let temp = a[i];
        for(let j=i-1; j>=0; j--){
            if(temp < a[j]){
                a[j+1] = a[j];
                if(j===0){
                    a[j] = temp;
                }
            }else{
                a[j+1] = temp;
                break;
            }
        }
    }
    console.log(a);
}
insertion([9,1,2,5,3]);