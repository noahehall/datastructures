import Stack from './stack.js';

/**
 * creates a FIFO/LIFO queue/deque
 * @see datastructures and algorithms in javascript, page 59, 72
 * base class is Stack, as it uses many of the same properties and behaviors
 */
export default class Queue extends Stack {
  constructor() {
    super();
  }

  // behavior
  // CREATE
    enqueue = this.push;
  // READ
    get first () {
      this.front();
      return this.getCurrentElement();
    }

    get last () {
      this.end();
      return this.getCurrentElement();
    }
  // UPDATE
  // DELETE
    dequeue = (front = true) => {
      if (!this.empty) {
        if (front) this.front();
        else this.end();

        return this.remove(this.getCurrentElement(), true);
      }

      return false;
    };
}
