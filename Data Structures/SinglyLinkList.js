var Node = function(data){
  this.data = data;
  this.next = null;
}
var SinglyLinkList = function(){
  this.length = 0;
  this.head = null;
}
SinglyLinkList.prototype.add = function(data){
  var node = new Node(data),
      currentPosition = this.head;
  if(!currentPosition){
    this.head = node;
    this.length++;
    return node;
  }

  while(currentPosition.next){
    currentPosition = currentPosition.next;
  }
  currentPosition.next = node;
  this.length++;
  return node;
}
SinglyLinkList.prototype.remove = function(position){
  var currentPosition = this.head,
      length = this.length,
      count = 1, deletedData;

  if((length === 0) || position > length || position < 1){
    throw new Error("Non-existance of node");
  }
  if(position === 1){
    deletedData = currentPosition.data;
    this.head = currentPosition.next;
    this.length--;
    return deletedData;
  }
  while (count < (position-1)) {
    currentPosition = currentPosition.next;
    count++;
  }
  deletedData = currentPosition.next.data;
  if(length === position){
    currentPosition.next = null;
  }else{
    currentPosition.next = currentPosition.next.next;
  }
  this.length--;
  return deletedData;
}
SinglyLinkList.prototype.searchNodeAt = function(position){
  var currentPosition = this.head,
      length = this.length,
      count = 1;

  if((length === 0) || position > length || position < 1){
    throw new Error("Non-existance of node");
  }

  while (count < position) {
    currentPosition = currentPosition.next;
    count++;
  }
  return currentPosition;
}
var sll = new SinglyLinkList();
sll.add(1);
sll.add(2);
sll.add(3);
sll.add(4);
console.log(sll.length,sll.remove(1),sll.length,sll);
