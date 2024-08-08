export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building) {
      setTimeout(() => {
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw Error('Class extending Building must override evacuationWarningMessage');
        }
      }, 3);
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    return this._sqft;
  }
}
