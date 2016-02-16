/**
 * Map functions.
 */
'use non-strict'; // !!!!

const Path = require('./path');
const Logger = require('./renderer').Logger;


/**
 * Expose API
 */
exports.renderGame = renderGame;
exports.calculatePath = calculatePath;

const BORDERSIZE = 1;
const BORDER = ' '.repeat(BORDERSIZE);

var frame = '';
var logger;
var path = []; // array of coordinates

function renderGame(state) {
  logger = new Logger();
  renderMap(state.map)
  // renderCharacters(state.characters);
  renderFrame();
  logger.render();
}

function calculatePath(map) {
  const path = new Path(map);
  // path
  //   .on('update', renderPath)
  // ;
  return path.sequence;

}

function renderPath(i) {
  logger.log('path: %s', i);
}


/**
 * Render map to the CLI
 */
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

function renderRow(row) {
  frame += '◼︎';
  row.forEach(renderItem);
  frame += '◼︎\n';
}

function renderItem(item) {
  var rendered = '';
  switch (item) {
    // Empty
    case 0:
      rendered += ' ';
      break;
    // Enterance/Exit
    case -1:
    case -2:
      rendered += 'O';
      break;
    // Just block. Now w/o any further details.
    default:
      rendered += '◼︎'
  }
  frame += BORDER + rendered + BORDER;
}

function renderFrame() {
  clearTerminal();
  console.log(frame);
  frame = ''; // clear
}

function clearTerminal() {
  return process.stdout.write('\033c');
}
