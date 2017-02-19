import Queue from './queue.js';

/**
 * creates a Queue
 * @see datastructures and algorithms in javascript, page 70
 */
export default class PQueue extends Queue {
  constructor() {
    super();
  }

  // behavior
  // CREATE
    enqueue = (value, p) => this.push({value, p});
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
    dequeue = () => {
      let highestPriority = this.first;
      if (!this.first) return false;

      this.forEach((el) => {
        if (el.p > highestPriority.p) highestPriority = el;
      })

      return this.remove(highestPriority, true);
    };
}
