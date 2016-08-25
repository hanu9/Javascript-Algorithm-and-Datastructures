var flattenData = function(data){
  return data.reduce(function(acc,value){
    if(value instanceof Array){
      value = flattenData(value);
    }
    return acc.concat(value);
  },[]);
}
console.log(flattenData([1,2,[3,[6,7],4]]));
