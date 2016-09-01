var Queue = function(){
  this.currentIndex = 1;
  this.oldIndex = 1;
  this.storage = {};
}
Queue.prototype.size = function(){
  return this.currentIndex - this.oldIndex;
}
Queue.prototype.enqueue = function(data){
  this.storage[this.currentIndex++] = data;
}
Queue.prototype.dequeue = function(){
  try{
    if(this.size() === 0){
      throw new Error("Please insert data in Queue.");
    }
    var deletedData = this.storage[this.oldIndex];
    delete this.storage[this.oldIndex++];
    return deletedData;
  }catch(e){
    console.log(e);
  }
}

var q = new Queue();
q.enqueue(2);
console.log(q);
console.log(q.size());
console.log(q.dequeue());
console.log(q.size());
console.log(q.dequeue());
console.log(q.size());
