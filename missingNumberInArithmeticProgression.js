var count = 0, input=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30], inputCount = input.length;
function  missingNumber(series){
  var seriesLength = series.length,
      diff = (series[seriesLength-1] - series[0])/seriesLength,
      midOfSeries = Math.ceil(seriesLength/2);
  count++;
  if(series.length === 2){
    return (series[0]+series[1])/2;
  }
  if(series[midOfSeries-1] === (series[0]+(midOfSeries-1)*diff)){
    series.splice(0,midOfSeries-1);
    return missingNumber(series);
  }else{
    series.length = midOfSeries;
    return missingNumber(series);
  }
}
console.log(missingNumber(input));
console.log("Time Complexity is log(n) "+Math.log(inputCount));
console.log("Count "+count);
