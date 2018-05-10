function rightMostSetBit(num){
    // let temp = 1;
    // for(var i=0; i<32; i++){
    //     if(num & temp){
    //         console.log(i+1);
    //         return i+1;
    //     }else{
    //         num = num >>> 1;
    //     }
    // }
    // console.log("No Set Bit Found");
    // return "No Set Bit Found";
    console.log(Math.log(num & ~(num-1))/Math.log(2) + 1);
}
rightMostSetBit(6);
