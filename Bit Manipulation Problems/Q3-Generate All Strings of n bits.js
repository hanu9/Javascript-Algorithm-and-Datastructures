// function generateNBitsStrings(num){
//     let output = [], a = [];
//     for(let i=0;i<num;i++){
//         a[i] = 0;
//     }
//     output.push(a);
//     for(let i=num-1; i>=0; i--){
//         let tempArr = output.map(function(val, index){
//             let arr = val.slice();
//             arr[i] = 1;
//             return arr;
//         });
//         output = output.concat(tempArr);
//     }
//     console.log(output);
// }
// generateNBitsStrings(4);
function nBitsStrings(){
    let arr = [];
    return function generate(num){
        if(num===0){
            console.log(arr);
            return;
        }
        arr[num-1] = 0;
        generate(num-1);
        arr[num-1] = 1;
        generate(num-1);
    }
}
nBitsStrings()(3);
