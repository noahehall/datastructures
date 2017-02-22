/**
 * Binary Search Tree
 * see javascript datastructures and algorithms page 121
 */

export default class BinarySearch {
  constructor() {
    this.root = null;
    this.current = null;
    this.parent = null;
    return this;
  }

  // CREATE
  newNode = (data) => ({ data, left: null, right: null });

  add = (data) => {
    if (!this.root) {
      this.root = this.newNode(data);
      this.current = this.root;

      return this;
    }
    else {
      this.current = this.root;
      while (this.current !== null) {
        if (data < this.current.data) {
          if (!this.current.left) {
            this.current.left = this.newNode(data);
            break;
          } else this.current = this.current.left;
        }
        else if (data > this.current.data) {
          if (!this.current.right) {
            this.current.right = this.newNode(data);
            break;
          } else this.current = this.current.right;
        }
      }

      return this;
    }

  }
  // READ
  inOrder = (node = this.root, nodes = []) => {
    if (node) {
      this.inOrder(node.left, nodes);
      nodes.push(node.data);
      this.inOrder(node.right, nodes);
    }

    return nodes;
  }

  preOrder = (node = this.root, nodes = []) => {
    if (node) {
      nodes.push(node.data);
      this.inOrder(node.left, nodes);
      this.inOrder(node.right, nodes);
    }

    return nodes;
  }

  postOrder = (node = this.root, nodes = []) => {
    if (node) {
      this.inOrder(node.left, nodes);
      this.inOrder(node.right, nodes);
      nodes.push(node.data);
    }

    return nodes;
  }

  getMin = () => {
    if (!this.root) return false;
    if (this.current = this.root) {
      while (this.current.left !== null) this.current = this.current.left;

      return this.current.data;
    }
    return false;
  }

  getMax = () => {
    if (!this.root) return false;
    if (this.current = this.root) {
      while (this.current.right !== null) this.current = this.current.right;

      return this.current.data;
    }
    return false;
  }
  // UPDATE
  // DELETE
}
