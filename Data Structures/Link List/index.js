function LinkList(){
    this.head = null;
}

function Node(data){
    this.data = data;
    this.next = null;
}

LinkList.prototype.isEmpty = function (){
    return this.head === null ? true : false;
}

LinkList.prototype.size = function (){
    let currentNode = this.head, count = 0;
    while(currentNode){
        count++;
        currentNode = currentNode.next;
    }
    return count;
}

LinkList.prototype.prepend = function (data){
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    return node;
}

LinkList.prototype.append = function (data){
    let node = new Node(data), currentNode = this.head;
    if(this.isEmpty()){
        this.head = node;
        return node;
    }
    while(currentNode.next){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    return node;
}

LinkList.prototype.print = function (){
    let currentNode = this.head, list = "[";
    while(currentNode){
        list += " " + currentNode.data + " ";
        currentNode = currentNode.next;
    }
    list += "]";
    console.log(list);
}

LinkList.prototype.contains = function (data){
    let currentNode = this.head;
    while(currentNode.next){
        if(currentNode.data === data){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}

LinkList.prototype.remove = function (data){
    let currentNode = this.head, deletedNode = null;
    if(currentNode.data === data){
        this.head = currentNode.next;
        return currentNode;
    }
    while(currentNode.next){
        if(currentNode.next.data === data){
            deletedNode = currentNode.next;
            currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
    }
    return deletedNode;
}

LinkList.prototype.removeAt = function (position){
    let currentNode = this.head, deletedNode = null;
    if(position === 1){
        this.head = this.head.next;
    }
    for(let i=1;i<(position-1);i++){
        currentNode = currentNode.next;
    }
    deletedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    return deletedNode;
}

var ll = new LinkList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.print();
console.log(ll, ll.size());
