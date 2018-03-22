var a = [1,2,3,4,-3,-4,0];
function findElement(a){
    for(let i=0;i<a.length;i++){
        for(let j = i+1; j<a.length;j++){
            for(var k = j+1; k < a.length; k++){
                if(a[i]+a[j]+a[k] === 0){
                    console.log(a[i], a[j], a[k]);
                }
            }
        }
    }
}
function findElement2(a){
    for(let j = 0; j<a.length;j++){
        let map = {};
        for(var k = j+1; k < a.length; k++){
            let sum = -(a[j]+a[k]);
            if(map[sum]){
                console.log(-(a[j]+a[k]), a[j], a[k]);
                // return;
            }else{
                map[a[k]] = true;
            }
        }
    }
}
findElement2(a);
