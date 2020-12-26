import { gameConfig } from '../gameConfig';

const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 896;

export class Background {
  public create (scene: Phaser.Scene): void {
    const Y = Number(gameConfig.height) / 2 + 15;

    for (let X = 0; X <= Math.ceil(Number(gameConfig.width) / IMAGE_WIDTH); X++) {
      console.log('X', X);
      scene.add.image((IMAGE_WIDTH / 2 - 1) * X, Y, 'background').setScale(0.5);
    }
  }

  public update (scene: Phaser.Scene): void { }
}
