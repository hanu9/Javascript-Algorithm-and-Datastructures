// function selection(a){
//     let len = a.length;
//     for(let i=0; i<len; i++){
//         for(let j=i+1; j<len; j++){
//             if(a[j] < a[i]){
//                 let temp = a[j];
//                 a[j] = a[i];
//                 a[i] = temp;
//             }
//         }
//     }
//     console.log(a);
// }
//reduce swaping items
function selection(a){
    let len = a.length;
    for(let i=0; i<len; i++){
        let swapPosition = i;
        for(let j=i+1; j<len; j++){
            if(a[j] < a[swapPosition]){
                swapPosition = j;
            }
        }
        let temp = a[swapPosition];
        a[swapPosition] = a[i];
        a[i] = temp;
    }
    console.log(a);
}
selection([9,1,2,5,3]);