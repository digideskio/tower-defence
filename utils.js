/**
 * Map functions.
 */
// 'use strict';


/**
 * Expose API
 */
exports.renderGame = renderGame;

const BORDERSIZE = 1;
const BORDER = ' '.repeat(BORDERSIZE);

var frame = '';

function renderGame(state) {
  frame = '';
  renderMap(state.map)
  renderFrame();
}

/**
 * Render map to the CLI
 */
function renderMap(map) {
  length = map[0].length;
  // TODO: DIY
  frame += '_'.repeat(length+(length*BORDERSIZE*2)+2) + '\n';
  map.forEach(renderRow);
  // TODO: DIY
  frame += '_'.repeat(length+(length*BORDERSIZE*2)+2) + '\n';
}

function renderRow(row) {
  frame += '|';
  row.forEach(renderItem);
  frame += '|\n';
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
      rendered += 'X'
  }
  frame += BORDER + rendered + BORDER;
}

function renderFrame() {
  clearTerminal();
  console.log(frame);
}

function clearTerminal() {
  return process.stdout.write('\033c');
}

