/**
 * Map functions.
 */
'use non-strict'; // !!!!

const Path = require('./path');


/**
 * Expose API
 */
exports.renderGame = renderGame;
exports.calculatePath = calculatePath;

const BORDERSIZE = 1;
const BORDER = ' '.repeat(BORDERSIZE);

var frame = '';
var logs = '';
var path = []; // array of coordinates

function renderGame(state) {
  renderMap(state.map)
  renderCharacters(state.characters);
  renderFrame();
  renderLogs();
}

function calculatePath(map) {
  const path = new Path(map);
  path
    .on('update', renderPath)
  ;
  return path.sequence;

}

function renderPath(i) {
  logs += 'path: ' + i + '\n';
}


var path = {};

path


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
  logs += 'enterance: ' + map.enterance + '\n';
  logs += 'exit: ' + map.exit + '\n';
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

function renderLogs() {
  console.log('\n\n');
  console.log(logs);
  logs = ''; // Clear
}
