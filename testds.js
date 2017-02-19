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


var circ = new ds.lists.CircularLinkedList();
circ.insert('1');
circ.insert('2');
circ.insert('3');
circ.insert('4');
circ.insert('6');
circ.insert('5','4');

var dict = new ds.dicts.Dictionary();
dict.add('name','noah');

var hash = new ds.hash.HashTable();
hash.put('noah', 'hall');


var one = new ds.sets.Set([1,3,5]);
var second = new Set([2,1,3,5])

var set = one.subset(second);

console.dir([
  'testds',
  twod.constructor,
  list.constructor,
  stack.constructor,
  queue.constructor,
  pqueue.constructor,
  linkedList.constructor,
  circ.constructor,
  dict.constructor,
  ds,
  twod.calculateRowStats(false),
  twod.calculateColumnStats(),
  typeof list,
  stack.empty,
  stack.peek(),
  stack.pop(),
  stack.pop(),
  stack.empty,
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
  circ.advance(3),
  circ.remove('3'),
  circ.remove('4'),
  circ.display(),
  circ.current,
  'dictionary',
  dict.find('name'),
  dict.asObject(),
  dict.sortedValues(),
  dict.size,
  dict.remove(4),
  dict.remove('name'),
  dict.clear(),
  'hash table',
  hash.showDistro(),
  hash.getValue('noah'),
  'sets',
  set,
]);
