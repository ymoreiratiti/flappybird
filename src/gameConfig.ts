import * as Phaser from 'phaser';
import { GameScene } from './gameScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Flappy Bird - HTML5',

  type: Phaser.AUTO,
  parent: 'game',

  width: 480,
  height: 640,

  scene: [GameScene],

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 10000 },
      debug: true,
    },
  },

  backgroundColor: '#75C7CE',
};
