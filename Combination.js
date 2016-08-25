var combination = function(input){
  if(typeof input !== "string"){
    input = input.toString();
  }
  var lenInp = input.length, output=[];
  var loop = function(start, depth, prefix){
    for (var i = start; i < lenInp; i++) {
      var next = prefix + input[i];
      if(depth > 0){
        loop(i+1, depth-1, next);
      }else{
        output.push(next);
      }
    }
  };
  for (var i = 0; i < lenInp; i++) {
    loop(0, i, '');
  }
  console.log(output);
}
combination("abc");

// loop 1 - loop(0, 0, '') push a,b,c
// loop 2 - loop(0, 1, '') loop(1,0,a)
