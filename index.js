'use strict';

const utils = require('./utils');
const game = require('./game');

/**
 * Consts
 */
const TIMESTEP = 1000;


/**
 * Map 10x10
 */
const map = new game.Map([
  [0  , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , -2 ],
  [0  , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [0  , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [1  , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [0  , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0  ],
  [0  , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [0  , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [1  , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [0  , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0  ],
  [-1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0  ]
]);


const characters = [1];





setInterval(() => {
  utils.renderGame({map, characters});
}, TIMESTEP);

// setTimeout(() => {
//   utils.calculatePath(map);
// });


