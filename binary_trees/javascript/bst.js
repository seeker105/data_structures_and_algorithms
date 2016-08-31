function TreeNode (data, left, right){
  this.data = data;
  this.left = left || null;
  this.right = right || null;
}

class BST {
  constructor() {
    this.rootNode = null;
  }

  push(data) {
    if (this.rootNode === null) {
      this.rootNode = new TreeNode(data);
      return;
    } else {
      addData(this.rootNode, data)
    }
  } // push method

  find(data){
    // debugger;
    return findData(this.rootNode, data)
  } // find method

  toArray(){
    return arrayArrange(this.rootNode, []);
  }

  sort(){
    var currentArray =  arrayArrange(this.rootNode, []);
    return sortArray(currentArray);
  }

  min(){
    debugger;
    if (this.rootNode === null) return null;
    if (this.rootNode.left === null) return this.rootNode.data
    return findMin(this.rootNode.left);
  }

  max(){
    if (this.rootNode === null) return null;
    findMax();
  }
} // class BST

function findMin(node){
  if (node.left === null) return node.data;
  return findMin(node.left);
}

function findMax(){

}

function sortArray(currentArray){
  result = [];
  if (currentArray.length === 0) return result;
  result.push(currentArray.pop());
  while (currentArray.length > 0) {
    data = currentArray.pop();
    var x = 0;
    while (result[x] <= data && x < result.length) x++;
    result.splice(x, 0, data)
  }
  return result;
}

function arrayArrange(node, currentArray){
  if (node === null) {
    return currentArray;
  } else {
    currentArray.push(node.data);
    currentArray = arrayArrange(node.left, currentArray);
    return arrayArrange(node.right, currentArray);
  }
};

function findData(node, data){
  if (node === null) return null;
  if (node.data === data) {
    return node;
  } else if (node.data >= data) {
    return findData(node.left, data);
  } else {
    return findData(node.right, data);
  }
};


function addData(node, data){
  if (node.data >= data) {
    if (node.left === null) {
      node.left = new TreeNode(data);
      return this;
    } else {
      addData(node.left, data);
      return this;
    }
  } else { //left path
    if (node.right === null) {
      node.right = new TreeNode(data);
      return this;
    } else {
      addData(node.right, data);
      return this;
    }
  } // right path
}
