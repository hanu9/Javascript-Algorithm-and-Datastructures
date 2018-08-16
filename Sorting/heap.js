//http://faculty.simpson.edu/lydia.sinapova/www/cmsc250/LN250_Weiss/L13-HeapSortEx.htm
function heap(a){
    let right = a.length-1;
    heapify(a);
    while(right > 0){
        swap(a, 0, right--);
        shiftDown(a, 0, right);
    }
    console.log(a);
}

function heapify(a){
    let mid = Math.floor((a.length-1)/2);
    while(mid >= 0){
        shiftDown(a, mid--, a.length-1);
    }
}

function shiftDown(a, start, end){
    for(let i=start; i<=end; ){
        if(a[2*i+2] > a[2*i+1] && a[i] < a[2*i+2] && (2*i+2) <= end){
            swap(a, i, 2*i+2);
            i = 2*i + 2;
        }else if(a[i] < a[2*i+1] && (2*i+1) <= end){
            swap(a, i, 2*i+1);
            i = 2*i+1;
        }else{
            break;
        }
    }
}
function swap(a, i, j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

heap([15, 19, 10, 7, 17, 16])