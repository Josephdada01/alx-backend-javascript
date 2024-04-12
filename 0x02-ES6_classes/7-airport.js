// Implement a class named Airport
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    return this._name = value;
  }

  get code() {
    return this._code;
  }
  set code(value) {
    return this._code = value;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
