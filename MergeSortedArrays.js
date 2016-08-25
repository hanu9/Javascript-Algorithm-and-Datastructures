function mergeSortedArrays(firstArr, secondArr){
  return firstArr.concat(secondArr).sort(function(a,b){
    return a-b;
  });
}
console.log(mergeSortedArrays([1,2,4,5], [2,3,4]));

function mergeSortedArrays2(a, b){
  var i = a.length - 1,
      j = b.length - 1,
      k = i+j+1;
  while (k >= 0) {
    if(j<0 || (i>=0 && a[i] > b[j])){
      a[k--] = a[i--];
    }else{
      a[k--] = b[j--];
    }
  }
  return a;
}
console.log(mergeSortedArrays2([1,2,4,5], [2,3,4]));
