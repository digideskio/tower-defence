'use strict';

const EventEmitter = require('events');


module.exports = class Path extends EventEmitter {


  constructor(map) {
    super();
    this.map       = map;
    this.matrix    = this.map.matrix;
    this.enterance = this.map.enterance;
    this.exit      = this.map.exit;
    this.path      = []; // array of coordinates
    this.fragments = [];
    this.fq        = 0; // active fragments quantity
    this.calculate(this.enterance, this.exit);
  }

  /**
   * Have to be used to recursive check all forks of the path to find exit
   * @api public
   */
  calculate(current, end) {
    this.fq++; // create active fragment
    let nodes = this.getNodes(current);
    // TODO

    if (1 === nodes) {
      // dead end or exit?
      this.map.isExit(node[0])
        ? this.isResolved()
        : this.fq--; // close active fragment

    }
    if (1 < nodes) /* fork */ ;
    if (0 === nodes) this.fq--; // close active fragment
  }

  // NESW
  getNodes(coordinates) {
    const x = coordinates[0];
    const y = coordinates[1];
    const variations = [[x-1, y],[x+1, y],[x, y-1],[x, y+1]];
    return variations.reduce((nodes, variation) => {
      this.map.isWalkable(variation) && nodes.push(variation);
      return nodes;
    }, []);
  }

  /**
   * Fork path to check all variations
   * @api private
   */
  fork() {
    fq++;
  }

  // TODO: join fragments by fragments-map

  /**
   * @api public
   */
  resolve() {

  }



}

