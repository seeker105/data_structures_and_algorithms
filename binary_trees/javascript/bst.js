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
    debugger;
    if (this.rootNode === null) {
      this.rootNode = new TreeNode(data);
      return;
    } else {
      addData(this.rootNode, data)
    }
  } // push method
} // class BST


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
