// Implement a class named HolbertonClass
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Custom behavior when cast into a Number
  valueOf() {
    return this._size;
  }

  // Custom behavior when cast into a String
  toString() {
    return this._location;
  }
}
