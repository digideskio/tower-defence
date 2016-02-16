'use strict';

/**
 * Dependencies
 */
const term = require('terminal-kit').terminal;

/**
 * Constants
 */
const MAP_SIZE = [25, 25];


/**
 * Class to render logs
 */
exports.Logger = class LogsRenderer {

  constructor() {
    this._logs = [];
  }

  log() {
    let args = Array.prototype.slice.call(arguments);
    this._logs.push(args);
  }

  render() {
    term.moveTo(0, MAP_SIZE[0]);
    this._logs.map(function(log) {
      console.log.apply(console, log);
    });
  }

}

exports.GameRenderer = class GameRenderer {

  constructor() {

  }

  render() {
    this.logger = new Logger();
    this.renderMap()

  }


function renderMap(map) {
  length = map.matrix[0].length;
  // TODO: DIY
  frame += '◼︎'.repeat(length+(length*BORDERSIZE*2)+2) + '\n';
  map.matrix.forEach(renderRow);
  // TODO: DIY
  frame += '◼︎'.repeat(length+(length*BORDERSIZE*2)+2) + '\n';
  logger.log('enterance: %s', map.enterance);
  logger.log('exit: %s', map.exit);
}
}
