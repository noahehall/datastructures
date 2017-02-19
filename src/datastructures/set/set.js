/**
 * set
 * see javascript datastructures and algorithms page 113
 */

export default class DSSet extends Set {
  constructor(members) {
    super(members);
    return this;
  }

  // CREATE
  union = (second = new Set()) => new DSSet([...this, ...second]);

  intersection = (second = new Set()) => new DSSet([...this].filter((mem) => second.has(mem)));

  difference = (second = new Set()) => new DSSet([...this].filter((mem) => !second.has(mem)));

  // READ
  subset = (second = new Set()) =>
    this.size < second.size &&
    this.size > 0 &&
    Array.from(this).every((mem) => second.has(mem));

  // UPDATE
  // DELETE
}
