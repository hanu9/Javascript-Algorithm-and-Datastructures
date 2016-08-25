function canRearrangeToPalindrome(str)
{
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}

console.log(canRearrangeToPalindrome("civci"));
