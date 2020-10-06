// Point objects store x, y coordinates and have adjacency check methods
class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  equals = (p) => this.x === p.x && this.y === p.y;
  isToLeftOf = (p) => this.x === p.x - 1 && this.y === p.y;
  isToRightOf = (p) => this.x === p.x + 1 && this.y === p.y;
  isAbove = (p) => this.x === p.x && this.y === p.y - 1;
  isBelow = (p) => this.x === p.x && this.y === p.y + 1; 
}

export default Point;
