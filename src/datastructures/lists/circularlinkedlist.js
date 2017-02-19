import LinkedList from './linkedlist.js';

export default class CircularLinkedList extends LinkedList {
  constructor() {
    super();
    this.head.next = this.head;
    return this;
  }

  // CREATE
  // READ
  findLast = (item = this.current) => {
    return item.next !== this.head
      ? this.findLast(item.next)
      : item;
  }

  display = (items = [], next = this.head) => {
    if (!this.length || next.next === this.head) return items;

    items.push(next.next.element);
    return this.display(items, next.next);
  }
  // UPDATE
  // DELETE
}
