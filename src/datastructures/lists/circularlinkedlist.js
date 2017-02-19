import LinkedList from './linkedlist.js';

export default class CircularLinkedList extends LinkedList {
  constructor() {
    super();
    this.head.next = this.head;
    return this;
  }

  // CREATE
  insert = (element, item = undefined) => {
    const afterThis = this.length === 0
      ? this.head
      : typeof item !== 'undefined'
      ? this.find(item)
      : this.findLast();
    if (!afterThis) return false;
    this.length++;
    const newNode = {element, next: afterThis.next || null, previous: afterThis};
    afterThis.next = newNode;
    newNode.next.previous = newNode;

    return this;
  }

  // READ
  find = (item, search = this.head) => {
    if (search.element === item) return search;
    else if (!this.length || (search.next === this.head)) return false;
    else return this.find(item, search.next);
  }

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

  displayR = (items = [], last = this.findLast()) => {
    if (!this.length || last === this.head) return items;

    items.push(last.element);
    return this.displayR(items, last.previous);
  }

  // UPDATE
  // DELETE
}
