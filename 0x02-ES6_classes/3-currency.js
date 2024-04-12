// Implement a class named Currency
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getting and setting the code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  // method named displayFullCurrency that will return the
  // attributes in the following format name (code).
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
