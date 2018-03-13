// add(1)
// add(1)(2)...
//https://www.quora.com/Can-anyone-write-a-Javascript-function-that-does-this-add-1-2-8-should-return-11-i-e-the-sum-of-the-arguments-given-number-of-arguments-can-be-any-natural-number
function add(a) {
  var sum = a

  function add_and_repeat(b) {
   if(b){
      sum += b
      return add_and_repeat
   }
    else
      return sum;
  }

  add_and_repeat.toString = function() { return sum }

  return add_and_repeat
}
