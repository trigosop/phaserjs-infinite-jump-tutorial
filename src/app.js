import Phaser from 'phaser';

import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import GamePaused from './scenes/GamePaused';

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  scene: [Game, GameOver, GamePaused],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: false,
    },
  },
});
