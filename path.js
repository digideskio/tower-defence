'use strict';


module.exports = function path(map) {
  this.map = map;
  this.path = []; // array of coordinates
}

/**
 * @api public
 */
path.prototype.calculate = function() {
  // implement algorythm from my awesome moleskine
}

/**
 * @api private
 */
path.prototype.fork = function() {

}

/**
 * @api private
 */
path.prototype.merge = function() {

}
