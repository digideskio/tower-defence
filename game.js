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

  getValueOf(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];
    return this.matrix[y][x];
  }

  isExit(coordinates) {
    return -1 === getValueOf(coordinates);
  }

  isWalkable(coordinates) {
    return 0 === this.getValueOf(variation);
  }

};
