var Stack = function(){
    this.size = 0;
    this.storage = {};
}
Stack.prototype.push = function(data){
  var size = this.size++;
  this.storage[this.size] = data;
}
Stack.prototype.pop = function(){
  try{
    if(this.size === 0){
      throw new Error("Please insert data first.");
    }
    var deletedData = this.storage[this.size];
    delete this.storage[this.size--];
    return deletedData;
  }catch(e){
    console.log(e.message);
  }
}

var st = new Stack();
st.push(1);
console.log(st);
st.pop();
console.log(st);
st.pop();
console.log(st);
