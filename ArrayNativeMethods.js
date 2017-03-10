function rotate(arr){
  return arr[0].map(function(value,index,array){
    return arr.map(function(row){
       return row[index];
    });
  });
}

function rotateOld(arr){
  var newArr = [];
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
       if(!newArr[j]){
         newArr.push([arr[i][j]]);
       }else{
         newArr[j].push(arr[i][j]);
       }
    }
  }
  return newArr;
}

function copyObj(obj){
  var objStatic = {};
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      if(typeof obj[key] == "object"){
        objStatic[key] = copyObj(obj[key]);
      }else{
        objStatic[key] = obj[key];
      }
    }

  }
  return objStatic;
}

Array.prototype.myMap = function(callback){
  var arr = [], len = this.length, data;
  for(var i=0;i<len;i++){
    data = callback(this[i],i,this);
    arr.push(data);
  }
  return arr;
}
Array.prototype.myFilter = function(callback){
  var arr = [], len = this.length, data;
  for(var i=0;i<len;i++){
    data = callback(this[i],i,this);
    if(data){
      arr.push(this[i]);
    }
  }
  return arr;
}
Array.prototype.myReduce = function(fn,initialValue){
  var arr = [], len = this.length, acc = initialValue;
  for(var i=0;i<len;i++){
    if(!acc){
      acc = this[i];
    }else{
      acc = fn(acc,this[i],i,this);
    }
  }
  return acc;
}
var arr = [1,2,3].myMap(function(item,index){
  return item * 2;
});
var fil = [1,2,3].myFilter(function(item,index){
  return item > 2;
});
var acc = [1,2,3].myReduce(function(acc,value){
  return acc + value;
},1);
console.log(acc);
