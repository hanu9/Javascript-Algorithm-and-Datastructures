function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for(i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
var values = ["{}[]()", "{[]}"], output=[], vLength = values.length,i;
for(i=0;i<vLength;i++){
  if(parenthesesAreBalanced(values[i])){
    output.push("YES");
  }else{
    output.push("NO");
  }
}

console.log(output);
