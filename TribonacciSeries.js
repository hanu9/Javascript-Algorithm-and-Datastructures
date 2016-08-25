var tribonacci = function(n){
  if(n<3){
    return [1,1,1];
  }
  var s = tribonacci(n-1);
  s.push(s[s.length-1]+s[s.length-2]+s[s.length-3]);
  return s;
};
console.log(tribonacci(8));
