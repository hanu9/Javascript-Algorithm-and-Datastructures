var palindrome = function(str){
  var newStr = str.split("").reverse().join("").toLowerCase();
  console.log(newStr);
  if(newStr === str.toLowerCase()){
    return str + " is a palindrome";
  }else{
    return str + " is not a palindrome";
  }
}
console.log(palindrome("Madam"));
