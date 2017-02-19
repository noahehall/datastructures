/**
 * hash table
 * see javascript datastructures and algorithms page 97
 */
export default class HashTable {
  constructor(prime = 137, constant = 37) {
    this.table = [];
    this.prime = prime;
    this.constant = constant;
    return this;
  }

  hashAscii = (string) => parseInt(string.split('')
    .reduce((acc, val) => acc * this.constant + val.charCodeAt(0), 0) % this.prime, 10);

  // CREATE
  put = (key, value) => {
    if (key.length) {
      const hashValue = this.hashAscii(key);

      if (!this.table[hashValue]) {
        this.table[hashValue] = value;

        return this;
      }
      else {
        this.prime = this.prime * 2;
        return this.put(key, value);
      }
    }

    return false;
  }
  // READ
  getValue = (key) => this.table[this.hashAscii(key)];

  showDistro = () => this.table.filter((el) => el)
  // UPDATE
  // DELETE
}
