'use strict';


exports.Map = class Map {

  constructor(matrix) {
    this.matrix = matrix;
    this.enterance = this.findEnterance();
    this.exit = this.findExit();
  }

  findEnterance() {
    return this.getCoordinatesOf(-2);
  }

  findExit() {
    return this.getCoordinatesOf(-1);
  }

  getCoordinatesOf(item) {
    return this.matrix.reduce((coordinates, row, y) => {
      const x = row.indexOf(item);
      if (~x) {
        coordinates[0] = x;
        coordinates[1] = y;
        return coordinates;
      } else {
        return coordinates;
      }
    }, [-1, -1]);
  }

};
