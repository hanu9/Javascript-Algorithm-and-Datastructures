function addBigNumbers(a, b){
    let aLength = a.length, bLength = b.length, result='', carry=0;
    while(aLength || bLength){
        let itemA, itemB;
        if(aLength){
            itemA = parseInt(a[aLength-1]);
            aLength--;
        }else{
            itemA = 0;
        }
        if(bLength){
            itemB = parseInt(b[bLength-1]);
            bLength--;
        }else{
            itemB = 0;
        }
        let sum = carry + itemA + itemB;
        if(sum > 9){
            result = (sum % 10) + result;
            carry = 1;
        }else{
            result = sum + result;
            carry = 0;
        }
    }
    if(carry == 1){
        result = 1 + result;
    }
    return result;
}