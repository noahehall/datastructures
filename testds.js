var ds = require('./index.js');

var twod = new ds.arrays.TwoD(5, 5, 5);

var list = new ds.lists.List();
list.append('noah');
list.append('edward');
list.append('hall');

var stack = new ds.lists.Stack();
stack.push('noah')
var queue = new ds.lists.Queue();
queue.enqueue('noah');
queue.enqueue('hall');

var pqueue = new ds.lists.PQueue();
pqueue.enqueue('noah', 10);
pqueue.enqueue('hall', 200);

var linkedList = new ds.lists.LinkedList();
linkedList.insert('noah');
linkedList.insert('edward');
linkedList.insert('hall');

var dict = new ds.dicts.Dictionary();

var circ = new ds.lists.CircularLinkedList();
circ.insert('1');
circ.insert('2');
circ.insert('3');
circ.insert('4');
circ.insert('6');
circ.insert('5','4');

console.dir([
  'testds',
  ds,
  twod.calculateRowStats(false),
  twod.calculateColumnStats(),
  typeof list,
  stack.top,
  stack.peek(),
  stack.pop(),
  stack.pop(),
  stack.top,
  'queue',
  queue.first,
  queue.last,
  queue.dequeue(false),
  queue.length,
  'pqueue',
  pqueue.dequeue(),
  pqueue.getAll(),
  'link',
  linkedList.find('noah'),
  linkedList.find('edward'),
  linkedList.find('bam'),
  linkedList.findFirst(),
  linkedList.insert('super', 'edward').display(),
  'circular',
  //circ.display(),
  //circ.displayR(),
  //circ.findLast(),
  //circ.find('1'),
  //circ.findFirst(),
  //circ.current,
  //circ.advance(),
  //circ.advance(4),
  //circ.advance(-20),
  //circ.position,
  //circ.current,
  circ.advance(3),
  circ.remove('3'),
  circ.remove('4'),
  circ.display(),
  circ.current,
]);
