function Node(data){
  this.data = data;
  this.parent = null;
  this.childrens = [];
}

function Tree(data){
  var node = new Node(data);
  this.root = node;
}

Tree.prototype.add = function(child, parent){
  var nodeToBeInserted = new Node(child),
      parentNode = null,
      callback = function(node){
        if(node.data === parent){
          parentNode = node;
        }
      };
  this.contains(callback, this.traverseDF);
  if(parentNode){
    parentNode.childrens.push(nodeToBeInserted);
    nodeToBeInserted.parent = parentNode;
  }else{
    throw new Error('Cannot add node to a non-existent parent.');
  }
}

Tree.prototype.remove = function(child, parent){
  var nodeToBeRemoved = null, childrens = null, callback = function(node){
    if(node.data === child && node.parent.data === parent){
      nodeToBeRemoved = node;
    }
  };
  this.contains(callback, this.traverseDF);
  if(nodeToBeRemoved){
    childrens = nodeToBeRemoved.parent.childrens;
    for (var i = 0; i < childrens.length; i++) {
      if(childrens[i].data === child){
        childrens.splice(i,1);
      }
    }
  }else{
    throw new Error('Cannot remove non-existent node.');
  }
  return nodeToBeRemoved;
}

Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.traverseDF = function(callback){
  var root = this.root;
  (function recurse(currentNode){
    for (var i = 0; i < currentNode.childrens.length; i++) {
      recurse(currentNode.childrens[i]);
    }
    callback(currentNode);
  })(root);
}

Tree.prototype.traverseBF = function(callback){
  var currentNode = this.root, queue = [];
  while(currentNode){
    for (var i = 0; i < currentNode.childrens.length; i++) {
      queue.push(currentNode.childrens[i]);
    }
    callback(currentNode);
    currentNode = queue.shift();
  }
}

var DOM = new Tree("HTML");
DOM.add("HEAD", "HTML");
DOM.add("BODY", "HTML");
DOM.remove("BODY", "HTML");
console.log(DOM);
