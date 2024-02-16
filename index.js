
class Node { 
  constructor(value) {   
        this.value = value;
        this.left = left;
        this.right = right;
  }
}

class Tree { 
  constructor(array) {
    this.root = buildTree(array);
  }

  buildTree(array, start, end) {
    if(start>end){
        return null;
    }
    let mid = Math.floor((start+end)/2);
    let root = new Node(array[mid]);
    root.left = Tree(array,start,mid-1);
    root.right = Tree(array,mid+1,end);
    return root;
  }

  insert(value){
    var newNode = new Node(value);
    if(this.root === null){
        this.root = newNode;
        return this;
    }
    let current = this.root;
    while(current){
        if(value === current.value) return undefined;
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
    }
  }
  find(value){
    if(!this.root) return false

    let current = this.root
    let found = false
    while(current && !found){
      if(value < current.value){
        current = current.right
      } else {
        found = current
      }
    }
    if(!found) return undefined;
  }
  remove(value){
    this.root = this.removeNode(this.root, value)
  }
  removeNode(current, value) { 
    
   if(current === null) return current 
    if (value === current.value) {
        if (current.left === null && current.right === null){
                return null
            }else if(current.left === null){
                return current.right 
            }else if(current.right === null){
                return current.left
            }else{    
                let tempNode = this.kthSmallestNode(current.right)
                    current.value = tempNode.value
                    current.right = this.removeNode(current.right, tempNode.value)
                return current
        }
        
    }else if(value < current.value) {
        
        current.left = this.removeNode(current.left, value)
        return current
        
    }else{
        
        current.right = this.removeNode(current.right, value)
        return current
    }
}

kthSmallestNode(node) {
    while(!node.left === null)
        node = node.left

    return node
}

inOrderTraversal = function(callback) {
  inOrderTraversalHelper(this.root, callback);
}

inOrderTraversalHelper(node, callback) {
  if (node) {
    this.inOrderTraversalHelper(node.left, callback);
    callback(node.value);
    this.inOrderTraversalHelper(node.right, callback);
  }
}

preOrderTraversal = function(callback) {
  preOrderTraversalHelper(this.root, callback);
}

preOrderTraversalHelper(node, callback) {
  if (node) {
      callback(node.value);
      preOrderTraversalHelper(node.left, callback);
      preOrderTraversalHelper(node.right, callback);
  }
}

postOrderTraversal = function(callback) {
  postOrderTraversalHelper(this.root, callback);
}

postOrderTraversalHelper(node, callback) {
  if (node) {
      callback(node.value);
      postOrderTraversalHelper(node.left, callback);
      postOrderTraversalHelper(node.right, callback);
  }
}

    getDepth(node) {
      if (node === null) {
        return 0;
      }
      const leftDepth = getDepth(node.left);
      const rightDepth = getDepth(node.right);
      return Math.max(leftDepth, rightDepth) + 1;
    }
    isBalanced(root) {
      if (root === null) {
        return true;
      }
      function checkBalance(node) {
        if (node === null) {
          return true;
        }
        const leftDepth = getDepth(node.left);
        const rightDepth = getDepth(node.right);
        const heightDiff = Math.abs(leftDepth - rightDepth);
        if (heightDiff > 1) {
          return false;
        }
        return checkBalance(node.left) && checkBalance(node.right);
      }
      return checkBalance(root);
    }
    rotateRight(node) { 
      const leftNode = node.left; 
      const rightOfLeftNode = leftNode.right; 
    
      leftNode.right = node; 
      node.left = rightOfLeftNode; 
    
      node.height = Math.max(this.height(node.left), this.height(node.right)) + 1; 
      leftNode.height = 
        Math.max(this.height(leftNode.left), this.height(leftNode.right)) + 1; 
    
      return leftNode; 
    } 
     
    rotateLeft(node) { 
      const rightNode = node.right; 
      const leftOfRightNode = rightNode.left; 
    
      rightNode.left = node; 
      node.right = leftOfRightNode; 
    
      node.height = Math.max(this.height(node.left), this.height(node.right)) + 1; 
      rightNode.height = 
        Math.max(this.height(rightNode.left), this.height(rightNode.right)) + 1; 
    
      return rightNode; 
    } 


};

