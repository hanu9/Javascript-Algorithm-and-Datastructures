function reverse(number){
    let output = 0;
    while(number > 0){
        output = output << 1;
        output = output | (number & 1);
        number = number >> 1;
    }
    console.log(output);
}

reverse(30);//15
