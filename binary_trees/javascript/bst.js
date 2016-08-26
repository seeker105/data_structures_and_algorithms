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
    }
    this.addData(data, this.rootNode);
  }
  addData(data, node){
    if (data <= node.data) {
      if (node.left === null) {
        node.left = new TreeNode(data);
        return;
      }
    }
    if (data > node.data) {
      if (node.right === null) {
        node.right = new TreeNode(data);
        return;
      }
    }
  }
}

// if it is null on right
  // run add data
// if it is null on the left
