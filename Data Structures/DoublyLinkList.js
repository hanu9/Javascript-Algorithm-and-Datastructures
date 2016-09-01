function Node(data){
  this.data = data;
  this.next = null;
  this.prev = null;
}
function DoublyLinkList(){
  this._length = 0;
  this.head = null;
  this.tail = null;
}

DoublyLinkList.prototype.add = function(data){
  var node = new Node(data);
  if(!this._length){
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this._length++;
  return node;
}
DoublyLinkList.prototype.remove = function(position){
  var count=1,currentPosition = this.head, deletedNode=null, length = this._length;
  if( length === 0 || position > length || position < 1){
    throw new Error("No existing node");
  }else if(position === 1){
    this.head = currentPosition.next;
    this.head.prev = null;
  }else if(position === length){
    this.tail = this.tail.prev;
    this.tail.next = null;
  }else{
    while(count < position){
      currentPosition = currentPosition.next;
      count++;
    }
    currentPosition.prev.next = currentPosition.next;
    currentPosition.next.prev = currentPosition.prev;
  }
  deletedNode = currentPosition;
  this._length--;
  return  deletedNode;
}
DoublyLinkList.prototype.searchNodeAt = function(position){
  var count=1,currentPosition = this.head, deletedNode=null, length = this._length;
  if( length === 0 || position > length || position < 1){
    throw new Error("No existing node");
  }
  while(count < position){
    currentPosition = currentPosition.next;
    count++;
  }
  return currentPosition;
}

var dll = new DoublyLinkList();
dll.add(1);
dll.add(2);
dll.add(3);
console.log(dll.remove(1));
console.log(dll);
