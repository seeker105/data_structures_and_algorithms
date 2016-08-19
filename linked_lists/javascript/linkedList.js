function ListNode (data, nextNode=null){
  this.data = data;
  this.nextNode = nextNode;
}


function List(){
  this.head = null;
  this._length = 0;
  this.push = function(data) {
    // this.head = new ListNode(data);
    // if head is null make the new data the head node
    // else head is not null find the last node
    // make the new data the new last node
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
      last = findLastNode(this.head);
      last.nextNode = new ListNode(data);
    }
    this._length += 1;
  };
};
// use '._length' to give the method a unique name rather than
// overwriting (monkeyPatching) the default '.length' method
// inherited from the base Object class

// var somebodyName = "fred"

function findLastNode (node){
  if (node.nextNode === null) {
    return node;
  } else return findLastNode(node.nextNode)
}
