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

console.dir([
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
'dict',
dict

]);
