let array = [1,2,3,4,5,6,7,8,9];

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}

function buildTree(array) {
  if(start>end){
    return null;
  }
let mid = Math.floor((start+end)/2);
let poot = new Node(array[mid]);
poot.left = Tree(array,start,mid-1);
poot.right = Tree(array,mid+1,end);
return poot;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

