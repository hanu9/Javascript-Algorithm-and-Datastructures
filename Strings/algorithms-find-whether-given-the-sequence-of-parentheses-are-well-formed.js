//algorithms-find-whether-given-the-sequence-of-parentheses-are-well-formed
function isParenthesesAreWellFormed(str){
    let set = "[]{}()", len=str.length, stack= [];
    for(let i=0; i < len; i++){
        if(set.indexOf(str[i]) % 2 === 0 ){
            stack.push(set[set.indexOf(str[i])+1]);
        }
        if(set.indexOf(str[i]) % 2 === 1 ){
            if(stack.pop() !== str[i]){
                return "Parenthesis are not well formed";
            }
        }
    }
    if(!stack.length){
        return "Parenthesis are well formed";
    }else{
        return "Parenthesis are not well formed";
    }
}
console.log(isParenthesesAreWellFormed("{{{{asas{}}}}}"));
