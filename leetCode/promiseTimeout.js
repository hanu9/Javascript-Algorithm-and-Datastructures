setTimeout(function(){
    console.log(1);
},0);
new Promise(function(resolve, reject){
    resolve();
}).then(function(){
    console.log(2);
})