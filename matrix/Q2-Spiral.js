function spiral(a){
    let rowStart = 0, rowEnd = a.length - 1, columnStart = 0, columnEnd = a[0].length - 1;
    while(rowStart <= rowEnd && columnStart <= columnEnd){
        for(let i=columnStart; i <= columnEnd; i++){
            console.log(a[rowStart][i]);
        }
        rowStart++;
        for(let i=rowStart; i <= rowEnd; i++){
            console.log(a[i][columnEnd]);
        }
        columnEnd--;
        if(rowStart <= rowEnd){
            for(let i=columnEnd; i>=columnStart; i--){
                console.log(a[rowEnd][i]);
            }
            rowEnd--;
        }
        if(columnStart <= columnEnd){
            for(let i=rowEnd; i>=rowStart; i--){
                console.log(a[i][columnStart]);
            }
            columnStart++;
        }
    }
}

spiral([[1,2,3,4],[5,6,7,8]]);