var a = [1,2,3];
//{1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}
function allSubArray(a){
    for(let startPos=0; startPos<a.length; startPos++){
        for(let groupCount=startPos+1; groupCount<=a.length; groupCount++){
            let arr = [];
            for(let i=startPos; i<groupCount; i++){
                arr.push(a[i]);
            }
            console.log("{"+arr.join()+"}");
        }
    }
}
allSubArray(a);
