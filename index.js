'use strict';

const utils = require('./utils');

/**
 * Consts
 */
const TIMESTEP = 1000;


/**
 * Map 10x10
 */
const map = [
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
];

const game = {
  map: map
}

// Main loop
setInterval(() => {
  utils.renderGame(game);
}, TIMESTEP);

