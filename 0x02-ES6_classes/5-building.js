// Implement a class named Building:
// Consider this class as an abstract class. And make sure that any class that
// extends from it should implement a method named evacuationWarningMessage
export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
