import BaseArray from '../arrays/base.js';

export default class Dictionary {
  constructor() {
    this.size = 0;
    this.dataStore = new BaseArray();
    return this;
  }

  // CREATE
  add = (key, value) => {
    this.dataStore[key] = value;
    ++this.size;
    return this;
  }

  // READ
  find = (key) => this.dataStore[key];

  getKeys = () => Object.keys(this.dataStore);

  asObject = () => {
    const object = {};
    this.getKeys().forEach((key) => object[key] = this.dataStore[key])

    return object;
  }

  sortedValues = (sortFunc = undefined) => {
    const array = [];
    this.getKeys().sort(sortFunc).forEach((key) => array.push(this.dataStore[key]));

    return array;
  }

  // UPDATE

  // DELETE
  remove = (key) => {
    if (this.dataStore[key]) {
      delete this.dataStore[key];
      --this.size;

      return this;
    }

    return false;
  }

  clear = () => {
    if (this.size < 1) return false;
    this.dataStore = new BaseArray();
    this.size = 0;

    return this;
  }


}
